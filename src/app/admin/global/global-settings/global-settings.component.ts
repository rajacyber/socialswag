import {DOCUMENT} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Component, Inject, OnInit} from '@angular/core';
// import { UserIdleService } from 'angular-user-idle/lib/angular-user-idle.service';
import {AuthenticationService} from 'src/app/_services/authentication.service';
import {BaseRequestService} from 'src/app/_services/base.service';
import {CommonService} from 'src/app/_services/common.services';
import {LoaderService} from 'src/app/_services/loader.service';
import {ConfirmDialogService} from 'src/app/_services/confirmdialog.service';
import {UserIdleService} from 'angular-user-idle';
import {MyToastrService} from '../../../_services/toastr.service';
import { CompanySharedService } from 'src/app/_services/company-shared.service';

@Component({
  selector: 'app-global-settings',
  templateUrl: './global-settings.component.html',
  styleUrls: ['./global-settings.component.scss']
})
export class GlobalSettingsComponent implements OnInit {
  global: any = {};
  panelOpenState = false;
  sessionData: any = {idle: 30, timeout: 1, ping: 450};
  // tslint:disable-next-line:variable-name
  table_ID: any;
  whiteLabel: any = {};
  images: any = {};
  logos: any = {};
  Objectkeys = Object.keys;
  // tslint:disable-next-line:variable-name
  cybercns_logo: any;
  // tslint:disable-next-line:variable-name
  cybercns_login_logo: any;
  // tslint:disable-next-line:variable-name
  cybercns_only_logo: any;
  complianceElements: any;
  currentCompliance: any = {};
  loginAuditStatus: any = false;
  patchingStatus = false; isEulaAccepted = false;
  loginAuditBtnDisable: any = false;

  constructor(public commonService: CommonService, public authService: AuthenticationService, public baseService: BaseRequestService,
              private httpClient: HttpClient, private confirmDialog: ConfirmDialogService,
              public aS: AuthenticationService, private cs: CompanySharedService,
              @Inject(DOCUMENT) private document: Document, private toast: MyToastrService,
              private userIdle: UserIdleService, public loaderService: LoaderService) {
    this.whiteLabel.productName = 'CyberCNS';
    this.whiteLabel.eulaLink = 'https://www.cybercns.com/terms';
    this.whiteLabel.eulaText = 'Terms of Use\n';
  }

  uploadFile(event: any, key: string): void {
    if (event.target.files.length > 0) {
      this.images[key] = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (ev) => {
        // @ts-ignore
        this[key] = reader.result;
      };
    }
  }

  ngOnInit(): void {
    this.commonService.getTimeZone();
    this.getWhiteLabelSettings();
    this.getCurrentTZ();
    this.getSessionSettings();
    this.getLoginAuditStatus();
    this.getPatchingStatus();
    // this.getComplianceSettingsTemplate();
  }

  getLoginAuditStatus(): void {
    this.baseService.doRequest(`/api/kusers/getLoginAuditStatus`, 'get')
      .subscribe((result: any) => {
        if (result[0]) {
          this.loginAuditStatus = result[0];
          this.loginAuditBtnDisable = result[0];
        }
      }
    );
  }
  enableLoginAuditStatus(): void {
    this.baseService.doRequest(`/api/kusers/enableLoginAudit`, 'get')
      .subscribe((result: any) => {
        this.loaderService.display(false);
        if (result[0]) {
        this.loginAuditStatus = result[0];
        this.loginAuditBtnDisable = result[0];
        this.cs.updateMenu.next({value: result[0]});
        this.toast.sToast('success', 'Login audit enabled successfully');
        }
      }
    );
  }

  auditStatus(event: any): void {
    this.loginAuditStatus = event.checked;
  }

  enablePatchingStatus(): void {
    this.loaderService.display(true, 'Updating patching status');
    this.baseService.doRequest(`/api/cyberpatching/updatePatchingStatus`, 'post',
      { patchingStatus: this.patchingStatus, isEulaAccepted: this.isEulaAccepted})
      .subscribe((result: any) => {
        this.loaderService.display(false);
        if (result[0]) {
          // this.cs.updatePatching.next({value: result[0]});
          this.toast.sToast('success', result[1]);
        } else {
          this.toast.sToast('error', result[1]);
        }
      }
    );
  }

  getPatchingStatus(): void {
    this.patchingStatus = false;
    this.isEulaAccepted = false;
    this.loaderService.display(true, 'Getting patching status');
    this.baseService.doRequest(`/api/cyberpatching/getPatchingStatus`, 'post', {})
      .subscribe((result: any) => {
        this.loaderService.display(false);
        if (result) {
          this.patchingStatus = result.patchingStatus;
          this.isEulaAccepted = result.isEulaAccepted;
        } else {
          this.toast.sToast('error', result[1]);
        }
      }
    );
  }

  patchStatus(event: any): void {
    this.patchingStatus = event.checked;
  }

  patchingEulaStatus(event: any): void {
    this.isEulaAccepted = event.checked;
  }

  /* WhiteLable Code */
  getWhiteLabelSettings(): void {
    this.loaderService.display(true);
    this.baseService.doRequest('/api/integrations/getlogocustomsettings',
      'get').subscribe((res: any) => {
      this.loaderService.display(false);
      if (res) {
        if (res.productName) {
          this.whiteLabel = res;
        }
      }
    });
  }

  eulaTextUpload(): void {
    const titleName = 'Confirmation';
    const message = 'This action requires a page refresh. Are you sure you would like to update the Name and EULA information ?';
    const cancelText = 'No';
    const acceptText = 'Yes';
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText);
    this.confirmDialog.dialogResult.subscribe(res => {
      if (res) {
        this.loaderService.display(true, 'Updating Name, Eula information...');
        this.baseService.doRequest(`/api/integrations/addlogocustomsettings`, 'post', this.whiteLabel)
          .subscribe((result: any) => {
            this.loaderService.display(false);
            this.toast.sToast('success', 'Name and EULA updated successfully');
            window.location.reload();
          });
      }
    });
  }

  whiteLabelUpload(): void {
    const titleName = 'Confirmation';
    const message = 'This action requires a page refresh. Are you sure you would like to update the logos ?';
    const cancelText = 'No';
    const acceptText = 'Yes';
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText);
    this.confirmDialog.dialogResult.subscribe(res => {
      if (res) {
        const formData = new FormData();
        this.Objectkeys(this.images).forEach(obj => {
          formData.append(obj, this.images[obj]);
        });
        this.loaderService.display(true, 'Uploading logo...');
        this.httpClient.post<any>('/api/integrations/uploadLogo',
          formData).subscribe(result => {
          this.loaderService.display(false);
          if (result) {
            this.toast.sToast('success', result);
            // @ts-ignore
            // this._document.defaultView.location.reload();
            this.getWhiteLabelSettings();
          } else {
            this.toast.sToast('error', result);
          }
        });
      }
    });
  }

  resetWhiteLabel(): void {
    const titleName = 'Confirmation';
    const message = 'This action requires a page refresh. Are you sure you would like to reset logos and EULA information to default ?';
    const cancelText = 'No';
    const acceptText = 'Yes';
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText);
    this.confirmDialog.dialogResult.subscribe(res => {
      if (res) {
        this.loaderService.display(true);
        this.baseService.doRequest('/api/cyberlabelling/dummy/resetCustomSettings', 'post',  {})
          .subscribe((result: any) => {
            this.loaderService.display(false);
            if (result) {
              console.log(result);
              this.toast.sToast('success', result);
              // this._document.defaultView.location.reload();
              this.getWhiteLabelSettings();
            } else {
              this.toast.sToast('error', result);
            }
          });
      }
    });
  }
  /* White Label Code End*/

  /*Logo Update Code Start*/
  uploadLogoFile(event: any, key: any): void {
    if (event.target.files.length > 0) {
      this.logos[key] = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (ev) => {
        // @ts-ignore
        this[key] = reader.result;
      };
    }
  }

  logoUpload(): void {
    const titleName = 'Confirmation';
    const message = 'This action requires a page refresh. Are you sure you would like to update the logos ?';
    const cancelText = 'No';
    const acceptText = 'Yes';
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText);
    this.confirmDialog.dialogResult.subscribe(res => {
      if (res) {
        let formLData: FormData;
        formLData = new FormData();
        this.Objectkeys(this.logos).forEach(obj => {
          formLData.append(obj, this.logos[obj]);
        });
        this.loaderService.display(true);
        this.httpClient.post<any>('/api/integrations/uploadLogo',
          formLData).subscribe(result => {
          this.loaderService.display(false);
          if (result) {
            this.toast.sToast('success', result);
            // this._document.defaultView.location.reload();
          } else {
            this.toast.sToast('error', result);
          }
        });
      }
    });
  }

  resetLogo(): void {
    const titleName = 'Confirmation';
    const message = 'This action requires a page refresh. Are you sure you would like to reset logos to default ?';
    const cancelText = 'No';
    const acceptText = 'Yes';
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText);
    this.confirmDialog.dialogResult.subscribe(res => {
      if (res) {
        this.loaderService.display(true);
        this.baseService.doRequest('/api/integrations/resetLogo', 'post')
          .subscribe((result: any) => {
            this.loaderService.display(false);
            if (result) {
              console.log(result);
              this.toast.sToast('success', result);
              // this._document.defaultView.location.reload();
            } else {
              this.toast.sToast('error', result);
            }
          });
      }
    });
  }

  /*Logo Update Code End*/

  /* Session Data  */
  getSessionSettings(): void {
    this.loaderService.display(true, 'Getting session data...');
    this.baseService.doRequest('/api/cyberutils/imaws/getSessionTimeoutSettings',
      'post', {}).subscribe((res: any) => {
        this.loaderService.display(false);
        if (res) {
          this.sessionData.idle = res.idle / 60;
          this.sessionData.timeout = res.timeout / 60;
        }
    });
  }

  setSessionTimeout(): void {
    this.sessionData.timeout = (!this.sessionData.timeout) ? 1 : this.sessionData.timeout;
    const tmpSessionData = {idle: this.sessionData.idle * 60, timeout: this.sessionData.timeout * 60, ping: 1800};
    this.authService.setSession(tmpSessionData);
    this.baseService.doRequest(`/api/cyberutils/imaws/updateSessionTimeoutSettings`,
      'post', tmpSessionData).subscribe((result: any) => {
      if (result) {
        this.toast.sToast('success', 'Settings updated');
      } else {
        this.toast.sToast('error', result);
      }
    });
  }
  /* Session Data  End*/

  /*Compliance Settings Start*/
  getGlobalComplianceRecord(): void {
    this.loaderService.display(true);
    let params;
    params = {query: {bool: {must: [{match: {'species.keyword': 'complianceprofile'}}, {match: {isGlobal: true}}]}}};
    this.baseService.doRequest(`/api/compliance_settings/`, 'get', null, {
      skip: 0, limit: 1, query: params, orderBy: [{updated: {order: 'desc'}}]
    }).subscribe((result: any) => {
      this.loaderService.display(false);
      if (result) {
        this.currentCompliance = (result.data[0]) ? result.data[0] : this.currentCompliance;
      } else {
        this.toast.sToast('error', result);
      }
    });
  }

  getComplianceSettingsTemplate(): void {
    this.loaderService.display(true);
    this.baseService.doRequest(`/api/compliance_settings/dummy/getComplianceSettings`,
      'post').subscribe((result: any) => {
      this.loaderService.display(false);
      if (result) {
        this.complianceElements = result;
        this.complianceElements.forEach((obj: any) => {
          if (!this.currentCompliance[obj.key]) {
            this.currentCompliance[obj.key] = obj.defaultvalue;
          }
          this.currentCompliance.isGlobal = true;
        });
        this.getGlobalComplianceRecord();
      } else {
        this.toast.sToast('error', result);
      }
    });
  }

  saveComplianceSettings(event: any): void {
    this.loaderService.display(true);
    const url = `/api/compliance_settings`;
    const method = (this.currentCompliance && this.currentCompliance._id) ? 'put' : 'post';
    this.complianceElements.forEach((obj: any) => {
      if (obj.type === 'number') {
        this.currentCompliance[obj.key] = +this.currentCompliance[obj.key];
      }
    });
    this.baseService.doRequest(url, method, this.currentCompliance).subscribe((result: any) => {
      this.loaderService.display(false);
      if (result) {
        this.getGlobalComplianceRecord();
        this.toast.sToast('success', 'Updated successfully');
      } else {
        this.toast.sToast('error', result);
      }
    });
  }
  /*Compliance Settings End*/

  /* Timezone */
  getCurrentTZ(): void {
    this.loaderService.display(true);
    this.baseService.doRequest(`/api/cyberutils/dummy/getSchedulerTimeZone`, 'post', {})
    .subscribe((result: any) => {
      this.loaderService.display(false);
      if (result) {
        this.global.timeZone = result;
      }
    });
  }

  setTZ(): void {
    this.loaderService.display(true);
    this.baseService.doRequest(`/api/cyberutils/dummy/updateSchedulerTimeZone`, 'post',
      {timezone: this.global.timeZone})
    .subscribe((result: any) => {
      this.loaderService.display(false);
      if (result) {
        this.toast.sToast('success', result);
      } else {
        this.toast.sToast('error', result);
      }
    });
  }

  /* Timezone Ends */
}
