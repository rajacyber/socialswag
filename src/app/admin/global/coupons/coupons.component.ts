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
    contentdata_ref: [],
    amountType: 'Fixed Amount Discount',
    identifier: ''
  };
  currencyList: any;
  reason: any;
  paymentList: any;
  allMasterClass: any;
  filterQuery: { multi_match: { query: any; type: string; fields: string[]; }; } | undefined;
  colFilterQuery: any = [];
  colFilterCols: any;
  couponcurrentPage = 0;
  constructor(public baseService: BaseRequestService,
    public loaderService: LoaderService, public httpClient: HttpClient,  public contentService: ContentDataService,
    public modalService: ModalService, public toast: MyToastrService, public masterService: MasterService,
    public confirmDialog: ConfirmDialogService) { 
      masterService.reasonEVE.subscribe((value: any) => {
        this.reason = value;
      });
    this.couponsTableOptions = {
      columns: [
        {
          header: 'Coupon Name',
          columnDef: 'couponName',
          filter: '',
          cell: '(element: any) => `${element.couponName}`',
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
          header: 'Coupon Code',
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
        title: 'Coupons',
        isServerSide: true,
        selectText: '',
        loading: true,
        floatingFilter: true,
        rowSelection: false,
        showColFilter: true,
        showAction: true,
        actionMenuItems: [
          {text: 'Edit', icon: 'edit', callback: 'editFn', isGlobal: true},
          {text: 'Delete', icon: 'delete_forever', callback: 'deleteFn', isGlobal: true},
        ],
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

  async couponsaddTableData(show?:any): Promise<any> {
    (show) ? this.couponData = { contentdata_ref: [], amountType: 'Fixed Amount Discount', identifier: '' } : null;
    await this.getCurrencyAndPayment();
    await this.getMasterClassList();
    await this.coupon.open();
  }

  savecoupon(): void {
    this.loaderService.display(true);
    const couponDate: any =  this.couponData;
    let dummy: any = [];
    couponDate.contentdata_ref.map((item: any) => {
      if(couponDate.contentdata_ref.length===1){
        if(item.id!==undefined){
          dummy.push({ id: item['id']});
        }else{
          dummy.push({ id: item});
        }
      }
    });
    couponDate.contentdata_ref = dummy;
    const URL:any = (couponDate._id) ?  `api/coupons/updateCoupon` : `api/coupons/createCoupon`;
    this.baseService.doRequest(URL,
      'post', couponDate).subscribe((result: any) => {
      this.loaderService.display(false);
      if(result) {
        this.toast.sToast('success', 'Coupon saved successfully!.');
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
    this.colFilterQuery = [];
    for (const cl of event.colFilters) {
      const tmpObj1: any = {bool: {should: [{match: {}}]}};
      let tmpObj: any = {};
      if (cl.hKey) {
        if(cl.key === 'c' || cl.key === 'u' || cl.key === 'released_on'){
          var column: any = cl.key;
          let from = event.columns[cl.key].dateCol.start;
          const fromDate = from.getFullYear() + "-" + ('0'+ (from.getMonth() + 1)).slice(-2) + "-" + ('0'+ from.getDate()).slice(-2);
          let end = event.columns[cl.key].dateCol.end;
          const endDate = end.getFullYear() + "-" + ('0'+ (end.getMonth() + 1)).slice(-2) + "-" + ('0'+ end.getDate()).slice(-2);
          tmpObj = {range: {}};
          tmpObj.range[column]= {gte: fromDate, lte: endDate};
        } else {
          if (cl.list) tmpObj = {must: [{multi_match: {query: `*${cl.value}*`,type: 'phrase_prefix', 'fields':[cl.key]}}]};
          else tmpObj = {bool: {should: [{query_string: {fields: [cl.key], query: `*${cl.value}*`}}]}};
        }
      } else {
        tmpObj1.bool.should[0].match[cl.key] = cl.value;
        tmpObj = tmpObj1;
      }
      this.colFilterQuery.push(tmpObj);
    }
    this.getCoupons();
  }

  couponssortCall(event: any): void {

  }

  couponsfilterCall(idata: any): void {
    const fields = ['name', 'codeCoupan', 'currency_code'];
    this.filterQuery = (idata && idata.length > 0) ? {
      multi_match: {
        query: idata,
        type: 'phrase_prefix',
        fields
      }
    } : undefined;
    this.getCoupons();
  }

  couponsColFilterCall(event: any): void {
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
    this.getCoupons();
  }

  couponsactionCall(data: any): void {
    if (data.action.text === 'Edit'){
      this.couponData = data.row;
      const contentRef = data.row.contentdata_ref.map((x:any) => x.id);
      this.classCtrl.setValue(contentRef);
      this.couponsaddTableData(true);
    }
    if (data.action.text === 'Delete') {
      const dataRow = data.row;
      this.deleteCoupon(dataRow);
    }
  }

  deleteCoupon(currentcoupon: any): void {
    const titleName = 'Confirmation';
    const message = 'Are you sure you want to delete ' + currentcoupon.name + ' coupon ?';
    const cancelText = 'No';
    const acceptText = 'Yes';
    const showReason = true;
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText, showReason);
    this.confirmDialog.dialogResult.subscribe((res: any) => {
      const data = {coupon_id: currentcoupon._id, reason: this.reason};
      if (res) { 
        this.baseService.doRequest(`/api/coupons/deleteCoupon`,
          'post',data).subscribe((result: any) => {
          if (result[0]) {
            this.toast.sToast('success', 'Removed successfully');
            this.getCoupons();
          } else {
            this.toast.sToast('error', result[1]);
          }
        });
      }
    });
  }

  couponspageCall(event: any): void {
    this.couponsTableOptions.tableOptions.pageSize = event.pageSize;
    this.couponcurrentPage = event.pageIndex;
    this.getCoupons();
  }

  couponsShowHideLoading(status: any): void {
    const data = Object.assign({}, this.couponsTableOptions);
    this.couponsTableOptions = {};
    this.couponsTableOptions = data;
    this.couponsTableOptions.tableOptions.loading = status;
  }
  
  getCoupons(): void {
    let params: any;
    params = {
      query: {
        bool: {
          must: [{exists: {field: 'couponCode'}}]
        }
      }
    };
    if (this.filterQuery && this.filterQuery.multi_match) {
      params.query.bool.must.push(this.filterQuery);
    }
    if (this.colFilterQuery && this.colFilterQuery.length) { // Multi Column filter
      this.colFilterQuery.forEach((obj: any) => {
        if (obj.bool && obj.bool.should[0].match) {
          params.query.bool.must.push(obj);
        } else if(obj.must){
          params.query.bool.must.push(obj.must[0])
        } else if(!(obj.bool && obj.bool.should[0].match) && !obj.must) {
          params.query.bool.filter = [];
          params.query.bool.filter.push(obj);
        }
      });
    }

    let sorts: any = [{}];
      if (this.couponsTableOptions.sortOptions && this.couponsTableOptions.sortOptions.direction
        && this.couponsTableOptions.sortOptions.direction !== '') {
      const orderArr = ['', 'c', 'u', '_id'];
      if (orderArr.indexOf(this.couponsTableOptions.sortOptions.active) === -1) {
        // @ts-ignore
        sorts[0][this.couponsTableOptions.sortOptions.active + '.keyword'] = {order: this.couponsTableOptions.sortOptions.direction};
      } else {
        // @ts-ignore
        sorts[0][this.couponsTableOptions.sortOptions.active] = {order: this.couponsTableOptions.sortOptions.direction};
      }
    }
    this.loaderService.display(true);
    const q = JSON.stringify(params);
    const skip = this.couponcurrentPage;
    const sort = JSON.stringify(sorts);
    const limit = this.couponsTableOptions.tableOptions.pageSize;
    this.baseService.doRequest(`/api/coupons`, 'get', null, {q, skip, limit, sort})
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
