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

  constructor(public commonService: CommonService, public baseService: BaseRequestService,
              private httpClient: HttpClient, private confirmDialog: ConfirmDialogService,
              @Inject(DOCUMENT) private document: Document, private toast: MyToastrService,
              public loaderService: LoaderService) {
  }

  

  ngOnInit(): void {
  }


  

}
