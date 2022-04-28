import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseRequestService} from '../../../_services/base.service';
import {CommonService} from '../../../_services/common.services';
import {ModalService} from '../../../_services/modal.service';
import {Router} from '@angular/router';
import {LoaderService} from '../../../_services/loader.service';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ConfirmDialogService} from '../../../_services/confirmdialog.service';
import {MyToastrService} from '../../../_services/toastr.service';
import {MatSidenav} from '@angular/material/sidenav';
import {AuthenticationService} from '../../../_services/authentication.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MasterService } from 'src/app/_services/master.service';
import { MatStepper } from '@angular/material/stepper';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { ContentDataService } from 'src/app/api/services';
import { MatSelect } from '@angular/material/select';
import { BehaviorSubject, interval, ReplaySubject, Subject } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {HttpClient} from '@angular/common/http';
import { CompanySharedService } from 'src/app/_services/company-shared.service';
import {
  zoomInOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'app-master-class',
  templateUrl: './master-class.component.html',
  styleUrls: ['./master-class.component.scss'],
  animations: [
    zoomInOnEnterAnimation()
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class MasterClassComponent implements OnInit {
  @ViewChild('snav', {static: false}) snav: MatSidenav;
  @ViewChild('status', {static: false}) status: MatSidenav;
  @ViewChild('cat', {static: false}) cat: MatSidenav;
  @ViewChild('stepper') stepper: MatStepper;
  @ViewChild('userSelect', {static: true}) userSelect!: MatSelect;
 

  public userCtrl: FormControl = new FormControl();

  public userFilterCtrl: FormControl = new FormControl();
  public filteredUsers: ReplaySubject<any> = new ReplaySubject<any>(1);
  protected users: any = [];
  protected _onDestroy = new Subject<void>();
  public searching = false;
  masterClassTableOptions: any;
  classcurrentPage = 0;
  masterClassColOptions: any;
  showMasterTable= true;
  categoryList: any = [];
  category: any = {};
  materClassData: any = {};
  language: any = [];
  pricing: any = [];
  allUser: any = [];
  selectedId: any = '';
  selectedLanguage: any = [];
  step = 0;
  priceStep = 0;
  pricingIndex = 0;
  uploadimage: any = {
    key_takeaways_images: ''
  };
  key_takeaways_images: '';
  Objectkeys = Object.keys;
  languagesList: any = [];
  contentTypeList: any = [];
  pricingModelList: any = [];
  recurringTypeList: any = [];
  deviceList: any = [];
  price_model: any = [{
    language: '',
    pricing_country: [
      {
        price: '',
        currency_code: '',
        pricing_model: '',
        recurring_interval: '',
        device_type: '',
        recurring_type: ''
      }
    ]
  }];
  currencyList: any = [];
  pricingList: any = [{pricing: 'INR', selected: false}, {pricing: 'USD', selected: false}];
  mode: any = ['Onetime', 'Yearly', 'Monthly'];

  // MAT STEPPER
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  subscribedKeys: any = {};
  filteredUser: any = [];
  filterQuery: any;
  colFilterQuery: any;
  colFilterCols: any = [];
  masterClassLanguages: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  addOnBlur = true;
  removable = true;
  selectable = true;
  currentMasterClassUser: any;
  videoDetails: any = [
    {
      trailer_type: '',
      trailer_video: '',
      preview_type: '',
      preview_video: '',
      audio_type: '',
      audio_track: ''
    }
  ];
  description: any = [
    {
      language: '',
      description: '',
      title: '',
      key_takeaways: [{name: ''}],
      mini_announcement: '',
      short_description: '',
      is_default: false
    }
  ];
  defaultContent: any = {
    video: '',
    trailer: '',
    preview_video: '',
    audio_track: ''
  }
  showMasterClasses = true;
  statusLists: any = [];
  selectedStatus: any;
  videoStep = 0;

  constructor(private _formBuilder: FormBuilder, public baseService: BaseRequestService,
  public loaderService: LoaderService, private aS: AuthenticationService, public httpClient: HttpClient,
  public modalService: ModalService, public toast: MyToastrService, public contentService: ContentDataService,
  private readonly router: Router, public confirmDialog: ConfirmDialogService,
  public cs: CompanySharedService, public masterService: MasterService) { 
    this.subscribedKeys.addCategory = masterService.addCategory.subscribe((value: any) => {
      this.addMasterClassCategory();     
    });
    this.masterClassTableOptions = {
      columns: [
        {
          header: 'Name',
          columnDef: 'title',
          filter: '',
          cell: '(element: any) => `${element.title}`',
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
          isSort: true,
          iscolumnSearch: true,
          width: '100px',
          colFilters: {type: 'text', hKey: true},
        }, {
          header: 'Master Name',
          columnDef: 'entity_ref.name',
          filter: '',
          cell: '(element: any) => `${entity_ref.name}`',
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
          imgPath: '',
          isSort: true,
          iscolumnSearch: true,
          colFilters: {type: 'text', hKey: true},
        }, {
          header: 'Created on',
          columnDef: 'c',
          filter: 'DD-MMM-YYYY',
          cell: '(element: any) => `${element.c}`',
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
        }, {
          header: 'Released on',
          columnDef: 'released_on',
          filter: 'DD-MMM-YYYY',
          cell: '(element: any) => `${element.released_on}`',
          order: 4,
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
          header: 'Episode Count',
          columnDef: 'episode_details.episodes_total',
          filter: '',
          cell: '(element: any) => `${element.episode_details.episodes_total}`',
          order: 5,
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
          iscolumnSearch: false,
        }, {
          header: 'Category',
          id: 'Category',
          columnDef: 'category_ref.name',
          filter: '',
          cell: '(element: any) => `${element.category_ref.name}`',
          order: 6,
          visible: true,
          listView: true,
          dictView: true,
          iscolumnSearch: true,
          isSort: true,
          width: '300px',
          selectFilter: true,
          list: true,
          colFilters: {type: 'text', hKey: true},
        },  {
          header: 'Status',
          id: 'status',
          columnDef: 'status',
          filter: '',
          cell: '(element: any) => `${element.status}`',
          order: 7,
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
          selectFilter: true,
          colFilters: {
            type: 'select',
            hKey: false, isKeyword: true,
            options: [{value: 'Published', name: 'Published'}, {value: 'ComingSoon', name: 'ComingSoon'}]
          }
        }, {
          header: 'Languages',
          columnDef: 'languages',
          cell: '(element: any) => `${element.languages}`',
          order: 8,
          filter: false,
          visible: true,
          listView: true,
          iscolumnSearch: true,
          isSort: true,
          width: '300px',
          selectFilter: true,
          list: true,
          colFilters: {type: 'text', hKey: true},
        }
      ],
      sortOptions: {active: 'u', direction: 'desc'},
      faClass: 'MasterClass',
      _pageData: [],
      tableOptions: {
        id: 'masterclass',
        title: 'Masterclasses',
        isServerSide: true,
        selectText: '',
        loading: true,
        floatingFilter: true,
        rowSelection: false,
        showColFilter: true,
        showAction: true,
        actionMenuItems: [
          {text: 'Details', icon: 'info', callback: 'detailFn', isGlobal: false},
          {text: 'Delete', icon: 'delete_forever', callback: 'deleteFn', isGlobal: false},
          {text: 'Change Status', icon: 'tags', callback: 'changeFn', isGlobal: false},
        ],
        pagination: true,
        pageOptions: [5, 10, 25, 50, 100],
        pageSize: 15,
        search: true,
        showhideList: true,
        refreshData: true,
        exportExcel: true,
        add: true,
        columnSearch: true,
        compareData: false,
        hideDownload: true
      }
    };
    
  }

  ngOnInit(): void {
    this.getMasterClass();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.userFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterUsers();
    });
    this.getCelebrityUserList();
    this.getStatus();
  }

  private filterUsers(): void {
    if (!this.users) {
      return;
    }
    // get the search keyword
    let search = this.userFilterCtrl.value;
    if (!search) {
      this.filteredUsers.next(this.users.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.getCelebrityUserList(search);
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  saveMasterData():void {

  }

  addTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      this.materClassData.tags.push(value.trim());
    }
    if (input) {
      input.value = '';
    }
  }

  removeTag(port: any): void{
    const index = this.materClassData.tags.indexOf(port);
    if (index >= 0) {
      this.materClassData.tags.splice(index, 1);
    }
  }

  
  addPrice(): void {
    this.price_model.push({
      language: '',
      pricing_country: [
        {
          price: '',
          currency_code: '',
          pricing_model: '',
          recurring_interval: '',
          device_type: '',
          recurring_type: ''
        }
      ]
    });
    this.priceNextStep();
  }

  removePrice(index: any): void {
    this.price_model.splice(index, 1);
    this.pricePrevStep();
  }

  setPrincingIndexStep(index: number): void {
    this.pricingIndex = index;
  }

  nextPricingIndexStep(): void {
    this.pricingIndex++;
  }

  prevPriceingIndexStep(): void {
    this.pricingIndex--;
  }

  addCurrency(index: any): void {
    this.price_model[index].pricing_country.push({
      price: '',
      currency_code: '',
      pricing_model: '',
      recurring_interval: '',
      device_type: '',
      recurring_type: ''
    });
    this.nextPricingIndexStep();
  }

  removeCurrency(index: any, idx: any): void {
    this.price_model[index].pricing_country.splice(idx, 1);
    this.prevPriceingIndexStep();
  }

  addVideoLang(): void {
    this.videoDetails.push(
      {
        trailer_type: '',
        trailer_video: '',
        preview_type: '',
        preview_video: '',
        audio_type: '',
        audio_track: ''
      }
    );
    this.videoNextStep();
  }

  removeVideoLang(index: any): void {
    this.videoDetails.splice(index, 1);
    this.videoPrevStep();
  }
  addLanguage(): void {
    this.description.push(
      {
        language: '',
        description: '',
        title: '',
        key_takeaways: [{name: ''}],
        mini_announcement: '',
        short_description: '',
        is_default: false,
        video_type: '',
        video: '',
        trailer_type: '',
        trailer_video: '',
        preview_type: '',
        preview_video: '',
        audio_type: '',
        audio_track: '',
      }
    );
    this.nextStep();
  }

  removeLanguage(index: any): void {
    this.description.splice(index, 1);
    this.prevStep();
  }

  addTakeawayKey(index: any): void {
    this.description[index].key_takeaways.push({name: ''} );
  }

  removeTakeawayKey(index: any, idx: any): void {
    this.description[index].key_takeaways.splice(idx, 1);
  }

  mastershowHideLoading(status: any): void {
    const data = Object.assign({}, this.masterClassTableOptions);
    this.masterClassTableOptions = {};
    this.masterClassTableOptions = data;
    this.masterClassTableOptions.tableOptions.loading = status;
  }

  addMasterClassCategory(): void {
    this.cat.open();
  }

  isPrimary(index: any, event:any): void {
    (event.checked) ? this.description.map((x: any, i: any) => x.is_default = (i === index) ? true : false) : null;
  }

  saveCategory(): void {
    this.loaderService.display(true);
    this.baseService.doRequest(`/api/category`,
      'post', this.category).subscribe((result: any) => {
      this.loaderService.display(false);
      if(result) this.toast.sToast('success', 'Category added successfully!.');
      else this.toast.sToast('error', 'Error!.');
    });
  }


  stepperAction(url:any, data: any, index: any, msg: any): void {
    this.loaderService.display(true, msg);
    this.baseService.doRequest(url,
      'post', data, {}).subscribe((result: any) => {
      this.loaderService.display(false);
      if(result){
        (!this.currentMasterClassUser) ? this.currentMasterClassUser = localStorage.currentMasterClassUser = result._id : null;
        if(index === 'end'){
          this.toast.sToast('success', 'Masterclass added successfully!.');
          this.showMasterTable = true;
          this.getMasterClass();
        }else {
          this.stepper.linear = false;
          this.stepper.selectedIndex = index;
          setTimeout(() => {
            this.stepper.linear = true;
          });
        }
      }
    });
  }


  setStep(index: number): void {
    this.step = index;
  }

  nextStep(): void {
    this.step++;
  }

  prevStep(): void {
    this.step--;
  }

  priceSetStep(index: number): void {
    this.priceStep = index;
  }

  priceNextStep(): void {
    this.priceStep++;
  }

  pricePrevStep(): void {
    this.priceStep--;
  }

  videoSetStep(index: number): void {
    this.videoStep = index;
  }

  videoNextStep(): void {
    this.videoStep++;
  }

  videoPrevStep(): void {
    this.videoStep--;
  }

  async stepperNext(title: any, index: any): Promise<void> {
    switch (title) {
      case 'MasterClass':
        delete this.materClassData.uploadfile;
        delete this.materClassData.modeOfUpload;
        this.materClassData.description = []
        await this.stepperAction('/api/contentdata/createMasterClass', this.materClassData, 1, '');
        break;
      case 'DefaultContent':
        let defaultData: any = {};
        defaultData.default_content = this.defaultContent;
        defaultData.content_id = (this.currentMasterClassUser) ? this.currentMasterClassUser : localStorage.currentMasterClassUser;
        await this.stepperAction('/api/contentdata/defaultContent', defaultData, 2, '');
        break;
      case 'Language':
        this.description.map((item: any) => item.key_takeaways = item.key_takeaways.map((x: any) => x.name));
        const videoDetails: any = this.videoDetails;
        videoDetails.map((item: any, idx: any) => {
          item[idx].preview_video = (this.videoDetails[idx].preview_type === 'New') ? item[idx].preview_video : this.defaultContent.preview_video;
          item[idx].trailer_video = (this.videoDetails[idx].trailer_type === 'New') ? item[idx].trailer_video : this.defaultContent.trailer_video;
          item[idx].audio_track = (this.videoDetails[idx].audio_type === 'New') ? item[idx].audio_track : this.defaultContent.audio_track;
        });
        this.uploadimage.data = JSON.stringify(this.description);
        this.uploadimage.video_details = JSON.stringify(videoDetails);
        this.uploadimage.content_id = (this.currentMasterClassUser) ? this.currentMasterClassUser : localStorage.currentMasterClassUser;
        const formData = new FormData();
        this.Objectkeys(this.uploadimage).forEach(obj => {
          formData.append(obj, this.uploadimage[obj]);
        });
        this.httpClient.post<any>('/api/contentdata/updateImage',
        formData).subscribe((result: any) => {
          if (result) {
            this.stepper.linear = false;
            this.stepper.selectedIndex = 3;
            setTimeout(() => {
              this.stepper.linear = true;
            });
          } else {
            this.toast.sToast('error', result.msg);
          }
        });
        break;
      case 'Pricing':
        const data:any = {};
        data.price_model = this.price_model;
        data.content_id = (this.currentMasterClassUser) ? this.currentMasterClassUser : localStorage.currentMasterClassUser;
        await this.stepperAction('/api/contentdata/updateContentPricing', data, 'end', '');
        break;
      default:
        break;
    }
  }

  getMasterClass(): void {
    this.mastershowHideLoading(true);
    this.loaderService.display(true, 'Getting masterclasses...');
    this.masterClassTableOptions.serverSide = {
      service: 'contentService', fn: 'getAllApiContentdataGet', q: {
        query: {
          bool: {
            must: [{match: {'data_type.keyword': 'MasterClass'}}]
          }
        }
      }
    };
    let params: any;
    params = {
      query: {
        bool: {
          must: [{match: {'data_type.keyword': 'MasterClass'}}]
        }
      }
    };
    
    if (this.filterQuery && this.filterQuery.multi_match) {
      params.query.bool.must.push(this.filterQuery);
    }
    if (this.colFilterQuery && this.colFilterQuery.length) {
      // @ts-ignore
      params.query.bool.filter = [];
      this.colFilterQuery.forEach((obj: any) => {
        if (obj.bool.should && obj.bool.should[0].match) {
          params.query.bool.must.push(obj);
        } else {
          params.query.bool.filter.push(obj);
        }
      });
    }
    let sorts: any = [{}];
      if (this.masterClassTableOptions.sortOptions && this.masterClassTableOptions.sortOptions.direction
        && this.masterClassTableOptions.sortOptions.direction !== '') {
      const orderArr = ['', 'c', 'u', '_id'];
      if (orderArr.indexOf(this.masterClassTableOptions.sortOptions.active) === -1) {
        // @ts-ignore
        sorts[0][this.masterClassTableOptions.sortOptions.active + '.keyword'] = {order: this.masterClassTableOptions.sortOptions.direction};
      } else {
        // @ts-ignore
        sorts[0][this.masterClassTableOptions.sortOptions.active] = {order: this.masterClassTableOptions.sortOptions.direction};
      }
    }
    const q = JSON.stringify(params);
    const skip = this.classcurrentPage;
    const sort = JSON.stringify(sorts);
    const limit = this.masterClassTableOptions.tableOptions.pageSize;
    const fields = JSON.stringify(['c', 'u', '_id', 'title', 'episode_details.episodes_total', 'category_ref.name', 'languages']);
    this.contentService.getAllApiContentdataGet({q, skip, limit, sort}).subscribe((result: any) => {
      this.masterClassTableOptions.pageData = [];
      if (result.data.length) {
        this.masterClassTableOptions.pageData = result.data;
        this.masterClassTableOptions.tableOptions.pageTotal = result.total;
      } else {
        this.masterClassTableOptions.pageData = [];
        this.masterClassTableOptions.tableOptions.pageTotal = 0;
      }
      this.mastershowHideLoading(false);
      this.loaderService.display(false);
    });
    
  }
  
  masterClasssortCall(idata: any): void {
    this.masterClassTableOptions.sortOptions = idata;
    this.getMasterClass();
  }

  masterColFilterCall(event: any): void {
    this.colFilterQuery = [];
    if (!this.colFilterCols.filter((x: any) => x.col === event.col).length) {
      if (event.value !== '') {
        this.colFilterCols.push(event);
      }
    } else {
      this.colFilterCols.forEach((obj: any, index: number) => {
        if (obj.col === event.col && event.value === '') {
          if(event.col === 'c' || event.col === 'u') this.colFilterCols.filter((x: any) => x.col !== event.col);
          else this.colFilterCols.splice(index, 1);
        } else if (obj.col === event.col) {
          obj.value = event.value;
        }
      });
    }

    
    this.colFilterCols.forEach((obj: any) => {
      let tmpObj: any = {};
      if(obj.col !== 'c' && obj.col !== 'u'){
        tmpObj = {bool: {should: [{query_string: {fields: [obj.col], query: `*${obj.value}*`}}]}};
      }
      if(typeof event.value === "object") {
        const filter: any = [{range: {}},{range: {}}];
        const arun = event.col;
        const start = new Date(event.value.start);
        const end = new Date(event.value.end);
        filter[0].range[arun] = { gte: start.getFullYear() + "-" + ("0"+(start.getMonth()+1)).slice(-2) + "-" + ("0"+start.getDate()).slice(-2)}
        filter[1].range[arun] = { lte: end.getFullYear() + "-" + ("0"+(end.getMonth()+1)).slice(-2) + "-" + ("0"+end.getDate()).slice(-2)}
        tmpObj.bool.filter = filter;
      }
      this.colFilterQuery.push(tmpObj);
    });
    this.getMasterClass();
  }

  masterClassfilterCall(idata: any): void {
    const fields = ['title', 'status', 'languages', 'category_ref.name','entity_ref.name'];
    this.filterQuery = (idata && idata.length > 0) ? {
      multi_match: {
        query: idata,
        type: 'phrase_prefix',
        fields
      }
    } : undefined;
    this.getMasterClass();
  }

  masterClassactionCall(idata: any): void {
    if (idata.action.text === 'Details') {
      if(!idata.row.languages){
        this.toast.sToast("error", 'Language not found!');
      } else {
        this.selectedId = idata.row._id;
        this.selectedLanguage = idata.row.languages;
        this.masterService.contentId({id: idata.row._id, language: idata.row.languages});
        this.showMasterClasses = false;
      }
    }
    if (idata.action.text === 'Delete') {
      const dataRow = idata.row;
    }
    if (idata.action.text === 'Change Status') {
      this.selectedStatus = idata.row.status;
      this.selectedId = idata.row._id;
      this.status.open();
    }
  }

  saveStatus(): void {
    this.loaderService.display(false);
    const data = {content_id: this.selectedId, status: this.selectedStatus}
    this.baseService.doRequest(`/api/contentdata/updatestatus`, 'post',data).subscribe((result: any) => {
      this.loaderService.display(false);
      if(result) {
        this.toast.sToast('success', 'Status updated successfully!.');
        this.status.close();
      } else {
        this.toast.sToast('error', 'Error!.');
      }
    });
  }

  masterClasspageCall(event: any): void {
    this.masterClassTableOptions.tableOptions.pageSize = event.pageSize;
    this.classcurrentPage = event.pageIndex;
    this.getMasterClass();
  }

  close(): void {
    this.snav.close();
  }
  uploadFile(event: any, key: string): void {
    if (event.target.files.length > 0) {
      this.uploadimage[key] = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (ev) => {
        // @ts-ignore
        this[key] = reader.result;
      };
    }
  }

  getCategory(): void {
    this.loaderService.display(true);
    let cq: any;
    cq = {query: {bool: {must: [{exists: {field: 'name'}}]}}};
    let s: any;
    s = [{ 'name.keyword': {'order' : "asc"}}];
    const sort = JSON.stringify(s);
    const query = JSON.stringify(cq);
    const limit = 1000;
    this.baseService.doRequest(`/api/category`,
      'get', null, {query, sort, limit}).subscribe((result: any) => {
      this.loaderService.display(false);
      if(result.data.length) this.categoryList = result.data;
    });
  }

  getCelebrityUserList(search?: any): void {
    let cq: any;
    cq = {query: {bool: {must: [{exists: {field: 'name'}}, {exists: {field: 'email'}}]}}};
    if (search && search !== '') {
      cq.query.bool.must.push({ match_bool_prefix: { name: search.toLowerCase() } });
    }
    let sort: any;
    sort = [{}];
    const q = JSON.stringify(cq);
    const skip = 0;
    const limit = 100;
    this.baseService.doRequest(`/api/entity`, 'get', null,{q, skip, limit}).subscribe((result: any) => {
      this.loaderService.display(false);
      if (result.data.length) {
        this.allUser = result.data
        this.filteredUsers.next(result.data.slice());
      } else {
        this.filteredUsers.next([]);
      }
      
    });
  }

  closeCurrentUser(event: any): void {
    if (this.allUser) {
      this.filteredUsers.next(this.allUser.slice());
    }
    if (!event) {
      this.getCelebrityUserList();
    }
  }

  async getStatus(): Promise<any> {
    const defaultData = await this.baseService.doRequest(`/api/utilities/getContent`, 'post', {}).toPromise();
    this.statusLists = defaultData.content_status;
  }
  async getLanguageAndCountry(): Promise<any> {
    const defaultData = await this.baseService.doRequest(`/api/utilities/getContent`, 'post', {}).toPromise();
    this.languagesList = defaultData.language;
    this.deviceList = defaultData.device_type;
    this.pricingModelList = defaultData.pricing_type;
    this.recurringTypeList = defaultData.recurring_type;
    this.currencyList = defaultData.currency_code;
    this.contentTypeList = defaultData.content_type;
  }

  masterClassaddTableData(): void {
    this.showMasterTable = false
    this.getLanguageAndCountry();
    this.getCategory();
    this.materClassData = {
      title: '',
      category: [],
      modeOfUpload: '',
      uploadfile: '',
      tags: [],
      content_type: '',
      headline: '',
      celebrity_id: ''
    }
  }

  masterClasstimerCallData(): void {
    this.getMasterClass();
  }

  closeInteg(): void {
    this.showMasterClasses = true;
  }
}
