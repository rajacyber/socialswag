import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppFilterPipeModule} from '../_filters/app.filter-pipe.module';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material.module';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {PnfComponent} from './pnf/pnf.component';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';
import {STableComponent} from './s-table/s-table.component';
import {ModalComponent} from './modal.component';
import {TableComponent} from './table/table.component';
import {SShimmerComponent} from './s-shimmer/s-shimmer.component';
import {SExpTableComponent} from './s-exp-table/s-exp-table.component';
import {DynamicFormComponent} from './forms/dynamic-form/dynamic-form.component';
import {DynamicControlComponent} from './forms/dynamic-control/dynamic-control.component';
import {CustomCalendarComponent} from './forms/custom-calendar/custom-calendar.component';
import {PillCardComponent} from './pill-card/pill-card.component';
import {SCrudTComponent} from './s-crud-t/s-crud-t.component';
import {STShimmerComponent} from './s-t-shimmer/s-t-shimmer.component';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {VulnerabilityStatsComponent} from './vulnerability-stats/vulnerability-stats.component';
import {VulnerabilityOverviewComponent} from './vulnerability-overview/vulnerability-overview.component';
import { SuppressVulsDaysComponent } from './suppress-vuls-days/suppress-vuls-days.component';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    PnfComponent, UnauthorizedComponent,
    STableComponent,
    ModalComponent,
    TableComponent,
    SShimmerComponent,
    SExpTableComponent,
    DynamicFormComponent,
    DynamicControlComponent,
    CustomCalendarComponent,
    PillCardComponent,
    SCrudTComponent,
    STShimmerComponent,
    VulnerabilityStatsComponent,
    VulnerabilityOverviewComponent,
     SuppressVulsDaysComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    FlexLayoutModule,
    AppFilterPipeModule,
    NgxMatSelectSearchModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MaterialModule,
        ConfirmDialogComponent,
        PnfComponent, UnauthorizedComponent,
        STableComponent,
        TableComponent,
        ModalComponent,
        SShimmerComponent,
        SExpTableComponent,
        DynamicFormComponent,
        DynamicControlComponent,
        CustomCalendarComponent, PillCardComponent, SCrudTComponent, STShimmerComponent,
        VulnerabilityOverviewComponent,
	      SuppressVulsDaysComponent,
    ],
  entryComponents: [ConfirmDialogComponent]
})

export class SharedModule {
}
