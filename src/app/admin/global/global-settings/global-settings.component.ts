import {DOCUMENT} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Component, Inject, OnInit} from '@angular/core';
import {BaseRequestService} from 'src/app/_services/base.service';
import {CommonService} from 'src/app/_services/common.services';
import {LoaderService} from 'src/app/_services/loader.service';
import {ConfirmDialogService} from 'src/app/_services/confirmdialog.service';
import {MyToastrService} from '../../../_services/toastr.service';

@Component({
  selector: 'app-global-settings',
  templateUrl: './global-settings.component.html',
  styleUrls: ['./global-settings.component.scss']
})
export class GlobalSettingsComponent implements OnInit {
  panelOpenState = false;

  justLaunchDays = 90;
  miniAnnouncement = false;

  constructor(public commonService: CommonService, public baseService: BaseRequestService,
    private httpClient: HttpClient, private confirmDialog: ConfirmDialogService,
    @Inject(DOCUMENT) private document: Document, private toast: MyToastrService,
    public loaderService: LoaderService) {
  }

  

  ngOnInit(): void {
    this.getPreference();
  }

  updatePreference(): void {
    this.loaderService.display(true);
    const data: any = {data: [{name: 'justLaunchDays', value: this.justLaunchDays}, {name: 'miniAnnouncement', value: this.miniAnnouncement}]};
    this.baseService.doRequest(`/api/utilities/updateGlobalSettings`, 'post',data).subscribe((result: any) => {
      if(result) {
        this.toast.sToast('success', 'Setting updated successfully!.');
      } else {
        this.toast.sToast('error', 'Error!.');
      }
      this.loaderService.display(false);
    });
  }
  
  getPreference(): void {
    this.loaderService.display(true,'Getting global settings data');
    this.baseService.doRequest(`/api/utilities/getGlobalSettings`, 'post',{}).subscribe((result: any) => {
      console.log(result);
      if(result) {
        this.toast.sToast('success', 'Setting updated successfully!.');
      } else {
        this.toast.sToast('error', 'Error!.');
      }
      this.loaderService.display(false);
    });
  }

}
