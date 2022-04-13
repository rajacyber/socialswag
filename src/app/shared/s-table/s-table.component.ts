import {Component, ElementRef, Input, OnInit, Output, OnChanges, ViewChild, EventEmitter, SimpleChanges} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatMenuTrigger} from '@angular/material/menu';
import {LoaderService} from '../../_services/loader.service';
import {BaseRequestService} from '../../_services/base.service';
import {MyToastrService} from '../../_services/toastr.service';
import {CommonService} from '../../_services/common.services';

@Component({
  selector: 'app-sa-table',
  templateUrl: './s-table.component.html',
  styleUrls: ['./s-table.component.scss']
})

export class STableComponent implements OnInit, OnChanges {
  @Input() value: any;
  colFilters: any = [];
  colfilter: any = {};
  showUpper = true;
  colFilterQuery: any;
  columns!: Array<any>;
  expandedElement: any[] = [];
  displayedColumns!: Array<any>;
  dataSource!: MatTableDataSource<any>;
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
  @Input() expandView: boolean;
  @Input() title: any;
  @Input() dataList: any;
  @Input() columnsList: any;
  @Input() query: any;
  @Input() fieldMap: any;
  @Input() existKey: any;
  @Input() customCols: any;
  @Input() showHeaderUpperCase: any;
  @Input() itemPerPage: any;
  @Input() defaultSort: any;
  @Input() isFilterTable = false;
  @Input() filterSource: any;
  @Input() filterSubSource: any;
  @Input() filterKey: any;
  @Input() filterSubKey: any;
  @Input() pageSize = 5;
  @Input() tableOptions: any = {showColFilter: true, refreshData: true};
  @Output() colfilterUpdate = new EventEmitter();
  @Output() hyperlinkCallback = new EventEmitter();
  @Output() refreshCallback = new EventEmitter();

  /*customCols=[
    { col: 'isCompliant', htmlCols: { true: ''}}
  ]*/

  private searchedColName: any;

  constructor(private loaderService: LoaderService, private toast: MyToastrService,
              private commonService: CommonService,
              private baseService: BaseRequestService) { }

  columnFilter(val: any, col: any): void {
    this.searchedColName = col;
    this.colfilterUpdate.next({value: val, col});
    this.colFilters.push({key: col, name: col, value: val});
  }
  removeFilter(filter: any): void {
    this.colFilters.forEach((obj: { key: string | number; }, index: any) => {
      if (filter.key === obj.key) { this.colfilter[obj.key] = ''; this.colFilters.splice(index, 1); }
    });
    this.colfilterUpdate.emit({value: '', col: filter.key});
  }

  isTextCenterCol(col: string): boolean {
    if (!this.customCols) { return false; }
    const filter = this.customCols.filter((x: any) => x.col === col);
    if (filter.length) {
      return (filter[0].isCenter);
    }
    return false;
  }

  isExistCustomCols(col: string): boolean {
    if (!this.customCols) { return false; }
    const filter = this.customCols.filter((x: any) => x.col === col);
    return filter.length;
  }

  ngOnInit(): void {
    if (this.isFilterTable) {
      this.filterKey = (this.filterKey) ? this.filterKey : this.filterSource[0].value;
      this.filterSubKey = 'Non Compliant';
      const data = this.filterSource.filter((x: any) => x.value === this.filterKey)[0].data;
      this.initiateTable(data);
      setTimeout(() => { this.updateSubFilterTable({value: this.filterSubKey}); });
    } else {
      this.initiateTable(this.dataList);
    }
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
    if (this.columns === undefined) {
      this.columns = cols.map((column: string | number) => {
        return {
          columnDef: column,
          header: column,
          cell: (element: any) => `${(element[column] || element[column] === 0 || element[column] === false)  ? element[column] : element[column] }`
        };
      });
      this.columns.forEach(col => {
        if (col.isvisible === undefined) {
          col.isvisible = true;
        }
      });
    }

    if (this.displayedColumns === undefined) {
      this.displayedColumns = (this.columnsList && this.columnsList.length)
        ? this.columnsList.slice()
        : this.columns.map(c => c.columnDef);
    }
    this.dataSource = new MatTableDataSource<any>(dataList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataList =  dataList;
  }

  applyFilter(filterValue: any): void {
    const fValue = filterValue.target.value;
    if (this.dataSource) {
      this.dataSource.filter = fValue.trim().toLowerCase();
    }
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isBool(cell: any): boolean {
    return (cell === 'true' || cell === 'false' || cell === '');
  }

  hyperLinkCall(row: any, col?: any): any {
    delete row.highlighted;
    delete row.hovered;
    const event = {row, col};
    this.hyperlinkCallback.emit(event);
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
      property = (property[parts[i]] || property[parts[i]] === 0) ? property[parts[i]] : ''; // @ts-ignore
      if (property[parts[i]] === 0) { property = property[parts[i]]; }
    }
    return property;
  }

  updateTable($event: any): void {
    this.dataList = undefined;
    this.filterKey = $event.value;
    const dataList = this.filterSource.filter((x: any) => x.value === this.filterKey);
    this.dataSource.data = dataList[0].data.slice();
  }

  updateSubFilterTable($event: any): void {
    this.dataList = undefined;
    this.filterSubKey = $event.value;
    const dataList = this.filterSource.filter((x: any) => x.value === this.filterKey);
    const subDataList = ($event.value === '*')
      ? dataList[0].data.slice()
      : dataList[0].data.filter((x: any) => (x.filterc === this.filterSubKey));
    if (this.dataSource) { this.dataSource.data = subDataList.slice(); }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value) {
      this.value = changes.value.currentValue;
    }
    if (this.value || this.value === '') {
      if (this.dataSource) {
        this.dataSource.filter = this.value.trim().toLowerCase();
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }
    }
    if (changes.filterSubKey) {
      this.updateSubFilterTable({value: changes.filterSubKey.currentValue});
    }
  }
  refreshTableData(): void {
    this.refreshCallback.emit();
  }

  downloadAsXls(type: string): void {
    const dateStr = new Date().toLocaleDateString().replace(/\//g, '_') + '_'
      + new Date().toLocaleTimeString().replace(/\:/g, '_');
    let xlsxParam: any= null;
    xlsxParam = { query: '', classname: 'Compliance', fieldmap: [], filename: 'Compliance_' + dateStr };
    xlsxParam.fieldmap = this.fieldMap;
    this.loaderService.display(true, 'Preparing xlsx file...');
    let query: any = {};
    query = Object.assign({}, this.query);
    if (this.isFilterTable && this.filterKey) { // Global filter
      query.query.bool.must.push({ exists: { field: `benchmarks.${this.filterKey}` } });
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
    xlsxParam.query = JSON.stringify(query);
    // this.companyService.companygetxlsxreportApiCompanyIdGetxlsxreportPost(
    //   { id: this.commonService.currentCompany._id, body: xlsxParam }).subscribe((result: any) => {
    //     this.loaderService.display(false);
    //     if (result && result.length && result[0]) {
    //       window.open(result[1], '_blank');
    //     } else {
    //       this.toast.sToast('error', result[1]);
    //     }
    //   });
  }

  drop(event: CdkDragDrop<string[]>): any {
    const displayedpreviousindex = this.displayedColumns.indexOf(this.columnsList[event.previousIndex]);
    const displayedcurrentindex = this.displayedColumns.indexOf(this.columnsList[event.currentIndex]);
    moveItemInArray(this.displayedColumns, displayedpreviousindex , displayedcurrentindex);
    moveItemInArray(this.columnsList, event.previousIndex , event.currentIndex);
    const data = this.filterSource.filter((x: any) => x.value === this.filterKey)[0].data;
    this.initiateTable(data);
    setTimeout(() => { this.updateSubFilterTable({ value: this.filterSubKey }); });
  }

  showhide(i: any, list: any): void {
    this.displayedColumns = [];
    this.columns.forEach(element => {
      if (element.header === list) {
        this.columns.filter((x) => x.header === list)[0].isvisible = !(this.columns.filter((x) => x.header === list)[0].isvisible);
        element.isvisible = this.columns.filter((x) => x.header === list)[0].isvisible;
      }
    });
    // tslint:disable-next-line:prefer-for-of
    for (let columnsListindex = 0; columnsListindex < this.columnsList.length; columnsListindex++) {
      this.columns.forEach(element => {
        if (element.header === this.columnsList[columnsListindex] && element.isvisible === true) {
          this.displayedColumns.push(this.columnsList[columnsListindex]);
        }
      });
    }
    const data = this.filterSource.filter((x: any) => x.value === this.filterKey)[0].data;
    this.initiateTable(data);
    setTimeout(() => { this.updateSubFilterTable({ value: this.filterSubKey }); });
  }

  expandElement(element: any): void {
    if (this.expandView){
      this.expandedElement = (this.expandedElement === element) ? null : element;
    }
  }
}
