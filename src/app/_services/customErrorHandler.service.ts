import {ErrorHandler, Injectable, NgZone} from '@angular/core';
import {Injector} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {LoaderService} from './loader.service';
import {BaseRequestService} from './base.service';
import {CommonService} from './common.services';
import {Router} from '@angular/router';
import {MyToastrService} from './toastr.service';

@Injectable()
export class CustomErrorHandlerService implements ErrorHandler {
  omitDomains = [];
  constructor(private injector: Injector, private auth: AuthenticationService, private ngZone: NgZone,
              private commonService: CommonService, private router: Router,
              private baseService: BaseRequestService, private toast: MyToastrService,
              private loaderService: LoaderService) {
  }
  handleError(error: any): any {
    if (error instanceof HttpErrorResponse) {
      this.loaderService.display(false);
      this.loaderService.Modeldisplay(false);
      // Backend returns unsuccessful response codes such as 404, 500 etc.
      if (error.status === 401) {
        error = null;
        localStorage.removeItem('isLoggedin');
        const path = window.location.pathname;
        this.auth.isAuthenticated = false;
        if (path !== '/login') {
          this.router.navigateByUrl('/login');
        }
      } else if (error.status === 403) {
        this.loaderService.display(false);
        setTimeout(() => { this.loaderService.display(false); }, 1500);
        // this.commonService.unauth = 'Unauthorized: Access is denied.';
        /*console.log('You are not authorized to perform this operation. Please check your role assignments.');*/
        this.loaderService.tableProgress(false);
      } else if (error.status === 422) {
        setTimeout(() => {
        this.loaderService.display(false); this.loaderService.Modeldisplay(false); }, 1500);
        error.error.detail.forEach((obj: any) => {
          this.toast.sToast('error', obj.loc[1] + ' - ' + obj.msg, 'Validation Error');
        });
        this.loaderService.tableProgress(false);
      }  else if (error.status === 500) {
        setTimeout(() => { this.loaderService.display(false); }, 1000);
        /*this.updateErrLogs(error);*/
        this.toast.sToast('error', error.url + '\r\n' + error.error, '500 Error');
        const getCircularReplacer = () => {
          const seen = new WeakSet();
          return (key: any, value: object | null) => {
            if (typeof value === 'object' && value !== null) {
              if (seen.has(value)) {
                return;
              }
              seen.add(value);
            }
            return value;
          };
        };
        let errorLogsData;
        if (localStorage.getItem('errorLogs') && localStorage.getItem('errorLogs') !== null) {
          errorLogsData = JSON.parse(localStorage.getItem('errorLogs') || '{}');
        } else {
          errorLogsData = [];
        }
        const err = JSON.stringify(error, getCircularReplacer());
        const domain = (typeof error.url === 'string') ? new URL(error.url) : {hostname: ''};
        let msgSend = true;
        this.omitDomains.forEach(obj => {
          if (domain.hostname.indexOf(obj) > -1 ) {
            msgSend = false;
          }
        });
        if (msgSend) {
          this.sendSlackMessage(domain.hostname + '\n```' + err + '```');
        }
        errorLogsData.push(err);
        localStorage.setItem('errorLogs', JSON.stringify(errorLogsData));
        error = null;
      }
    } else {
      if (error.message.indexOf(':500') > -1) {
        this.loaderService.display(false);
        this.loaderService.Modeldisplay(false);
        this.toast.sToast('error', error.message, '500 Error');
      }
      console.log(error);
      // this.updateErrLogs(error);
    }
  }
  sendSlackMessage(msg: string): void {
    this.baseService.doRequest('/api/cyberutils/dummy/sendSlackMsg',
      'post', {message: msg})
      .subscribe((result: any) => {
        console.log('500 error captured!');
      });
  }
}
