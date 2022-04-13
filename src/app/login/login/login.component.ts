import {AfterViewInit, Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {AuthenticationService} from '../../_services/authentication.service';
import {BaseRequestService} from '../../_services/base.service';
import {MyToastrService} from '../../_services/toastr.service';
import {DeviceDetectorService} from 'ngx-device-detector';
import {Location} from '@angular/common';
import {LoaderService} from '../../_services/loader.service';

export interface LoginData {
  email: string;
  password: string;
  mfa: any;
  redirect_uri: string;
  otp: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @HostBinding('style.backgroundImage')
  imagSource: any = '/assets/images/bg2.jpg';
  particlesUrl = '/assets/json/p.json';
  id = 'tsParticles';
  greetings = '';
  passPattern: any;
  loginView: any;
  pathLocation: any;
  userKey: any;
  resetUser: any;
  errMsg = '';
  loginUser: LoginData = {
    email: '',
    password: '',
    mfa: undefined,
    redirect_uri: '',
    otp: ''
  }; showOTP = false;
  imgList: any = [ '/assets/images/bg2.jpg', '/assets/images/bg3.jpg', '/assets/images/bg1.jpg'];
  loginType: any = 'partner';
  constructor(private router: Router, private route: ActivatedRoute, private deviceService: DeviceDetectorService,
              public authenticationService: AuthenticationService, public baseService: BaseRequestService,
              public toast: MyToastrService, readonly location: Location,
              private loaderService: LoaderService, ) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.pathLocation = '/' + val.url.split('/')[1];
      }
    });
    this.authenticationService.resultOutChange.subscribe((err) => {
      this.errMsg = err.msg !== undefined ? err.msg : 'Invalid Username/Password';
    });
    this.authenticationService.tfaOutChange.subscribe(value => {
      if (value.mfa) {
        this.loginView = 'mfa';
      }
    });
    this.loginView = 'login';
    this.resetUser = {password: '', cpassword: ''};
    this.passPattern = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%_-])(?=.{6,13})');
  }

  get backgroundImage(): any {
    return `url(${this.imgList[0]})`;
  }
  getImg(): any {
    let imgCount; imgCount = 3;
    let randomCount: number; randomCount = (Math.floor(Math.random() * imgCount));
    setTimeout(() => {
    document.getElementsByClassName('login-page')[0].setAttribute(
       'style', 'background:' +
       ' url('  + this.imgList[randomCount] + ');background-repeat: no-repeat;)');
    this.getImg(); }, 5000);
  }

  ngAfterViewInit(): void {  }

  resetFormValidation(resetUser: any): boolean {
    return !(this.passPattern.test(resetUser.password) && this.passPattern.test(resetUser.cpassword)
      && (resetUser.password === resetUser.cpassword));
  }
  updateView(view: string): void {
    this.loginView = (view) ? view : 'login';
  }

  ngOnInit(): void {
    const myDate = new Date();
    const hrs = myDate.getHours();
    if (hrs < 12) {
        this.greetings = 'Good Morning';
    } else if (hrs >= 12 && hrs <= 17) {
        this.greetings = 'Good Afternoon';
    } else if (hrs >= 17 && hrs <= 24) {
        this.greetings = 'Good Evening';
    }
    this.greetings += '! ' + `Welcome to `;
    if (this.authenticationService.isAuthenticated) {
      this.initCheck();
    }
    this.loaderService.display(true);
    this.baseService.doRequest(`/api/me`, 'get').subscribe(
      (result: any) => {
        this.loaderService.display(false);
        this.authenticationService.currentUser = result;
        this.authenticationService.isAuthenticated = true;
        if (result && result.permissions) {
          this.initCheck();
        } else {
          this.router.navigateByUrl('/unauthorized').then(() => console.log('redirecting to company'));
        }
      });
  }

  initCheck(): void {
    const path: string | null = localStorage.getItem('path');
    const pathLocation = (path && (this.authenticationService.currentUser && this.authenticationService.currentUser.permissions
          && (this.authenticationService.currentUser.permissions.includes === '' && this.authenticationService.currentUser.permissions.includes === '*'))) ? path : '';
    if (this.location.path() === '/login' && pathLocation !== '') {
      this.router.navigateByUrl(pathLocation).then(() => console.log('redirected to stored path'));
    } else {
      this.router.navigateByUrl('/global').then(() => console.log('redirecting to company'));
    }
  }

  particlesLoaded(event: any): void {
    console.log(event);
  }
  particlesInit(event: any): void {
    console.log(event);
  }

}
