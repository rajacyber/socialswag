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
import { CarouselService } from 'src/app/_services/carousel.service';

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
  userRoles: any=[];
  constructor(
    public aS: AuthenticationService, public baseService: BaseRequestService,
    public integrationActionService: IntegrationActionsService,
    private toast: MyToastrService, public commonService: CommonService,private router: Router,
    private confirmDialog: ConfirmDialogService, public carouselService:CarouselService,
    private loaderService: LoaderService, public modalService: ModalService, public masterService: MasterService) {
    
  }

  cView = 'Dashboard';

  /*Settings Actions*/
  ngOnInit(): void {
    this.subItems = [
      {name: 'Dashboard', icon: 'PreviewLink', id: 'dashboard', isVisible: false},
      {name: 'Masterclasses', icon: 'OfficeAddinsLogo', id: 'masterclass', isVisible: false},
      {name: 'Live Learning', icon: 'TestPlan', id: 'live_learning', isVisible: false },
      {name: 'Socialswag Live', icon: 'Admin', id: 'social_live', isVisible: false },
      {name: 'Channels', icon: 'Devices3', id: 'channels', isVisible: false },
      {name: 'Coupons', icon: 'AADLogo', id: 'coupons', isVisible: false },
      {name: 'Celebrities', icon: 'Group', id: 'celebrity', isVisible: false },
      {name: 'Metadata', icon: 'GroupedList', id: 'metadata', isVisible: false },
      {name: 'Users', icon: 'Group', id: 'user', isVisible: false },
      {name: 'Audit Log', icon: 'EventInfo', id: 'audit_log', isVisible: false },
      {name: 'Carousel', icon: 'HourGlass', id: 'carousel', isVisible: false },
      {name: 'Pricing', icon: 'HourGlass', id: 'pricing', isVisible: false },
      {name: 'Settings', icon: 'Settings', id: 'setting', isVisible: false },
      {name: 'Notifications', icon: 'Settings', id: 'notifications', isVisible: false },
    ];
    if(this.aS.currentUser){
    this.aS.currentUser.roles = ['Admin']}
    if(this.aS && this.aS.currentUser && this.aS.currentUser.roles && this.aS.currentUser.roles.length>0 ){
      this.userRoles = this.aS.currentUser.roles
      this.subItems.forEach(ele =>{
        if(ele.name === 'Dashboard' && this.userRoles.length>0){
          ele.isVisible = true;
        }
        if(ele.name === 'Masterclasses' && (this.userRoles.indexOf('Master') !== -1 || this.userRoles.indexOf('contentManager') !== -1 || this.userRoles.indexOf('Admin') !== -1)){
          ele.isVisible = true;
        }
        if(ele.name === 'Live Learning' && (this.userRoles.indexOf('Master') !== -1 || this.userRoles.indexOf('Admin') !== -1 || this.userRoles.indexOf('contentManager') !== -1)){
          ele.isVisible = true;
        }
        if(ele.name === 'Socialswag Live' && (this.userRoles.indexOf('Master') !== -1 || this.userRoles.indexOf('Admin') !== -1 || this.userRoles.indexOf('contentManager') !== -1)){
          ele.isVisible = true;
        }
        if(ele.name === 'Channels' && (this.userRoles.indexOf('Master') !== -1 || this.userRoles.indexOf('Admin') !== -1 || this.userRoles.indexOf('contentManager') !== -1)){
          ele.isVisible = true;
        }
        if(ele.name === 'Coupons' && (this.userRoles.indexOf('pricingManager') !== -1 || this.userRoles.indexOf('Admin') !== -1 || this.userRoles.indexOf('contentManager') !== -1)){
          ele.isVisible = true;
        }
        if(ele.name === 'Celebrities' && (this.userRoles.indexOf('Admin') !== -1 || this.userRoles.indexOf('contentManager') !== -1)){
          ele.isVisible = true;
        }
        if(ele.name === 'Metadata' && (this.userRoles.indexOf('Admin') !== -1 || this.userRoles.indexOf('contentManager') !== -1)){
          ele.isVisible = true;
        }
        if(ele.name === 'Users' && (this.userRoles.indexOf('Admin') !== -1 || this.userRoles.indexOf('contentManager') !== -1)){
          ele.isVisible = true;
        }
        if(ele.name === 'Audit Log' && (this.userRoles.indexOf('Admin') !== -1 || this.userRoles.indexOf('contentManager') !== -1)){
          ele.isVisible = true;
        }
        if(ele.name === 'Carousel' && (this.userRoles.indexOf('Admin') !== -1 || this.userRoles.indexOf('contentManager') !== -1)){
          ele.isVisible = true;
        }
        if(ele.name === 'Pricing' && (this.userRoles.indexOf('pricingManager') !== -1 || this.userRoles.indexOf('Admin') !== -1 || this.userRoles.indexOf('contentManager') !== -1)){
          ele.isVisible = true;
        }
        if(ele.name === 'Settings' && (this.userRoles.indexOf('Admin') !== -1 || this.userRoles.indexOf('contentManager') !== -1)){
          ele.isVisible = true;
        }
        if(ele.name === 'Notifications' && (this.userRoles.indexOf('Admin') !== -1 || this.userRoles.indexOf('marketingManager') !== -1 || this.userRoles.indexOf('contentManager') !== -1)){
          ele.isVisible = true;
        }

      })
    }
  }
  
  setCurrentView(item: SubItem): void {
    this.cView = item.name;
  }
}
