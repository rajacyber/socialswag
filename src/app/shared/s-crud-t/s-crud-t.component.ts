import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatMenuTrigger} from '@angular/material/menu';
import {LoaderService} from '../../_services/loader.service';
import {MasterService} from '../../_services/master.service';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {SelectionModel} from '@angular/cdk/collections';
import {BaseRequestService} from '../../_services/base.service';
import {MyToastrService} from '../../_services/toastr.service';
import {CommonService} from '../../_services/common.services';

@Component({
  selector: 'app-s-crud-t',
  templateUrl: './s-crud-t.component.html',
  styleUrls: ['./s-crud-t.component.scss']
})
export class SCrudTComponent implements OnInit, OnChanges {
  @Input() tOption: any;
  sOption: any;
  filterQuery: any;
  colFilterQuery: any;
  cFields: any = [];
  columnsList: string[] = [];
  colHash: any = {};
  value: any;
  colFilters: any = [];
  colfilter: any = {};
  columns!: Array<any>;
  displayedColumns!: Array<any>;
  dataSource: MatTableDataSource<any>;
  @ViewChild('MTABLEDIV', {static: false})
  tableDiv!: ElementRef;
  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true})
  sort!: MatSort;
  @ViewChild('filterMenuTrigger', {static: false})
  filterMenuTrigger!: MatMenuTrigger;
  @ViewChild('listMenuTrigger', {static: false})
  listMenuTrigger!: MatMenuTrigger;
  @ViewChild('exportMenuTrigger', {static: false})
  exportMenuTrigger!: MatMenuTrigger;
  @Output() addCallback = new EventEmitter();
  @Output() hyperlinkCallback = new EventEmitter();
  @Output() colfilterUpdate = new EventEmitter();
  @Output() checkBoxCallback = new EventEmitter();
  @Output() actionCallback = new EventEmitter();
  @Output() globalActionCallback = new EventEmitter();
  @Output() totalCallback = new EventEmitter();
  filterKey: any;
  private searchedColName: any;
  cFilter: any = {};
  cpIndex = 0;
  isAChanged = false;
  filterUpdate = new Subject<string>();
  private tmpOption: any;
  private toption: any;
  isMultiple = true;
  initSelectedValues = [];
  selection = new SelectionModel<any>(this.isMultiple, this.initSelectedValues);
  numSelected!: number;
  filterEnabled = false;

  constructor(private loaderService: LoaderService, private masterService: MasterService,
              private baseService: BaseRequestService, private toast: MyToastrService,
              private commonService: CommonService,
              ) {
    this.filterUpdate.pipe( debounceTime(1500), distinctUntilChanged()).subscribe(value => {
      this.applyFilter(value);
    });
  }

  clearSelection(): void {
    this.selection.clear();
    // @ts-ignore
    this.numSelected = undefined;
  }

  isAllSelected(): any {
    this.numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    if (this.tOption.isCheckboxSelection && this.tOption.local) {
      this.checkBoxCallback.emit(this.selection.selected);
    }
    return this.numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
    if (this.tOption.isCheckboxSelection && this.tOption.local) {
      this.checkBoxCallback.emit(this.selection.selected);
    }
  }

  rowToggle(row: any): void {
    this.selection.toggle(row);
    if (this.tOption.isCheckboxSelection && this.tOption.local) {
      this.checkBoxCallback.emit(this.selection.selected);
    }
  }

  actionCall(row: any, action: any): void {
    delete row.highlighted;
    delete row.hovered;
    const resp = {row, action};
    if (this.tOption.showAction && this.tOption.actionMenuItems.length > 0) {
      this.actionCallback.emit(resp);
    }
  }

  globalActionCall(row: any, action: any): void {
    delete row.highlighted;
    delete row.hovered;
    const resp = {row, action};
    if (this.tOption.showAction && this.tOption.actionMenuItems.length > 0) {
      this.globalActionCallback.emit(resp);
    }
  }

  hyperLinkCall(row: any, col?: any): any {
    delete row.highlighted;
    delete row.hovered;
    const event = {row, col};
    this.hyperlinkCallback.emit(event);
  }

  columnFilter(col: any): void {
    const searchKey = (col && col.arrayCols) ? `${col.col}.${col.arrayCols.key}` : col.col
    this.searchedColName = searchKey;
    this.colFilters.push({key: searchKey, name: col.header, value: col.val, hKey: col.colFilters.hKey});
    this.processColFilterQuery();
  }

  removeFilter(rFilter: any): void {
    if (this.tOption.gFilter) {
      delete this.tOption.gFilter;
      this.tmpOption = JSON.parse(JSON.stringify(this.toption));
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

  getProperty(object: any, propertyName: any): any {
    let parts: any[];
    let property: string;
    parts = propertyName.split('.');
    const length = parts.length;
    let i: number;
    property = object;
    for (i = 0; i < length; i++) {
      // @ts-ignore
      property = (property[parts[i]]) ? property[parts[i]] : ''; // @ts-ignore
      if (property[parts[i]] === 0) { property = property[parts[i]]; }
    }
    return property;
  }

  processColFilterQuery(): void {
    this.colFilterQuery = [];
    for (const cl of this.colFilters) {
      const tmpObj1: any = {bool: {should: [{match: {}}]}};
      let tmpObj: any = {};
      if (cl.hKey) {
        tmpObj = {bool: {should: [{query_string: {fields: [cl.key], query: `*${cl.value}*`}}]}};
      } else {
        tmpObj1.bool.should[0].match[cl.key] = cl.value;
        tmpObj = tmpObj1;
      }
      this.colFilterQuery.push(tmpObj);
    }
    this.getCollectionData();
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    this.columnsList = [];
    this.colHash = {};
    for (const c of this.tOption.columns) {
      this.columnsList.push(c.col);
      this.colHash[c.col] = c;
      if (c.colFilters && c.colFilters.hKey) {
        this.cFields.push(c.col);
      }
    }
    this.toption = JSON.parse(JSON.stringify(this.tOption));
    this.tmpOption = {...this.tOption};
    if (this.tOption.serverSide && this.tOption.serverSide.service) {
      this.getCollectionData();
    } else {
      this.initiateTable(this.tOption.dataList);
    }
  }

  getCollectionData(): void {
    this.filterEnabled = false;
    this.tOption.dataList = [];
    this.loaderService.display(true, this.tOption.lMsg);
    // tslint:disable-next-line:no-shadowed-variable
    delete this.tmpOption.serverSide.q.query.bool.filter;
    this.tmpOption.serverSide.q.query.bool.must.forEach((obj: any, index: number) => {
      if (obj.bool && obj.bool.should && obj.bool.should[0].match) {
        this.tmpOption.serverSide.q.query.bool.must.splice(index, 1);
      } else if (obj.multi_match) {
        this.tmpOption.serverSide.q.query.bool.must.splice(index, 1);
      }
    });
    const query: any = this.tmpOption.serverSide.q;
    if (this.filterQuery && this.filterQuery.multi_match) { // Global filter
      query.query.bool.must.push(this.filterQuery);
      this.filterEnabled = true;
    }
    if (this.colFilterQuery && this.colFilterQuery.length) { // Multi Column filter
      query.query.bool.filter = []; this.filterEnabled = true;
      this.colFilterQuery.forEach((obj: any) => {
        if (obj.bool && obj.bool.should && obj.bool.should[0].match) {
          if (obj.bool.should.length > 1) {
            obj.bool.should.forEach((match: any) => {
              query.query.bool.must.push(match);
            });
          } else {
            query.query.bool.must.push(obj);
          }
        } else {
          query.query.bool.filter.push(obj);
        }
      });
    } else if (this.colFilterQuery && this.colFilterQuery.range) {
      query.query.bool.filter = []; this.filterEnabled = true;
      query.query.bool.filter.push(this.colFilterQuery);
    } else if (this.colFilterQuery && this.colFilterQuery[0] && this.colFilterQuery[0].range) {
      query.query.bool.filter = []; this.filterEnabled = true;
      this.colFilterQuery.forEach((obj: any) => {
        query.query.bool.filter.push(obj);
      });
    } else if (this.colFilterQuery && this.colFilterQuery.must_not) {
      this.filterEnabled = true;
      query.query.bool.must_not = this.colFilterQuery.must_not;
    }
    const q = JSON.stringify(query);
    const skip = this.cpIndex;
    const limit = this.tOption.pSize;
    const sort = JSON.stringify(this.tOption.serverSide.sort);
    this.tOption.loading = true; // @ts-ignore
    this.masterService[this.tOption.serverSide.service][this.tOption.serverSide.fn]({q, skip, limit, sort})
      .subscribe((result: any) => {
        this.tOption.loading = false;
        this.loaderService.display(false);
        this.tOption.dataList = result.data;
        this.tOption.pTotal = result.total;
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
    if (this.tOption.showAction) { this.displayedColumns.push('action'); }
    this.dataSource = new MatTableDataSource<any>(dataList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if (!this.filterEnabled) {
      this.totalCallback.emit({value: this.tOption.pTotal, id: this.tOption.id});
    }
  }

  applyFilter(filterValue: any): void {
    if (this.tOption.gFilter && this.colFilters.length) {
      this.tOption.gFilter = undefined;
      this.colFilters = [];
    }
    if (this.tOption.serverSide && this.tOption.serverSide.service) {
      this.filterQuery = (filterValue)
        ? {multi_match: {query: filterValue, type: 'phrase_prefix', fields: this.cFields}}
        : undefined;
      this.getCollectionData();
    } else {
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }

  applySorting(event: any): void {
    if (!event.active) { return; }
    let keyword = '';
    this.tOption.columns.forEach((obj: any) => {
      if (obj.col === event.active && obj.isKeyword) { keyword = '.keyword'; return; }
      if (obj.col === event.active && obj.isKey) {keyword = '.name.keyword'; return; }
    });
    const value = event.active.replace(/^\s+|\s+$/g, '');
    const newVal = value.split(' ').join('') + keyword;
    if (this.tOption.serverSide && this.tOption.serverSide.service) {
      this.tOption.serverSide.sort = [{[newVal]: {order: event.direction}}];
    }
    this.getCollectionData();
  }

  isBool(cell: any): boolean {
    return (cell === 'true' || cell === '');
  }

  pageChanged(event: PageEvent): void {
    this.isAChanged = true;
    this.cpIndex = event.pageIndex;
    this.tOption.pSize = event.pageSize;
    this.getCollectionData();
  }

  refreshTableData(): void {
    if (this.tOption.serverSide && this.tOption.serverSide.service) {
      this.getCollectionData();
    } else {
      this.getCollectionData();
    }
  }

  arrayToString(objArr: any, key: string): any {
    return objArr.map((x: any) => x[key]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.tOption = changes.tOption.currentValue;
    if (this.tOption.gFilter) {
      this.colFilterQuery = this.tOption.gFilter;
      let ckey: any; let val: any;
      if (this.tOption.gFilter && (this.tOption.gFilter.range || this.tOption.gFilter[0].range)) {
        if (this.tOption.gFilter.range) {
          ckey = Object.keys(this.tOption.gFilter.range)[0];
          val =  JSON.stringify(this.tOption.gFilter.range[Object.keys(this.tOption.gFilter.range)[0]]);
        } else {
          ckey = Object.keys(this.tOption.gFilter[0].range)[0];
          val =  JSON.stringify(this.tOption.gFilter[0].range[Object.keys(this.tOption.gFilter[0].range)[0]]);
        }
      } else if (this.tOption.gFilter && this.tOption.gFilter.must_not) {
        ckey = 'must_not';
        val =  JSON.stringify(this.tOption.gFilter.must_not);
      } else if (this.tOption.gFilter && this.tOption.gFilter[0] && this.tOption.gFilter[0].bool &&
        this.tOption.gFilter[0].bool.should && this.tOption.gFilter[0].bool.should[0] &&
        this.tOption.gFilter[0].bool.should[0].exists) {
        ckey = Object.keys(this.tOption.gFilter[0].bool.should[0].exists)[0];
        val = this.tOption.gFilter[0].bool.should[0].exists[Object.keys(this.tOption.gFilter[0].bool.should[0].exists)[0]];
      } else if (this.tOption.gFilter && this.tOption.gFilter[0] && this.tOption.gFilter[0].bool && this.tOption.gFilter[0].bool.must_not) {
        ckey = 'must_not';
        val = JSON.stringify(this.tOption.gFilter[0].bool.must_not[0]);
      } else {
        ckey = Object.keys(this.tOption.gFilter[0].bool.should[0].match)[0];
        val = this.tOption.gFilter[0].bool.should[0].match[Object.keys(this.tOption.gFilter[0].bool.should[0].match)[0]];
      }
      this.colFilters = [{key: ckey, name: ckey, value: val, hKey: false}];
      if ((!this.tOption.gFilter.range || !this.tOption.gFilter[0].range) && this.tOption.gFilter[0] && this.tOption.gFilter[0].bool &&
        this.tOption.gFilter[0].bool.should && this.tOption.gFilter[0].bool.should.length > 1) {
        this.colFilters = [];
        this.tOption.gFilter[0].bool.should.forEach((obj: any) => {
          this.colFilters.push({key: Object.keys(obj.match)[0], name: Object.keys(obj.match)[0],
            value: obj.match[Object.keys(obj.match)[0]], hKey: false});
        });
      }
      this.getCollectionData();
    }
  }

  downloadAsXls(type: string): void {
    if (!this.tOption.faClass) {
      this.toast.sToast('error', 'Class name not added.');
      return;
    }
    const dateStr = new Date().toLocaleDateString().replace(/\//g, '_') + '_'
      + new Date().toLocaleTimeString().replace(/\:/g, '_');
    const xlsxParam: any = {
      query: '', classname: this.tOption.faClass, fieldmap: [],
      filename: this.tOption.faClass + '_' + dateStr
    };
    for (const col of this.tOption.columns) {
      // @ts-ignore
      xlsxParam.fieldmap.push({field: col.col, renameas: col.header});
    }
    this.loaderService.display(true, 'Preparing xlsx file...');
    // tslint:disable-next-line:no-shadowed-variable
    let query: any = {};
    delete this.tmpOption.serverSide.q.query.bool.filter;
    this.tmpOption.serverSide.q.query.bool.must.forEach((obj: any, index: number) => {
      if (obj.bool && obj.bool.should && obj.bool.should[0]?.match) {
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
        if (obj.bool && obj.bool.should && obj.bool.should[0]?.match) {
          query.query.bool.must.push(obj);
        } else {
          query.query.bool.filter.push(obj);
        }
      });
    }
    xlsxParam.query = JSON.stringify(query);
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

  getEmptyColumns(): {[key: string]: boolean} {
    const columns: any = {};
    this.displayedColumns.forEach(col => {
      columns[col] = this.dataSource.data.every(element => {
        return !element[col];
      });
    });
    return columns;
  }

  addTableRecord(): void {
    this.addCallback.emit({});
  }
}
