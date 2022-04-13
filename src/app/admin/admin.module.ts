import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {AppFilterPipeModule} from '../_filters/app.filter-pipe.module';
import {MaterialModule} from '../material.module';
import {SharedModule} from '../shared/shared.module';
import {LayoutComponent} from './layout/layout.component';
import {AdminRoutingModule} from './admin-routing.module';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {InputTrimModule} from 'ng2-trim-directive';
import {NgCircleProgressModule} from 'ng-circle-progress';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule, AppFilterPipeModule,
    MaterialModule,
    AdminRoutingModule,
    SharedModule,
    InputTrimModule,
    NgxMatSelectSearchModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
  ]
})
export class AdminModule { }
