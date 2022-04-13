import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {CommonService} from 'src/app/_services/common.services';
import {BaseRequestService} from '../../_services/base.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../_services/authentication.service';
import {MyToastrService} from '../../_services/toastr.service';
import {IntegrationActionsService} from '../../_services/integration-actions.service';

@Component({
  selector: 'app-o365-grant',
  templateUrl: './o365-grant.component.html',
  styleUrls: ['./o365-grant.component.scss']
})

export class O365GrantComponent implements OnInit {
  resources: any;
  errorMsg: any;
  code: string;

  constructor(readonly router: Router, private authService: AuthenticationService,
              private route: ActivatedRoute, private integrationActionService: IntegrationActionsService,
              public commonService: CommonService,
              public baseService: BaseRequestService,
              public toast: MyToastrService,
              readonly location: Location) {
  }

  validateMSTenant(dataparams: any): void {
    this.baseService.doRequest('/api/office365backend/dummy/validateO365Tenant',
      'post', dataparams)
      .subscribe((result: any) => {
        if (result[0]) {
          setTimeout(() => {
            window.close();
            this.baseService.o365window.close();
          }, 1000);
          this.authService.setCSP();
          this.toast.sToast('success', 'Tenant validated successfully!');
        } else {
          this.toast.sToast('info', result[1]);
        }
      });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      localStorage.setItem('oAuthC', params.code);
      if (params.code && params.session_state && params.state) {
        setTimeout(() => { window.close(); this.baseService.o365window.close(); }, 1000);
      } else if (params.error) {
        this.errorMsg = params.error;
      }
    });
  }
}
