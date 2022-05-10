import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { MatSidenav } from '@angular/material/sidenav';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ContentDataService } from 'src/app/api/services';
import { BaseRequestService } from 'src/app/_services/base.service';
import { ConfirmDialogService } from 'src/app/_services/confirmdialog.service';
import { LoaderService } from 'src/app/_services/loader.service';
import { MasterService } from 'src/app/_services/master.service';
import { ModalService } from 'src/app/_services/modal.service';
import { MyToastrService } from 'src/app/_services/toastr.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {
  @ViewChild('coupon', {static: false}) coupon: MatSidenav;
  @ViewChild('multiSelect', {static: true}) multiSelect!: MatSelect;
  public classCtrl: FormControl = new FormControl();
  public classFilterCtrl: FormControl = new FormControl();
  public filteredClass: ReplaySubject<any> = new ReplaySubject<any>(1);
  protected masterClassList: any = [];
  protected _onDestroy = new Subject<void>();
  public searching = false;

  couponsTableOptions: any = [];
  couponData: any = {
    contentdata_ref: []
  };
  currencyList: any;
  paymentList: any;
  allMasterClass: any;
  constructor(public baseService: BaseRequestService,
    public loaderService: LoaderService, public httpClient: HttpClient,  public contentService: ContentDataService,
    public modalService: ModalService, public toast: MyToastrService, public masterService: MasterService,
    public confirmDialog: ConfirmDialogService) { 
    this.couponsTableOptions = {
      columns: [
        {
          header: 'Name',
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
          isSort: true,
        }, {
          header: 'coupon Code',
          columnDef: 'couponCode',
          filter: '',
          cell: '(element: any) => `${element.couponCode}`',
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
        }, {
          header: 'Currency Code',
          columnDef: 'currency_code',
          filter: '',
          cell: '(element: any) => `${element.currency_code}`',
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
        }, {
          header: 'Starts on',
          columnDef: 'startsOn',
          filter: 'DD-MMM-YYYY',
          cell: '(element: any) => `${element.startsOn}`',
          order: 4,
          visible: true,
          iscolumnSearch: true,
          isSort: true,
          israngeSearch: true,
          colFilters: {type: 'range', hKey: true},
          dateCol: {start: '', end: ''}
        }, {
          header: 'Ends on',
          columnDef: 'endsOn',
          filter: 'DD-MMM-YYYY',
          cell: '(element: any) => `${element.endsOn}`',
          order: 4,
          visible: true,
          isSort: true,
          iscolumnSearch: true,
          israngeSearch: true,
          colFilters: {type: 'range', hKey: true},
          dateCol: {start: '', end: ''},
          width: '150px'
        }
      ],
      sortOptions: {active: 'u', direction: 'desc'},
      faClass: 'coupons',
      _pageData: [],
      tableOptions: {
        id: 'coupons',
        title: 'coupons',
        isServerSide: true,
        selectText: '',
        loading: true,
        floatingFilter: true,
        rowSelection: false,
        showColFilter: true,
        showAction: true,
        actionMenuItems: [],
        pagination: true,
        pageOptions: [5, 10, 25, 50, 100],
        pageSize: 15,
        search: true,
        add: true,
        showhideList: true,
        refreshData: true,
        exportExcel: true,
        columnSearch: true,
        compareData: false,
        hideDownload: true
      }
    };
  }

  async getCurrencyAndPayment(): Promise<any> {
    const defaultData = await this.baseService.doRequest(`/api/utilities/getContent`, 'post', {}).toPromise();
    this.currencyList = defaultData.currency_code;
    this.paymentList = defaultData.amount_type;
  }

  async couponsaddTableData(): Promise<any> {
    await this.getCurrencyAndPayment();
    await this.getMasterClassList();
    await this.coupon.open();
  }

  savecoupon(): void {
    this.loaderService.display(true);
    const couponDate: any =  this.couponData;
    let dummy: any = [];
    couponDate.contentdata_ref.map((item: any) => {
      dummy.push({ id: item});
    });
    couponDate.contentdata_ref = dummy;
    this.baseService.doRequest(`api/coupons`,
      'post', couponDate).subscribe((result: any) => {
      this.loaderService.display(false);
      if(result) {
        this.toast.sToast('success', 'coupon added successfully!.');
        this.coupon.close();
        this.couponData = {};
        this.getCoupons();
      }
      else {
        this.toast.sToast('error', 'Error!.');
      }
    });
  }

  queryFilterCallBack(event: any): void {

  }

  couponssortCall(event: any): void {

  }

  couponsfilterCall(event: any): void {
      
  }

  couponsColFilterCall(event: any): void {
      
  }

  couponsactionCall(event: any): void {
      
  }

  couponspageCall(event: any): void {
      
  }


  couponsShowHideLoading(status: any): void {
    const data = Object.assign({}, this.couponsTableOptions);
    this.couponsTableOptions = {};
    this.couponsTableOptions = data;
    this.couponsTableOptions.tableOptions.loading = status;
  }
  
  getCoupons(): void {
    this.loaderService.display(true);
    const q = JSON.stringify({});
    const skip = 0;
    const limit = 100;
    this.baseService.doRequest(`/api/coupons`, 'get', null, {})
    .subscribe((result: any) => {
      this.couponsTableOptions.pageData = [];
      if (result.data.length) {
        this.couponsTableOptions.pageData = result.data;
        this.couponsTableOptions.tableOptions.pageTotal = result.total;
      } else {
        this.couponsTableOptions.pageData = [];
        this.couponsTableOptions.tableOptions.pageTotal = 0;
      }
      this.couponsShowHideLoading(false);
      this.loaderService.display(false);

    });
  }

  couponstimerCallData(): void {
      
  }
  closeCurrentClass(event: any): void {
    if (this.allMasterClass) {
      this.filteredClass.next(this.allMasterClass.slice());
    }
    if (!event) {
      this.getMasterClassList();
    }
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  getMasterClassList(search?: any): void {
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
        this.allMasterClass = result.data
        this.filteredClass.next(result.data.slice());
      } else {
        this.filteredClass.next([]);
      }
      
    });
  }
  ngOnInit(): void {
    this.getCoupons();
    this.classFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterUsers();
    });
  }

  private filterUsers(): void {
    if (!this.masterClassList) {
      return;
    }
    // get the search keyword
    let search = this.classFilterCtrl.value;
    if (!search) {
      this.filteredClass.next(this.masterClassList.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.getMasterClassList(search);
  }

}
