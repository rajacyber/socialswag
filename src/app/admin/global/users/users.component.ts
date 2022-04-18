import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseRequestService} from '../../../_services/base.service';
import {CommonService} from '../../../_services/common.services';
import {ModalService} from '../../../_services/modal.service';
import {Router} from '@angular/router';
import {LoaderService} from '../../../_services/loader.service';
import {NgForm} from '@angular/forms';
import {ConfirmDialogService} from '../../../_services/confirmdialog.service';
import {MyToastrService} from '../../../_services/toastr.service';
import {MatSidenav} from '@angular/material/sidenav';
import {AuthenticationService} from '../../../_services/authentication.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  @ViewChild('snav', {static: true}) snav: MatSidenav;
  @ViewChild('upload', {static: true}) upload: MatSidenav;
  userTableOptions: any;
  user: any;
  companyLevelAccess = 'allCompanies';
  userData: any;
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
  userTitle = '';
  aclid: any;
  userid: any;
  allUsersList: any = [];
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
  thumbnail_image: any;
  preview_image: any;
  images: any = {};
  user_id: any;
  Objectkeys = Object.keys;


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
    this.userTableOptions = {
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
      faClass: 'CelebrityUser',
      _pageData: [],
      tableOptions: {
        id: 'users',
        title: 'Celebrity User',
        isServerSide: true, 
        // add: (this.aS.hasPermission('kusers', 'create')),
        selectText: 'user(s)',
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
    // if (this.aS.hasPermission('kusers', 'update')) {
    //   this.userTableOptions.tableOptions.actionMenuItems.unshift({
    //     text: 'Edit',
    //     icon: 'edit',
    //     callback: 'editFn',
    //     isGlobal: false
    //   });
    // }
    // if (this.aS.hasPermission('kusers', 'delete')) {
    //   this.userTableOptions.tableOptions.actionMenuItems.push({
    //     text: 'Delete',
    //     icon: 'delete',
    //     callback: 'deleteFn',
    //     isGlobal: true
    //   });
    // }
    // if (this.aS.hasPermission('kapiclients', 'create')) {
    //   this.userTableOptions.tableOptions.actionMenuItems.push({
    //     text: 'API Key',
    //     icon: 'vpn_key',
    //     callback: 'deleteFn',
    //     isGlobal: false
    //   });
    // }
    // if (this.aS.hasPermission('kusers', 'create')) {
    //   this.userTableOptions.tableOptions.actionMenuItems.push({
    //     text: 'MFA',
    //     icon: 'fingerprint',
    //     callback: 'deleteFn',
    //     isGlobal: false
    //   });
    // }
    // if (this.aS.hasPermission('kusers', 'delete')) {
    //   this.userTableOptions.tableOptions.actionMenuItems.push({
    //     text: 'Reset MFA',
    //     icon: 'restore',
    //     callback: 'deleteFn',
    //     isGlobal: true
    //   });
    // }
  }



  ngOnInit(): void {
    this.userTableOptions.pageData = [];
    setTimeout(() => {
      this.getUsers();
    }, 1000);
    this.getLanguageAndCountry();
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
        formData.append('user_id',this.user_id);
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
    this.thumbnail_image = '';
    this.preview_image = '';
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
    this.languagesList = await this.baseService.doRequest(`/api/utilities/supportedLanguages`, 'post', {}).toPromise();
    this.countryList = await this.baseService.doRequest(`/api/utilities/getCountriesList`, 'post', {}).toPromise();
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
        if (this.userData.id) {
          this.updateAcl(this.userData);
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
    const data = Object.assign({}, this.userTableOptions);
    this.userTableOptions = {};
    this.userTableOptions = data;
    this.userTableOptions.tableOptions.loading = status;
  }

  sortCall(event: any): void {
    this.userTableOptions.sortOptions = event;
    this.getUsers();
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
      this.user_id = data.row._id;
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
    const message = 'Are you sure you want to delete ' + mfa.userLabel + ' MFA ?';
    const cancelText = 'No';
    const acceptText = 'Yes';
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText);
    this.confirmDialog.dialogResult.subscribe((res: any) => {
      if (res) {
        this.loaderService.Modeldisplay(true, 'Deleting MFA...');
        this.baseService.doRequest(
          `/api/kusers/${this.userid.id}/authentications/${mfa.id}`, 'delete').subscribe((result: any) => {
          this.loaderService.Modeldisplay(false);
          if (result[0]) {
            this.toast.sToast('success', result[1]);
            setTimeout(() => this.getMFA(), 2000) ;
          } else {
            this.toast.sToast('error', result[1]);
          }
        });
      }
    });
  }

  getMFA(): void {
    this.loaderService.display(true, 'Getting client MFA');
    this.baseService.doRequest(
      `/api/kusers/${this.userid.id}/authentications`, 'get').subscribe((result: any) => {
      this.loaderService.display(false);
      if (result && result.length > 0) {
        this.apiMFA = result;
        this.modalService.open('mfa');
      } else {
        this.toast.sToast('error', 'No MFA found');
      }
    }
    );
  }

  getAPI(): void {
    this.loaderService.display(true, 'Getting client api key');
    this.baseService.doRequest(
      `/api/kapiclients/dummy/getApiKey`, 'post', this.apiData).subscribe((result: any) => {
      this.loaderService.display(false);
      if (result[0]) {
        this.apiClient = result[1];
        this.modalService.open('apiKey');
      } else {
        this.toast.sToast('error', result.msg);
      }
    });
  }

  copyAPI(): void {
    navigator.clipboard.writeText(this.user.apiKey);
    this.toast.sToast('success', 'Copied');
  }

  updateCountry($event: any): void {
    console.log($event);
    
  }

  addUser(): void {
    this.userData = {name: '', phone: '', email: '', headline: '', dob: '', livechat_enabled: false, languages:[], country: '', gstin: ''};
    this.snav.open();
  }

  backFunUpload(): void {
    this.upload.close();
    this.images = {};
    this.preview_image = this.thumbnail_image = '';
  }

  backFun(): void {
    this.snav.close();
    this.userData = {};
    this.getUsers();
  }

  editbackFun(): void {
    this.editUsr = !this.editUsr;
    this.companyList.forEach((obj: any) => {
      obj.selected = false;
    });
    this.selectedComp = [];
    this.getUsers();
  }

  uptpassbackFun(): void {
    this.updPass = !this.updPass;
    this.getUsers();
  }

  editUser(id: string, element: any): any {
    // setTimeout(() => { this.getRoles(); }, 5000);
    this.userTitle = 'Edit';
    this.user = element.row;
    this.userData = element.row;
    this.userData.roleid = (element.row.roles.realmMappings[0]) ? element.row.roles.realmMappings[0].id : '';
    this.snav.open();
    this.selectedRole = this.userData.role;
    if (this.userData.attributes && ((this.userData.attributes.includes && this.userData.attributes.includes[0]
      && this.userData.attributes.includes[0].length) || (this.userData.attributes.excludes
      && this.userData.attributes.excludes[0] && this.userData.attributes.excludes[0].length))) {
      this.companyLevelAccess = 'specificCompanies';
    } else {
      this.companyLevelAccess = (this.selectedRole !== 'admin') ?  'specificCompanies' : 'allCompanies';
    }
  }

  updateAcl(user: any): void {
    if (user.attributes.includes && user.attributes.includes.length && user.attributes.includes[0] !== '') {
      this.acl.companies = 'allowed';
    } else if (user.attributes.excludes && user.attributes.excludes && user.attributes.excludes[0] !== '') {
      this.acl.companies = 'denied';
    } else {
      this.acl.companies = 'allowed';
      this.selectedComp = [];
    }
    if (this.acl.companies === 'allowed') {
      this.selectedComp = (this.userData.attributes.includes[0] === '') ? [] : this.userData.attributes.includes[0].split(',');
    } else if (this.acl.companies === 'denied') {
      this.selectedComp = (this.userData.attributes.excludes[0] === '') ? [] : this.userData.attributes.excludes[0].split(',');
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
    this.modalService.close('addUser');
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

  closeUpdateUser(form2: NgForm): void {
    setTimeout(() => {

    }, 0);

    form2.resetForm();
    this.modalService.close('editUser');
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

  saveUser(): any {
    this.loaderService.display(true);
    let data: any;
    const country = this.countryList.filter((x: any) => x.name === this.userData.country)
    data = {
      email: this.userData.email, name: this.userData.name,
      phone: this.userData.phone, headline: this.userData.headline,
      dob: this.userData.dob, livechat_enabled: this.userData.livechat_enabled,
      languages: this.userData.languages, gstin: this.userData.gstin,
      country: {name: country[0].name, alpha_2: country[0].alpha_2}
    };
    
    this.baseService.doRequest(`/api/entity/createCelebrityUser`, 'post', data)
      .subscribe((result: any) => {
        this.loaderService.display(false);
        console.log(result);
        if (result[0]) {
          this.toast.sToast('success', 'Celebrity User Added Successfully!');
          this.backFun();
          this.addUsr = false;
        } else {
          this.toast.sToast('error', result[1]);
        }
      });
  }

  updateUser(data: any, form: NgForm): any {
    this.loaderService.display(true);
    let params: any;
    params = {
      attributes: {},
      email: this.userData.email, id: this.user.id,
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
    this.baseService.doRequest(`/api/kusers`, 'put', params)
      .subscribe((result: any) => {
        this.loaderService.display(false);
        if (result[0]) {
          this.toast.sToast('success', 'User Updated Successfully!');
          this.editUsr = false;
          setTimeout(() => {
            this.getUsers();
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
    this.getUsers();
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
    this.getUsers();
  }

  pageCall(event: any): void {
    this.userTableOptions.tableOptions.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.getUsers();
  }

  globalActionCall(data: any): void {
    if (data.action.text === 'Delete') {
      this.deleteUserConfirmationDialogForAll(data);
    } else if (data.action.text === 'Make Vulnerability Suppress Approval User') {
      this.suppressApprovalUsers(data, true);
    } else if (data.action.text === 'Remove Vulnerability Suppress Approval User') {
      this.suppressApprovalUsers(data, false);
    }
  }

  suppressApprovalUsers(data: any, action: any): void {
    let cnt = 0;
    let supportMsg = '';
    const titleName = 'Confirmation';
    const target = (action) ? 'make' : 'remove';
    const message = `Are you sure you want to ${target} selected user(s) as vulnerability suppress approval user(s)?`;
    const cancelText = 'No';
    const acceptText = 'Yes';
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText);
    this.confirmDialog.dialogResult.subscribe((res: any) => {
      if (res) {
        this.loaderService.display(true);
        const allUsersList = data.row;
        allUsersList.forEach((element: any) => {
          this.baseService.doRequest(`/api/kusers/${element._id}`, 'put',
            {vulsApprovalUser: action})
            .subscribe((result: any) => {
              cnt++;
              if (result) {
                if (cnt === allUsersList.length) {
                  this.toast.sToast('success', 'Updated successfully');
                  this.loaderService.display(false);
                  setTimeout(() => {
                    this.getUsers();
                  }, 1200);
                }
              } else {
                supportMsg += element.firstName + ', ';
                if (cnt === allUsersList.length) {
                  this.toast.sToast('error', supportMsg + 'Not Updated ' + result.msg);
                  this.loaderService.display(false);
                  setTimeout(() => {
                    this.getUsers();
                  }, 1200);
                }
              }
            }, (error: any) => {
              cnt++;
              supportMsg += element.firstName + ', ';
              if (cnt === allUsersList.length) {
                this.toast.sToast('error', supportMsg + 'Not Updated' + error.msg);
                this.loaderService.display(false);
                setTimeout(() => {
                  this.getUsers();
                }, 1200);
              }
            });
        });
      }
    });
  }

  deleteUserConfirmationDialogForAll(data: any): void {
    let cnt = 0;
    let supportMsg = '';
    const titleName = 'Confirmation';
    const message = 'Are you sure you want to delete selected users?';
    const cancelText = 'No';
    const acceptText = 'Yes';
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText);
    this.confirmDialog.dialogResult.subscribe((res: any) => {
      if (res) {
        this.loaderService.display(true);
        this.allUsersList = data.row;
        this.allUsersList.forEach((element: any) => {
          this.baseService.doRequest(
            `/api/kusers/${element.id}`, 'delete').subscribe((result: any) => {
            cnt++;
            if (result) {
              if (cnt === this.allUsersList.length) {
                this.toast.sToast('success', 'Users removed successfully');
                this.getUsers();
                this.loaderService.display(false);
              }
            } else {
              supportMsg += element.firstName + ', ';
              if (cnt === this.allUsersList.length) {
                this.toast.sToast('error', supportMsg + 'Not Deleted');
                this.getUsers();
                this.loaderService.display(false);
              }
            }
          }, (error: any) => {
            cnt++;
            supportMsg += element.firstName + ', ';
            if (cnt === this.allUsersList.length) {
              this.toast.sToast('error', supportMsg + 'Not Deleted');
              this.getUsers();
              this.loaderService.display(false);
            }
          });
        });
      }
    });
  }

  changeEvent(event: any) {
    const date = event.value;
    this.userData.dob  = date.getFullYear() + '-' + `${date.getMonth() + 1}`.padStart(2, '0') + '-' + `${date.getDate()}`.padStart(2, '0');
    console.log(this.userData.dob);
    
  }
  refreshCall(): void {
    this.getUsers();
  }

  deleteUserConfirmationDialog(): void {
    // if (this.user.role === 'Admin') {
    //   this.toast.sToast('success', 'Admin user');
    //   return false;
    // }
    const titleName = 'Confirmation';
    const message = 'Are you sure you want to delete this ' + this.user.firstName + ' user?';
    const cancelText = 'No';
    const acceptText = 'Yes';
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText);
    this.confirmDialog.dialogResult.subscribe((res: any) => {
      if (res) {
        this.loaderService.display(true);
        this.baseService.doRequest(
          `/api/kusers/${this.user.id}`, 'delete').subscribe((result: any) => {
          this.loaderService.display(false);
          this.toast.sToast('success', 'User removed successfully');
          setTimeout(() => {
            this.getUsers();
          }, 5000);
        });
      }
    });
  }
  resetMFAConfirmationDialog(): void {
    const titleName = 'Confirmation';
    const message = 'Are you sure you want to reset MFA of this user '+this.userid.firstName +'?';
    const cancelText = 'No';
    const acceptText = 'Yes';
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText);
    this.confirmDialog.dialogResult.subscribe((res: any) => {
      if (res) {
        this.loaderService.display(true);
        this.baseService.doRequest(
          `/api/kusers/${this.userid.id}/reconfigureotp`, 'delete').subscribe((result: any) => {
          this.loaderService.display(false);
          this.toast.sToast('success', 'User MFA reset successfully');
          setTimeout(() => {
            this.getUsers();
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
      this.getUsers();
    });
  }

  getUsers(): void {
    this.showHideLoading(true);
    this.loaderService.display(true, 'Getting users...');
    let cq: any;
    cq = {
      query: {
        bool: {
          must: [{exists: {field: 'name'}}, {exists: {field: 'email'}}]
        }
      }
    };
    this.userTableOptions.query = cq;
    let sort: any;
    sort = [{}];
    if (this.userTableOptions.sortOptions) {
      const orderArr = ['name', 'email'];
      if (orderArr.indexOf(this.userTableOptions.sortOptions.active) > -1) {
        sort[0][this.userTableOptions.sortOptions.active + '.keyword'] = {order: this.userTableOptions.sortOptions.direction};
      } else {
        sort[0][this.userTableOptions.sortOptions.active] = {order: this.userTableOptions.sortOptions.direction};
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
    const limit = this.userTableOptions.tableOptions.pageSize;
    const s = JSON.stringify(sort);
    const fields = JSON.stringify(['_id', 'phone', 'email', 'name', 'languages', 'country.name', 'c', 'u']);
    // const url = (this.filterQuery) ? `/api/kusers?query=search=${this.filterQuery}` : '/api/kusers';
    this.baseService.doRequest(`/api/entity`, 'get', null,
      {q, skip, s, limit}).subscribe((result: any) => {
      this.loaderService.display(false);
      if (result) {
        this.userTableOptions.pageData = result.data;
        this.userTableOptions.tableOptions.pageTotal = result.total;
        this.showHideLoading(false);
      } else {
        this.toast.sToast('error', result);
        this.showHideLoading(false);
      }
    });
  }
}
