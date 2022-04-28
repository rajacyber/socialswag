import {SelectionModel} from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatMenuTrigger} from '@angular/material/menu';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {ReplaySubject, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {Router} from '@angular/router';
import {BaseRequestService} from 'src/app/_services/base.service';
import {AuthenticationService} from 'src/app/_services/authentication.service';
import {LoaderService} from '../../_services/loader.service';
import {FormControl} from '@angular/forms';
import {MyToastrService} from '../../_services/toastr.service';
import {MatTableDataSource} from '@angular/material/table';
import { MasterService } from 'src/app/_services/master.service';


@Component({
  selector: 'app-s-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  @ViewChild(MatSort, { static: false })
  set sort(value: MatSort) {
    this.dataSource.sort = value;
  }
  constructor(private activeRoute: Router, private loaderService: LoaderService, public masterService: MasterService,
              private authenticationService: AuthenticationService, public baseService: BaseRequestService,
              private eRef: ElementRef, public toast: MyToastrService) {
    this.loaderService.selectedSiteChanged.subscribe(() => {
      localStorage.removeItem(this.tableOptions.id); this.filterText = '';
    });
    this.loaderService.tableProgressOff.subscribe(() => {
      this.tableOptions.loading = false;
    });
    // Debounce search.
    this.filterUpdate.pipe(
      debounceTime(1500),
      distinctUntilChanged())
      .subscribe(value => {
        this.isActionChanged = true;
        this.doFilter(value);
      });

    this.colfilterUpdate.pipe(
      debounceTime(1500),
      distinctUntilChanged())
      .subscribe(value => {
        this.doColumFilter(value.value, value.col);
      });
  }
  public assetDrpCtrl: FormControl = new FormControl();
  public assetDrpFilterCtrl: FormControl = new FormControl();
  public filterDrpLstFilteredList: ReplaySubject<any> = new ReplaySubject<any>(1);
  @ViewChild('filterMenuTrigger', {static: false})
  filterMenuTrigger!: MatMenuTrigger;
  @ViewChild('listMenuTrigger', {static: false})
  listMenuTrigger!: MatMenuTrigger;
  @ViewChild('exportMenuTrigger', {static: false})
  exportMenuTrigger!: MatMenuTrigger;
  filterText!: string;
  currentPageIndex: any;
  isExport = false;
  tableId: any;
  // @ts-ignore
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  // tslint:disable-next-line:variable-name
  _sTableOptions: any;
  isLoading = true;
  dataSource = new MatTableDataSource<any>();
  hiddenDataSource = new MatTableDataSource<any>();

  @ViewChild('MAINTABLEDIV', {static: false})
  tableDiv!: ElementRef;

  @Input() sTableOptions: any;
  @Input() hideDownload: any;
  @Output() filterCallback = new EventEmitter();
  @Output() colFilterCallback = new EventEmitter();
  @Output() publishCallback = new EventEmitter();
  @Output() sortCallback = new EventEmitter();
  @Output() actionCallback = new EventEmitter();
  @Output() globalActionCallback = new EventEmitter();
  @Output() pageCallback = new EventEmitter();
  @Output() refreshCallback = new EventEmitter();
  @Output() hyperlinkCallback = new EventEmitter();
  @Output() addCallback = new EventEmitter();
  @Output() compareCallback = new EventEmitter();
  @Output() timerCallback = new EventEmitter();
  @Output() checkBoxCallback = new EventEmitter();
  @Output() selectionchangeCallback = new EventEmitter();
  @Output() parentCallback = new EventEmitter();
  @Output() totalCallback = new EventEmitter();
  colFilters: any = [];
  filterValues!: string;
  filterArray: any = [];
  selectedTimer = '0';
  intervalId: any;
  called = false;
  cFilter: any = {};
  colHash: any = {};
  cFields: any = [];
  colFilterQuery: any;
  filterQuery: any;
  private tmpOption: any;
  columnsList: string[] = [];
  cpIndex = 0;
  tableOptions: any = {
    id: 'imaws',
    title: '',
    isServerSide: true,
    selectText: 'item(s)',
    floatingFilter: true,
    rowSelection: true,
    loading: true,
    showAction: false,
    actionMenuItems: [{ text: 'Details', icon: 'info', callback: 'editFunction', hideLocal: false, isGlobal: false }],
    pagination: true,
    pageOptions: [5, 10, 20, 30, 50, 100, 200],
    pageSize: 5,
    pageTotal: 0,
    search: true,
    showhideList: true,
    refreshData: true,
    dropdwn: false,
    add: false,
    showColFilter: false,
    exportExcel: true,
    compareData: false,
    publish: false,
    parentCalls: [],
    saveData: false,
    nomsg: 'No data available!',
    filterDownload: true
  };

  isMUltiple = true; initSelectedValues = [];
  selection = new SelectionModel<any>(this.isMUltiple, this.initSelectedValues);
  numSelected!: number;

  isCompMUltiple = true; initCompSelectedValues = [];
  compSelection = new SelectionModel<any>(this.isMUltiple, this.initCompSelectedValues);
  compNumSelected!: number;

  columns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: any) => `${element.name}`
    },
    {
      columnDef: 'dateOfBirth',
      header: 'Date of Birth',
      filter: 'date', cell: (element: any) => `${element.dateOfBirth}`
    },
    {
      columnDef: 'address',
      header: 'Address',
      cell: (element: any) => `${element.address}`
    }];

  public displayedColumns!: Array<any>;
  public showhideList!: Array<any>;
  orderlist!: Array<any>;

  filterUpdate = new Subject<string>();
  colfilterUpdate = new Subject<any>();
  settingsObj = [];
  sessionData: any;
  searchedColName = ''; colfilter: any = {};
  pastIndex: any;
  isPageLoad = true;

  isActionChanged = false;
  isTablePadding = false;
  columnsCnt = 0;
  exportCnt = 0;
  isExportClick = false;

  hasSelect = false;
  @HostListener('document:click', ['$event'])
  clickout(event: any): void {
    if (this.eRef.nativeElement.contains(event.target)) {
      if (this.isExportClick) {
        if (this.exportCnt > 1) {
          if (this.exportMenuTrigger !== undefined) {
            this.exportMenuTrigger.closeMenu();
          }
          this.exportCnt = 1;
          this.isExportClick = false;
        } else {
          if (this.listMenuTrigger !== undefined) {
            this.listMenuTrigger.closeMenu();
          }
          this.exportCnt++;
        }
      } else {
        if (this.columnsCnt > 1) {
          if (this.listMenuTrigger !== undefined) {
            this.listMenuTrigger.closeMenu();
          }
          this.columnsCnt = 1;
        } else {
          if (this.exportMenuTrigger !== undefined) {
            this.exportMenuTrigger.closeMenu();
          }
          this.columnsCnt++;
        }
      }
    } else {
      this.columnsCnt = 0;
      if (this.listMenuTrigger !== undefined) {
        this.listMenuTrigger.closeMenu();
      }
    }
  }
  columnFilterxlsx(col: any): void{
    this.searchedColName = col.columnDef;
    this.colFilters = [];
    if(col.columnDef === 'c' || col.columnDef === 'u' || col.released_on){
      const start = col.dateCol.start.getFullYear() + "-" + (col.dateCol.start.getMonth() + 1) + "-" + col.dateCol.start.getDate();
      const end = col.dateCol.end.getFullYear() + "-" + (col.dateCol.end.getMonth() + 1) + "-" + col.dateCol.end.getDate();
      this.colFilters.push({key: col.columnDef, name: col.header, value: `form ${start} - to ${end} `, hKey: col.colFilters.hKey, list: col?.list});
    } else {
      this.colFilters.push({key: col.columnDef, name: col.header, value: col.val, hKey: col.colFilters.hKey, list: col?.list});
    }
    this.processColFilterQuery();
  }
  removeFilterxlsx(rFilter: any): void {
    if (this.sTableOptions.gFilter) {
      delete this.sTableOptions.gFilter;
      this.colFilters = [];
      this.colFilterQuery = [];
      this.filterQuery = {};
      this.getCollectionData();
      return;
    }
    this.colFilters.forEach((obj: { key: string | number; }, index: any) => {
      if (rFilter.key === obj.key) {
        this.colfilter[obj.key] = '';
        this.colFilters.splice(index, 1);
      }
    });
    this.processColFilterQuery();
  }
  processColFilterQuery(): void {
    this.colFilterQuery = [];
    for (const cl of this.colFilters) {
      const tmpObj1: any = {bool: {should: [{match: {}}]}};
      let tmpObj: any = {};
      if (cl.hKey) {
        if(cl.key === 'c' || cl.key === 'u' || cl.key === 'released_on'){
          var column: any = cl.key;
          let from = this.colHash[cl.key].dateCol.start;
          const fromDate = from.getFullYear() + "-" + ('0'+ (from.getMonth() + 1)).slice(-2) + "-" + ('0'+ from.getDate()).slice(-2);
          let end = this.colHash[cl.key].dateCol.end;
          const endDate = end.getFullYear() + "-" + ('0'+ (end.getMonth() + 1)).slice(-2) + "-" + ('0'+ end.getDate()).slice(-2);
          tmpObj = {range: {}};
          tmpObj.range[column]= {gte: fromDate, lte: endDate};
        } else {
          cl.key = (cl.key === 'category') ? 'category_ref.name' : cl.key;
          if (cl.list) tmpObj = {must: [{multi_match: {query: `*${cl.value}*`,type: 'phrase_prefix', 'fields':[cl.key]}}]};
          else tmpObj = {bool: {should: [{query_string: {fields: [cl.key], query: `*${cl.value}*`}}]}};
        }
      } else {
        tmpObj1.bool.should[0].match[cl.key] = cl.value;
        tmpObj = tmpObj1;
      }
      this.colFilterQuery.push(tmpObj);
    }
    this.getCollectionData();
  }
  downloadAsXls(type: string): void {
    this.tmpOption = {...this.sTableOptions};
    if (!this.sTableOptions.faClass) {
      this.toast.sToast('error', 'Class name not added.');
      return;
    }
    const dateStr = new Date().toLocaleDateString().replace(/\//g, '_') + '_'
      + new Date().toLocaleTimeString().replace(/\:/g, '_');
    // const xlsxParam: CompanygetxlsxreportParams = {
    //   query: '', classname: this.sTableOptions.faClass, fieldmap: [],
    //   filename: this.sTableOptions.faClass + '_' + dateStr
    // };
    for (const col of this.sTableOptions.columns) {
      // @ts-ignore
      xlsxParam.fieldmap.push({field: col.columnDef, renameas: col.header});
    }
    this.loaderService.display(true, 'Preparing xlsx file...');
    // tslint:disable-next-line:no-shadowed-variable
    let query: any = {};
    delete this.sTableOptions.serverSide.q.query.bool.filter;
    this.sTableOptions.serverSide.q.query.bool.must.forEach((obj: any, index: number) => {
      if (obj.bool && obj.bool.should && obj.bool.should[0].match) {
        this.tmpOption.serverSide.q.query.bool.must.splice(index, 1);
      } else if (obj.multi_match) {
        this.tmpOption.serverSide.q.query.bool.must.splice(index, 1);
      }
    });
    query = {...this.tmpOption.serverSide.q};
    if (this.filterQuery && this.filterQuery.multi_match) { // Global filter
      query.query.bool.must.push(this.filterQuery);
    }
    if (this.colFilterQuery && this.colFilterQuery.length && type !== 'full') { // Multi Column filter
      query.query.bool.filter = [];
      this.colFilterQuery.forEach((obj: any) => {
        if (obj.bool.should[0].match) {
          query.query.bool.must.push(obj);
        } else {
          query.query.bool.filter.push(obj);
        }
      });
    }
    // xlsxParam.query = JSON.stringify(query);
    // this.companyService.companygetxlsxreportApiCompanyIdGetxlsxreportPost(
    //   {id: this.commonService.currentCompany._id, body: xlsxParam}).subscribe((result: any) => {
    //   this.loaderService.display(false);
    //   if (result && result.length && result[0]) {
    //     window.open(result[1], '_blank');
    //   } else {
    //     this.toast.sToast('error', result[1]);
    //   }
    // });
  }
  columnFilter(val: any, col: any): void {
    this.searchedColName = col;
    this.colfilterUpdate.next({value: val, col});
  }
  removeFilter(filter: any): void {
    this.colFilters.forEach((obj: { key: string | number; }, index: any) => {
      if (filter.key === obj.key) { 
        // if(filter.key === 'c' || filter.key === 'u') {
        //   this.colFilters = this.colFilters.filter((obj: any) => obj.key !== filter.key);
        //   console.log(this._sTableOptions.columns[filter.key].selectRange);
        //   this._sTableOptions.columns[filter.key].selectRange = { start: '', end: ''}
        // } else {
          this.colfilter[obj.key] = '';
          this.colFilters.splice(index, 1);
        // }
      }
    });
    this.colFilterCallback.emit({value: '', col: filter.key});
  }

  getListProperty(object: any, propertyName: any ): any {
    let parts: any[]; let property: any;
    parts = propertyName.split('.'); const length = parts.length;
    let i: number;
    property = object[parts[0]];
    return (property) ? property.map((x: any) => x[parts[1]]) : '';
  }
  getProperty(object: any, propertyName: any ): any {
    let parts: any[]; let property: string;
    parts = propertyName.split('.'); const length = parts.length;
    let i: number;
    property = object;
    for ( i = 0; i < length; i++ ) {
      // @ts-ignore
      property = (property[parts[i]]) ? property[parts[i]] : '';
    }
    return property;
  }

  rowClick(row: any, index: any): void {
    if (row._id) {
      this.dataSource.data.forEach(obj => {
        obj.highlighted = (obj._id === row._id);
      });
    } else {
      if (this.pastIndex !== undefined) {
        this.dataSource.data[this.pastIndex].highlighted = false;
      }
      this.pastIndex = index;
      this.dataSource.data[index].highlighted = !this.dataSource.data[index].highlighted;
    }
  }

  /*getProperty = (obj, path) => (
    path.split('.').reduce((o, p) => o && o[p], obj)
  )*/

  getCustomText(obj: any): any {
    // @ts-ignore
    const customText = this.sTableOptions.customText.filter(x => x.status === obj);
    if (customText.length > 0) {
      return customText[0].DisplayText;
    }
  }
  // getCustomColor(obj) {
  //   const customText = this.sTableOptions.customText.filter(x => x.status == obj);
  //   if (customText.length > 0) {
  //     return { 'background-color': customText[0].color };
  //   }
  //   return { 'background-color': '#ffffff' };
  // }

  getCustomColor(obj: any): any {
    const customText = this.sTableOptions.customText.filter((x: any) => x.status === obj);
    if (customText.length > 0) {
      return (customText[0]['text-color'])
        ? {'background-color': customText[0].color, color: customText[0]['text-color']}
        : {'background-color': customText[0].color};
    }
    return { 'background-color': '#ffffff' };
  }

  getIconPath(obj: any, path: any): any {
    if (this.getProperty(obj, path.columnDef) === path.success) {
      return path.successIconPath !== undefined ? path.successIconPath : 'assets/images/devices/online.svg';
    } else {
      return path.failureIconPath !== undefined ? path.failureIconPath : 'assets/images/devices/offline.svg';
    }
  }

  getIconTooltip(obj: any, path: any): any {
    if (this.getProperty(obj, path.columnDef) === path.success) {
      return path.successToolTip !== undefined ? path.successToolTip : 'Online';
    } else {
      return path.failureToolTip !== undefined ? path.failureToolTip : 'Offline';
    }
  }

  drop(event: CdkDragDrop<string[]>): any {
    this.isActionChanged = true;
    moveItemInArray(this.showhideList, event.previousIndex, event.currentIndex);

    for (let idx = event.previousIndex; idx >= event.currentIndex; idx--) {
      this.showhideList[idx].order = idx;
    }
    // this.showhideList[event.previousIndex].order = event.previousIndex;
    // this.showhideList[event.currentIndex].order = event.currentIndex;
    this.initUpdateData();
  }

  actionCall(row: any, action: any): void {
    delete row.highlighted; delete row.hovered;
    const resp = { row, action };
    if (this.tableOptions.showAction && this.tableOptions.actionMenuItems.length > 0) {
      this.actionCallback.emit(resp);
    }
  }

  globalActionCall(row: any, action: any): void {
    delete row.highlighted; delete row.hovered;
    const resp = { row, action };
    if (this.tableOptions.showAction && this.tableOptions.actionMenuItems.length > 0) {
      this.globalActionCallback.emit(resp);
    }
  }

  hyperLinkCall(row: any, col?: any): any {
    delete row.highlighted; delete row.hovered;
    const event = { row, col };
    this.hyperlinkCallback.emit(event);
  }

  ngOnChanges(changes: SimpleChanges): any {
    const sTableOptions: SimpleChange = changes.sTableOptions;
    this._sTableOptions = sTableOptions.currentValue;
    // if (!sTableOptions.firstChange) {
    this.initUpdateData();
    // }
  }

  ngOnInit(): void {
    this.tmpOption = {...this.sTableOptions};
    this.colHash = {};
    for (const c of this.tmpOption.columns) {
      this.columnsList.push(c.columnDef);
      this.colHash[c.columnDef] = c;
      if (c.colFilters && c.colFilters.hKey) {
        this.cFields.push(c.columnDef);
      }
    }
  }
  ngOnDestroy(): void {
    this.isPageLoad = false;

    if (this.intervalId !== undefined && this.intervalId !== null) {
      clearInterval(this.intervalId);
    }
  }

  initUpdateData(): void {
    this.tableOptions = Object.assign(this.tableOptions, this._sTableOptions.tableOptions);
    this.isPageLoad = (this.sTableOptions.overridePageLoad) ? false : this.isPageLoad;
    const filterK = localStorage.getItem(this.tableOptions.id);
    if ( filterK && filterK !== '') {
      this.filterText = filterK;
      if (!this.called) { setTimeout(() => { localStorage.removeItem(this.tableOptions.id);
                                             this.doFilter(this.filterText); this.called = true; }, 2000); }
    }
    if (this.isPageLoad && !this.tableOptions.pageTotal ) {
      // this.loaderService.display(true, 'Getting TableSettings data');
      const query = {query: {bool: {must: [ {exists: {field: 'tableId'}}, {exists: {field: 'columnRepr'}},
            {match: {'tableId.keyword': this.tableOptions.id}},
              {match: {'userId.keyword': this.authenticationService.currentUser?.email}}]}}};
      const q = JSON.stringify(query);
      const skip = 0;
      const limit = 1;
      // this.tableSettingsService.getAllApiTablesettingsGet({q, skip, limit}).subscribe((result: any) => {
      //     this.loaderService.display(false);
      //     if (result && result.data && result.data.length) {
      //       this.sessionData = result.data[0];
      //       try {
      //         const savedCols = JSON.parse(result.data[0].columnRepr);
      //         if (result.data[0].columnRepr && savedCols.length === this._sTableOptions.columns.length) {
      //           this._sTableOptions.columns = savedCols;
      //         }
      //       } catch (e) {
      //         e = null;
      //       }
      //       this.selectedTimer = result.data[0].refreshInterval + '';
      //       this._sTableOptions.sortOptions.direction = (result.data[0].settings.sortOptions.direction === '')
      //         ? 'asc' : result.data[0].settings.sortOptions.direction;
      //       this._sTableOptions.tableOptions.pageSize =  result.data[0].settings.pageSize;
      //       if (result.data[0].settings.pageSize !== this.tableOptions.pageSize) {
      //         setTimeout(() => this.RefreshTableData(), 2000);
      //       }
      //       this.tableOptions.pageSize = result.data[0].settings.pageSize;
      //       this.setTableOptions(this._sTableOptions.tableOptions);
      //     }
      // });
    } else {
      this.clearSelection();
      this.setTableOptions(this.tableOptions);
    }
    if (this.isPageLoad) {
      this.isPageLoad = false;
    }
  }

  setTableOptions(tblOptions: any): any {
    this.displayedColumns = [];
    this.orderlist = [];
    this.showhideList = this._sTableOptions.columns;

    this._sTableOptions.columns.map((c: any) => {
      if (c.visible) {
        this.displayedColumns.push(c.columnDef);
        this.orderlist.push(c);
      }
    });

    if (tblOptions.compareData) {
      this.displayedColumns.push('compare');
    }

    if (tblOptions.showAction) {
      this.displayedColumns.push('action');
    }

    if (tblOptions.rowSelection) {
      this.displayedColumns.unshift('select');
    }

    this.dataSource.data = this._sTableOptions.pageData;
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }

    this.dataSource.sortingDataAccessor = (data: any, sortHeaderId: string): string => {
      if (typeof data[sortHeaderId] === 'string') {
        return data[sortHeaderId].toLocaleLowerCase();
      }
      return data[sortHeaderId];
    };

    if (!tblOptions.isServerSide) {
      this.dataSource.paginator = this.paginator;
    }
    this.filterArray = this.dataSource.filteredData;
  }

  // GetFinalColumns(savedColumns, definedColumns) {
  //   const finalcols = [];
  //   if (savedColumns.length >= definedColumns.length) {
  //     savedColumns.forEach(sCol => {
  //       try {
  //         for (let dCol = 0; dCol < definedColumns.length; dCol++) {
  //           if (sCol.columnDef == definedColumns[dCol].columnDef) {
  //             finalcols.push(sCol);
  //             break;
  //           }
  //           if (dCol == definedColumns.length - 1) {
  //             finalcols.push(definedColumns[dCol]);
  //           }
  //         }
  //       } catch (e) {
  //         e = null;
  //       }
  //     });
  //   } else if (definedColumns.length > savedColumns.length) {
  //     definedColumns.forEach(dCol => {
  //       for (let sCol = 0; sCol < savedColumns.length; sCol++) {
  //         try {
  //           if (dCol.columnDef == savedColumns[sCol].columnDef) {
  //             finalcols.push(savedColumns[sCol]);
  //             break;
  //           }
  //           if (sCol == savedColumns.length - 1) {
  //             finalcols.push(dCol);
  //           }
  //         } catch (e) {
  //           e = null;
  //         }
  //       }
  //     });
  //   }
  //   return finalcols;
  // }

  GetFinalColumns(savedColumns: any, definedColumns: any): any {
    // @ts-ignore
    definedColumns.forEach(obj => {
      // @ts-ignore
      return savedColumns.forEach(obj1 => {
        if (obj1.columnDef === obj.columnDef) {
          obj.visible = obj1.visible;
          obj.order = obj1.order;
        }
      });
    });
    try {
      // @ts-ignore
      definedColumns = definedColumns.sort((a, b) => (a.order > b.order) ? 1 : -1);
    } catch (e) {
      e = null;
    }
    return definedColumns;
  }


  showHideColumn(i: any, val: any): void {
    val.visible = !val.visible;
    const index = this.orderlist.findIndex(x => x.columnDef === val.columnDef);
    if (index >= 0) {
      this.orderlist.splice(index, 1);
    } else {
      this.orderlist.push(val);
    }
    this.displayedColumns = [];
    this.orderlist = this.orderlist.sort((a, b) => a.order - b.order);

    if (this.tableOptions.compareData) {
      this.displayedColumns.push('compare');
    }

    if (this.tableOptions.rowSelection) {
      this.displayedColumns.push('select');
    }

    this.orderlist.forEach(element => {
      this.displayedColumns.push(element.columnDef);
    });
    if (this.tableOptions.showAction) {
      this.displayedColumns.push('action');
    }
    this.isActionChanged = true;
    this.initUpdateData();
  }

  ngAfterViewInit(): void {
    this.isLoading = false;
    setTimeout( () => { this.initUpdateData(); });
  }

  pageChanged(event: any): void {
    this.isActionChanged = true;
    this.currentPageIndex = event.pageIndex;
    this.cpIndex = event.pageIndex;
    this.tableOptions.pageSize = event.pageSize;
    if (this.tableOptions.isServerSide) {
      this.pageCallback.emit(event);
    }
  }

  RefreshTableData(): void {
    this.refreshCallback.emit();
  }
  getCollectionData(): void {
    this.sTableOptions.dataList = [];
    this.loaderService.display(true, this.sTableOptions.lMsg);
    // tslint:disable-next-line:no-shadowed-variable
    let query: any = {};
    delete this.tmpOption.serverSide.q.query.bool.filter;
    this.tmpOption.serverSide.q.query.bool.must.forEach((obj: any, index: number) => {
      if (obj.bool && obj.bool.should && obj.bool.should[0].match) {
        this.tmpOption.serverSide.q.query.bool.must.splice(index, 1);
      } else if (obj.multi_match) {
        this.tmpOption.serverSide.q.query.bool.must.splice(index, 1);
      }
    });
    query = {...this.tmpOption.serverSide.q};
    
    if (this.filterQuery && this.filterQuery.multi_match) { // Global filter
      query.query.bool.must.push(this.filterQuery);
    }
    if (this.colFilterQuery && this.colFilterQuery.length) { // Multi Column filter
      this.colFilterQuery.forEach((obj: any) => {
        if (obj.bool && obj.bool.should[0].match) {
          query.query.bool.must.push(obj);
        } else if(obj.must){
          query.query.bool.must.push(obj.must[0])
        } else if(!(obj.bool && obj.bool.should[0].match) && !obj.must) {
          query.query.bool.filter = [];
          query.query.bool.filter.push(obj);
        }
      });
    }
    const q = JSON.stringify(query);
    const skip = this.cpIndex;
    const limit = this.sTableOptions.pSize;
    const sort = JSON.stringify(this.sTableOptions.serverSide.sort);
    this.sTableOptions.loading = true; // @ts-ignore
    this.masterService[this.tmpOption.serverSide.service][this.tmpOption.serverSide.fn]({q, skip, limit, sort})
      .subscribe((result: any) => {
        this.sTableOptions.loading = false;
        this.loaderService.display(false);
        this.sTableOptions.dataList = result.data;
        this.sTableOptions.pTotal = result.total;
        this.initiateTable(result.data);
      });
  }

  initiateTable(dataList: any): void {
    const cols = dataList
      // tslint:disable-next-line:no-shadowed-variable
      .reduce((cols: any, row: {}) => {
        return [...cols, ...Object.keys(row)];
      }, [])
      // tslint:disable-next-line:no-shadowed-variable
      .reduce((cols: string | any[], column: any) => {
        return cols.includes(column)
          ? cols
          : [...cols, column];
      }, []);
    // Describe the columns for <mat-table>.
    /*this.columns = cols.map((column: string | number) => {
      return {
        columnDef: column,
        header: (this.colHash[column]) ? this.colHash[column].header : column,
        cell: (element: any) => `${element[column] ? element[column] : ``}`,
        ...this.colHash[column]
      };
    });*/
    this.displayedColumns = this.columnsList.slice();
    this.dataSource = new MatTableDataSource<any>(dataList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.totalCallback.emit({value: this.sTableOptions.pTotal, id: this.sTableOptions.id});
  }
  openListColumns(): void {
    this.isExportClick = false;
    this.columnsCnt++;
    if (this.columnsCnt > 1) {
      this.columnsCnt = 1;
    }
  }

  timerCallData(): void  {
    // this.listMenuTrigger.closeMenu();
    clearInterval(this.intervalId);
    this.intervalId = undefined;

    if (this.selectedTimer !== undefined && Number(this.selectedTimer) !== 0) {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => {
        this.timerCallback.emit(this.selectedTimer);
      }, Number(this.selectedTimer) * 1000);
    }

  }
  filterDrpLstChange(data: any): void {
    console.log(data);
    this.selectionchangeCallback.emit(data);
  }

  ParentCalls(id: any): void {
    this.parentCallback.emit(id);
  }

  AddTableRecord(): void {
    // this.listMenuTrigger.closeMenu();
    this.addCallback.emit();
  }
  publish(): void {
    this.publishCallback.emit();
  }
  CompareData(row: any): any {
    if (row.length <= 1) {
      this.toast.sToast('info', 'Two files requires to compare');
      return false;
    }
    if (row.length > 2) {
      this.toast.sToast('info', 'It not allow to compare more than 2 records');
      return false;
    }
    const resp = { row };
    this.compareCallback.emit(resp);
  }

  clearSelection(): void {
    this.selection.clear();
    // @ts-ignore
    this.numSelected = undefined;
  }
  clearCompCompareSelection(): void {
    this.compSelection.clear();
    // @ts-ignore
    this.compNumSelected = undefined;
  }

  isAllSelected(): any {
    this.numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    if (this.sTableOptions.tableOptions.isCheckboxSelection) {
      this.checkBoxCallback.emit(this.selection.selected);
    }
    return this.numSelected === numRows;
  }

  isAllCompSelected(): any {
    this.compNumSelected = this.compSelection.selected.length;
    const numRows = this.dataSource.data.length;
    return this.compNumSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
    if (this.sTableOptions.tableOptions.isCheckboxSelection) {
      this.checkBoxCallback.emit(this.selection.selected);
    }
  }

  rowToggle(row: any): void {
    this.selection.toggle(row);
    if (this.sTableOptions.tableOptions.isCheckboxSelection) {
      this.checkBoxCallback.emit(this.selection.selected);
    }
  }

  masterCompToggle(): void {
    this.isAllCompSelected() ?
      this.compSelection.clear() :
      this.dataSource.data.forEach(row => this.compSelection.select(row));
  }

  customSort(event: any): void {
    // console.log(this._sTableOptions.sortOptions);
    // {active: 'name', direction: 'asc'}
    this._sTableOptions.sortOptions = event;
    if (this.tableOptions.isServerSide && event.direction !== '') {
      this.sortCallback.emit(event);
    }
  }
  exportAllData(): void {
    const keymap = {};
    // @ts-ignore
    this._sTableOptions.columns.forEach(obj => {
      // @ts-ignore
      keymap[obj.columnDef] = obj.header;
    });
    // @ts-ignore
    keymap._id = (keymap._id) ? keymap._id : '_id';
    this.loaderService.display(true);
    const name =  (this.tableOptions.title !== '' ) ? this.tableOptions.title.replace(/[^A-Z0-9]/ig, '_') : 'Report';
    this.baseService.doRequest('/api/standardreports/generateReport', 'post',
      { query: this._sTableOptions.query, keyMap: keymap, name }).subscribe((result: any) => {
        this.loaderService.display(false);
        if (result) {
          window.open(result.msg, '_blank');
        } else {
          this.toast.sToast('error', result.msg);
        }
      }, () => {
        this.loaderService.display(false);
      });
  }

  SaveSettings(): void {
    let item: any; item = {
      tableId: this._sTableOptions.tableOptions.id,
      userId: this.authenticationService.currentUser?.email,
      columnRepr: JSON.stringify(this._sTableOptions.columns),
      refreshInterval: +this.selectedTimer,
      settings: {
        filterText: this.filterText,
        gFilter: this._sTableOptions.gFilter ? this._sTableOptions.gFilter : [],
        sortOptions: this._sTableOptions.sortOptions,
        pageSize: this._sTableOptions.tableOptions.pageSize
      }
    };
    item.settings.sortOptions.direction = (this._sTableOptions.sortOptions.direction === '')
      ? 'asc' : this._sTableOptions.sortOptions.direction;
    const method = (this.sessionData && this.sessionData._id) ? 'put' : 'post';
    if (this.sessionData && this.sessionData._id) { item._id = this.sessionData._id; }
    this.baseService.doRequest(`/api/tablesettings/`, method, item).subscribe((res: any) => {
      if (res && res._id && res.c !== null && res.u !== null) {
        this.toast.sToast('success', 'Successfully updated!');
      } else {
        this.toast.sToast('error', res._id);
      }
    });

    /*const method = this.tableId ? 'put' : 'post';
    const url = this.tableId ? `/api/user_settings/${this.tableId}` : `/api/user_settings`;
    this.baseService.doRequest(url, method, {
      tablename: this.tableOptions.id.toLowerCase(),
      // @ts-ignore
      username: this.authenticationService.currentUser._id,
      userdata: JSON.stringify(_settings)
    }).subscribe((result: any) => {
      if (result) {
        this.sessionData = [];
        this.toast.sToast('success', 'Settings updated');
        this.sessionData = JSON.parse(result.msg[0].userdata);
      } else {
        this.toast.sToast('error', result.msg);
      }
    });*/
  }
  doFilter = (value: string) => {
    // this.isActionChanged = true;
    localStorage.setItem(this.tableOptions.id, value);
    if (this.tableOptions.isServerSide) {
      this.filterCallback.emit(value);
    } else {
      this.dataSource.filter = value.trim().toLocaleLowerCase();
    }
  }
  
  doColumFilter = (value: any, col: string): any => {
    if (this.tableOptions.isServerSide) {
      // @ts-ignore
      if (this.colFilters.filter(x => x.key === col).length > 0) {
        // @ts-ignore
        this.colFilters.forEach((obj, index) => {
          if (col === obj.key && value === '') {
            this.colFilters.splice(index, 1);
          } else {
            obj.value = value;
          }
        });
      } else {
        if (value === '') { return false; }
        const colName = this._sTableOptions.columns.filter((x: any) => x.columnDef === col)[0].header;
        if(typeof value === "object" ){
          const start = new Date(value.start);
          const end = new Date(value.end);
          this.colFilters.push({key: col, name: colName, value: start.getFullYear() + "-" + ("0"+(start.getMonth()+1)).slice(-2) + "-" + ("0"+start.getDate()).slice(-2)});
          this.colFilters.push({key: col, name: colName, value: end.getFullYear() + "-" + ("0"+(end.getMonth()+1)).slice(-2) + "-" + ("0"+end.getDate()).slice(-2)});
        }else{
          this.colFilters.push({key: col, name: colName, value});
        }
      }
      this.colFilterCallback.emit({value, col});
    } else {
      this.filterValues = value.toLowerCase();
      this.dataSource.data = this.filterArray.filter((row: any) => row[this.searchedColName].toLowerCase().includes(this.filterValues));
    }
  }
}
