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
import {CompanyService} from '../../../api/services/company.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  @ViewChild('snav', {static: true}) snav: MatSidenav;
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

  constructor(public baseService: BaseRequestService, private companyService: CompanyService,
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
          header: 'First Name',
          col: 'firstName',
          columnDef: 'firstName',
          filter: '',
          cell: '(element: any) => `${element.firstName}`',
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
          imgPath: ''
        }, {
          header: 'Last Name',
          col: 'lastName',
          columnDef: 'lastName',
          filter: '',
          cell: '(element: any) => `${element.lastName}`',
          order: 1,
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
          header: 'Role',
          col: 'role',
          columnDef: 'role',
          filter: 'cameltohuman',
          cell: '(element: any) => `${element.role}`',
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
          imgPath: ''
        }],
      sortOptions: {active: 'firstName', direction: 'asc'},
      faClass: 'User',
      _pageData: [],
      tableOptions: {
        id: 'users',
        title: 'Users',
        isServerSide: true, add: (this.aS.hasPermission('kusers', 'create')),
        selectText: 'user(s)',
        loading: true,
        floatingFilter: true,
        rowSelection: true,
        showAction: true,
        actionMenuItems: [],
        pagination: true,
        pageOptions: [5, 10, 25, 100],
        pageSize: 30,
        search: true,
        showhideList: true,
        refreshData: true,
        exportExcel: true,
        saveData: true
      }
    };
    if (this.aS.hasPermission('kusers', 'update')) {
      this.userTableOptions.tableOptions.actionMenuItems.unshift({
        text: 'Edit',
        icon: 'edit',
        callback: 'editFn',
        isGlobal: false
      });
    }
    if (this.aS.hasPermission('kusers', 'delete')) {
      this.userTableOptions.tableOptions.actionMenuItems.push({
        text: 'Delete',
        icon: 'delete',
        callback: 'deleteFn',
        isGlobal: true
      });
    }
    if (this.aS.hasPermission('kapiclients', 'create')) {
      this.userTableOptions.tableOptions.actionMenuItems.push({
        text: 'API Key',
        icon: 'vpn_key',
        callback: 'deleteFn',
        isGlobal: false
      });
    }
    if (this.aS.hasPermission('kusers', 'create')) {
      this.userTableOptions.tableOptions.actionMenuItems.push({
        text: 'MFA',
        icon: 'fingerprint',
        callback: 'deleteFn',
        isGlobal: false
      });
    }
    if (this.aS.hasPermission('kusers', 'delete')) {
      this.userTableOptions.tableOptions.actionMenuItems.push({
        text: 'Reset MFA',
        icon: 'restore',
        callback: 'deleteFn',
        isGlobal: true
      });
    }
  }

  getCompanies(): void {
    const cq = {query: {bool: {must: [{exists: {field: 'description'}}], must_not: [{exists: {field: 'companyRef'}}]}}};
    const q = JSON.stringify(cq);
    const skip = 0;
    const limit = 3000;
    const sort = JSON.stringify([{'name.keyword': {order: 'asc'}}]);
    const fields = JSON.stringify(['name']);
    this.companyService.getAllApiCompanyGet({q, skip, limit, sort, fields}).subscribe((result: any) => {
      if (result.data.length) {

      } else {

      }
    });
  }

  ngOnInit(): void {
    this.userTableOptions.pageData = [];
    setTimeout(() => {
      this.getRoles();
    }, 1000);
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

  getCompany(): void {
    let cq;
    cq = {query: {bool: {must: [{exists: {field: 'description'}}], must_not: [{exists: {field: 'companyRef'}}]}}};
    const q = JSON.stringify(cq);
    const skip = 0;
    const limit = 10000;
    const sort = JSON.stringify([{'name.keyword': {order: 'asc'}}]);
    const fields = JSON.stringify(['name', 'c']);
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
    if (data.action.text === 'Delete') {
      this.user = data.row;
      this.deleteUserConfirmationDialog();
    } else if (data.action.text === 'Edit') {
      this.editUser('editUser', data);
    } else if (data.action.text === 'Update Password') {
      this.user = data.row;
      this.updPass = true;
      this.userData = {password: '', opassword: '', cpassword: ''};
    } else if (data.action.text === 'API Key') {
      this.user = data.row;
      this.apiData = {
        name: data.row.email, role: {
          id: data.row.roles.realmMappings[0].id,
          name: data.row.roles.realmMappings[0].name,
          composite: true,
          clientRole: true,
          containerId: data.row.roles.realmMappings[0].containerId
        }
      };
      this.getAPI();
    }else if(data.action.text === 'MFA'){
      this.userid = data.row;
      this.getMFA();
    }
    else if(data.action.text === 'Reset MFA'){
      this.userid = data.row;
      this.resetMFAConfirmationDialog();
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

  updateCurrentRole($event: any): void {
    this.selectedRole = this.roleHash[$event].name;
  }

  addUser(): void {
    // setTimeout(() => { this.getRoles(); }, 5000);
    this.companyLevelAccess = 'allCompanies';
    this.userData = {firstName: '', lastName: '', password: '', cpassword: '', role: '', roleid: ''};
    this.snav.open();
  }

  backFun(): void {
    this.snav.close();
    this.userData = {};
    this.selectedComp = [];
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
    data = {
      attributes: {},
      email: this.userData.email, firstName: this.userData.firstName,
      lastName: this.userData.lastName, role: this.roleHash[this.userData.roleid]
    };
    if (this.companyLevelAccess === 'specificCompanies') {
      if (this.acl.companies === 'allowed') {
        data.attributes.includes = this.selectedComp.join(',');
        data.attributes.excludes = '';
      } else {
        data.attributes.includes = '';
        data.attributes.excludes = this.selectedComp.join(',');
      }
    } else {
      data.attributes.excludes = '';
      data.attributes.includes = '';
    }
    this.baseService.doRequest(`/api/kusers`, 'post', data)
      .subscribe((result: any) => {
        this.loaderService.display(false);
        if (result[0]) {
          this.toast.sToast('success', 'User Added Successfully!');
          this.searchString = '';
          this.selectedComp = [];
          this.isSelected = false;
          /*this.companyList.forEach((obj: any) => {
            obj.selected = false;
          });*/
          this.backFun();
          this.addUsr = false;
          console.log(result);
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
    /*const fields = [];
    this.userTableOptions.columns.forEach((obj: any) => {
      if (obj.visible && obj.columnDef !== 'status') {
        fields.push(obj.columnDef);
      }
    });

    this.filterQuery = (event && event.length > 0) ?
      {
        multi_match: {
          query: event, type: 'phrase_prefix',
          fields: ['firstName', 'lastName', 'email', 'role']
        }
      } : undefined;*/
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
          must: [{match: {exists: {field: 'email'}}}, {match: {exists: {field: 'email'}}}]
        }
      }
    };
    this.userTableOptions.query = cq;
    let sort: any;
    sort = [{}];
    if (this.userTableOptions.sortOptions) {
      const orderArr = ['firstName', 'lastName', 'email'];
      if (orderArr.indexOf(this.userTableOptions.sortOptions.active) > -1) {
        sort[0][this.userTableOptions.sortOptions.active + '.keyword'] = {order: this.userTableOptions.sortOptions.direction};
      } else {
        sort[0][this.userTableOptions.sortOptions.active] = {order: this.userTableOptions.sortOptions.direction};
      }
    }
    /*if (this.filterQuery && this.filterQuery.multi_match) {
      cq.query.bool.must.push(this.filterQuery);
    }*/
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
    const url = (this.filterQuery) ? `/api/kusers?query=search=${this.filterQuery}` : '/api/kusers';
    this.baseService.doRequest(`${url}`, 'get', null,
      {q, skip, limit, sort}).subscribe((result: any) => {
      this.loaderService.display(false);
      if (result) {
        result.forEach((obj: any) => {
          try {
            obj.roles.realmMappings.forEach((role: any) => {
              obj.role = role.name;
            });
          } catch (err) {
            console.log(JSON.stringify(obj));
          }
        });
        this.userTableOptions.pageData = result;
        this.userTableOptions.tableOptions.pageTotal = result.length;
        this.showHideLoading(false);
      } else {
        this.toast.sToast('error', result);
        this.showHideLoading(false);
      }
    });
  }
}
