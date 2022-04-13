import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, Subject} from 'rxjs';
import {BaseRequestService} from './base.service';
import {CommonService} from './common.services';
import {UserIdleService} from 'angular-user-idle';
import {LoaderService} from './loader.service';
import {MyToastrService} from './toastr.service';

interface User {
  email: string;
  family_name: string;
  given_name: string;
  permissions: any;
  isNewSetup: boolean;
  isWLB: boolean;
  isMSP: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  timeoutSec: any; targetTimeout: any;
  sessionUpdated: Subject<object> = new Subject<object>();
  sessionLoader = new BehaviorSubject<boolean>(false);
  sessionTimeout$ = this.sessionLoader.asObservable();
  isAuthenticated = true;
  currentUser: User | undefined;
  resultOut: any;
  tmpData: any;
  cspChange: Subject<object> = new Subject<object>();
  resultOutChange: Subject<any> = new Subject<any>();
  tfaOutChange: Subject<any> = new Subject<any>();
  currentUserChange: Subject<object> = new Subject<object>();
  companyHashMap: any = {};
  logoutWindow: any;
  constructor(
    readonly router: Router,
    public baseRequestService: BaseRequestService,
    private commonService: CommonService,
    readonly location: Location,
    private userIdle: UserIdleService,
    private loaderService: LoaderService,
    private toast: MyToastrService,
  ) {
    this.isAuthenticated = false;
    this.currentUser = undefined;
    this.resultOut = undefined;
    this.currentUserChange.next(this.currentUser);
    this.resultOutChange.next(this.resultOut);
  }

  setCSP(): void {
    this.cspChange.next({csp: true});
  }

  isBase64(str: string): boolean {
    try {
      return atob(btoa(str)) === str;
    } catch (err) {
      return false;
    }
  }

  hasPermission(cname: string, action: string): boolean {
    /* permissions: {me: ["read"], company: ["read", "update"]} */
    return !!(this.currentUser && this.currentUser.permissions[cname]
      && this.currentUser.permissions[cname].includes(action.toLowerCase()));
  }

  getSessionSettings(): void {
    console.log('Session settings... ');
    this.loaderService.display(true, 'Getting session data...');
    this.baseRequestService.doRequest('/api/cyberutils/imaws/getSessionTimeoutSettings',
      'post', {}).subscribe((res: any) => {
        this.loaderService.display(false);
        if (res) {
          console.log('Got session data' + JSON.stringify(res));
          this.setSession(res);
        }
    });
  }

  setSession(session: any): void {
    console.log('Got session data' + JSON.stringify(session));
    this.userIdle.stopWatching();
    this.userIdle.setConfigValues({idle: session.idle, timeout: session.timeout, ping: session.ping});
    // Start watching for user inactivity.
    this.userIdle.startWatching();
    console.log('Start session data' + JSON.stringify(session));
    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => {
      if (!count) { return; }
      if (!this.timeoutSec) {
        this.targetTimeout = Math.floor(new Date().getTime() / 1000.0) + (session.timeout);
      }
      const currentTime = Math.floor(new Date().getTime() / 1000.0);
      this.timeoutSec = this.targetTimeout - currentTime;
      if (this.targetTimeout < currentTime) {
        this.timeoutSec = 1;
        this.logout();
      }
      console.log(this.timeoutSec); this.sessionLoader.next(true);
    });
    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() => {
      this.sessionLoader.next(false);
      this.logout();
    });
    this.userIdle.ping$.subscribe(() => this.keepalive());
  }

  resetSession(): void {
    this.timeoutSec = undefined;
    this.sessionLoader.next(false);
    this.sessionUpdated.next({value: true});
    this.userIdle.resetTimer();
  }

  login(loginData: any): void {
    this.loaderService.display(true);
    this.baseRequestService.doRequest('/usermgmt/api/auth', 'post', loginData)
      .subscribe((result: any) => {
        if (result.status === 'error') {
          this.resultOutChange.next(result);
          this.loaderService.display(false);
        } else {
          this.resultOut = result;
          //  console.log(result);
          localStorage.setItem('uasaeara', btoa(loginData.email));
          if (this.resultOut) {

            // Start watching for user inactivity.
            this.userIdle.startWatching();

            // Start watching when user idle is starting.
            this.userIdle.onTimerStart().subscribe(count => {
              console.log(count); this.sessionLoader.next(true);
            });

            // Start watch when time is up.
            this.userIdle.onTimeout().subscribe(() => this.logout());
            this.userIdle.ping$.subscribe(() => this.keepalive());

            if (this.resultOut.location) {
              window.location = this.resultOut.location;
              this.companyHashCall();
              this.loaderService.display(false);
            } else if (this.resultOut.requiredMFA) {
              this.tfaOutChange.next({mfa: true});
            } else {
              this.afterLogin(this.resultOut, false);
            }
          } else {
            this.loaderService.display(false);
            this.afterLogout();
          }
        }
      });
  }

  logout(): void {
    this.baseRequestService.doRequest('/api/logout', 'get').subscribe((re: any) => {
      // this.logoutWindow = window.open(re.url, 'CCNS Logout', 'width=200, height=100');
      // setTimeout(() => { window.location.href = `/`; this.logoutWindow.close(); }, 5000);
      // this.afterLogout();
      window.location.href = `${re.url}`
    } , (err: any) => {
      // this.logoutWindow = window.open(err.error.url, 'CCNS Logout', 'width=200, height=100');
      // setTimeout(() => { window.location.href = `/`; this.logoutWindow.close(); }, 5000);
      // this.afterLogout();
      window.location.href = `${err.error.url}`
    });
  }

  checkSession(): void {
    this.loaderService.display(true);
    this.baseRequestService.doRequest(`/api/company/`, 'get').subscribe(
      (result: any) => {
        this.loaderService.display(false);
        this.tmpData = result.msg;
        if (this.tmpData === 'Already logged in' || result) {
          const shouldCheckPath = (!this.tmpData.isNewSetup);
          this.afterLogin(this.tmpData, shouldCheckPath);
        } else {
          this.afterLogout();
        }
      }, (error: any) => {
        if (error.ok === false) {
          if (error.status === 401) {
            if (!error.error.url) {
              this.toast.sToast('error', 'Redirect URL not found. Contact Admin.');
            } else {
              const path = this.location.path();
              if (path === '' || path === '/' || path === '/login') {
                window.location = error.error.url;
              }
            }
            this.isAuthenticated = false;
            this.currentUser = undefined;
          } else {
            // this.afterLogout();
            console.log('Check Session error came..');
          }
        } else {
          this.afterLogout();
          console.log('Check Session error came..');
        }
      }
    );
  }

  keepalive(): void {
    this.baseRequestService.doRequest(`/api/me`, 'get').subscribe(() => {});
  }

  companyHashCall(): void {
    this.companyHashMap = {};
    this.loaderService.display(true);
    this.baseRequestService.doRequest(`/api/company/`, 'get', 'null',
      {
        query: {},
        skip: 0,
        limit: 1000
      })
      .subscribe((result: any) => {
        this.loaderService.display(false);
        if (result) {
          if (result.data.length === 0) {
            this.router.navigateByUrl('/companies/onboarding').then(() => console.log('redirected to on-boarding'));
          } else {
            result.data.forEach((obj: { _id: string | number; name: any; }) => {
              this.companyHashMap[obj._id] = obj.name;
            });
          }
        }
      });
  }

  private afterLogin(result: User, shouldCheckPath: boolean): void {
    this.companyHashCall();
    this.isAuthenticated = true;
    this.currentUser = result;
    this.loaderService.display(true);
    const path: string | null = localStorage.getItem('path');
    const pathLocation = (path && (result && result.permissions &&
      (result.permissions.includes === '' && result.permissions.includes === '*'))) ? path : '';
    this.getSessionSettings();
    this.loaderService.display(false);
    if (!shouldCheckPath || this.location.path() === '' || this.location.path() === '/') {
      this.router.navigateByUrl('/companies').then(() => console.log('redirecting to company'));
    } else if (this.location.path() === '/login' && pathLocation !== '') {
      this.router.navigateByUrl(pathLocation).then(() => console.log('redirected to stored path'));
    } else {
      this.router.navigateByUrl('/companies').then(() => console.log('redirecting to company'));
    }
  }

  afterLogout(): void {
    this.isAuthenticated = false;
    this.currentUser = undefined;
    localStorage.clear();
    if (this.router.url.indexOf('resetpassword') > -1) {
      console.log('showing reset password. no redirect');
    } else {
      setTimeout(() => {
        this.router.navigateByUrl('/login').then(() => console.log('redirected to login'));
      }, 500);
    }
  }
}
