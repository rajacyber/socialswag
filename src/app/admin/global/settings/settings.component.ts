import { Component, OnInit } from '@angular/core';
import {MyToastrService} from '../../../_services/toastr.service';
import {CommonService} from '../../../_services/common.services';
import {ConfirmDialogService} from '../../../_services/confirmdialog.service';
import {LoaderService} from '../../../_services/loader.service';
import {ModalService} from '../../../_services/modal.service';
import {IntegrationActionsService} from '../../../_services/integration-actions.service';
import {AuthenticationService} from '../../../_services/authentication.service';
import {NavigationEnd, NavigationError, Router} from '@angular/router';
import {BaseRequestService} from 'src/app/_services/base.service';
import { MasterService } from 'src/app/_services/master.service';

export interface SubItem {
  name: string;
  icon: string;
  id?: string;
  category?: boolean;
  isVisible: boolean;
  total?: string;
  route?: string;
  children?: object;
  categoryName?: string;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  subItems: SubItem[] = [];
  showMenu = true;
  timeout = false;
  loginAuditMenushow: any;
  globalDash = {_id: 'dummy', name: 'Global'};
  constructor(
    public aS: AuthenticationService, public baseService: BaseRequestService,
    public integrationActionService: IntegrationActionsService,
    private toast: MyToastrService, public commonService: CommonService,private router: Router,
    private confirmDialog: ConfirmDialogService,
    private loaderService: LoaderService, public modalService: ModalService, public masterService: MasterService) {
    
  }

  cView = 'Dashboard';

  /*Settings Actions*/
  ngOnInit(): void {
    this.subItems = [
      {name: 'Dashboard', icon: 'PreviewLink', id: 'dashboard', isVisible: true},
      {name: 'Masterclasses', icon: 'OfficeAddinsLogo', id: 'masterclass', isVisible: true},
      {name: 'Live Learning', icon: 'TestPlan', id: 'live_learning', isVisible: true },
      {name: 'Socialswag Live', icon: 'Admin', id: 'social_live', isVisible: true },
      {name: 'Channels', icon: 'Devices3', id: 'channels', isVisible: true },
      {name: 'Celebrities', icon: 'Group', id: 'users', isVisible: true },
      {name: 'Metadata', icon: 'GroupedList', id: 'metadata', isVisible: true },
    ];
  }
  
  setCurrentView(item: SubItem): void {
    this.cView = item.name;
  }
}
