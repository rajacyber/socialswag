(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "/MJh":
/*!****************************************************!*\
  !*** ./src/app/_services/confirmdialog.service.ts ***!
  \****************************************************/
/*! exports provided: ConfirmDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogService", function() { return ConfirmDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/confirm-dialog/confirm-dialog.component */ "ZokB");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




class ConfirmDialogService {
    constructor(dialog) {
        this.dialog = dialog;
        this.result = '';
        this.htmlMsg = false;
        this.reverse = false;
        this.dialogResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    confirmDialog(title, msg, cancelText, acceptText, cancelColor, acceptColor, htmlMsg, reverse) {
        this.htmlMsg = htmlMsg;
        this.dialogResult.observers = [];
        const dialogData = new _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogModel"](title, msg, cancelText, acceptText, cancelColor, acceptColor, htmlMsg, reverse);
        const dialogRef = this.dialog.open(_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"], { minWidth: '400px', maxWidth: '600px', data: dialogData, panelClass: 'custom-modalbox' });
        dialogRef.afterClosed().subscribe(dialogResult => {
            this.dialogResult.next(dialogResult);
        });
    }
}
ConfirmDialogService.ɵfac = function ConfirmDialogService_Factory(t) { return new (t || ConfirmDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
ConfirmDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfirmDialogService, factory: ConfirmDialogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "0Em7":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout.component */ "oTZa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
        children: [
            {
                path: 'global',
                loadChildren: () => Promise.all(/*! import() | global-global-module */[__webpack_require__.e("common"), __webpack_require__.e("global-global-module")]).then(__webpack_require__.bind(null, /*! ./global/global.module */ "4p96")).then(m => m.GlobalModule),
            },
            {
                path: '',
                redirectTo: 'global'
            }
        ]
    }
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _filters_app_filter_pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_filters/app.filter-pipe.module */ "LYb0");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material.module */ "vvyD");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/layout.component */ "oTZa");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-routing.module */ "0Em7");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mat-select-search */ "WJ5W");
/* harmony import */ var ng2_trim_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-trim-directive */ "A894");
/* harmony import */ var ng2_trim_directive__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_trim_directive__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-circle-progress */ "K1R0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AdminModule {
}
AdminModule.ɵfac = function AdminModule_Factory(t) { return new (t || AdminModule)(); };
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _filters_app_filter_pipe_module__WEBPACK_IMPORTED_MODULE_2__["AppFilterPipeModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ng2_trim_directive__WEBPACK_IMPORTED_MODULE_8__["InputTrimModule"],
            ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_7__["NgxMatSelectSearchModule"],
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_9__["NgCircleProgressModule"].forRoot({
                radius: 100,
                outerStrokeWidth: 16,
                innerStrokeWidth: 8,
                outerStrokeColor: '#78C000',
                innerStrokeColor: '#C7E596',
                animationDuration: 300,
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _filters_app_filter_pipe_module__WEBPACK_IMPORTED_MODULE_2__["AppFilterPipeModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ng2_trim_directive__WEBPACK_IMPORTED_MODULE_8__["InputTrimModule"],
        ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_7__["NgxMatSelectSearchModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_9__["NgCircleProgressModule"]] }); })();


/***/ }),

/***/ "ju1v":
/*!*****************************************************!*\
  !*** ./src/app/_services/company-shared.service.ts ***!
  \*****************************************************/
/*! exports provided: CompanySharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanySharedService", function() { return CompanySharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




class CompanySharedService {
    constructor() {
        // Global Search
        this.searchFilter = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.setCurrentView = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updateMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.disableMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.disableOverview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Discovery Settings Actions
        this.companyScanEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Asset Actions
        this.showAssetTable = false;
        this.jobsUpdateEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cmpScanEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ExtScanEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ADScanEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.AssetEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.AgentpopupEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.assetTableView = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.globalFilterEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addAssetEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.refreshAssetEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updateAssetEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.assetScanEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.assetSortEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.firewallScanEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.downloadReportEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.assetFilterEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getstartintEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getstartRemEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getstartNotificationEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getstartApplicationBaselineEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getstartRolesEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getstartUsersEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getstartSchedulerEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.getstartReportBuilderEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.externalScanEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.remediationSuppressEVE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rmPatchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.rmViewAssetsEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.rmViewEvidence = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.totalEVE = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.reloadAndSetCompanyEVE = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.jobsViewEVE = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.filterUpdateEVE = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.filterUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.reportFilterUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.selectAllUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.updateTag = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.updateImportance = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.selectedAssets = false;
        // Shared Keys
        this.totals = {};
        this.assetFilter = '';
        this.searchFilter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(value => {
            this.globalFilterEVE.next(value);
        });
        this.filterUpdate.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(value => {
            this.filterUpdateEVE.next(value);
        });
    }
    showAssetTableView(value) {
        this.showAssetTable = value;
        this.assetTableView.next({ value });
    }
    setCurrentCompany(company) {
        this.reloadAndSetCompanyEVE.next({ value: company });
    }
    companyScan(scanType) {
        this.companyScanEVE.next({ st: scanType });
    }
    addAsset() {
        this.addAssetEVE.next({});
    }
    reloadAsset() {
        this.refreshAssetEVE.next({});
    }
    updateAsset() {
        this.updateAssetEVE.next({});
    }
    firewallScan() {
        this.firewallScanEVE.next({});
    }
    assetScan(val) {
        this.assetScanEVE.next({ value: val });
    }
    assetSort(key, sort) {
        this.assetSortEVE.next({ key, sort });
    }
    downloadReport() {
        this.downloadReportEVE.next({});
    }
    externalScan() {
        this.externalScanEVE.next({});
    }
    suppressRemediation() {
        this.remediationSuppressEVE.next({});
    }
    patchRemediation() {
        this.rmPatchEvent.next({});
    }
    viewRemediationAssets() {
        this.rmViewAssetsEvent.next({});
    }
    viewRemediateEvidence() {
        this.rmViewEvidence.next({});
    }
}
CompanySharedService.ɵfac = function CompanySharedService_Factory(t) { return new (t || CompanySharedService)(); };
CompanySharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompanySharedService, factory: CompanySharedService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "oTZa":
/*!**************************************************!*\
  !*** ./src/app/admin/layout/layout.component.ts ***!
  \**************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/base.service */ "3nF+");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/loader.service */ "nFbz");
/* harmony import */ var _services_confirmdialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/confirmdialog.service */ "/MJh");
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/modal.service */ "4Lsd");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_services/toastr.service */ "ndR1");
/* harmony import */ var _services_company_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_services/company-shared.service */ "ju1v");
/* harmony import */ var _services_common_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_services/common.services */ "6QfA");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_services/authentication.service */ "pW6c");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-mat-select-search */ "WJ5W");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var ng2_trim_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng2-trim-directive */ "A894");
/* harmony import */ var ng2_trim_directive__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(ng2_trim_directive__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _filters_app_filter_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../_filters/app.filter.pipe */ "YGr0");
































const _c0 = ["companySelect"];
const _c1 = ["sidenav"];
const _c2 = ["createMSPMenuTrigger"];
function LayoutComponent_mat_form_field_4_mat_option_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_mat_form_field_4_mat_option_5_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, company_r14.score, "1.0-0"), "");
} }
function LayoutComponent_mat_form_field_4_mat_option_5_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "timeAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, company_r14.c + "Z"), " ");
} }
function LayoutComponent_mat_form_field_4_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LayoutComponent_mat_form_field_4_mat_option_5_span_2_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_mat_form_field_4_mat_option_5_span_3_Template, 3, 4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, LayoutComponent_mat_form_field_4_mat_option_5_span_4_Template, 3, 3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", company_r14.name)("id", company_r14.name)("value", company_r14._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", company_r14.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", company_r14.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", company_r14.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.showTimeAgo && !company_r14.score);
} }
function LayoutComponent_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-select", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("openedChange", function LayoutComponent_mat_form_field_4_Template_mat_select_openedChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.closeCurrentCompany($event); })("selectionChange", function LayoutComponent_mat_form_field_4_Template_mat_select_selectionChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.updateCurrentCompany($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ngx-mat-select-search", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, LayoutComponent_mat_form_field_4_mat_option_5_Template, 5, 7, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.companyCtrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r0.companyFilterCtrl)("placeholderLabel", ctx_r0.searchTxt)("noEntriesFoundLabel", "No matching company found")("searching", ctx_r0.searching);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, ctx_r0.filteredCompanies));
} }
function LayoutComponent_div_5_span_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r25.commonService.currentCompany.customerInfo.uniqueIdentifier, ")");
} }
function LayoutComponent_div_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LayoutComponent_div_5_span_2_span_2_Template, 2, 1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r23.commonService.currentCompany.customerInfo.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.commonService.currentCompany.customerInfo.uniqueIdentifier);
} }
function LayoutComponent_div_5_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r24.commonService.currentCompany.customerInfo.address.city, ", ", ctx_r24.commonService.currentCompany.customerInfo.address.state, " ");
} }
function LayoutComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LayoutComponent_div_5_span_2_Template, 3, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LayoutComponent_div_5_span_3_Template, 2, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.commonService.currentCompany.customerInfo.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.commonService.currentCompany.customerInfo.address.city && ctx_r1.commonService.currentCompany.customerInfo.address.state);
} }
function LayoutComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r26.apiLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "integration_instructions");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "camelToHuman");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Welcome, ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx_r3.authService.currentUser.given_name, true), "");
} }
function LayoutComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.authService.currentUser.email, " ");
} }
function LayoutComponent_div_28_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LayoutComponent_div_28_p_2_Template, 2, 0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.contentText || ctx_r6.contentText === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.contentText);
} }
function LayoutComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_div_30_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r29.authService.resetSession(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_div_30_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r31.authService.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Session about to expire in ", ctx_r7.authService.timeoutSec, "s. Do you want to continue current session?");
} }
function LayoutComponent_ng_container_35_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_ng_container_35_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r37.searchCVEDetail(ctx_r37.cveid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r32.form.valid);
} }
function LayoutComponent_ng_container_35_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_ng_container_35_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r39.ccve = undefined; return ctx_r39.cveid = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_ng_container_35_mat_card_19_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r41.ccve.severity);
} }
function LayoutComponent_ng_container_35_mat_card_19_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r42.ccve.severity);
} }
function LayoutComponent_ng_container_35_mat_card_19_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r43.ccve.severity);
} }
function LayoutComponent_ng_container_35_mat_card_19_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r44.ccve.severity);
} }
function LayoutComponent_ng_container_35_mat_card_19_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", ctx_r45.ccve.assets.length, ")");
} }
const _c3 = function (a0) { return { "bb-1": a0 }; };
function LayoutComponent_ng_container_35_mat_card_19_mat_list_item_36_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_ng_container_35_mat_card_19_mat_list_item_36_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r50.navToAsset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asset_r48 = ctx.$implicit;
    const i_r49 = ctx.index;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c3, i_r49 !== ctx_r46.ccve.assets.length - 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](asset_r48.name);
} }
function LayoutComponent_ng_container_35_mat_card_19_mat_list_item_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " All good, no assets affected. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LayoutComponent_ng_container_35_mat_card_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-list", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-list-item", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Severity:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, LayoutComponent_ng_container_35_mat_card_19_span_12_Template, 2, 1, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, LayoutComponent_ng_container_35_mat_card_19_span_13_Template, 2, 1, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, LayoutComponent_ng_container_35_mat_card_19_span_14_Template, 2, 1, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, LayoutComponent_ng_container_35_mat_card_19_span_15_Template, 2, 1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-list-item", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Base Score:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-list-item", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Exploitability Score:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Impact Score:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "h3", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Affected Assets ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, LayoutComponent_ng_container_35_mat_card_19_span_34_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-list", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, LayoutComponent_ng_container_35_mat_card_19_mat_list_item_36_Template, 3, 4, "mat-list-item", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, LayoutComponent_ng_container_35_mat_card_19_mat_list_item_37_Template, 3, 0, "mat-list-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("href", "https://nvd.nist.gov/vuln/detail/", ctx_r36.ccve.cve, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r36.ccve.cve);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r36.ccve.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r36.ccve.severity.toUpperCase() === "HIGH");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r36.ccve.severity.toUpperCase() === "MEDIUM");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r36.ccve.severity.toUpperCase() === "CRITICAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r36.ccve.severity.toUpperCase() === "LOW");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r36.ccve.baseScore);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r36.ccve.exploitableScore);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r36.ccve.impactScore);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r36.ccve.assets && ctx_r36.ccve.assets.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r36.ccve.assets);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r36.ccve.assets || !ctx_r36.ccve.assets.length);
} }
function LayoutComponent_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-header", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_ng_container_35_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r52.closeSideNav("toggle button"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", null, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "CVE-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LayoutComponent_ng_container_35_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r54.cveid = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, LayoutComponent_ng_container_35_button_13_Template, 3, 1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, LayoutComponent_ng_container_35_button_14_Template, 3, 0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Ex. 2021-21166");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_ng_container_35_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r55.searchCVEDetail(ctx_r55.cveid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, LayoutComponent_ng_container_35_mat_card_19_Template, 38, 13, "mat-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r9.cveid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r9.ccve);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.ccve);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !_r32.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.ccve);
} }
function LayoutComponent_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_ng_container_36_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r56.closeSideNav("toggle button"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Insights");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "mat-card-content", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function LayoutComponent_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_ng_container_37_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r58.closeSideNav("toggle button"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Getting Started");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-checkbox", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LayoutComponent_ng_container_37_Template_mat_checkbox_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r59); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r60.isHidden = $event; })("change", function LayoutComponent_ng_container_37_Template_mat_checkbox_change_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r59); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r61.gettingStartedtoggle(ctx_r61.isHidden); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Do not show");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "mat-card-content", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r11.isHidden)("checked", ctx_r11.isHidden);
} }
const _c4 = function (a0, a1) { return { "trans-none": a0, "gtrans-none": a1 }; };
const INTERVAL = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1800);
class LayoutComponent {
    constructor(baseService, router, loaderService, confirmDialog, modalService, toast, cs, commonService, authService) {
        this.baseService = baseService;
        this.router = router;
        this.loaderService = loaderService;
        this.confirmDialog = confirmDialog;
        this.modalService = modalService;
        this.toast = toast;
        this.cs = cs;
        this.commonService = commonService;
        this.authService = authService;
        this.companyCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.companyFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.filteredCompanies = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.searching = false;
        this.domain = window.location.host;
        this.isLoading = false;
        this.onDestroySearch = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.filterUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.showLoader = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.loading$ = this.showLoader.asObservable();
        this.Objectkeys = Object.keys;
        this.showSearch = false;
        this.searchGlobal = '';
        this.companyHash = {};
        this.logoHeight = 40;
        this.logo = {
            src: '/assets/images/cybercns_logo.png', srcOn: '/assets/images/cybercns_logo.png',
            srcOut: '/assets/images/cybercns_logo.png'
        };
        this.isOpen = true;
        this.patchingDetails = {
            title: '',
            type: '',
            info: '',
            sections: [],
        };
        this.releaseNotes = {};
        this.searchTxt = 'Search Company';
        this.searchid = 'CompSearch';
        this.showTimeAgo = false;
        this.forceSet = false;
        this.trialPeriodWidth = 700;
        this.restrictRedirect = ['global', 'toolkit'];
        this.sideNavView = '';
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                if (event.url.indexOf('companies') > -1) {
                    this.baseService.showAssessment = false;
                    this.baseService.showCompany = true;
                    if (this.baseService.isAssessment) {
                        this.allComp = [];
                        this.commonService.cHash = undefined;
                        this.companies = undefined;
                        this.companyCtrl.setValue('');
                        this.filteredCompanies.next([]);
                        this.getCompanies();
                        this.baseService.isAssessment = false;
                    }
                    else if (!this.allComp || !this.allComp.length) {
                        this.getCompanies();
                    }
                    if (event.url.indexOf('companies/onboarding') > -1) {
                        this.baseService.showCompany = false;
                    }
                    else {
                        this.baseService.showCompany = true;
                    }
                }
                else if (event.url.indexOf('assessments') > -1) {
                    this.baseService.showAssessment = true;
                    this.baseService.showCompany = false;
                    this.baseService.isAssessment = true;
                    this.allComp = [];
                    this.commonService.cHash = undefined;
                    this.companies = undefined;
                    this.filteredCompanies.next([]);
                    this.commonService.currentCompany = { _id: '_assessment' };
                    localStorage.removeItem('cmp');
                    this.getCompanies();
                }
                else {
                    if (this.authService.currentUser && this.authService.currentUser.permissions
                        && (this.authService.currentUser.permissions.includes !== ''
                            && this.authService.currentUser.permissions.includes !== '*')
                        && event.url.indexOf('toolkit') === -1) {
                        this.router.navigateByUrl('/companies');
                    }
                    this.allComp = [];
                    this.commonService.cHash = undefined;
                    this.companies = undefined;
                    this.filteredCompanies.next([]);
                    this.baseService.showCompany = false;
                    this.baseService.showAssessment = false;
                }
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationError"]) {
                if (event.url.indexOf('companies') === -1) {
                    this.baseService.showCompany = false;
                }
            }
        });
        console.log(this.showSearch);
        this.cs.reloadAndSetCompanyEVE.subscribe((value) => {
            if (!value.value) {
                setTimeout(() => { this.getCompanies(); }, 2000);
            }
            else {
                this.forceSet = true;
                if (value.value.indexOf(' ') > -1) {
                    value.value = value.value.split(' ')[0];
                }
                setTimeout(() => { this.getCompanies(value.value); }, 2000);
            }
        });
    }
    handleKeyboardEvent(event) {
        if (event.code === 'Escape') {
            this.loaderService.display(false);
            this.loaderService.Modeldisplay(false);
        }
    }
    closeCurrentCompany(event) {
        this.showTimeAgo = event;
        if (this.allComp) {
            this.companies = Object.assign([], this.allComp);
            this.filteredCompanies.next(this.allComp.slice());
        }
        if (!event && !this.selectedCompany) {
            this.getCompanies();
        }
    }
    updateCurrentCompany(event) {
        this.loaderService.selectedSiteChange(this.companyHash[event]);
        this.selectedCompany = this.companyHash[event].name;
        localStorage.setItem('cmp', this.selectedCompany);
        this.commonService.currentCompany = this.companyHash[event];
    }
    getCompanies(search) {
        if (!this.authService || !this.authService.isAuthenticated) {
            setTimeout(() => { this.getCompanies(); }, 2000);
            return;
        }
        let cq;
        const cmpq = { query: { bool: { must: [{ exists: { field: 'description' } }], must_not: [{ match: { isAssessment: true } }, { exists: { field: 'companyRef' } }] } } };
        const asmq = { query: { bool: { must: [{ match: { isAssessment: true } }, { exists: { field: 'description' } }], must_not: [{ exists: { field: 'companyRef' } }] } } };
        cq = (this.baseService.showAssessment) ? asmq : cmpq;
        if (search && search !== '') {
            // @ts-ignore
            cq.query.bool.must.push({ match_bool_prefix: { name: search.toLowerCase() } });
        }
        const q = JSON.stringify(cq);
        const skip = 0;
        const limit = 1000;
        const sort = JSON.stringify([{ 'name.keyword': { order: 'asc' } }]);
        const fields = JSON.stringify(['name', 'customerInfo', 'c']);
        this.searching = true;
        // this.companyService.getAllApiCompanyGet({q, skip, limit, sort, fields}).subscribe((result: any) => {
        //   if (!result.total && !this.forceSet && !search && !this.baseService.showAssessment) {
        //     this.router.navigateByUrl('companies/onboarding').then(r => console.log(r) );
        //   }
        //   if (result.data.length) {
        //     for (const c of result.data) { if (c._id) { this.companyHash[c._id] = c; } }
        //     result.data.sort((a: any, b: any) => {
        //       const c = (a.name) ? a.name.toLowerCase() : ''; const d = (b.name) ? b.name.toLowerCase() : '';
        //       if (c < d) { return -1; } else if (c > d) { return 1; } else { return 0; }
        //     });
        //     this.commonService.cHash = this.companyHash;
        //     this.commonService.companiesList = result.data;
        //     this.companies = result.data; if (!search) { this.allComp = result.data; }
        //     this.filteredCompanies.next(result.data.slice());
        //     const cmp = localStorage.getItem('cmp');
        //     if (!this.companyCtrl.value && !cmp) {
        //       this.companyCtrl.setValue(this.companies[0]._id);
        //       this.updateCurrentCompany(this.companies[0]._id);
        //     } else if (cmp){
        //       const company = this.companies.filter((x: any) => x.name === cmp);
        //       if (company.length) {
        //         this.companyCtrl.setValue(company[0]._id);
        //         this.updateCurrentCompany(company[0]._id);
        //         localStorage.removeItem('cmp');
        //       } else {
        //         this.companyCtrl.setValue(this.companies[0]._id);
        //         this.updateCurrentCompany(this.companies[0]._id);
        //       }
        //     }
        //     if (this.forceSet) {
        //       setTimeout(() => {
        //         this.companyCtrl.setValue(this.companies[0]._id);
        //         this.updateCurrentCompany(this.companies[0]._id);
        //         this.forceSet = false;
        //       }, 1000);
        //     }
        //     this.searching = false;
        //     this.searchTxt = (result.total > 0) ? `Search Company from ${this.allComp.length} Companies` : 'Search Company';
        //   } else {
        //     if (this.baseService.showAssessment) {
        //       this.companies = [];
        //       this.companyCtrl.setValue('');
        //     }
        //     if (window.location.pathname === '/assessments/assessment-company') {
        //     let disableMenuItem = true
        //     this.cs.disableMenu.next(disableMenuItem);
        //     this.cs.disableOverview.next(disableMenuItem);
        //   }
        //     this.filteredCompanies.next([]);
        //     this.searching = false;
        //   }
        // }, error => {
        //     // no errors in our simulated example
        //     this.searching = false;
        //     // handle error...
        //   });
    }
    ngOnInit() {
        this.loaderService.status.subscribe((val, text) => {
            this.result = val;
            setTimeout(() => { this.showLoader.next(this.result.value); });
            this.contentText = this.result.text;
        });
        // this.authService.getSessionSettings();
        // setTimeout(() => {
        //   const rn = localStorage.getItem('isReleaseNotes');
        //   if (rn === undefined || rn === null || rn === '') {
        //     this.getSessionSettings();
        //   }
        // }, 3000);
        // this.companyFilterCtrl.valueChanges.pipe(debounceTime(300), takeUntil(this.onDestroySearch)).subscribe(() => {
        //   this.filterCompanies();
        // });
        // this.getCompanies();
        // const query = {query: {bool: {must: [{match: {userId: this.authService.currentUser?.email}}, {match: {tableId: 'toggle'}}]}}};
        // const q = JSON.stringify(query);
        // const skip = 0;
        // const limit = 1;
        // this.tableSettingsService.getAllApiTablesettingsGet({ q, skip, limit }).subscribe((result: any) => {
        //   console.log('toggle Setting Result', result);
        //   if (result.data.length){
        //     this.toggleSetting = result.data[0];
        //     this.isHidden  =  this.toggleSetting.columnRepr === 'True';
        //   }else{
        //     this.isHidden = false;
        //   }
        //   if (!this.isHidden) {
        //     this.sideNavView = 'gettingStarted';
        //     setTimeout(() => this.sidenav.open());
        //   }
        // });
    }
    apiLink() {
        window.open('/docs', '_blank');
    }
    closeSideNav(reason) {
        this.sideNavView = '';
        this.sidenav.close();
        this.ccve = undefined;
        this.cveid = undefined;
    }
    gettingStartedOpen() {
        this.sideNavView = 'gettingStarted';
        setTimeout(() => this.sidenav.open());
    }
    searchCVE() {
        this.sideNavView = 'cveSearch';
        // this.sidenavVisible = true;
        setTimeout(() => this.sidenav.open());
    }
    searchCVEDetail(CVE) {
        this.loaderService.display(true, `CVE-${CVE} Details...`);
        const cmp = (this.baseService.showCompany) ? this.commonService.currentCompany._id : '';
        // this.companyService.companysearchCveApiCompanyIdSearchCvePost(
        //   {id: this.commonService.currentCompany._id, body: {companyid: cmp, cve: `CVE-${CVE}`}}).subscribe((result: any) => {
        //   this.loaderService.display(false);
        //   if (result[0]) {
        //     this.ccve = result[1];
        //   } else {
        //     this.toast.sToast('error', result[1]);
        //   }
        // });
    }
    navToAsset() {
        localStorage.setItem('newTab', 'cveAssets');
        window.open('/company/companies', '_blank');
    }
    getSessionSettings() {
        var _a;
        const cq = {
            query: {
                bool: {
                    must: [{ match: { 'userid.keyword': (_a = this.authService.currentUser) === null || _a === void 0 ? void 0 : _a.email } }, { exists: { field: 'releaseNotesCheck' } }]
                }
            }
        };
        const q = JSON.stringify(cq);
        const skip = 0;
        const limit = 1;
        this.loaderService.display(true, 'Loading...');
        this.baseService.doRequest('/api/usersettings', 'get', null, { q, skip, limit }).subscribe((res) => {
            this.loaderService.display(false);
            if (res && res.data && res.data.length) {
                this.sessionData = res.data[0];
                this.checkReleaseNotes(res.data[0].releaseNotesCheck);
            }
        });
    }
    getBuild() {
        this.modalService.open('build');
        this.loaderService.Modeldisplay(true, 'Getting build info...');
        this.baseService.doRequest(`/api/cyberutils/dummy/getBuildInfo`, 'post', {}, null, this.baseService.authHeader).subscribe((result) => {
            this.loaderService.Modeldisplay(false);
            if (result && result[0]) {
                this.build = result[1];
                this.getUpdatesAvailable();
            }
        });
    }
    getUpdatesAvailable() {
        this.loaderService.display(true, 'Checking is new updates available... ');
        this.baseService.doRequest(`/api/cyberutils/dummy/checkCyberUpdates`, 'post', {}).subscribe((result) => {
            this.loaderService.display(false);
            if (result[0]) {
                this.updateStatus = result[1];
            }
            else {
                this.toast.sToast('error', result[1]);
            }
        });
    }
    installUpdate() {
        const titleName = 'Confirmation';
        const message = 'Are you sure you want to update the latest patch?';
        const cancelText = 'No';
        const acceptText = 'Yes';
        this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText);
        this.confirmDialog.dialogResult.subscribe(res => {
            if (res) {
                this.baseService.doRequest(`/api/cyberutils/dummy/installCyberUpdates`, 'post', {}).subscribe((result) => {
                    if (result[0]) {
                        this.toast.sToast('success', result[1]);
                    }
                    else {
                        this.toast.sToast('error', result[1]);
                    }
                });
            }
        });
    }
    getVulsSyncInfo() {
        this.modalService.open('feedInfo');
        this.loaderService.Modeldisplay(true, 'Getting vulnerability feed info...');
        this.baseService.doRequest(`/api/cyberutils/dummy/getFeedInfo`, 'post', {})
            .subscribe((result) => {
            this.loaderService.Modeldisplay(false);
            if (result && result[0]) {
                this.feeds = result[1];
            }
        });
    }
    trialPeriod() {
        this.trial = { domain: window.location.hostname, action: 'buyNow', comment: '', button: 'Contact me' };
        this.loaderService.display(true, 'Getting trial information');
        // this.baseService.doRequest(`/api/cyberutils/dummy/getTrialPeriod`, 'post').subscribe((result: any) => {
        this.loaderService.display(false);
        // if (result) {
        this.modalService.open('trialPeriod');
        // } else {
        //   this.toast.sToast('error', result.msg);
        // }
        // });
    }
    checkReleaseNotes(show) {
        this.loaderService.display(true, 'Getting release notes');
        this.baseService.doRequest(`/api/cyberutils/dummy/getReleaseNotesNew`, 'post', {})
            .subscribe((result) => {
            this.loaderService.display(false);
            if (result[0]) {
                this.patchingDetails = (result[1]) ? result[1] : {};
                if (show) {
                    this.modalService.open('releaseNotesModal');
                }
                else if (!this.tableId) {
                    this.modalService.open('releaseNotesModal');
                }
                else if (this.tableId && this.sessionData) {
                    let s = false;
                    // @ts-ignore
                    this.sessionData.forEach(obj => {
                        if (obj.userdata === this.releaseNotes.date) {
                            s = true;
                            return false;
                        }
                    });
                    if (!s) {
                        this.modalService.open('releaseNotesModal');
                    }
                }
            }
            else {
                this.toast.sToast('error', result[1]);
            }
        });
    }
    readWhatsNew() {
        var _a;
        this.modalService.close('releaseNotesModal');
        const method = (this.sessionData && this.sessionData._id) ? 'put' : 'post';
        const url = `/api/usersettings`;
        const data = (this.sessionData) ? this.sessionData : { releaseNotesCheck: false, userid: (_a = this.authService.currentUser) === null || _a === void 0 ? void 0 : _a.email };
        this.baseService.doRequest(url, method, data).subscribe((result) => {
            if (result) {
                return;
            }
            else {
                return;
            }
        });
    }
    onLogOut() {
        const titleName = 'Logout message';
        const message = 'Are you sure you want to logout?';
        const cancelText = 'Cancel';
        const acceptText = 'OK';
        this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText, '', '', true);
        this.confirmDialog.dialogResult.subscribe(res => {
            if (res) {
                localStorage.removeItem('isLoggedin');
                this.authService.logout();
            }
        });
    }
    toggleSearch() {
        this.showSearch = !this.showSearch;
    }
    ngOnDestroy() {
        this.onDestroySearch.next();
        this.onDestroySearch.complete();
    }
    filterCompanies() {
        if (!this.companies) {
            return;
        }
        // get the search keyword
        let search = this.companyFilterCtrl.value;
        if (!search) {
            this.filteredCompanies.next(this.companies.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        this.getCompanies(search);
    }
    updateTrial() {
        console.log(JSON.stringify(this.trial));
        this.modalService.close('trialPeriod');
    }
    updateTrialForm(action) {
        if (action === 'buyNow') {
            this.trial.button = 'Contact me';
        }
        else {
            this.trial.button = 'Cancel Trial';
        }
    }
    SaveSettings() {
        var _a;
        let item;
        item = {
            tableId: 'toggle',
            userId: (_a = this.authService.currentUser) === null || _a === void 0 ? void 0 : _a.email,
            columnRepr: this.isHidden ? 'True' : 'False'
        };
        const method = (this.toggleSetting && this.toggleSetting._id) ? 'put' : 'post';
        if (this.toggleSetting && this.toggleSetting._id) {
            item._id = this.toggleSetting._id;
        }
        this.baseService.doRequest(`/api/tablesettings/`, method, item).subscribe((res) => {
            if (res && res._id && res.c !== null && res.u !== null) {
                this.toast.sToast('success', 'Successfully updated!');
            }
            else {
                this.toast.sToast('error', res._id);
            }
        });
    }
    gettingStartedtoggle(isHidden) {
        this.isHidden = isHidden;
        this.SaveSettings();
    }
    createMSP() {
        this.loaderService.display(true, 'Creating MSP...');
        this.isLoading = true;
        // this.companyService.companycreateMspApiCompanyIdCreateMspPost(
        //   {id: 'dummy', body: {mspdomain: 'beta' + this.mspDomain, email: this.mspEmail}}).subscribe((result: any) => {
        //   this.loaderService.display(false);
        //   this.toast.sToast('success',
        //     `beta${this.mspDomain}.mycybercns.com domain initiated. Please browse after 2 minutes.`);
        //   this.isLoading = false;
        //   this.mspDomain = ''; this.mspEmail = '';
        //   this.createMSPMenuTrigger.closeMenu();
        // });
    }
    partnerOverview() {
        this.sideNavView = 'partnerOverview';
        this.sidenav.open();
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseRequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_confirmdialog_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_toastr_service__WEBPACK_IMPORTED_MODULE_8__["MyToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_company_shared_service__WEBPACK_IMPORTED_MODULE_9__["CompanySharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_common_services__WEBPACK_IMPORTED_MODULE_10__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], viewQuery: function LayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.companySelect = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.createMSPMenuTrigger = _t.first);
    } }, hostBindings: function LayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown", function LayoutComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"]);
    } }, decls: 38, vars: 22, consts: [[1, "pl-2", "position-absolute", "mat-elevation-z0", "app-header-bar", "toolbar-bottom"], ["alt", "Socialswag", "routerLink", "/admin", "aria-label", "Socialswag", "src", "/assets/images/socialswag/logo.svg", 1, "logo-img"], [1, "w-40"], ["class", "w-25 company-selector", 4, "ngIf"], ["class", "d-flex align-items-center ml-2", 4, "ngIf"], [1, "nav-spacer"], ["matTooltip", "API Documentation", "color", "primary", "class", "mr10", "mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "d-flex", "align-items-center"], ["matTooltip", "View Build Info, Vuls Feed Info", 1, "mr-1", "mt-1", "pointer", 3, "matMenuTriggerFor"], ["color", "primary", 1, "mt-1", "material-icons", "mini-avatar"], [1, "d-flex", "flex-column", "justify-content-start"], ["class", "mat-small fw2", 4, "ngIf"], [3, "overlapTrigger"], ["profile", "matMenu"], ["mat-menu-item", "", "href", "javascript:", "color", "primary", 1, "visible-sm", 3, "click"], ["id", "logoutbtn"], ["mat-icon-button", "", "id", "logoutbtn1", "color", "primary", 3, "click"], [1, "base-container", "t-48"], [1, "main-drawer-content"], ["class", "loader-class custom-class", 4, "ngIf"], ["class", "loader-class custom-class p-3", 4, "ngIf"], [1, "cve-container", 3, "backdropClick"], ["position", "end", "disableClose", "", 1, "sideNavCss", 3, "ngClass", "keydown.escape"], ["sidenav", ""], [4, "ngIf"], [1, "w-25", "company-selector"], ["id", "SearchCompanyInput", "placeholder", "", 1, "mat-small", "round-select", 3, "formControl", "openedChange", "selectionChange"], ["companySelect", ""], [3, "formControl", "placeholderLabel", "noEntriesFoundLabel", "searching"], [3, "matTooltip", "id", "value", 4, "ngFor", "ngForOf"], [3, "matTooltip", "id", "value"], ["matTooltip", "Avg. Vulnerability Score", "class", "mat-small scritical-line nbadge float-right", 4, "ngIf"], ["class", "float-right small fw2", 4, "ngIf"], ["matTooltip", "Avg. Vulnerability Score", 1, "mat-small", "scritical-line", "nbadge", "float-right"], [1, "float-right", "small", "fw2"], [1, "d-flex", "align-items-center", "ml-2"], [1, "mat-small", "fw2"], ["class", "text-muted", 4, "ngIf"], [1, "text-muted"], ["matTooltip", "API Documentation", "color", "primary", "mat-icon-button", "", 1, "mr10", 3, "click"], [1, "loader-class", "custom-class"], ["src", "/assets/images/loading.gif", "width", "30", "alt", ""], [1, "m-0"], [1, "loader-class", "custom-class", "p-3"], [1, "mb-3", "mt-3"], [1, "d-flex", "flex-row", "align-items-center"], [1, "mr-2"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "color", "warn", 3, "click"], [1, "p-1", "mat-elevation-z0"], [1, "bb-1", "br-4", "px-1", "py-2"], ["mat-icon-button", "", "aria-label", "close modal icon", "matTooltip", "Close", 1, "position-absolute", "r-1p", 3, "click"], ["cveFrm", "ngForm"], ["floatLabel", "never", "matTooltip", "Search Common Vulnerabilities and Exposures", 1, "px-1"], ["matPrefix", ""], ["autofocus", "", "type", "text", "trim", "blur", "required", "", "matInput", "", "pattern", "((1999|2\\d{3})-(0\\d{2}[1-9]|[1-9]\\d{3,}))", "placeholder", "YEAR-NNNNNN", "name", "cveid", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["cveInput", ""], ["type", "button", "aria-label", "Search CVE", "color", "primary", "matSuffix", "", "mat-icon-button", "", 3, "disabled", "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary", 3, "disabled", "click"], ["type", "button", "aria-label", "Search CVE", "color", "primary", "matSuffix", "", "mat-icon-button", "", 3, "disabled", "click"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [1, "mat-title"], ["target", "_blank", 3, "href"], [1, "main-section", "mt-2"], [1, "pb-2"], ["dense", "", 1, "w-100", "bor-1"], [1, "bb-1"], [1, "w-25"], ["class", "badge px-1 py-1 shigh", 4, "ngIf"], ["class", "badge px-1 py-1 smedium", 4, "ngIf"], ["class", "badge px-1 py-1 scritical", 4, "ngIf"], ["class", "badge px-1 py-1 slow", 4, "ngIf"], [1, "w-25", "float-left"], [1, "badge", "px-1", "py-1", "scritical"], [1, "main-section", "mt-3"], [1, "mb-1"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "badge", "px-1", "py-1", "shigh"], [1, "badge", "px-1", "py-1", "smedium"], [1, "badge", "px-1", "py-1", "slow"], [3, "ngClass"], [1, "pointer", 3, "click"], [1, "fa", "fa-check-circle", "text-success", "fa-lg", "mr-1"], [1, "mat-elevation-z0"], ["mat-icon-button", "", "aria-label", "close modal icon", "matTooltip", "Close", 1, "position-absolute", "r-1p", "mt--10", 3, "click"], [1, "mt-2", "pb-6"], [1, "position-absolute", "r-10p", "mt--20", 3, "ngModel", "checked", "ngModelChange", "change"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, LayoutComponent_mat_form_field_4_Template, 7, 8, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, LayoutComponent_div_5_Template, 4, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, LayoutComponent_button_7_Template, 3, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, LayoutComponent_span_13_Template, 3, 4, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, LayoutComponent_span_14_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-menu", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_Template_a_click_17_listener() { return ctx.onLogOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LayoutComponent_Template_button_click_22_listener() { return ctx.onLogOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-drawer-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-drawer-content", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, LayoutComponent_div_28_Template, 5, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, LayoutComponent_div_30_Template, 10, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-sidenav-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("backdropClick", function LayoutComponent_Template_mat_sidenav_container_backdropClick_32_listener() { return ctx.closeSideNav("backdrop"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-sidenav", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.escape", function LayoutComponent_Template_mat_sidenav_keydown_escape_33_listener() { return ctx.closeSideNav("escape"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, LayoutComponent_ng_container_35_Template, 20, 5, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, LayoutComponent_ng_container_36_Template, 9, 0, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, LayoutComponent_ng_container_37_Template, 11, 2, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", ctx.logoHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.baseService.showCompany || ctx.baseService.showAssessment) && ctx.authService.hasPermission("company", "read"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.baseService.showCompany && ctx.commonService.currentCompany && ctx.commonService.currentCompany.customerInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.commonService && ctx.authService && ctx.authService.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authService && ctx.authService.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.authService && ctx.authService.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("overlapTrigger", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 15, ctx.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 17, ctx.authService.sessionTimeout$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](19, _c4, ctx.sideNavView === "cveSearch", ctx.sideNavView === "gettingStarted"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.sideNavView === "cveSearch");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.sideNavView === "partnerOverview");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.sideNavView === "gettingStarted");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenav"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__["DefaultClassDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatOption"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_23__["MatSelectSearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardHeader"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatPrefix"], ng2_trim_directive__WEBPACK_IMPORTED_MODULE_25__["InputTrimDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatSuffix"], _angular_material_list__WEBPACK_IMPORTED_MODULE_27__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_27__["MatListItem"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardContent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["MatCheckbox"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DecimalPipe"], _filters_app_filter_pipe__WEBPACK_IMPORTED_MODULE_29__["TimeAgoPipe"], _filters_app_filter_pipe__WEBPACK_IMPORTED_MODULE_29__["CamelToHumanPipe"]], styles: ["@charset \"UTF-8\";\n.cve-container[_ngcontent-%COMP%] {\n  position: unset;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.sideNavCss[_ngcontent-%COMP%] {\n  z-index: 101;\n  width: 50vw;\n}\n.gtrans-non[_ngcontent-%COMP%] {\n  transform: none !important;\n}\n.trans-none[_ngcontent-%COMP%] {\n  transform: unset !important;\n}\n.as-split-gutter[_ngcontent-%COMP%] {\n  flex-basis: 5px;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  height: 0px !important;\n}\n#patchingModal[_ngcontent-%COMP%]   .s-modal[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n.round-select[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  border: 1px solid #cdcdcd;\n  padding: 6px 10px;\n  margin-top: 8px;\n}\n  .company-selector .mat-form-field-underline {\n  display: none;\n}\n.getting-started-img[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/getting-started/flag.png\");\n  background-size: cover;\n}\n.loader-class[_ngcontent-%COMP%] {\n  z-index: 100001;\n  position: fixed;\n  top: 40%;\n  left: 40%;\n  right: 40%;\n  bottom: 40%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #000000ba;\n  border-radius: 10px;\n  height: 150px;\n  color: white;\n}\n.custom-class[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  word-break: break-all;\n  padding: 0 10px;\n  margin-bottom: 8px;\n}\n.custom-class[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.reportIssueButton[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n}\n*[_ngcontent-%COMP%], [_ngcontent-%COMP%]::before, [_ngcontent-%COMP%]::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x: ;\n  --tw-pan-y: ;\n  --tw-pinch-zoom: ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal: ;\n  --tw-slashed-zero: ;\n  --tw-numeric-figure: ;\n  --tw-numeric-spacing: ;\n  --tw-numeric-fraction: ;\n  --tw-ring-inset: ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur: ;\n  --tw-brightness: ;\n  --tw-contrast: ;\n  --tw-grayscale: ;\n  --tw-hue-rotate: ;\n  --tw-invert: ;\n  --tw-saturate: ;\n  --tw-sepia: ;\n  --tw-drop-shadow: ;\n  --tw-backdrop-blur: ;\n  --tw-backdrop-brightness: ;\n  --tw-backdrop-contrast: ;\n  --tw-backdrop-grayscale: ;\n  --tw-backdrop-hue-rotate: ;\n  --tw-backdrop-invert: ;\n  --tw-backdrop-opacity: ;\n  --tw-backdrop-saturate: ;\n  --tw-backdrop-sepia: ;\n}\n.example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.spacing[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-left: 12px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.fromtodate[_ngcontent-%COMP%] {\n  width: 150px;\n  margin: 10px;\n}\n.w-xy[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.color1[_ngcontent-%COMP%] {\n  border-left: 1px solid #e0e0e0;\n  padding-left: 5px;\n}\n@media (min-width: 1280px) {\n  .xl\\:inline[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n@media (min-width: 1024px) {\n  .lg\\:p-5[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n\n  .lg\\:max-w-4xl[_ngcontent-%COMP%] {\n    max-width: 56rem;\n  }\n\n  .lg\\:h-64[_ngcontent-%COMP%] {\n    height: 16rem;\n  }\n\n  .lg\\:block[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .lg\\:mt-20[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n  }\n\n  .lg\\:mx-0[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n\n  .lg\\:flex[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .lg\\:w-2\\/4[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n\n  .lg\\:mr-2[_ngcontent-%COMP%] {\n    margin-right: 0.5rem;\n  }\n}\n@media (min-width: 768px) {\n  .md\\:max-w-full[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n\n  .md\\:h-64[_ngcontent-%COMP%] {\n    height: 16rem;\n  }\n\n  .md\\:text-6xl[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    line-height: 1;\n  }\n\n  .md\\:mt-16[_ngcontent-%COMP%] {\n    margin-top: 4rem;\n  }\n\n  .md\\:text-lg[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n\n  .md\\:mb-3[_ngcontent-%COMP%] {\n    margin-bottom: 0.75rem;\n  }\n}\n@media (min-width: 640px) {\n  .sm\\:p-0[_ngcontent-%COMP%] {\n    padding: 0px;\n  }\n\n  .sm\\:h-56[_ngcontent-%COMP%] {\n    height: 9rem;\n  }\n\n  .sm\\:text-4xl[_ngcontent-%COMP%] {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n\n  .sm\\:mt-0[_ngcontent-%COMP%] {\n    margin-top: 0px;\n  }\n\n  .sm\\:text-lg[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n\n  .sm\\:mb-3[_ngcontent-%COMP%] {\n    margin-bottom: 0.75rem;\n  }\n\n  .sm\\:inline[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n.bg-gray-100[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246/var(--tw-bg-opacity));\n}\n.overflow-hidden[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.max-w-full[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.m-auto[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n.text-left[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.py-8[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  padding-bottom: 2rem;\n}\n.px-8[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.bg-blue-700[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216/var(--tw-bg-opacity));\n}\n.w-80[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n.inline-block[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.-top-32[_ngcontent-%COMP%] {\n  top: -8rem;\n}\n.-right-16[_ngcontent-%COMP%] {\n  right: -4rem;\n}\n.absolute[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.bg-gray-100[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246/var(--tw-bg-opacity));\n}\n.transform[_ngcontent-%COMP%] {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.rotate-45[_ngcontent-%COMP%] {\n  --tw-rotate: 45deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.origin-bottom-left[_ngcontent-%COMP%] {\n  transform-origin: bottom left;\n}\n.h-96[_ngcontent-%COMP%] {\n  height: 24rem;\n}\n.text-white[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255/var(--tw-text-opacity));\n}\n.tracking-tight[_ngcontent-%COMP%] {\n  letter-spacing: -0.025em;\n}\n.font-extrabold[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.text-4xl[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.align-text-top[_ngcontent-%COMP%] {\n  vertical-align: text-top;\n}\n.block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.p-10[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n}\n.text-gray-800[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55/var(--tw-text-opacity));\n}\n.text-lg[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.mb-5[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.text-white[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255/var(--tw-text-opacity));\n}\n.tracking-wide[_ngcontent-%COMP%] {\n  letter-spacing: 0.025em;\n}\n.uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.py-1[_ngcontent-%COMP%] {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.px-2[_ngcontent-%COMP%] {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.to-blue-500[_ngcontent-%COMP%] {\n  --tw-gradient-to: #3b82f6;\n}\n.from-cyan-500[_ngcontent-%COMP%] {\n  --tw-gradient-from: #06b6d4;\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(6 182 212 / 0));\n}\n.bg-gradient-to-r[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\n.bg-gray-200[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235/var(--tw-bg-opacity));\n}\n.rounded-full[_ngcontent-%COMP%] {\n  border-radius: 9999px;\n}\n.flex-none[_ngcontent-%COMP%] {\n  flex: none;\n}\n.mr-2[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n\n.text-black[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0/var(--tw-text-opacity));\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.mt-5[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.text-gray-800[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55/var(--tw-text-opacity));\n}\n.text-black[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0/var(--tw-text-opacity));\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.text-3xl[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.mt-5[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.m-5[_ngcontent-%COMP%] {\n  margin: 1.25rem;\n}\n.flex-none[_ngcontent-%COMP%] {\n  flex: none;\n}\n.p-4[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.bg-white[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255/var(--tw-bg-opacity));\n}\n.rounded-lg[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n}\n.rounded-lg[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n}\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.text-red-700[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(185 28 28/var(--tw-text-opacity));\n}\n.py-3[_ngcontent-%COMP%] {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.px-4[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.bg-red-100[_ngcontent-%COMP%] {\n  --tw-bg-opacity: 1;\n  background-color: rgb(254 226 226/var(--tw-bg-opacity));\n}\n.border-red-400[_ngcontent-%COMP%] {\n  --tw-border-opacity: 1;\n  border-color: rgb(248 113 113/var(--tw-border-opacity));\n}\n.border[_ngcontent-%COMP%] {\n  border-width: 1px;\n}\n.rounded[_ngcontent-%COMP%] {\n  border-radius: 0.25rem;\n}\n.relative[_ngcontent-%COMP%] {\n  position: relative;\n}\n.font-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.text-blue-800[_ngcontent-%COMP%] {\n  --tw-text-opacity: 1;\n  color: rgb(30 64 175/var(--tw-text-opacity));\n}\n.font-semibold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.rounded-lg[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n}\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mb-8[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.mb-1[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.flex-none[_ngcontent-%COMP%] {\n  flex: none;\n}\n.w-6[_ngcontent-%COMP%] {\n  width: 1.5rem;\n}\n.h-6[_ngcontent-%COMP%] {\n  height: 1.5rem;\n}\n.mt-1[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.ml-2[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n.md\\:text-6xl[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  line-height: 1;\n}\n.lg\\:mt-20[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.dsply__flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n.close__btn[_ngcontent-%COMP%] {\n  margin-top: 8px !important;\n  z-index: 999;\n  padding-left: 20px;\n}\ns-modal[_ngcontent-%COMP%]   .s-modal[_ngcontent-%COMP%] {\n  top: 53% !important;\n}\n#releseNotesModal[_ngcontent-%COMP%]   .s-modal[_ngcontent-%COMP%]\u00A0 {\n  top: 60% !important;\n}\n#releseNotesModal[_ngcontent-%COMP%]   .s-modal[_ngcontent-%COMP%]   .s-modal-body[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]\u00A0 {\n  margin-top: 0;\n  padding-top: 0;\n}\n.mat-close-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 8px;\n}\n  .mat-select-panel mat-option.mat-option {\n  height: unset !important;\n}\n  .mat-option-text {\n  white-space: normal !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFBaUIsZUFBQTtFQUFpQixNQUFBO0VBQVEsU0FBQTtFQUFXLE9BQUE7RUFBUyxRQUFBO0FBTzlEO0FBTkE7RUFBYyxZQUFBO0VBQWMsV0FBQTtBQVc1QjtBQVZBO0VBQWMsMEJBQUE7QUFjZDtBQWJBO0VBQWMsMkJBQUE7QUFpQmQ7QUFoQkE7RUFDRSxlQUFBO0FBbUJGO0FBakJBO0VBQ0Usc0JBQUE7QUFvQkY7QUFqQkU7RUFBVyxjQUFBO0FBcUJiO0FBbkJBO0VBR0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQXNCRjtBQXBCQTtFQUNJLGFBQUE7QUF1Qko7QUFyQkE7RUFDRSx5REFBQTtFQUNBLHNCQUFBO0FBd0JGO0FBdEJBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQXlCRjtBQXRCQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQXlCSjtBQXRCQTtFQUNFLGVBQUE7QUF5QkY7QUF0QkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBeUJGO0FBbkJBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUFzQkY7QUFwQkE7RUFDSSxnQkFBQTtBQXVCSjtBQXJCQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUF3Qko7QUF0QkE7RUFDSSxXQUFBO0FBeUJKO0FBdkJFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUEwQko7QUF4QkU7RUFDRSxXQUFBO0FBMkJKO0FBekJFO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtBQTRCSjtBQXZCRTtFQUNFO0lBQ0ksZUFBQTtFQTBCTjtBQUNGO0FBeEJFO0VBQ0U7SUFDRSxnQkFBQTtFQTBCSjs7RUF4QkU7SUFDRSxnQkFBQTtFQTJCSjs7RUF6QkU7SUFDRSxhQUFBO0VBNEJKOztFQTFCRTtJQUNFLGNBQUE7RUE2Qko7O0VBM0JFO0lBQ0UsZ0JBQUE7RUE4Qko7O0VBNUJFO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtFQStCSjs7RUE3QkU7SUFDRSxhQUFBO0VBZ0NKOztFQTlCRTtJQUNFLFVBQUE7RUFpQ0o7O0VBL0JFO0lBQ0Usb0JBQUE7RUFrQ0o7QUFDRjtBQWhDRTtFQUNFO0lBQ0UsZUFBQTtFQWtDSjs7RUFoQ0U7SUFDRSxhQUFBO0VBbUNKOztFQWpDRTtJQUNFLGlCQUFBO0lBQ0EsY0FBQTtFQW9DSjs7RUFsQ0U7SUFDRSxnQkFBQTtFQXFDSjs7RUFuQ0U7SUFDRSxtQkFBQTtJQUNBLG9CQUFBO0VBc0NKOztFQXBDRTtJQUNFLHNCQUFBO0VBdUNKO0FBQ0Y7QUFyQ0U7RUFDRTtJQUNJLFlBQUE7RUF1Q047O0VBckNFO0lBQ0UsWUFBQTtFQXdDSjs7RUF0Q0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VBeUNKOztFQXZDRTtJQUNFLGVBQUE7RUEwQ0o7O0VBeENFO0lBQ0UsbUJBQUE7SUFDQSxvQkFBQTtFQTJDSjs7RUF6Q0U7SUFDRSxzQkFBQTtFQTRDSjs7RUExQ0U7SUFDRSxlQUFBO0VBNkNKO0FBQ0Y7QUExQ0U7RUFDRSxrQkFBQTtFQUNBLHVEQUFBO0FBNENKO0FBMUNFO0VBQ0UsZ0JBQUE7QUE2Q0o7QUEzQ0U7RUFDRSxlQUFBO0FBOENKO0FBNUNBO0VBQ0UsWUFBQTtBQStDRjtBQTdDQTtFQUNFLGtCQUFBO0FBZ0RGO0FBOUNBO0VBQ0UsZ0JBQUE7QUFpREY7QUEvQ0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBa0RGO0FBaERBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQW1ERjtBQWpEQTtFQUNFLGtCQUFBO0VBQ0EscURBQUE7QUFvREY7QUFsREE7RUFDRSxZQUFBO0FBcURGO0FBaERBO0VBQ0UscUJBQUE7QUFtREY7QUFqREE7RUFDRSxVQUFBO0FBb0RGO0FBbERBO0VBQ0UsWUFBQTtBQXFERjtBQW5EQTtFQUNFLGtCQUFBO0FBc0RGO0FBcERBO0VBQ0Usa0JBQUE7RUFDQSx1REFBQTtBQXVERjtBQXJEQTtFQUNFLCtMQUFBO0FBd0RGO0FBdERBO0VBQ0Usa0JBQUE7RUFDQSwrTEFBQTtBQXlERjtBQXZEQTtFQUNFLDZCQUFBO0FBMERGO0FBeERBO0VBQ0UsYUFBQTtBQTJERjtBQXpEQTtFQUNFLG9CQUFBO0VBQ0EsOENBQUE7QUE0REY7QUExREE7RUFDRSx3QkFBQTtBQTZERjtBQTNEQTtFQUNFLGdCQUFBO0FBOERGO0FBNURBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQStERjtBQTdEQTtFQUNFLHdCQUFBO0FBZ0VGO0FBOURBO0VBQ0UsY0FBQTtBQWlFRjtBQTdEQSxnQkFBQTtBQUNBO0VBQ0UsZUFBQTtBQWdFRjtBQTlEQTtFQUNFLG9CQUFBO0VBQ0EsMkNBQUE7QUFpRUY7QUEvREE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FBa0VGO0FBaEVBO0VBQ0Usc0JBQUE7QUFtRUY7QUFqRUE7RUFDRSxvQkFBQTtFQUNBLDhDQUFBO0FBb0VGO0FBbEVBO0VBQ0UsdUJBQUE7QUFxRUY7QUFuRUE7RUFDRSx5QkFBQTtBQXNFRjtBQXBFQTtFQUNFLGdCQUFBO0FBdUVGO0FBckVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQXdFRjtBQXRFQTtFQUNFLG9CQUFBO0VBQ0EsdUJBQUE7QUF5RUY7QUF2RUE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0FBMEVGO0FBeEVBO0VBQ0UseUJBQUE7QUEyRUY7QUF6RUE7RUFDRSwyQkFBQTtFQUNBLHVGQUFBO0FBNEVGO0FBMUVBO0VBQ0UscUVBQUE7QUE2RUY7QUEzRUE7RUFDRSxrQkFBQTtFQUNBLHVEQUFBO0FBOEVGO0FBNUVBO0VBQ0UscUJBQUE7QUErRUY7QUE3RUE7RUFDRSxVQUFBO0FBZ0ZGO0FBOUVBO0VBQ0Usb0JBQUE7QUFpRkY7QUE5RUEscUJBQUE7QUFDQTtFQUNFLG9CQUFBO0VBQ0Esd0NBQUE7QUFpRkY7QUEvRUE7RUFDRSxnQkFBQTtBQWtGRjtBQWhGQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7QUFtRkY7QUFqRkE7RUFDRSxtQkFBQTtBQW9GRjtBQWxGQTtFQUNFLHFCQUFBO0FBcUZGO0FBbkZBO0VBQ0Usb0JBQUE7RUFDQSwyQ0FBQTtBQXNGRjtBQWhGQTtFQUNFLG9CQUFBO0VBQ0Esd0NBQUE7QUFtRkY7QUFqRkE7RUFDRSxnQkFBQTtBQW9GRjtBQWxGQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7QUFxRkY7QUFuRkE7RUFDRSxtQkFBQTtBQXNGRjtBQXBGQTtFQUNFLHFCQUFBO0FBdUZGO0FBckZBO0VBQ0UsZ0JBQUE7QUF3RkY7QUF0RkE7RUFDRSxnQkFBQTtBQXlGRjtBQXZGQTtFQUNFLGVBQUE7QUEwRkY7QUF4RkE7RUFDRSxVQUFBO0FBMkZGO0FBekZBO0VBQ0UsYUFBQTtBQTRGRjtBQTFGQTtFQUNFLGtCQUFBO0VBQ0EsdURBQUE7QUE2RkY7QUEzRkE7RUFDRSxxQkFBQTtBQThGRjtBQTVGQTtFQUNFLHFCQUFBO0FBK0ZGO0FBN0ZBO0VBQ0UsV0FBQTtBQWdHRjtBQTlGQTtFQUNFLG9CQUFBO0VBQ0EsNENBQUE7QUFpR0Y7QUEvRkE7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0FBa0dGO0FBaEdBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQW1HRjtBQWpHQTtFQUNFLGtCQUFBO0VBQ0EsdURBQUE7QUFvR0Y7QUFsR0E7RUFDRSxzQkFBQTtFQUNBLHVEQUFBO0FBcUdGO0FBbkdBO0VBQ0UsaUJBQUE7QUFzR0Y7QUFwR0E7RUFDRSxzQkFBQTtBQXVHRjtBQXJHQTtFQUNFLGtCQUFBO0FBd0dGO0FBdEdBO0VBQ0UsZ0JBQUE7QUF5R0Y7QUF2R0E7RUFDRSxvQkFBQTtFQUNBLDRDQUFBO0FBMEdGO0FBeEdBO0VBQ0UsZ0JBQUE7QUEyR0Y7QUF6R0E7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBNEdGO0FBekdBLGtCQUFBO0FBQ0E7RUFDRSxxQkFBQTtBQTRHRjtBQXpHQTtFQUNFLFdBQUE7QUE0R0Y7QUExR0E7RUFDRSxtQkFBQTtBQTZHRjtBQTNHQTtFQUNFLGtCQUFBO0FBOEdGO0FBNUdBO0VBQ0Usc0JBQUE7QUErR0Y7QUE3R0E7RUFDRSxhQUFBO0FBZ0hGO0FBOUdBO0VBQ0UsVUFBQTtBQWlIRjtBQS9HQTtFQUNFLGFBQUE7QUFrSEY7QUFoSEE7RUFDRSxjQUFBO0FBbUhGO0FBakhBO0VBQ0UsbUJBQUE7QUFvSEY7QUFsSEE7RUFDRSxtQkFBQTtBQXFIRjtBQW5IQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQXNIRjtBQXBIQTtFQUNFLGdCQUFBO0FBdUhGO0FBcEhBO0VBQ0UsYUFBQTtBQXVIRjtBQXBIQTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBdUhGO0FBcEhBO0VBQ0UsbUJBQUE7QUF1SEY7QUFwSEE7RUFDQyxtQkFBQTtBQXVIRDtBQXBIQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBdUhGO0FBcEhBO0VBQ0Msa0JBQUE7RUFDQyxVQUFBO0VBQ0EsUUFBQTtBQXVIRjtBQXJIQTtFQUNFLHdCQUFBO0FBd0hGO0FBdEhBO0VBQ0UsOEJBQUE7QUF5SEYiLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN2ZS1jb250YWluZXIgeyBwb3NpdGlvbjogdW5zZXQ7IHRvcDogMDsgYm90dG9tOiAwOyBsZWZ0OiAwOyByaWdodDogMDsgfVxuLnNpZGVOYXZDc3MgeyB6LWluZGV4OiAxMDE7IHdpZHRoOiA1MHZ3OyB9XG4uZ3RyYW5zLW5vbiB7IHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50OyB9XG4udHJhbnMtbm9uZSB7IHRyYW5zZm9ybTogdW5zZXQgIWltcG9ydGFudDsgfVxuLmFzLXNwbGl0LWd1dHRlciB7XG4gIGZsZXgtYmFzaXM6IDVweDtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgaGVpZ2h0OiAwcHggIWltcG9ydGFudDtcbn1cbiNwYXRjaGluZ01vZGFsIHtcbiAgLnMtbW9kYWwgeyBtYXJnaW4tdG9wOiAyJTt9XG59XG4ucm91bmQtc2VsZWN0IHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZGNkY2Q7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG46Om5nLWRlZXAgLmNvbXBhbnktc2VsZWN0b3IgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5nZXR0aW5nLXN0YXJ0ZWQtaW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2dldHRpbmctc3RhcnRlZC9mbGFnLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmxvYWRlci1jbGFzcyB7XG4gIHotaW5kZXg6IDEwMDAwMTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNDAlO1xuICByaWdodDogNDAlO1xuICBib3R0b206IDQwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBiYTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY3VzdG9tLWNsYXNzIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG59XG4uY3VzdG9tLWNsYXNzIHAgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweFxufVxuXG4ucmVwb3J0SXNzdWVCdXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi8vIHJlbGVhc2UgcG9wdXAgc3R5bGVcblxuXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XG4gIC0tdHctcm90YXRlOiAwO1xuICAtLXR3LXNrZXcteDogMDtcbiAgLS10dy1za2V3LXk6IDA7XG4gIC0tdHctc2NhbGUteDogMTtcbiAgLS10dy1zY2FsZS15OiAxO1xuICAtLXR3LXBhbi14OiA7XG4gIC0tdHctcGFuLXk6IDtcbiAgLS10dy1waW5jaC16b29tOiA7XG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xuICAtLXR3LW9yZGluYWw6IDtcbiAgLS10dy1zbGFzaGVkLXplcm86IDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogO1xuICAtLXR3LW51bWVyaWMtc3BhY2luZzogO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246IDtcbiAgLS10dy1yaW5nLWluc2V0OiA7XG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xuICAtLXR3LWJsdXI6IDtcbiAgLS10dy1icmlnaHRuZXNzOiA7XG4gIC0tdHctY29udHJhc3Q6IDtcbiAgLS10dy1ncmF5c2NhbGU6IDtcbiAgLS10dy1odWUtcm90YXRlOiA7XG4gIC0tdHctaW52ZXJ0OiA7XG4gIC0tdHctc2F0dXJhdGU6IDtcbiAgLS10dy1zZXBpYTogO1xuICAtLXR3LWRyb3Atc2hhZG93OiA7XG4gIC0tdHctYmFja2Ryb3AtYmx1cjogO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6IDtcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogO1xuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6IDtcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6IDtcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6IDtcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogO1xufVxuLmV4YW1wbGUtY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfVxuLnNwYWNpbmd7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5mcm9tdG9kYXRle1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbiAgLncteHl7XG4gICAgd2lkdGg6OTBweDtcbiAgfVxuICAuY29sb3IxIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cblxuXG4gIC8vIE1vZGFsIHBvcHVwXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcbiAgICAueGxcXDppbmxpbmUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgfVxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAubGdcXDpwLTUge1xuICAgICAgcGFkZGluZzogMS4yNXJlbTtcbiAgICB9XG4gICAgLmxnXFw6bWF4LXctNHhsIHtcbiAgICAgIG1heC13aWR0aDogNTZyZW07XG4gICAgfVxuICAgIC5sZ1xcOmgtNjQge1xuICAgICAgaGVpZ2h0OiAxNnJlbTtcbiAgICB9XG4gICAgLmxnXFw6YmxvY2sge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5sZ1xcOm10LTIwIHtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuICAgIC5sZ1xcOm14LTAge1xuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIH1cbiAgICAubGdcXDpmbGV4IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5sZ1xcOnctMlxcLzQge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgLmxnXFw6bXItMiB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLm1kXFw6bWF4LXctZnVsbCB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5tZFxcOmgtNjQge1xuICAgICAgaGVpZ2h0OiAxNnJlbTtcbiAgICB9XG4gICAgLm1kXFw6dGV4dC02eGwge1xuICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICB9XG4gICAgLm1kXFw6bXQtMTYge1xuICAgICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgICB9XG4gICAgLm1kXFw6dGV4dC1sZyB7XG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gICAgfVxuICAgIC5tZFxcOm1iLTMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgfVxuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICAgIC5zbVxcOnAtMCB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gICAgLnNtXFw6aC01NiB7XG4gICAgICBoZWlnaHQ6IDlyZW07XG4gICAgfVxuICAgIC5zbVxcOnRleHQtNHhsIHtcbiAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gICAgfVxuICAgIC5zbVxcOm10LTAge1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIH1cbiAgICAuc21cXDp0ZXh0LWxnIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcbiAgICB9XG4gICAgLnNtXFw6bWItMyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICAgIH0gXG4gICAgLnNtXFw6aW5saW5lIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB9XG4gIH1cbiAgXG4gIC5iZy1ncmF5LTEwMCB7XG4gICAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMgMjQ0IDI0NiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbiAgfVxuICAub3ZlcmZsb3ctaGlkZGVuIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5tYXgtdy1mdWxsIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG4ubS1hdXRvIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucHktOCB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cbi5weC04IHtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufVxuLmJnLWJsdWUtNzAwIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjkgNzggMjE2IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLnctODAge1xuICB3aWR0aDogMjByZW07XG59XG4vLyAuaGlkZGVuIHtcbi8vICAgZGlzcGxheTogbm9uZTtcbi8vIH1cbi5pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uLXRvcC0zMiB7XG4gIHRvcDogLThyZW07XG59XG4uLXJpZ2h0LTE2IHtcbiAgcmlnaHQ6IC00cmVtO1xufVxuLmFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmJnLWdyYXktMTAwIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzIDI0NCAyNDYgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4udHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4ucm90YXRlLTQ1IHtcbiAgLS10dy1yb3RhdGU6IDQ1ZGVnO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5vcmlnaW4tYm90dG9tLWxlZnQge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbn1cbi5oLTk2IHtcbiAgaGVpZ2h0OiAyNHJlbTtcbn1cbi50ZXh0LXdoaXRlIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50cmFja2luZy10aWdodCB7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMjVlbTtcbn1cbi5mb250LWV4dHJhYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4udGV4dC00eGwge1xuICBmb250LXNpemU6IDIuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG59XG4uYWxpZ24tdGV4dC10b3Age1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG59XG4uYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4vKiBDT05URU5UIEJPWCAqL1xuLnAtMTAge1xuICBwYWRkaW5nOiAyLjVyZW07XG59XG4udGV4dC1ncmF5LTgwMCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDMxIDQxIDU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC1sZyB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuLm1iLTUge1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xufVxuLnRleHQtd2hpdGUge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnRyYWNraW5nLXdpZGUge1xuICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcbn1cbi51cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmZvbnQtc2VtaWJvbGQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnRleHQteHMge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xufVxuLnB5LTEge1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XG59XG4ucHgtMiB7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG59XG4udG8tYmx1ZS01MDAge1xuICAtLXR3LWdyYWRpZW50LXRvOiAjM2I4MmY2O1xufVxuLmZyb20tY3lhbi01MDAge1xuICAtLXR3LWdyYWRpZW50LWZyb206ICMwNmI2ZDQ7XG4gIC0tdHctZ3JhZGllbnQtc3RvcHM6IHZhcigtLXR3LWdyYWRpZW50LWZyb20pLCB2YXIoLS10dy1ncmFkaWVudC10bywgcmdiKDYgMTgyIDIxMiAvIDApKTtcbn1cbi5iZy1ncmFkaWVudC10by1yIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10dy1ncmFkaWVudC1zdG9wcykpO1xufVxuLmJnLWdyYXktMjAwIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI5IDIzMSAyMzUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4ucm91bmRlZC1mdWxsIHtcbiAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xufVxuLmZsZXgtbm9uZSB7XG4gIGZsZXg6IG5vbmU7XG59XG4ubXItMiB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG4vKiBIMyBDT05URU5UIEFORCBQICovXG4udGV4dC1ibGFjayB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDAgMCAwIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4uZm9udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi50ZXh0LTN4bCB7XG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xufVxuLm10LTUge1xuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xufVxuLm1iLTIge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4udGV4dC1ncmF5LTgwMCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiKDMxIDQxIDU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC1iYXNlIHtcbiAgLy8gZm9udC1zaXplOiAxcmVtO1xuICAvLyBsaW5lLWhlaWdodDogMS41cmVtO1xufVxuLnRleHQtYmxhY2sge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYigwIDAgMCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLmZvbnQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4udGV4dC0zeGwge1xuICBmb250LXNpemU6IDEuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcbn1cbi5tdC01IHtcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbn1cbi5tYi0yIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLmZvbnQtc2VtaWJvbGQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm10LTQge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLm0tNSB7XG4gIG1hcmdpbjogMS4yNXJlbTtcbn1cbi5mbGV4LW5vbmUge1xuICBmbGV4OiBub25lO1xufVxuLnAtNCB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4uYmctd2hpdGUge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5yb3VuZGVkLWxnIHtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuLnJvdW5kZWQtbGcge1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG4udy1mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGV4dC1yZWQtNzAwIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2IoMTg1IDI4IDI4IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4ucHktMyB7XG4gIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcbn1cbi5weC00IHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuLmJnLXJlZC0xMDAge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTQgMjI2IDIyNiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5ib3JkZXItcmVkLTQwMCB7XG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XG4gIGJvcmRlci1jb2xvcjogcmdiKDI0OCAxMTMgMTEzIC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbn1cbi5ib3JkZXIge1xuICBib3JkZXItd2lkdGg6IDFweDtcbn1cbi5yb3VuZGVkIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cbi5yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5mb250LWJvbGQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnRleHQtYmx1ZS04MDAge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYigzMCA2NCAxNzUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi5mb250LXNlbWlib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKiBJTUFHRSBDT05URU5UICovIFxuLnJvdW5kZWQtbGcge1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG5cbi53LWZ1bGwge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYi04IHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5tdC0yIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuLm1iLTEge1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZsZXgtbm9uZSB7XG4gIGZsZXg6IG5vbmU7XG59XG4udy02IHtcbiAgd2lkdGg6IDEuNXJlbTtcbn1cbi5oLTYge1xuICBoZWlnaHQ6IDEuNXJlbTtcbn1cbi5tdC0xIHtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cbi5tbC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cbi5tZFxcOnRleHQtNnhsIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLmxnXFw6bXQtMjAge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uZHNwbHlfX2ZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY2xvc2VfX2J0biB7XG4gIG1hcmdpbi10b3A6IDhweCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5OTk7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxucy1tb2RhbCAucy1tb2RhbCB7XG4gIHRvcDogNTMlICFpbXBvcnRhbnRcbn1cblxuI3JlbGVzZU5vdGVzTW9kYWwgLnMtbW9kYWzCoHtcblx0dG9wOiA2MCUgIWltcG9ydGFudDtcbn1cblxuI3JlbGVzZU5vdGVzTW9kYWwgLnMtbW9kYWwgLnMtbW9kYWwtYm9keSAubWF0LWNhcmTCoHtcbiAgbWFyZ2luLXRvcDogMDsgXG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ubWF0LWNsb3NlLWJ1dHRvbiB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcdFx0ICAgIFxuICByaWdodDogOHB4O1x0XHQgICAgXG4gIHRvcDogOHB4O1xufVxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXBhbmVsIG1hdC1vcHRpb24ubWF0LW9wdGlvbiB7XG4gIGhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LW9wdGlvbi10ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map