import {Injectable} from '@angular/core';
import {CanActivate,  Router} from '@angular/router';
import {AuthenticationService} from '../_services/authentication.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, public authenticationService: AuthenticationService) {
  }

  canActivate(): boolean {
    if (!this.authenticationService.isAuthenticated) {
      if ( window.location.pathname !== '' && window.location.pathname !== '/' && window.location.pathname !== '/login') {
        localStorage.setItem('path', window.location.pathname);
      }
      this.router.navigateByUrl('/login').then(() => console.log('redirecting to login'));
      return false;
    }
    // TODO additional logic will be coming in future
    return this.authenticationService.isAuthenticated;
  }
}
