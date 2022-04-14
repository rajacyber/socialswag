import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule as FormModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../../material.module';
import {AppFilterPipeModule} from '../../_filters/app.filter-pipe.module';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {AngularSplitModule} from 'angular-split';
import {AvatarModule} from 'ngx-avatar';
import {CKEditorModule} from 'ckeditor4-angular';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {SharedModule} from '../../shared/shared.module';
import {DirectivesModule} from '../../-directives/-directives.module';
import {InputTrimModule} from 'ng2-trim-directive';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {BarChartModule} from '@swimlane/ngx-charts';
import {GlobalRoutingModule} from './global-routing.module';
import {SettingsComponent} from './settings/settings.component';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {AngularEditorModule} from '@kolkov/angular-editor';
import { MasterClassComponent } from './master-class/master-class.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    SettingsComponent, MasterClassComponent, UsersComponent
  ],
  imports: [
    CommonModule,
    FormModule, ReactiveFormsModule, FlexLayoutModule, MaterialModule,
    AppFilterPipeModule,
    AngularSplitModule,
    DirectivesModule,
    AvatarModule,
    CKEditorModule, AngularEditorModule,
    NgxMaterialTimepickerModule,
    SharedModule,
    NgxMatSelectSearchModule,
    NgMultiSelectDropDownModule.forRoot(),
    InputTrimModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }), BarChartModule, GlobalRoutingModule,
  ],
    exports: [
      
    ]
})
export class GlobalModule {
}
