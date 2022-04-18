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

@Component({
  selector: 'app-master-class',
  templateUrl: './master-class.component.html',
  styleUrls: ['./master-class.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class MasterClassComponent implements OnInit {
  @ViewChild('snav', {static: false}) snav: MatSidenav;
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
  episodeCount: any = {};
  defaultContent: any = {};
  episodeData: any = [];
  allUser: any = [];
  step = 0;
  priceStep = 0;
  pricingIndex = 0;
  uploadimage: any;
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
  description: any = [
    {
      language: '',
      description: '',
      title: '',
      key_takeaways: [{name: ''}],
      mini_announcement: '',
      short_description: '',
      is_primary: false
    }
  ];

  constructor(private _formBuilder: FormBuilder, public baseService: BaseRequestService,
  public loaderService: LoaderService, private aS: AuthenticationService,
  public modalService: ModalService, public toast: MyToastrService, public contentService: ContentDataService,
  private readonly router: Router, public confirmDialog: ConfirmDialogService,
  public cs: CommonService, public masterService: MasterService) { 
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
          iscolumnSearch: true
        }, {
          header: 'Created on',
          columnDef: 'c',
          filter: 'utcToLocale',
          cell: '(element: any) => `${element.c}`',
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
          iscolumnSearch: false
        }, {
          header: 'Updated on',
          columnDef: 'u',
          filter: 'utcToLocale',
          cell: '(element: any) => `${element.u}`',
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
          iscolumnSearch: false
        }, {
          header: 'Episode Count',
          columnDef: 'episode_details.episodes_total',
          filter: '',
          cell: '(element: any) => `${element.episode_details.episodes_total}`',
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
          iscolumnSearch: false,
        }, {
          header: 'Category',
          id: 'Category',
          columnDef: 'category',
          filter: '',
          cell: '(element: any) => `${element.category}`',
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
          iscolumnSearch: false,
        },  {
          header: 'Status',
          id: 'status',
          columnDef: 'status',
          filter: '',
          cell: '(element: any) => `${element.status}`',
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
          iscolumnSearch: true,
        }, {
          header: 'Languages',
          columnDef: 'languages',
          cell: '(element: any) => `${element.languages}`',
          order: 6,
          filter: false,
          visible: true,
          listView: true,
          iscolumnSearch: false,
          selectFilterArr: []
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
          {text: 'Delete', icon: 'delete_forever', callback: 'deleteFn', isGlobal: false}
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


  addLanguage(): void {
    this.description.push(
      {
        language: '',
        description: '',
        title: '',
        key_takeaways: [{name: ''}],
        mini_announcement: '',
        short_description: '',
        is_primary: false
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
    (event.checked) ? this.description.map((x: any, i: any) => x.is_primary = (i === index) ? true : false) : null;
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
        this.stepper.linear = false;
        this.stepper.selectedIndex = index;
        setTimeout(() => {
          this.stepper.linear = true;
        });
      }
    });
  }

  checkEpisodeData(): void {
    const lan = ['Tamil', 'English'];
    const count = 10;
    let index = 0;
    const dummy: any = {Tamil:[], English: []};
    if(index > lan.length){
      if(dummy[lan[index]].length !== count){
        dummy[lan[index]].append({name:1})
      }else{
        index = 1
      }
    }else{
      console.log(true);
      
    }
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
  async stepperNext(title: any, index: any): Promise<void> {
    switch (title) {
      case 'MasterClass':
        delete this.materClassData.uploadfile;
        delete this.materClassData.modeOfUpload;
        this.materClassData.description = []
        await this.stepperAction('/api/contentdata/createMasterClass', this.materClassData, 1, '');
        break;
      case 'Language':
        const data: any = {};
        this.description.map((item: any) => item.key_takeaways = item.key_takeaways.map((x: any) => x.name));
        data.description = this.description;
        data.content_id = (this.currentMasterClassUser) ? this.currentMasterClassUser : localStorage.currentMasterClassUser;
        await this.stepperAction('/api/contentdata/updateContentDescription', data, 2, '');
        break;
      case 'Pricing':
        await this.stepperAction('', this.pricing, 3, '');
        break;
      case 'EpisodeCount':
        await this.stepperAction('', this.episodeCount, 4, '');
        break;
      case 'DefualtContent':
        await this.stepperAction('', this.materClassData, 5, '');
        break;
      case 'EpisodeDetails':
        await this.stepperAction('', this.episodeData, 5, '');
        break;
      default:
        await this.stepperAction('', this.materClassData, 0, '');
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
    
    if (this.masterClassTableOptions.sortOptions) {
      let sorts;
      sorts = [{}];
      // @ts-ignore
      sorts[0][this.masterClassTableOptions.sortOptions.active] = {order: this.masterClassTableOptions.sortOptions.direction};
    }
    if (this.filterQuery && this.filterQuery.multi_match) {
      params.query.bool.must.push(this.filterQuery);
    }
    if (this.colFilterQuery && this.colFilterQuery.length) {
      // @ts-ignore
      params.query.bool.filter = [];
      this.colFilterQuery.forEach((obj: any) => {
        if (obj.bool.should[0].match) {
          params.query.bool.must.push(obj);
        } else {
          params.query.bool.filter.push(obj);
        }
      });
    }
    const q = JSON.stringify(params);
    const skip = this.classcurrentPage;
    const limit = this.masterClassTableOptions.tableOptions.pageSize;
    const fields = JSON.stringify(['c', 'u', '_id', 'title', 'episode_details.episodes_total', 'category_ref', 'languages',]);
    this.contentService.getAllApiContentdataGet({q, skip, limit}).subscribe((result: any) => {
      this.masterClassTableOptions.pageData = [];
      if (result.data.length) {
        result.data.map((list: any) => {
          list.category = (list.category_ref) ? list.category_ref.map((x: any) => x.name): [];
          list.episode_details = (list.episode_details) ? list.episode_details: {episodes_total: ''};
        })
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
          this.colFilterCols.splice(index, 1);
        } else if (obj.col === event.col) {
          obj.value = event.value;
        }
      });
    }
    this.colFilterCols.forEach((obj: any) => {
    const tmpObj = {bool: {should: [{query_string: {fields: [obj.col], query: `*${obj.value}*`}}]}};
    this.colFilterQuery.push(tmpObj);
    this.getMasterClass();
    });
  }

  masterClassfilterCall(idata: any): void {
    const fields = ['title', 'status'];
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
    console.log(idata);
    if (idata.action.text === 'Details') {
      const dataRow = idata.row;
      this.snav.open();
      this.getMasterClassData(idata.row);
    }
    if (idata.action.text === 'Delete') {
      const dataRow = idata.row;
    }
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
      this.materClassData[key] = event.target.files[0];
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
    this.baseService.doRequest(`/api/category`,
      'get', null, {}).subscribe((result: any) => {
      this.loaderService.display(false);
      if(result.data.length) this.categoryList = result.data;
    });
  }

  saveMasterData(): void {
    console.log(this.materClassData);
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

  async getLanguageAndCountry(): Promise<any> {
    this.languagesList = await this.baseService.doRequest(`/api/utilities/supportedLanguages`, 'post', {}).toPromise();
    this.contentTypeList = await this.baseService.doRequest(`/api/utilities/supportedDataTypes`, 'post', {}).toPromise();
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

  getMasterClassData(data: any): void {
    

  }
}
