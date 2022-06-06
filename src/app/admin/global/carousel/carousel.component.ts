import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseRequestService} from '../../../_services/base.service';
import {CommonService} from '../../../_services/common.services';
import {ModalService} from '../../../_services/modal.service';
import {Router} from '@angular/router';
import {LoaderService} from '../../../_services/loader.service';
import {FormControl, NgForm} from '@angular/forms';
import {ConfirmDialogService} from '../../../_services/confirmdialog.service';
import {MyToastrService} from '../../../_services/toastr.service';
import {MatSidenav} from '@angular/material/sidenav';
import {AuthenticationService} from '../../../_services/authentication.service';
import {HttpClient} from '@angular/common/http';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @ViewChild('snav', {static: true}) snav: MatSidenav;
  @ViewChild('upload', {static: true}) upload: MatSidenav;

  public dataCtrl: FormControl = new FormControl();
  public dataFilterCtrl: FormControl = new FormControl();
  public filteredData: ReplaySubject<any> = new ReplaySubject<any>(1);
  protected dataList: any = [];
  protected _onDestroy = new Subject<void>();
  public searching = false;
  
  allDataList: any = [];
  carouselTableOptions: any;
  carousel: any;
  companyLevelAccess = 'allCompanies';
  carouselData: any;
  carousel_image: any = '';
  apiData: any;
  filterQuery: any;
  colFilterQuery: any;
  colFilterCols: any = [];
  pageTotal = 0;
  acl: any = {companies: 'allowed'};
  addUsr = false;
  editUsr = false;
  updPass = false;
  isSelected = false;
  searchString: string;
  companyList: any;
  pageSize = 10;
  currentPage = 0;
  roles: any = [];
  selectedComp: any = [];
  roleHash: any = {};
  carouselTitle = '';
  aclid: any;
  carouselid: any;
  allcarouselsList: any = [];
  isLocalConfig = true;
  loginAuth: any;
  selectedRole: any = '';
  rolesList: any = ['admin', 'itAdmin', 'readOnly'];
  dropdownSettings: any;
  apiClient: any = {};
  apiMFA: any = {};

  countryList: any = [];
  languagesList: any = [];
  fromMaxDate = new Date();
  image_uploads: any;
  preview_image: any;
  images: any = {};
  carousel_id: any;
  Objectkeys = Object.keys;
  carouselSize: any;
  dataType: any;
  levelList: any;


  constructor(public baseService: BaseRequestService, private httpClient: HttpClient, 
              public loaderService: LoaderService, private aS: AuthenticationService,
              public modalService: ModalService, public toast: MyToastrService,
              private readonly router: Router, public confirmDialog: ConfirmDialogService,
              public cs: CommonService) {
    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
      position: 'top'
    };
    this.carouselTableOptions = {
      columns: [
        {
          header: 'Name',
          col: 'name',
          columnDef: 'name',
          filter: '',
          cell: '(element: any) => `${element.name}`',
          order: 0,
          visible: true,
          isToolTip: false,
          isToolTipCol: '',
          hasMultiData: false,
          class: '',
          color: '',
          isProgressCntrl: false,
          isColoredCntrl: false,
          colList: [],
          isfaicon: false,
          isAddingText: false,
          addingText: '',
          img: false,
          imgPath: '',
          iscolumnSearch: true
        }, {
          header: 'Email',
          col: 'email',
          columnDef: 'email',
          filter: '',
          cell: '(element: any) => `${element.email}`',
          order: 2,
          visible: true,
          isToolTip: false,
          isToolTipCol: '',
          hasMultiData: false,
          class: '',
          color: '',
          isProgressCntrl: false,
          isColoredCntrl: false,
          colList: [],
          isfaicon: false,
          isAddingText: false,
          addingText: '',
          img: false,
          imgPath: ''
        }, {
          header: 'Phone Number',
          col: 'phone',
          columnDef: 'phone',
          filter: '',
          cell: '(element: any) => `${element.phone}`',
          order: 3,
          visible: true,
          isToolTip: false,
          isToolTipCol: '',
          hasMultiData: false,
          class: '',
          color: '',
          isProgressCntrl: false,
          isColoredCntrl: false,
          colList: [],
          isSort: false,
          isfaicon: false,
          isAddingText: false,
          addingText: '',
          img: false,
          imgPath: '',
          iscolumnSearch: true
        }, {
          header: 'Languages',
          col: 'languages',
          columnDef: 'languages',
          filter: '',
          cell: '(element: any) => `${element.languages}`',
          order: 2,
          visible: true,
          isToolTip: false,
          isToolTipCol: '',
          hasMultiData: false,
          class: '',
          color: '',
          isProgressCntrl: false,
          isColoredCntrl: false,
          colList: [],
          isfaicon: false,
          isAddingText: false,
          addingText: '',
          img: false,
          imgPath: ''
        }, {
          header: 'Country',
          col: 'country.name',
          columnDef: 'country.name',
          filter: '',
          cell: '(element: any) => `${element.country.name}`',
          order: 2,
          visible: true,
          isToolTip: false,
          isToolTipCol: '',
          hasMultiData: false,
          class: '',
          color: '',
          isProgressCntrl: false,
          isColoredCntrl: false,
          colList: [],
          isfaicon: false,
          isAddingText: false,
          addingText: '',
          img: false,
          imgPath: '',
          iscolumnSearch: true
        }],
      sortOptions: {active: 'name', direction: 'asc'},
      faClass: 'Celebritycarousel',
      _pageData: [],
      tableOptions: {
        id: 'carousels',
        title: 'Celebrities',
        isServerSide: true, 
        // add: (this.aS.hasPermission('kcarousels', 'create')),
        selectText: 'carousel(s)',
        loading: true,
        floatingFilter: true,
        rowSelection: false,
        showAction: true,
        actionMenuItems: [{
          text: 'Upload Images',
          icon: 'cloud_upload',
          callback: 'uploadFn',
          isGlobal: true
        }],
        pagination: true,
        pageOptions: [5, 10, 25, 100],
        pageSize: 10,
        search: true,
        add: true,
        showhideList: true,
        refreshData: true,
        exportExcel: true,
        saveData: false,
        hideDownload: true
      }
    };
    // if (this.aS.hasPermission('kcarousels', 'update')) {
    //   this.carouselTableOptions.tableOptions.actionMenuItems.unshift({
    //     text: 'Edit',
    //     icon: 'edit',
    //     callback: 'editFn',
    //     isGlobal: false
    //   });
    // }
    // if (this.aS.hasPermission('kcarousels', 'delete')) {
    //   this.carouselTableOptions.tableOptions.actionMenuItems.push({
    //     text: 'Delete',
    //     icon: 'delete',
    //     callback: 'deleteFn',
    //     isGlobal: true
    //   });
    // }
    // if (this.aS.hasPermission('kapiclients', 'create')) {
    //   this.carouselTableOptions.tableOptions.actionMenuItems.push({
    //     text: 'API Key',
    //     icon: 'vpn_key',
    //     callback: 'deleteFn',
    //     isGlobal: false
    //   });
    // }
    // if (this.aS.hasPermission('kcarousels', 'create')) {
    //   this.carouselTableOptions.tableOptions.actionMenuItems.push({
    //     text: 'MFA',
    //     icon: 'fingerprint',
    //     callback: 'deleteFn',
    //     isGlobal: false
    //   });
    // }
    // if (this.aS.hasPermission('kcarousels', 'delete')) {
    //   this.carouselTableOptions.tableOptions.actionMenuItems.push({
    //     text: 'Reset MFA',
    //     icon: 'restore',
    //     callback: 'deleteFn',
    //     isGlobal: true
    //   });
    // }
  }



  ngOnInit(): void {
    this.carouselTableOptions.pageData = [];
    setTimeout(() => {
      this.getcarousels();
    }, 1000);
    this.dataFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterUsers();
    });
    this.getLanguageAndCountry();
  }


  private filterUsers(): void {
    if (!this.dataList) {
      return;
    }
    // get the search keyword
    let search = this.dataFilterCtrl.value;
    if (!search) {
      this.filteredData.next(this.dataList.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.getDataList(search);
  }

  closeCurrentData(event: any): void {
    if (this.allDataList) {
      this.filteredData.next(this.allDataList.slice());
    }
    if (!event) {
      this.getDataList();
    }
  }

  getDataList(search?: any): void {
    let cq: any;
    cq =  {
      query: {
        bool: {
           must: [{match: {'data_type.keyword': 'MasterClass'}}]
        }
      }
    };
    if (search && search !== '') {
      cq.query.bool.must.push({ match_bool_prefix: { name: search.toLowerCase() } });
    }
    let sort: any;
    sort = [{}];
    const q = JSON.stringify(cq);
    const skip = 0;
    const limit = 100;
    this.baseService.doRequest(`/api/contentdata`, 'get', null,{q, skip, limit}).subscribe((result: any) => {
      this.loaderService.display(false);
      if (result.data.length) {
        this.allDataList = result.data
        this.filteredData.next(result.data.slice());
      } else {
        this.filteredData.next([]);
      }
      
    });
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

  imagesUpload(): void {
    const titleName = 'Confirmation';
    const message = 'This action requires a page refresh. Are you sure you would like to update the images ?';
    const cancelText = 'No';
    const acceptText = 'Yes';
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText);
    this.confirmDialog.dialogResult.subscribe(res => {
      if (res) {
        const formData = new FormData();
        this.Objectkeys(this.images).forEach(obj => {
          formData.append(obj, this.images[obj]);
        });
        formData.append('carousel_id',this.carousel_id);
        this.loaderService.display(true, 'Uploading images...');
        this.httpClient.post<any>('/api/entity/updatePreviewImages',
          formData).subscribe(result => {
          this.loaderService.display(false);
          if (result[0]) {
            this.toast.sToast('success', result[1]);
            // @ts-ignore
            // this._document.defaultView.location.reload();
            this.thumbnail_image = '';
            this.preview_image = '';
            this.images = {};
            this.upload.close();
          } else {
            this.toast.sToast('error', result[1]);
          }
        });
      }
    });
  }

  resetImagesUpload(): void {
    this.images = {};
  }
  onSelectAll(event: any): void {
    console.log(event);
    if (event.checked) {
      this.selectedComp.push('*');
      console.log(this.selectedComp);
    } else {
      this.selectedComp.splice(0, 1);
      console.log(this.selectedComp);
    }
  }

  async getLanguageAndCountry(): Promise<any> {
    const defaultData = await this.baseService.doRequest(`/api/utilities/getContent`, 'post', {}).toPromise();
    this.carouselSize = defaultData.carousel_size;
    this.dataType = defaultData.data_type;
    await this.getLevel();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  getCompany(): void {
    let cq;
    cq = {query: {bool: {must: [{exists: {field: 'description'}}], must_not: [{exists: {field: 'companyRef'}}]}}};
    const q = JSON.stringify(cq);
    const skip = 0;
    const limit = 10000;
    const sort = JSON.stringify([{'name.keyword': {order: 'asc'}}]);
    const fields = JSON.stringify(['name']);
    this.baseService.doRequest(`/api/company/`, 'get', null,
      {q, skip, limit, sort, fields}).subscribe((result: any) => {
      if (result) {
        this.companyList = result.data;
        this.companyList.forEach(
          (obj: any) => {
            obj.selected = false;
          }
        );
        if (this.carouselData.id) {
          this.updateAcl(this.carouselData);
        }
      }
    });
  }

  getAcl(): void {
    this.selectedComp = [];
    this.getCompany();
    this.modalService.open('Aclmodal');
  }

  onCompanySelection(event: any, val: any): void {
    console.log(event);
    if (event.checked) {
      this.selectedComp.push(val._id);
      console.log(this.selectedComp);
    } else {
      const index = this.selectedComp.indexOf(val._id, 0);
      this.selectedComp.splice(index, 1);
      console.log(this.selectedComp);
    }
  }

  showHideLoading(status: any): void {
    const data = Object.assign({}, this.carouselTableOptions);
    this.carouselTableOptions = {};
    this.carouselTableOptions = data;
    this.carouselTableOptions.tableOptions.loading = status;
  }

  sortCall(event: any): void {
    this.carouselTableOptions.sortOptions = event;
    this.getcarousels();
  }

  checkAll(ev: any): void {
    this.companyList.forEach((x: any) => x.selected = ev.target.checked);
    this.selectedComp = [];
  }

  isAllChecked(): void {
    this.selectedComp = '*';
    return this.companyList.every((_: any) => _.selected);
  }

  actionCall(data: any): void {
    if (data.action.text === 'Upload Images') {
      this.carousel_id = data.row._id;
      this.upload.open();
    }
  }
  
  deleteAPIkey(): void {
    const titleName = 'Confirmation';
    const message = 'Are you sure you want to delete this API key?';
    const cancelText = 'No';
    const acceptText = 'Yes';
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText);
    this.confirmDialog.dialogResult.subscribe((res: any) => {
      if (res) {
        this.loaderService.Modeldisplay(true, 'Deleting api key');
        this.baseService.doRequest(
          `/api/kapiclients/${this.apiClient.clientid}`, 'delete').subscribe((result: any) => {
          this.loaderService.Modeldisplay(false);
          if (result) {
            this.toast.sToast('success', 'Deleted');
            this.modalService.close('apiKey');
          } else {
            this.toast.sToast('error', result.msg);
          }
        });
      }
    });
  }

  deleteMFA(mfa: any): void {
    const titleName = 'Confirmation';
    const message = 'Are you sure you want to delete ' + mfa.carouselLabel + ' MFA ?';
    const cancelText = 'No';
    const acceptText = 'Yes';
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText);
    this.confirmDialog.dialogResult.subscribe((res: any) => {
      if (res) {
        this.loaderService.Modeldisplay(true, 'Deleting MFA...');
        this.baseService.doRequest(
          `/api/kcarousels/${this.carouselid.id}/authentications/${mfa.id}`, 'delete').subscribe((result: any) => {
          this.loaderService.Modeldisplay(false);
          if (result[0]) {
            this.toast.sToast('success', result[1]);
          } else {
            this.toast.sToast('error', result[1]);
          }
        });
      }
    });
  }


  getLevel(): void {
    let cq;
    cq = {query: {bool: {must: [{match: {"headline.keyword": 'level'}}]}}};
    const q = JSON.stringify(cq);
    const skip = 0;
    const limit = 10000;
    const sort = JSON.stringify([{'level.keyword': {order: 'asc'}}]);
    const fields = JSON.stringify(['name']);
    this.baseService.doRequest(`/api/carousel`, 'get', null,
      {q, skip, limit, sort,}).subscribe((result: any) => {
      if (result.data.length) {
        this.levelList = result.data;
        
      }
    });
  }

  copyAPI(): void {
    navigator.clipboard.writeText(this.carousel.apiKey);
    this.toast.sToast('success', 'Copied');
  }

  updateCountry($event: any): void {
    console.log($event);
    
  }

  addCarousel(): void {
    this.carouselData = {levels: '', carousel_descs: '', positions: '', data_types: '', carousel_sizes: '', navigate_links: '', content_id: ''};
    this.snav.open();
    this.getDataList();
  }

  backFunUpload(): void {
    this.upload.close();
    this.images = {};
  }

  backFun(): void {
    this.snav.close();
    this.carouselData = {};
    this.getcarousels();
  }

  editbackFun(): void {
    this.editUsr = !this.editUsr;
    this.companyList.forEach((obj: any) => {
      obj.selected = false;
    });
    this.selectedComp = [];
    this.getcarousels();
  }

  uptpassbackFun(): void {
    this.updPass = !this.updPass;
    this.getcarousels();
  }

  editcarousel(id: string, element: any): any {
    // setTimeout(() => { this.getRoles(); }, 5000);
    this.carouselTitle = 'Edit';
    this.carousel = element.row;
    this.carouselData = element.row;
    this.carouselData.roleid = (element.row.roles.realmMappings[0]) ? element.row.roles.realmMappings[0].id : '';
    this.snav.open();
    this.selectedRole = this.carouselData.role;
    if (this.carouselData.attributes && ((this.carouselData.attributes.includes && this.carouselData.attributes.includes[0]
      && this.carouselData.attributes.includes[0].length) || (this.carouselData.attributes.excludes
      && this.carouselData.attributes.excludes[0] && this.carouselData.attributes.excludes[0].length))) {
      this.companyLevelAccess = 'specificCompanies';
    } else {
      this.companyLevelAccess = (this.selectedRole !== 'admin') ?  'specificCompanies' : 'allCompanies';
    }
  }

  updateAcl(carousel: any): void {
    if (carousel.attributes.includes && carousel.attributes.includes.length && carousel.attributes.includes[0] !== '') {
      this.acl.companies = 'allowed';
    } else if (carousel.attributes.excludes && carousel.attributes.excludes && carousel.attributes.excludes[0] !== '') {
      this.acl.companies = 'denied';
    } else {
      this.acl.companies = 'allowed';
      this.selectedComp = [];
    }
    if (this.acl.companies === 'allowed') {
      this.selectedComp = (this.carouselData.attributes.includes[0] === '') ? [] : this.carouselData.attributes.includes[0].split(',');
    } else if (this.acl.companies === 'denied') {
      this.selectedComp = (this.carouselData.attributes.excludes[0] === '') ? [] : this.carouselData.attributes.excludes[0].split(',');
    }
    this.companyList.forEach((obj: any) => {
      obj.selected = this.selectedComp.includes(obj._id);
    });
  }

  closeSnav(status?: any): void {
    if (status) {
      return;
    }
    this.snav.close();
  }

  close(form: NgForm): void {
    setTimeout(() => {

    }, 0);

    form.resetForm();
    this.modalService.close('addcarousel');
  }

  closeUpdatePwd(form1: NgForm): void {
    form1.resetForm();
    this.updPass = !this.updPass;
    //  this.modalService.close('updatePass');
  }

  closeAcl(): void {
    let msg: any = '';
    if (this.selectedComp.length) {
      msg = `Total ${this.selectedComp.length} companies in ${this.acl.companies} list.
        Please click 'Save' button to complete.`;
    } else {
      msg = `All companies are allowed. Please click 'Save' button to complete.`;
    }
    this.toast.sToast('info', msg);
    this.modalService.close('Aclmodal');
  }

  closeUpdatecarousel(form2: NgForm): void {
    setTimeout(() => {

    }, 0);

    form2.resetForm();
    this.modalService.close('editcarousel');
  }

  getCurrentLoginType(): void {
    this.loaderService.display(true);
    this.baseService.doRequest(`/api/oauth_configs/dummy/getOAuthConfig`,
      'post').subscribe((retObj: any) => {
      this.loaderService.display(false);
      if (retObj) {
        this.loginAuth = retObj.msg.login_type;
        this.isLocalConfig = (retObj.msg && retObj.msg.login_type === 'LocalAuth') ? true : false;
      } else {
        this.toast.sToast('error', retObj.msg);
      }
    });
  }

  saveCarousel(): any {
    this.loaderService.display(true);
    let data: any;
    data = this.carouselData;
    this.baseService.doRequest(`/api/carousel/uploadCarousel`, 'post', data)
      .subscribe((result: any) => {
        this.loaderService.display(false);
        console.log(result);
        if (result[0]) {
          this.toast.sToast('success', 'Carousel Added Successfully!');
          this.backFun();
          this.addUsr = false;
        } else {
          this.toast.sToast('error', result[1]);
        }
      });
  }

  updateCarousel(data: any, form: NgForm): any {
    this.loaderService.display(true);
    let params: any;
    params = {
      attributes: {},
      email: this.carouselData.email, id: this.carousel.id,
      firstName: data.firstName, lastName: data.lastName, role: this.roleHash[data.roleid]
    };
    if (this.companyLevelAccess === 'specificCompanies') {
      if (this.acl.companies === 'allowed') {
        params.attributes.includes = this.selectedComp.join(',');
        params.attributes.excludes = '';
      } else {
        params.attributes.includes = '';
        params.attributes.excludes = this.selectedComp.join(',');
      }
    } else {
      params.attributes.excludes = '';
      params.attributes.includes = '';
    }
    this.baseService.doRequest(`/api/kcarousels`, 'put', params)
      .subscribe((result: any) => {
        this.loaderService.display(false);
        if (result[0]) {
          this.toast.sToast('success', 'carousel Updated Successfully!');
          this.editUsr = false;
          setTimeout(() => {
            this.getcarousels();
          }, 5000);
          this.backFun();
        } else {
          this.toast.sToast('error', result[1]);
        }
      });
  }

  filterCall(event: any): void {
    this.filterQuery = (event && event.length > 0) ?  event : undefined;
    this.filterQuery = (event && event.length > 0) ?
      {
        multi_match: {
          query: event, type: 'phrase_prefix',
          fields: ['name', 'phone', 'country.name', 'role']
        }
      } : undefined;
    this.getcarousels();
  }

  colFilterCall(event: any): void {
    this.colFilterQuery = [];
    if (!this.colFilterCols.filter((x: any) => x.col === event.col).length) {
      if (event.value !== '') {
        this.colFilterCols.push(event);
      }
    } else {
      this.colFilterCols.forEach((obj: any, index: number) => {
        if (obj.col === event.col && event.value === '') {
          this.colFilterCols.splice(index, 1);
        } else if (obj.col === event.col) {
          obj.value = event.value;
        }
      });
    }
    this.colFilterCols.forEach((obj: any) => {
      const tmpObj = {bool: {should: [{query_string: {fields: [obj.col], query: `*${obj.value}*`}}]}};
      this.colFilterQuery.push(tmpObj);
    });
    this.getcarousels();
  }

  pageCall(event: any): void {
    this.carouselTableOptions.tableOptions.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.getcarousels();
  }

  globalActionCall(data: any): void {
    if (data.action.text === 'Delete') {
      this.deletecarouselConfirmationDialogForAll(data);
    } else if (data.action.text === 'Make Vulnerability Suppress Approval carousel') {
      this.suppressApprovalcarousels(data, true);
    } else if (data.action.text === 'Remove Vulnerability Suppress Approval carousel') {
      this.suppressApprovalcarousels(data, false);
    }
  }

  suppressApprovalcarousels(data: any, action: any): void {
    let cnt = 0;
    let supportMsg = '';
    const titleName = 'Confirmation';
    const target = (action) ? 'make' : 'remove';
    const message = `Are you sure you want to ${target} selected carousel(s) as vulnerability suppress approval carousel(s)?`;
    const cancelText = 'No';
    const acceptText = 'Yes';
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText);
    this.confirmDialog.dialogResult.subscribe((res: any) => {
      if (res) {
        this.loaderService.display(true);
        const allcarouselsList = data.row;
        allcarouselsList.forEach((element: any) => {
          this.baseService.doRequest(`/api/kcarousels/${element._id}`, 'put',
            {vulsApprovalcarousel: action})
            .subscribe((result: any) => {
              cnt++;
              if (result) {
                if (cnt === allcarouselsList.length) {
                  this.toast.sToast('success', 'Updated successfully');
                  this.loaderService.display(false);
                  setTimeout(() => {
                    this.getcarousels();
                  }, 1200);
                }
              } else {
                supportMsg += element.firstName + ', ';
                if (cnt === allcarouselsList.length) {
                  this.toast.sToast('error', supportMsg + 'Not Updated ' + result.msg);
                  this.loaderService.display(false);
                  setTimeout(() => {
                    this.getcarousels();
                  }, 1200);
                }
              }
            }, (error: any) => {
              cnt++;
              supportMsg += element.firstName + ', ';
              if (cnt === allcarouselsList.length) {
                this.toast.sToast('error', supportMsg + 'Not Updated' + error.msg);
                this.loaderService.display(false);
                setTimeout(() => {
                  this.getcarousels();
                }, 1200);
              }
            });
        });
      }
    });
  }

  deletecarouselConfirmationDialogForAll(data: any): void {
    let cnt = 0;
    let supportMsg = '';
    const titleName = 'Confirmation';
    const message = 'Are you sure you want to delete selected carousels?';
    const cancelText = 'No';
    const acceptText = 'Yes';
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText);
    this.confirmDialog.dialogResult.subscribe((res: any) => {
      if (res) {
        this.loaderService.display(true);
        this.allcarouselsList = data.row;
        this.allcarouselsList.forEach((element: any) => {
          this.baseService.doRequest(
            `/api/kcarousels/${element.id}`, 'delete').subscribe((result: any) => {
            cnt++;
            if (result) {
              if (cnt === this.allcarouselsList.length) {
                this.toast.sToast('success', 'carousels removed successfully');
                this.getcarousels();
                this.loaderService.display(false);
              }
            } else {
              supportMsg += element.firstName + ', ';
              if (cnt === this.allcarouselsList.length) {
                this.toast.sToast('error', supportMsg + 'Not Deleted');
                this.getcarousels();
                this.loaderService.display(false);
              }
            }
          }, (error: any) => {
            cnt++;
            supportMsg += element.firstName + ', ';
            if (cnt === this.allcarouselsList.length) {
              this.toast.sToast('error', supportMsg + 'Not Deleted');
              this.getcarousels();
              this.loaderService.display(false);
            }
          });
        });
      }
    });
  }

  changeEvent(event: any) {
    const date = event.value;
    this.carouselData.dob  = date.getFullYear() + '-' + `${date.getMonth() + 1}`.padStart(2, '0') + '-' + `${date.getDate()}`.padStart(2, '0');
    console.log(this.carouselData.dob);
    
  }
  refreshCall(): void {
    this.getcarousels();
  }

  deletecarouselConfirmationDialog(): void {
    // if (this.carousel.role === 'Admin') {
    //   this.toast.sToast('success', 'Admin carousel');
    //   return false;
    // }
    const titleName = 'Confirmation';
    const message = 'Are you sure you want to delete this ' + this.carousel.firstName + ' carousel?';
    const cancelText = 'No';
    const acceptText = 'Yes';
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText);
    this.confirmDialog.dialogResult.subscribe((res: any) => {
      if (res) {
        this.loaderService.display(true);
        this.baseService.doRequest(
          `/api/kcarousels/${this.carousel.id}`, 'delete').subscribe((result: any) => {
          this.loaderService.display(false);
          this.toast.sToast('success', 'carousel removed successfully');
          setTimeout(() => {
            this.getcarousels();
          }, 5000);
        });
      }
    });
  }
  resetMFAConfirmationDialog(): void {
    const titleName = 'Confirmation';
    const message = 'Are you sure you want to reset MFA of this carousel '+this.carouselid.firstName +'?';
    const cancelText = 'No';
    const acceptText = 'Yes';
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText);
    this.confirmDialog.dialogResult.subscribe((res: any) => {
      if (res) {
        this.loaderService.display(true);
        this.baseService.doRequest(
          `/api/kcarousels/${this.carouselid.id}/reconfigureotp`, 'delete').subscribe((result: any) => {
          this.loaderService.display(false);
          this.toast.sToast('success', 'carousel MFA reset successfully');
          setTimeout(() => {
            this.getcarousels();
          }, 5000);
        });
      }
    });
  }
  getRoles(): void {
    this.loaderService.display(true, 'Getting roles...');
    this.baseService.doRequest('/api/kroles', 'get', null,
      {query: {}, limit: 1000, skip: 0}).subscribe((result: any) => {
      this.roleHash = {};
      result.forEach((obj: any) => {
        this.roleHash[obj.id] = obj;
      });
      this.roles = result;
      this.getcarousels();
    });
  }

  getcarousels(): void {
    this.showHideLoading(true);
    this.loaderService.display(true, 'Getting carousels...');
    let cq: any;
    cq = {
      query: {
        bool: {
          must: [
            {
              match: {
                'kind.keyword': 'CELEBRITY'
              }
            }
          ]
        }
      }
    };
    this.carouselTableOptions.query = cq;
    let sort: any;
    sort = [{}];
    if (this.carouselTableOptions.sortOptions) {
      const orderArr = ['name', 'email'];
      if (orderArr.indexOf(this.carouselTableOptions.sortOptions.active) > -1) {
        sort[0][this.carouselTableOptions.sortOptions.active + '.keyword'] = {order: this.carouselTableOptions.sortOptions.direction};
      } else {
        sort[0][this.carouselTableOptions.sortOptions.active] = {order: this.carouselTableOptions.sortOptions.direction};
      }
    }
    if (this.filterQuery && this.filterQuery.multi_match) {
      cq.query.bool.must.push(this.filterQuery);
    }
    if (this.colFilterQuery && this.colFilterQuery.length) {
      // @ts-ignore
      cq.query.bool.filter = [];
      this.colFilterQuery.forEach((obj: any) => {
        if (obj.bool.should[0].match) {
          cq.query.bool.must.push(obj);
        } else {
          cq.query.bool.filter.push(obj);
        }
      });
    }
    const q = JSON.stringify(cq);
    const skip = this.currentPage;
    const limit = this.carouselTableOptions.tableOptions.pageSize;
    const s = JSON.stringify(sort);
    const fields = JSON.stringify(['_id', 'phone', 'email', 'name', 'languages', 'country.name', 'c', 'u']);
    this.baseService.doRequest(`/api/entity`, 'get', null,
      {q, skip, s, limit}).subscribe((result: any) => {
      this.loaderService.display(false);
      if (result) {
        result.data.map((item: any) => {
          item.country = (item.country) ? item.country : { name: ''}
        })
        this.carouselTableOptions.pageData = result.data;
        this.carouselTableOptions.tableOptions.pageTotal = result.total;
        this.showHideLoading(false);
      } else {
        this.toast.sToast('error', result);
        this.showHideLoading(false);
      }
    });
  }
}