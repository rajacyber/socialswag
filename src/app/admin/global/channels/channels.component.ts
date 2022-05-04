import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { list } from 'postcss';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
  @ViewChild('channelupload', {static: false}) channelupload: MatSidenav;

  public userCtrl: FormControl = new FormControl();
  public userFilterCtrl: FormControl = new FormControl();
  public filteredUsers: ReplaySubject<any> = new ReplaySubject<any>(1);
  protected users: any = [];
  protected _onDestroy = new Subject<void>();
  public searching = false;
  channelsTableOptions: any;
  showChannels = true;
  showChannelsTable = true;
  filterQuery: any;
  colFilterQuery: any;
  preview_images: any = '';
  classcurrentPage = 0;
  colFilters: any = [];
  colFilterCols: any = [];
  Objectkeys = Object.keys;
  allUser: any;
  channelData: any = {
    celebrity_id: '',
    title: '',
    video_link: '',
    category: [],
    description:[{
      language: '',
      description: '',
      title: '',
      key_takeaways: [{name: ''}],
      mini_announcement: '',
      short_description: '',
      is_default: false,
    }],

  };
  step = 0;
  languagesList: any;
  categoryList: any;
  channel_id: any;
  images: any = {};

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
            {
              text: 'Upload Images',
              icon: 'cloud_upload',
              callback: 'uploadFn',
              isGlobal: true
            },
            {text: 'Edit', icon: 'edit', callback: 'editFn', isGlobal: true},
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
    this.userFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterUsers();
    });
    this.getCelebrityUserList();
    this.getLanguageAndCountry();
    this.getCategory();
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

  addTakeawayKey(index: any): void {
    this.channelData.description[index].key_takeaways.push({name: ''} );
  }

  removeTakeawayKey(index: any, idx: any): void {
    this.channelData.description[index].key_takeaways.splice(idx, 1);
  }

  isPrimary(index: any, event:any): void {
    (event.checked) ? this.channelData.description.map((x: any, i: any) => x.is_default = (i === index) ? true : false) : null;
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  addDes(){
    this.channelData.description.push({
      language: '',
      description: '',
      title: '',
      key_takeaways: [{name: ''}],
      mini_announcement: '',
      short_description: '',
      is_default: false,
    })
  }

  removeDes(index: any){
    this.channelData.description.splice(index, 1);
  }

  getCelebrityUserList(search?: any): void {
    let cq: any;
    cq =  {
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

  async getLanguageAndCountry(): Promise<any> {
    const defaultData = await this.baseService.doRequest(`/api/utilities/getContent`, 'post', {}).toPromise();
    this.languagesList = defaultData.language;
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

  closeCurrentUser(event: any): void {
    if (this.allUser) {
      this.filteredUsers.next(this.allUser.slice());
    }
    if (!event) {
      this.getCelebrityUserList();
    }
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
  
  saveChannel(): void {
    this.loaderService.display(true);
    const description: any =  this.channelData;
    description.description.map((item: any) => item.key_takeaways = item.key_takeaways.map((x: any) => x.name));
    this.baseService.doRequest(`api/contentdata/createChannel`,
      'post', description).subscribe((result: any) => {
      this.loaderService.display(false);
      if(result) {
        this.toast.sToast('success', 'Channel added successfully!.');
        this.channel.close();
        this.getChannels();
      }
      else {
        this.toast.sToast('error', 'Error!.');
      }
    });
  }
  channelsactionCall(data: any): void {
    if (data.action.text === 'Upload Images') {
      this.channel_id = data.row._id;
      this.channelupload.open();
    } else if (data.action.text === 'Edit'){
      data.row.description?.map((x: any) =>{ 
        x?.key_takeaways?.map((y: any) =>{ 
          y = {name: y}
        })
      });
      this.channelData = data.row;
      this.channel.open();
    }
  }

  imagesUpload(): void {
    const formData = new FormData();
    this.Objectkeys(this.images).forEach(obj => {
      formData.append(obj, this.images[obj]);
    });
    formData.append('content_id',this.channel_id);
    this.loaderService.display(true, 'Uploading images...');
    this.httpClient.post<any>('/api/contentdata/updateChannelPreviewImages',
      formData).subscribe(result => {
      this.loaderService.display(false);
      if (result[0]) {
        this.toast.sToast('success', result[1]);
        // @ts-ignore
        // this._document.defaultView.location.reload();
        this.preview_images = '';
        this.images = {};
        this.channelupload.close();
      } else {
        this.toast.sToast('error', result[1]);
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
      };
    }
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
    this.loaderService.display(true, 'Getting channels...');
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