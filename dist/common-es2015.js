(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "0AMc":
/*!**********************************************************!*\
  !*** ./src/app/_services/integration-actions.service.ts ***!
  \**********************************************************/
/*! exports provided: IntegrationActionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrationActionsService", function() { return IntegrationActionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class IntegrationActionsService {
    constructor() {
        this.integrationActionShow = false;
        this.integrationAssetActionShow = false;
        this.integrationActionPopup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.integrationActionEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.integrationAssetActionEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.integrationOauthEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.applicationActionEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.singleClick = false;
    }
    triggerAction() {
        if (!this.singleClick) {
            this.singleClick = true;
            this.integrationActionEvent.next({});
            setTimeout(() => { this.singleClick = false; }, 100);
        }
    }
    triggerAssetAction() {
        if (!this.singleClick) {
            this.singleClick = true;
            this.integrationAssetActionEvent.next({});
            setTimeout(() => { this.singleClick = false; }, 100);
        }
    }
    processAction() {
        if (!this.singleClick) {
            this.singleClick = true;
            this.applicationActionEvent.next({});
            setTimeout(() => { this.singleClick = false; }, 100);
        }
    }
}
IntegrationActionsService.ɵfac = function IntegrationActionsService_Factory(t) { return new (t || IntegrationActionsService)(); };
IntegrationActionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IntegrationActionsService, factory: IntegrationActionsService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map