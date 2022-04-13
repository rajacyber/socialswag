import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule} from '../material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { OauthGrantComponent } from './oauth-grant/oauth-grant.component';
import { O365GrantComponent } from './o365-grant/o365-grant.component';
import {NgParticlesModule} from 'ng-particles';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    SharedModule,
    MaterialModule,
    NgParticlesModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent, OauthGrantComponent, O365GrantComponent]
})
export class LoginModule {}
