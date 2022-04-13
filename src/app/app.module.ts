import {CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {UserIdleModule} from 'angular-user-idle';
import {CustomErrorHandlerService} from './_services/customErrorHandler.service';
import {MaterialModule} from './material.module';
import {AngularSplitModule} from 'angular-split';
import {AvatarModule} from 'ngx-avatar';
import {ToastrModule} from 'ngx-toastr';
import {ApiModule} from './api/api.module';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import { InputTrimModule } from 'ng2-trim-directive';
import {AngularEditorModule} from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularSplitModule,
    AvatarModule,
    InputTrimModule,
    DragDropModule,
    UserIdleModule.forRoot({idle: 1800, timeout: 60, ping: 480}),
    ApiModule.forRoot({rootUrl: window.location.origin }), //
    SharedModule,
    CoreModule, AngularEditorModule,
    NgxMatSelectSearchModule,
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 8000, progressBar: true, enableHtml: true,
      closeButton: true, progressAnimation: 'increasing',
      preventDuplicates: true,
    }),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
  ],
  providers: [
    {provide: ErrorHandler, useClass: CustomErrorHandlerService},
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
