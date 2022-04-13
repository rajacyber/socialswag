import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {BaseRequestService} from '../../_services/base.service';
import {MyToastrService} from '../../_services/toastr.service';
import {LoaderService} from '../../_services/loader.service';
import {CommonService} from '../../_services/common.services';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {
  subscribedKeys: any = {};
  isConfigured = false;
  currentCompany: any = {};
  Objectkeys = Object.keys;
  constructor(private baseService: BaseRequestService, private toast: MyToastrService,
    private commonService: CommonService, private authService: AuthenticationService,
    private companyService: null, private loaderService: LoaderService) {
  }

  dashList: any = [];
  dashUrl: any;
  getDash = false;
  currentDashboard: any;
  retry = 0;
  ngOnInit(): void {
    this.logDash();
  }

  logDash(): void {
    if (this.getDash) { return; }
    this.getDash = true;
    this.loaderService.display(true, 'Getting dashboard auth settings...');
    this.baseService.doRequest(`/api/company/${this.currentCompany._id}/getDashboardLoginData`,
      'post', {}).subscribe((ret: any) => {
      if (ret.status === 'Configured') {
        setTimeout(() => {
          this.isConfigured = true;
          this.loaderService.display(false);
          this.getDash = false; this.setIframe();
        }, 5000);
      }else{
        this.retry++;
        if (this.retry < 3) {
          setTimeout(() => this.logDash(), 5000); return;
        } else {
          setTimeout(() => {
            this.toast.sToast('error', 'Unable to authenticate dashboard. Please contact support.');
            this.retry = 0; return;
          }, 5000);
        }
      }
    });
  }

  setIframe(): void {
    this.dashList = [];
    this.loaderService.display(true, `Getting ${this.currentCompany.name} dashboards...`);
    // this.companyService.companycompanyDashboardsApiCompanyIdCompanyDashboardsPost(
    //   {id: this.currentCompany._id, body: {companyid: '' }}).subscribe((value: any) => {
    //   this.loaderService.display(false);
    //   if (value[0]) {
    //     value[1].sort((a: any, b: any) => {
    //       const c = a.name;
    //       const d = b.name;
    //       if (c < d) {
    //         return -1;
    //       } else if (c > d) {
    //         return 1;
    //       } else {
    //         return 0;
    //       }
    //     });
    //     value[1].forEach((obj: any) => {
    //       obj.url = obj.url.replace(new RegExp('\'\'', 'gi'), '\'');
    //     });
    //     const overview = value[1].filter((x: any) => x.name === 'Overview');
    //     this.dashList = value[1];
    //     this.dashUrl = (overview[0] && overview[0].url) ? overview[0].url : this.dashList[0].url;
    //     this.currentDashboard = (overview[0] && overview[0].name) ? overview[0].name : this.dashList[0].name;
    //   } else {
    //     this.toast.sToast('error', value[1]);
    //   }
    // });
  }

  updateDash($event: any): void {
    this.dashList.forEach((obj: any) => {
      if (obj.url === $event) {
        this.currentDashboard = obj.name;
      }
    });
  }
  ngOnDestroy(): void {
    this.Objectkeys(this.subscribedKeys).forEach((obj: string) => {
      this.subscribedKeys[obj].unsubscribe();
    });
  }
}
