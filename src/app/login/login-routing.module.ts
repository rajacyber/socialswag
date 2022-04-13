import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {OauthGrantComponent} from './oauth-grant/oauth-grant.component';
import {O365GrantComponent} from './o365-grant/o365-grant.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'activate/:activatekey', component: LoginComponent},
  {path: 'verify/:resetkey', component: LoginComponent},
  {path: 'fastpoc/:onetimekey', component: LoginComponent},
  {path: 'oauth2_authorization_code_grant_callback', component: OauthGrantComponent},
  {path: 'o365cb', component: O365GrantComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
