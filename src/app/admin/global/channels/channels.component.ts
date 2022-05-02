import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { ContentDataService } from 'src/app/api/services';
import { BaseRequestService } from 'src/app/_services/base.service';
import { ConfirmDialogService } from 'src/app/_services/confirmdialog.service';
import { LoaderService } from 'src/app/_services/loader.service';
import { ModalService } from 'src/app/_services/modal.service';
import { MyToastrService } from 'src/app/_services/toastr.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})


export class ChannelsComponent implements OnInit {
  @ViewChild('channel', {static: false}) channel: MatSidenav;
  channelsTableOptions: any;
  showChannels = true;
  showChannelsTable = true;
  filterQuery: any;
  colFilterQuery: any;
  classcurrentPage = 0;
  colFilters: any = [];
  colFilterCols: any = [];

  constructor(private _formBuilder: FormBuilder, public baseService: BaseRequestService,
    public loaderService: LoaderService, public httpClient: HttpClient,  public contentService: ContentDataService,
    public modalService: ModalService, public toast: MyToastrService,
    public confirmDialog: ConfirmDialogService) { 
      this.channelsTableOptions = {
        columns: [
          {
            header: 'Celebrity Name',
            columnDef: 'entity_ref.name',
            filter: '',
            cell: '(element: any) => `${element.entity_ref.name}`',
            order: 0,
            visible: true,
            isSort: true,
            iscolumnSearch: true,
            colFilters: {type: 'text', hKey: true},
          }, {
            header: 'Title',
            columnDef: 'entity_ref.title',
            filter: '',
            cell: '(element: any) => `${element.title}`',
            order: 1,
            visible: true,
            isSort: true,
            iscolumnSearch: true,
            colFilters: {type: 'text', hKey: true},
          }, {
            header: 'Comments Count',
            columnDef: 'comments_count',
            filter: '',
            cell: '(element: any) => `${element.comments_count}`',
            order: 2,
            visible: true,
            isSort: true,
            iscolumnSearch: false,
            colFilters: {type: 'text', hKey: true},
          }, {
            header: 'Likes Count',
            columnDef: 'likes_count',
            filter: '',
            cell: '(element: any) => `${element.likes_count}`',
            order: 3,
            visible: true,
            isSort: true,
            iscolumnSearch: false,
            colFilters: {type: 'text', hKey: true},
          }, {
            header: 'Created on',
            columnDef: 'c',
            filter: 'DD-MMM-YYYY',
            cell: '(element: any) => `${element.c}`',
            order: 4,
            visible: true,
            iscolumnSearch: true,
            isSort: true,
            israngeSearch: true,
            colFilters: {type: 'range', hKey: true},
            dateCol: {start: '', end: ''}
          }, {
            header: 'Updated on',
            columnDef: 'u',
            filter: 'DD-MMM-YYYY',
            cell: '(element: any) => `${element.u}`',
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
        faClass: 'channels',
        _pageData: [],
        tableOptions: {
          id: 'channels',
          title: 'Channels',
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
    this.getChannels();
  }

channelssortCall(idata: any): void {
  this.channelsTableOptions.sortOptions = idata;
  this.getChannels();
}

channelsfilterCall(idata: any): void {
  const fields = ['entity_ref.name'];
  this.filterQuery = (idata && idata.length > 0) ? {
    multi_match: {
      query: idata,
      type: 'phrase_prefix',
      fields
    }
  } : undefined;
  this.getChannels();
}

channelsactionCall(event: any): void {
    
}

channelspageCall(event: any): void {
    
}

channelsaddTableData(): void {
  this.channel.open();
}

channelstimerCallData(): void {
    
}

queryFilterCallBack(event: any):void {
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
        cl.key = (cl.key === 'category') ? 'category_ref.name' : cl.key;
        if (cl.list) tmpObj = {must: [{multi_match: {query: `*${cl.value}*`,type: 'phrase_prefix', 'fields':[cl.key]}}]};
        else tmpObj = {bool: {should: [{query_string: {fields: [cl.key], query: `*${cl.value}*`}}]}};
      }
    } else {
      tmpObj1.bool.should[0].match[cl.key] = cl.value;
      tmpObj = tmpObj1;
    }
    console.log(tmpObj);
    this.colFilterQuery.push(tmpObj);
  }
  this.getChannels();
}

channelsColFilterCall(event: any): void {
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
  this.getChannels();
}

channelsShowHideLoading(status: any): void {
  const data = Object.assign({}, this.channelsTableOptions);
  this.channelsTableOptions = {};
  this.channelsTableOptions = data;
  this.channelsTableOptions.tableOptions.loading = status;
}

getChannels(): void {
  this.channelsShowHideLoading(true);
  this.loaderService.display(true, 'Getting channelses...');
  this.channelsTableOptions.serverSide = {
    service: 'contentService', fn: 'getAllApiContentdataGet', q: {
      query: {
        bool: {
          must: [{match: {'data_type.keyword': 'Channel'}}]
        }
      }
    }
  };
  let params: any;
  params = {
    query: {
      bool: {
        must: [{match: {'data_type.keyword': 'Channel'}}]
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
    if (this.channelsTableOptions.sortOptions && this.channelsTableOptions.sortOptions.direction
      && this.channelsTableOptions.sortOptions.direction !== '') {
    const orderArr = ['', 'c', 'u', '_id'];
    if (orderArr.indexOf(this.channelsTableOptions.sortOptions.active) === -1) {
      // @ts-ignore
      sorts[0][this.channelsTableOptions.sortOptions.active + '.keyword'] = {order: this.channelsTableOptions.sortOptions.direction};
    } else {
      // @ts-ignore
      sorts[0][this.channelsTableOptions.sortOptions.active] = {order: this.channelsTableOptions.sortOptions.direction};
    }
  }
  const q = JSON.stringify(params);
  const skip = this.classcurrentPage;
  const sort = JSON.stringify(sorts);
  const limit = this.channelsTableOptions.tableOptions.pageSize;
  const fields = JSON.stringify(['c', 'u', '_id', 'title']);
  this.contentService.getAllApiContentdataGet({q, skip, limit, sort}).subscribe((result: any) => {
    this.channelsTableOptions.pageData = [];
    if (result.data.length) {
      this.channelsTableOptions.pageData = result.data;
      this.channelsTableOptions.tableOptions.pageTotal = result.total;
    } else {
      this.channelsTableOptions.pageData = [];
      this.channelsTableOptions.tableOptions.pageTotal = 0;
    }
    this.channelsShowHideLoading(false);
    this.loaderService.display(false);
  });
  
}
}