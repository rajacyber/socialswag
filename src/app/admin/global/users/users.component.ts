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
import {HttpClient, HttpParams} from '@angular/common/http';

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

  countryList: any = [{"name":"Learner"}, {"name":"Admin"}, {"name":"Master"}];
  languagesList: any = [];
  fromMaxDate = new Date();
  thumbnail_image: any;
  preview_image: any;
  images: any = {};
  user_id: any;
  Objectkeys = Object.keys;
  adduser: boolean=false;


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
          col: 'displayName',
          columnDef: 'displayName',
          filter: '',
          cell: '(element: any) => `${element.displayName}`',
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
          col: 'phoneNumber',
          columnDef: 'phoneNumber',
          filter: '',
          cell: '(element: any) => `${element.phoneNumber}`',
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
          header: 'Role',
          col: 'role',
          columnDef: 'role',
          filter: '',
          cell: '(element: any) => `${element.role}`',
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
        }, {
          header: 'Created on',
          columnDef: 'metadata.creationTime',
          filter: '',
          cell: '(element: any) => `${element.metadata.creationTime}`',
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
          isSort: true,
          iscolumnSearch: true,
          israngeSearch: true,
          colFilters: {type: 'range', hKey: true},
          width: '150px',
          dateCol: {start: '', end: ''}
        }, {
          header: 'Updated on',
          columnDef: 'u',
          filter: 'DD-MMM-YYYY',
          cell: '(element: any) => `${element.u}`',
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
          isfaicon: false,
          isAddingText: false,
          addingText: '',
          img: false,
          imgPath: '',
          isSort: true,
          iscolumnSearch: true,
          israngeSearch: true,
          colFilters: {type: 'range', hKey: true},
          dateCol: {start: '', end: ''},
          width: '150px'
        }],
      sortOptions: {active: 'metadata.creationTime', direction: 'desc'},
      faClass: 'Users',
      _pageData: [],
      tableOptions: {
        id: 'users',
        title: 'Users',
        isServerSide: true, 
        // add: (this.aS.hasPermission('kusers', 'create')),
        selectText: 'user(s)',
        loading: true,
        floatingFilter: true,
        rowSelection: false,
        showAction: true,
        actionMenuItems: [
        // {
        //   text: 'Upload Images',
        //   icon: 'cloud_upload',
        //   callback: 'uploadFn',
        //   isGlobal: true
        // },
        {
          text: 'Edit',
          icon: 'edit',
          callback: 'editFn',
          isGlobal: false
        },
        {
          text: 'Delete',
          icon: 'delete_forver',
          callback: 'deleteFn',
          isGlobal: true
          }
      ],
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
    if (data.action.text === 'Edit') {
      this.user_id = data.row.uid;
      this.userData = { email: data.row.email, displayName:data.row.displayName, phoneNumber:data.row.phoneNumber, rolei:Object.keys(data.row.customClaims)[0], modifiy:true};
      this.snav.open(); 
    }
    if (data.action.text === 'Delete') {
      this.user_id = data.row._id;
      this.userData= data.row;
      this.deleteUserConfirmationDialog()
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


  addUser(): void {
    this.adduser = true;
    this.userData = { email: '',  role: '', displayName:'', phoneNumber:'', rolei:''};
    this.snav.open();
  }

  backFunUpload(): void {
    this.upload.close();
    this.images = {};
    this.adduser=false;
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

  saveUser(): any {
    this.loaderService.display(true);
    let data: any;
    data = JSON.parse(JSON.stringify(this.userData));
    data.role={};
    data.role[this.userData.rolei] = true; 
    data.password="Admin123"
      this.httpClient.post<any>('https://us-central1-socialswag-dev.cloudfunctions.net/server/api/v1/users',
      data ).subscribe(result => {
        this.loaderService.display(false);
        console.log(result);
        // if (result[0]) {
          this.toast.sToast('success', 'User added successfully!');
          this.backFun();
          this.addUsr = false;
        // } else {
          // this.toast.sToast('error', result[1]);
        // }
      }, error =>{
        this.loaderService.display(false);
        if(error.error && error.error.data && error.error.data.message){
        this.toast.sToast('error', error.error.data.message)}
      });
  }

  updateUser(): any {
    this.loaderService.display(true);
    let data: any;
    data = JSON.parse(JSON.stringify(this.userData));
    data.role={};
    data.role[this.userData.rolei] = true; 
    data.password="Admin123"
      this.httpClient.patch<any>('https://us-central1-socialswag-dev.cloudfunctions.net/server/api/v1/users',
      {data:data, 'uid':this.user_id} ).subscribe(result => {
        this.loaderService.display(false);
        console.log(result);
        // if (result[0]) {
          this.toast.sToast('success', 'User updated successfully!');
          this.backFun();
          this.addUsr = false;
        // } else {
          // this.toast.sToast('error', result[1]);
        // }
      }, error =>{
        this.loaderService.display(false);
        if(error.error && error.error.data && error.error.data.message){
        this.toast.sToast('error', error.error.data.message)}
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
    const message = 'Are you sure you want to delete ' + this.userData.displayName + ' user?';
    const cancelText = 'No';
    const acceptText = 'Yes';
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText);
    this.confirmDialog.dialogResult.subscribe((res: any) => {
      if (res) {
        this.loaderService.display(true);
        let reqOpts = {}
          let data={'uid':this.userData.uid}
          this.httpClient.delete<any>('https://us-central1-socialswag-dev.cloudfunctions.net/server/api/v1/users',
          {params:data}).subscribe(result => { 
            if (result) {
                this.toast.sToast('success', `${this.userData.displayName} removed successfully`)
            }
          }, (error: any) => {
            this.loaderService.display(false);
            if(error && error.error && error.error.data && error.error.data.message){
              this.toast.sToast('error', error.error.data.message)
            }
            })
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
    cq = {query: {}};
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
    let da ={q,skip,limit,s}
    let reqOpts = {
      params: new HttpParams(),
    };
    
    for (const key in cq) {
      if (cq.hasOwnProperty(key)) {
        reqOpts.params = reqOpts.params.append(key, JSON.stringify(cq[key]));
      }}
      reqOpts.params = reqOpts.params.append('skip', JSON.stringify(skip))
      reqOpts.params = reqOpts.params.append('limit', JSON.stringify(limit))
      reqOpts.params = reqOpts.params.append('sort', JSON.stringify(sort))
    // https://us-central1-socialswag-dev.cloudfunctions.net/server/api/v1
    this.httpClient.get<any>('https://us-central1-socialswag-dev.cloudfunctions.net/server/api/v1/users',
         {params:reqOpts.params}).subscribe(result => {
    // this.baseService.doRequest(`/api/users`, 'get', null,
    //   {skip,limit}).subscribe((result: any) => {
      this.loaderService.display(false);
      if (result) {
        result.data.map((item: any) => {
          item.country = (item.country) ? item.country : { name: ''}
        })
        this.userTableOptions.pageData = result.data;
        this.userTableOptions.tableOptions.pageTotal = result.total;
        this.showHideLoading(false);
      } else {
        this.toast.sToast('error', result);
        this.showHideLoading(false);
      }
    }, error =>{
      if(error.data && error.data.message){
        this.toast.sToast('error', error.data.message);
      }
    });
  }
}
