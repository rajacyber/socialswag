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
import { CarouselService } from 'src/app/_services/carousel.service';
import { any } from 'prop-types';

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
  subscribedKeys:any={};
  allDataList: any = [];
  carouselTableOptions: any;
  carousel: any;
  companyLevelAccess = 'allCompanies';
  carouselData: any={};
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
  datapresent:boolean=false;
  countryList: any = [];
  celebrityList:any=[];
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
  thumbnail_image: any='';
  levelData:any={'level':''};
  @ViewChild('cat', {static: false}) cat: MatSidenav;



  constructor(public baseService: BaseRequestService, private httpClient: HttpClient, 
              public loaderService: LoaderService, private aS: AuthenticationService,
              public modalService: ModalService, public toast: MyToastrService,
              private readonly router: Router, public confirmDialog: ConfirmDialogService,
              public cs: CommonService, public carouselService:CarouselService) {
                this.subscribedKeys.addCategory = carouselService.addlevel.subscribe((value: any) => {
                  this.addCarouselLevel();     
                });
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
          header: 'Level',
          col: 'level',
          columnDef: 'level',
          filter: '',
          cell: '(element: any) => `${element.level}`',
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
          header: 'Headline',
          col: 'headline',
          columnDef: 'headline',
          filter: '',
          cell: '(element: any) => `${element.headline}`',
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
          header: 'Description',
          col: 'carousel_desc',
          columnDef: 'carousel_desc',
          filter: '',
          cell: '(element: any) => `${element.carousel_desc}`',
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
          header: 'Position',
          col: 'position',
          columnDef: 'position',
          filter: '',
          cell: '(element: any) => `${element.position}`',
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
        }, 
        {
          header: 'Product',
          col: 'data_type',
          columnDef: 'data_type',
          filter: '',
          cell: '(element: any) => `${element.data_type}`',
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
        },
        {
          header: 'Carousel Size',
          col: 'carousel_size',
          columnDef: 'carousel_size',
          filter: '',
          cell: '(element: any) => `${element.carousel_size}`',
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
          iscolumnSearch: true,
          width:'100px'
        },
        {
          header: 'Image Link',
          col: 'image_upload',
          columnDef: 'image_upload',
          filter: '',
          cell: '(element: any) => `${element.image_upload}`',
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
        },
        {
          header: 'Content Title',
          col: 'contentdata_ref.title',
          columnDef: 'contentdata_ref.title',
          filter: '',
          cell: '(element: any) => `${element.contentdata_ref.title}`',
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
          iscolumnSearch: true,
          width:'100px'
        },
        {
          header: 'Entity Title',
          col: 'entity_ref.title',
          columnDef: 'entity_ref.title',
          filter: '',
          cell: '(element: any) => `${element.entity_ref.title}`',
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
          iscolumnSearch: true,
          width:'100px'
        }
      ],
      sortOptions: {active: 'data_type', direction: 'asc'},
      faClass: 'Celebritycarousel',
      _pageData: [],
      tableOptions: {
        id: 'carousels',
        title: 'Carousels',
        isServerSide: true, 
        // add: (this.aS.hasPermission('kcarousels', 'create')),
        selectText: 'carousel(s)',
        loading: true,
        floatingFilter: true,
        rowSelection: false,
        showAction: true,
        actionMenuItems: [
          {
          text: 'Upload Images',
          icon: 'cloud_upload',
          callback: 'uploadFn',
          isGlobal: false
          },
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

  savelevel(){
    console.log("level data", this.levelData);
    let d = this.levelData
    this.baseService.doRequest(`/api/carousel/createCarouselLevel`, 'post', d)
      .subscribe((result: any) => {
        this.loaderService.display(false);
        console.log("level data posted", result);
        if (result.level) {
          this.cat.close()
          this.levelData={'level':''}
          this.toast.sToast('success', 'level Added Successfully!');
          this.getLevel();
        } else {
          this.toast.sToast('error', result[1]);
        }
      });
  }

  ngOnInit(): void {
    this.carouselTableOptions.pageData = [];
    setTimeout(() => {
      this.getcarousels();
      this.getUsers();
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
      // console.log("filteredData before", this.filteredData)
      // this.filteredData.next(this.allDataList.slice());
      // console.log("filteredData after", this.filteredData)
      // this.datapresent=false;
    let d:any=[];
    console.log("datatype updated", this.carouselData.data_types);
    this.allDataList.forEach((ele:any) =>{
      if(ele.data_type === this.carouselData.data_types){
        d.push(ele);
      }
    })
    this.filteredData.next(d.slice());
    console.log("this.filteredData", this.filteredData)
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
          must: [  {
        bool: {
           should: [{match: {'data_type': 'MasterClass'}}, {match: {'data_type': 'Channel'}}]
        }
      }]}}
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
        result.data.forEach( (ele:any) =>{
          if(ele.data_type === 'Channel'){
            if(ele.entity_ref){
              ele.displayData = ele.entity_ref.name;
            }
          }
          if(ele.data_type === 'MasterClass'){
            if(ele.title){
              ele.displayData = ele.title;
            }
          }
        })
        this.allDataList = result.data
        this.filteredData.next(result.data.slice());
        console.log("allDataList", this.allDataList)
        console.log("filteredData", this.filteredData)
        if(this.carouselTitle === 'Edit Carousel'){
         
          this.updatedataType(this.carouselData.data_types)
          this.snav.open();      
        }
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
        console.log("this.key", reader.result);
        this.carouselData.image_uploads = reader.result
      };
    }
    console.log("this.image", this.images);
    console.log("this.image_uploads", this.image_uploads)
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
    const defaultData = await this.baseService.doRequest(`/api/utilities/getContent`, 'post',{}
    ).toPromise();
    this.carouselSize = defaultData.carousel_size;
    this.dataType = defaultData.data_type;
    // this.dataType = ['Channel', 'MasterClass', 'Other']
    await this.getLevel();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  getAcl(): void {
    this.selectedComp = [];
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
    if(data.action.text === 'Edit'){
      this.carouselTitle = 'Edit Carousel'
      this.carousel_id = data.row._id;
      if(this.carouselTitle === 'Edit Carousel'){
        this.dataCtrl.setValue(data.row.contentdata_ref.id)
      
      this.editcarousel(this.carousel_id, data)
      this.getDataList()}
    }
    if(data.action.text === 'Delete'){
      this.carousel = data.row;
    this.deletecarouselConfirmationDialog()}
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
    const fields = JSON.stringify(['level']);
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

  updatedataType($event: any): void {
    this.datapresent=false;
    let d:any=[];
    console.log("datatype updated", $event);
    this.allDataList.forEach((ele:any) =>{
      if(ele.data_type === $event){
        d.push(ele);
      }
    })
    this.filteredData.next(d.slice());
    console.log("this.filteredData", this.filteredData)
    if(d && d.length>0){
      this.datapresent=true;
    }
  }

  addCarousel(): void {
    this.carouselTitle="Add Carousel";
    this.carouselData = {levels: '', carousel_descs: '', positions: '', data_types: '', carousel_sizes: '', navigate_links: '', content_id: '',celebrity_id:''};
    console.log('new carousel', this.carouselData)
    this.snav.open();
    this.getDataList();
  }

  backFunUpload(): void {
    this.upload.close();
    this.images = {};
  }

  backFun(): void {
    this.snav.close();
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
    this.carousel = element.row;
    this.carouselData.levels = element.row.level;
    this.carouselData.carousel_descs = element.row.carousel_desc;
    this.carouselData.positions = element.row.position;
    this.carouselData.data_types = element.row.data_type;
    this.carouselData.carousel_sizes = element.row.carousel_size;
    this.carouselData.navigate_links = element.row.navigate_link;
    this.carouselData.image_uploads = element.row.image_upload;
    if(element.row.contentdata_ref && element.row.contentdata_ref.id){
    this.carouselData.content_id = element.row.contentdata_ref.id}
    this.image_uploads = element.row.image_upload;
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
    this.baseService.doRequest(`/api/carousel/uploadCarousel`, 'post', {data:data})
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

  updateCarousel(data: any): any {
    this.loaderService.display(true);
    this.loaderService.display(true);
    data.carousel_id = this.carousel._id
    this.baseService.doRequest(`/api/uploadCarouselDetails`, 'put', data)
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
    const message = 'Are you sure you want to delete this carousel?';
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
              exists: {
                'field': 'carousel_size'
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
    const fields = JSON.stringify(['_id', 'c', 'u', 'level', 'headline', 'carousel_desc', 'position', 'data_type', 'carousel_size', 'image_upload', 'navigate_link', 'contentdata_ref.id', 'contentdata_ref.title', 'contentdata_ref.data_type','entity_ref.id', 'entity_ref.title', 'entity_ref.data_type' ]);
    this.baseService.doRequest(`/api/carousel`, 'get', null,
      {q, skip, s, limit}).subscribe((result: any) => {
      this.loaderService.display(false);
      if (result) {
        result.data.map((item: any) => {
          item.contentdata_ref = (item.contentdata_ref) ? item.contentdata_ref : { title: '', id:'', data_type:''}
          item.entity_ref = (item.entity_ref) ? item.entity_ref : { title: '', id:'', data_type:''}
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

  addCarouselLevel(): void {
    this.cat.open();
  }

  getUsers(): void {
    this.showHideLoading(true);
    this.loaderService.display(true, 'Getting users...');
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
    const q = JSON.stringify(cq);
    const skip = 0
    const limit = 10000;
    const fields = JSON.stringify(['_id', 'phone', 'email', 'name', 'languages', 'country.name', 'c', 'u']);
    this.baseService.doRequest(`/api/entity`, 'get', null,
      {q, skip, limit}).subscribe((result: any) => {
      this.loaderService.display(false);
      if (result) {
        result.data.map((item: any) => {
          item.country = (item.country) ? item.country : { name: ''}
        })
        this.celebrityList = result.data;
        this.showHideLoading(false);
      } else {
        this.toast.sToast('error', result);
        this.showHideLoading(false);
      }
    });
  }

}