import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseRequestService} from '../../../_services/base.service';
import {CommonService} from '../../../_services/common.services';
import {ModalService} from '../../../_services/modal.service';
import {Router} from '@angular/router';
import {LoaderService} from '../../../_services/loader.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ConfirmDialogService} from '../../../_services/confirmdialog.service';
import {MyToastrService} from '../../../_services/toastr.service';
import {MatSidenav} from '@angular/material/sidenav';
import {AuthenticationService} from '../../../_services/authentication.service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MasterService } from 'src/app/_services/master.service';
import { MatStepper } from '@angular/material/stepper';

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


  step = 0;
  languagesList: any = [{language: 'Tamil', selected: false}, {language: 'English', selected: false}];
  pricingList: any = [{pricing: 'INR', selected: false}, {pricing: 'USD', selected: false}];
  mode: any = ['Onetime', 'Yearly', 'Monthly'];

  // MAT STEPPER
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  subscribedKeys: any = {};

  constructor(private _formBuilder: FormBuilder, public baseService: BaseRequestService,
  public loaderService: LoaderService, private aS: AuthenticationService,
  public modalService: ModalService, public toast: MyToastrService,
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
          iscolumnSearch: false
        }, {
          header: 'Creator Name',
          id: 'CreatorName',
          columnDef: 'creator_name',
          filter: '',
          cell: '(element: any) => `${element.title}`',
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
          header: 'Created on',
          columnDef: 'c',
          filter: 'utcToLocale',
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
          iscolumnSearch: false
        }, {
          header: 'Updated on',
          columnDef: 'u',
          filter: 'utcToLocale',
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
          iscolumnSearch: false
        }, {
          header: 'Episode Count',
          columnDef: 'episodes_count',
          filter: '',
          cell: '(element: any) => `${element.episodes_count}`',
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
        }, {
          header: 'Category',
          id: 'Category',
          columnDef: 'category',
          filter: '',
          cell: '(element: any) => `${element.category}`',
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
        }, {
          header: 'Languages',
          columnDef: 'languages',
          cell: '(element: any) => `${element.languages}`',
          order: 3,
          filter: false,
          visible: true,
          listView: true,
          iscolumnSearch: false,
          selectFilterArr: []
        }, {
          header: 'Pricing',
          id: 'pricing',
          columnDef: 'pricing',
          filter: false,
          cell: '(element: any) => `${element.pricing}`',
          order: 4,
          visible: true,
          listView: true,
        }
      ],
      sortOptions: {active: 'u', direction: 'desc'},
      faClass: 'MasterClass',
      _pageData: [],
      tableOptions: {
        id: 'masterclass',
        title: 'Masterclass',
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
  }
  rangshowHideLoading(status: any): void {
    const data = Object.assign({}, this.masterClassTableOptions);
    this.masterClassTableOptions = {};
    this.masterClassTableOptions = data;
    this.masterClassTableOptions.tableOptions.loading = status;
  }

  addMasterClassCategory(): void {
    this.cat.open();
  }

  saveCategory(): void {
    this.loaderService.display(true);
    this.baseService.doRequest(`/api/category`,
      'post', this.category).subscribe((result: any) => {
      this.loaderService.display(false);
      console.log(result);
    });
  }


  stepperAction(url:any, data: any, index: any, msg: any): void {
    this.loaderService.display(true, msg);
    this.baseService.doRequest(url,
      'post', data, {}).subscribe((result: any) => {
      this.loaderService.display(false);
      console.log(result);
      if(result){
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

  async stepperNext(title: any, index: any): Promise<void> {
    switch (title) {
      case 'MasterClass':
        await this.stepperAction('', this.materClassData, 1, '');
        break;
      case 'Language':
        await this.stepperAction('', this.language, 2, '');
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
    // this.loaderService.display(true, 'Getting master class data ....');
    this.rangshowHideLoading(true);
    // this.masterClassTableOptions.serverSide = {
    //   service: 'discoverySettingsService', fn: 'getAllApiDiscoverysettingsGet', q: {
    //     query: {
    //       bool: {
    //         must: [
    //           {match: {'companyRef.id.keyword': '' + ''}},
    //           {exists: {field: 'discovery_type'}}
    //         ]
    //       }
    //     }
    //   }
    // };
    let params;
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
    const q = JSON.stringify(params);
    const skip = this.classcurrentPage;
    const limit = this.masterClassTableOptions.tableOptions.pageSize;
    const fields = JSON.stringify(['c', 'u', '_id', 'name', 'title', 'episodes_count', 'category', 'languages', 'pricing']);
    this.loaderService.display(true);
    this.baseService.doRequest(`/api/getmasterclass/getMasterClasses`,
      'post', null, {q, skip, limit}).subscribe((result: any) => {
      this.loaderService.display(false);
      console.log(result);
      const language: any = []; const pricing: any = [];
      result.data.map((list: any) => {

      })
    });
    this.masterClassTableOptions.pageData = [
      {
        _id: "759a0b71-fcbb-48cd-9f3f-0b639f019ca7",
        c: "2022-04-05T11:54:28.534739",
        u: "2022-04-05T11:56:54.659219",
        title: "testing",
        creator_name: "tester",
        episode_count: 7,
        category: "test",
        languages: ["Tamil","English"],
        pricing: ["INR-500","USD-400"]
      }
      
    ]
    this.rangshowHideLoading(false);
    this.loaderService.display(false);
    
  }
  masterClasssortCall(idata: any): void {
    this.masterClassTableOptions.sortOptions = idata;
    this.getMasterClass();
  }

  masterClassfilterCall(idata: any): void {
    const fields: any[] = [];
    this.masterClassTableOptions.columns.forEach((obj: { columnDef: any; }) => {
      fields.push(obj.columnDef);
    });
    this.masterClassTableOptions = (idata && idata.length > 0) ? {
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
      this.getMasterClassData();
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

  masterClassaddTableData(): void {
    this.showMasterTable = false
    this.getCategory();
    this.materClassData = {
      category: [],
      modeOfUpload: '',
      uploadfile: ''
    }
  }

  masterClasstimerCallData(): void {
    this.getMasterClass();
  }

  getMasterClassData(): void {
    this.masterClassColOptions = {
      id: 'masterClassColOptions',
      title: 'Masterclass',
      refresh: true,
      cFilter: true,
      pSize: 5,
      pList: [1, 5, 10, 25, 50, 100, 200],
      pagination: true,
      loading: true,
      customCols: true,
      faClass: 'MasterClass',
      serverSide: {
        service: 'vulnerabilityTimeSeriesService', fn: 'getAllApiVulnerabilitytimeseriesGet', q: {
          query: {bool: {must: [
            {match: {'companyRef.id.keyword':  + ''}},
            {exists: {field: 'uniqueid'}}, {exists: {field: 'vul_id'}}]}}
        }, sort: [{}]
      },
      lMsg: 'Getting masterclass data...',
      local: false,
      dataList: [],
      columns: [
        {col: 'port', header: 'Episode #', colFilters: {}, noFilter: true},
        {col: 'ref', header: 'Episode Name', colFilters: {}, isKeyword: true, noFilter: true},
        {col: 'score.cvss_score', header: 'Duration', colFilters: {}, noFilter: true},
        {col: 'score.cvss_score', header: 'Short Description', colFilters: {}, noFilter: true}
      ]
    };
  }
}
