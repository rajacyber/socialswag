import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ContentDataService } from 'src/app/api/services';
import { BaseRequestService } from 'src/app/_services/base.service';
import { ConfirmDialogService } from 'src/app/_services/confirmdialog.service';
import { LoaderService } from 'src/app/_services/loader.service';
import { ModalService } from 'src/app/_services/modal.service';
import { MyToastrService } from 'src/app/_services/toastr.service';
import {
  zoomInOnEnterAnimation
} from 'angular-animations';
import { MasterService } from 'src/app/_services/master.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [
    zoomInOnEnterAnimation()
  ],
})


export class PostsComponent implements OnInit {
  @ViewChild('postmodal', {static: false}) postmodal: MatSidenav;
  @ViewChild('postsupload', {static: false}) postsupload: MatSidenav;

  public userCtrl: FormControl = new FormControl();
  public userFilterCtrl: FormControl = new FormControl();
  public filteredUsers: ReplaySubject<any> = new ReplaySubject<any>(1);
  protected users: any = [];
  postData: any = {
    description: []
  };
  postDetails: any = {}
  protected _onDestroy = new Subject<void>();
  public searching = false;
  postsTableOptions: any;
  showPosts = true;
  showPostsTable = true;
  filterQuery: any;
  colFilterQuery: any;
  preview_images: any = '';
  classcurrentPage = 0;
  colFilters: any = [];
  colFilterCols: any = [];
  Objectkeys = Object.keys;
  allUser: any;
  postsData: any = {
    celebrity_id: '',
    video_link: '',
    description: '',
  };
  postsDetails: any = {
    description: []
  };
  step = 0;
  languagesList: any;
  categoryList: any;
  posts_id: any;
  images: any = {};
  reason: any;
  postscurrentPage: any;

  constructor(private _formBuilder: FormBuilder, public baseService: BaseRequestService,
    public loaderService: LoaderService, public httpClient: HttpClient,  public contentService: ContentDataService,
    public modalService: ModalService, public toast: MyToastrService, public masterService: MasterService,
    public confirmDialog: ConfirmDialogService) {
      masterService.reasonEVE.subscribe((value: any) => {
        this.reason = value;
      }); 
      this.postsTableOptions = {
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
        faClass: 'Posts',
        _pageData: [],
        tableOptions: {
          id: 'Posts',
          title: 'Posts',
          isServerSide: true,
          selectText: '',
          loading: true,
          floatingFilter: true,
          rowSelection: false,
          showColFilter: true,
          showAction: true,
          actionMenuItems: [
            {text: 'Edit', icon: 'edit', callback: 'editFn', isGlobal: false},
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
    this.getPosts();
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
    this.postsData.description[index].key_takeaways.push({name: ''} );
  }

  removeTakeawayKey(index: any, idx: any): void {
    this.postsData.description[index].key_takeaways.splice(idx, 1);
  }

  isPrimary(index: any, event:any): void {
    (event.checked) ? this.postsData.description.map((x: any, i: any) => x.is_default = (i === index) ? true : false) : null;
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  addDes(){
    this.postsData.description.push({
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
    this.postsData.description.splice(index, 1);
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

  postssortCall(idata: any): void {
    this.postsTableOptions.sortOptions = idata;
    this.getPosts();
  }

  postsfilterCall(idata: any): void {
    const fields = ['entity_ref.name'];
    this.filterQuery = (idata && idata.length > 0) ? {
      multi_match: {
        query: idata,
        type: 'phrase_prefix',
        fields
      }
    } : undefined;
    this.getPosts();
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
  
  savePosts(): void {
    this.loaderService.display(true);
    const description: any = Object.assign({}, this.postsData);
    (this.postsData._id) ? this.postsData.content_id = this.postsData._id : null;
    description.description.push({description: description.description})
    this.baseService.doRequest(`api/contentdata/createPosts`,
      'post', description).subscribe((result: any) => {
      this.loaderService.display(false);
      if(result) {
        this.toast.sToast('success', 'posts added successfully!.');
        this.postmodal.close();
        this.getPosts();
      }
      else {
        this.toast.sToast('error', 'Error!.');
      }
    });
  }
  postsactionCall(data: any): void {
    if (data.action.text === 'Edit'){
      this.postsData = data.row;
      this.postsData.celebrity_id = data.row.entity_ref.id;
      this.userCtrl.setValue(data.row.entity_ref.id);
      this.postmodal.open();
    }
    if (data.action.text === 'Details'){
      this.postsDetails = data.row;
      this.showPosts = false;
    }
    if (data.action.text === 'Delete') {
      const dataRow = data.row;
      this.deletePosts(dataRow);
    }
  }

  deletePosts(currentposts: any): void {
    const titleName = 'Confirmation';
    const message = 'Are you sure you want to delete ' + currentposts.title + ' posts ?';
    const cancelText = 'No';
    const acceptText = 'Yes';
    const showReason = true;
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText, showReason);
    this.confirmDialog.dialogResult.subscribe((res: any) => {
      const data = {content_id: currentposts._id, reason: this.reason};
      if (res) {
        this.baseService.doRequest(`/api/contentdata/deleteContent`,
          'post',data).subscribe((result: any) => {
          if (result[0]) {
            this.toast.sToast('success', 'Removed successfully');
            this.getPosts();
          } else {
            this.toast.sToast('error', result[1]);
          }
        });
      }
    });
  }

  postspageCall(event: any): void {
    this.postsTableOptions.tableOptions.pageSize = event.pageSize;
    this.postscurrentPage = event.pageIndex;
    this.getPosts();
  }

  postsaddTableData(): void {
    this.postmodal.open();
  }

  poststimerCallData(): void {
      
  }

  queryFilterCallBack(event: any):void {
    this.colFilterQuery = [];
    for (const cl of event.colFilters) {
      const tmpObj1: any = {bool: {should: [{match: {}}]}};
      let tmpObj: any = {};
      if (cl.hKey) {
        if(cl.key === 'c' || cl.key === 'u'){
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
    this.getPosts();
  }

  postsColFilterCall(event: any): void {
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
    this.getPosts();
  }

  postsShowHideLoading(status: any): void {
    const data = Object.assign({}, this.postsTableOptions);
    this.postsTableOptions = {};
    this.postsTableOptions = data;
    this.postsTableOptions.tableOptions.loading = status;
  }

  getPosts(): void {
    this.postsShowHideLoading(true);
    this.loaderService.display(true, 'Getting Posts...');
    this.postsTableOptions.serverSide = {
      service: 'contentService', fn: 'getAllApiContentdataGet', q: {
        query: {
          bool: {
            must: [{match: {'data_type.keyword': 'Posts'}}]
          }
        }
      }
    };
    let params: any;
    params = {
      query: {
        bool: {
          must: [{match: {'data_type.keyword': 'Posts'}}]
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
      if (this.postsTableOptions.sortOptions && this.postsTableOptions.sortOptions.direction
        && this.postsTableOptions.sortOptions.direction !== '') {
      const orderArr = ['', 'c', 'u', '_id'];
      if (orderArr.indexOf(this.postsTableOptions.sortOptions.active) === -1) {
        // @ts-ignore
        sorts[0][this.postsTableOptions.sortOptions.active + '.keyword'] = {order: this.postsTableOptions.sortOptions.direction};
      } else {
        // @ts-ignore
        sorts[0][this.postsTableOptions.sortOptions.active] = {order: this.postsTableOptions.sortOptions.direction};
      }
    }
    const q = JSON.stringify(params);
    const skip = this.classcurrentPage;
    const sort = JSON.stringify(sorts);
    const limit = this.postsTableOptions.tableOptions.pageSize;
    const fields = JSON.stringify(['c', 'u', '_id', 'title']);
    this.contentService.getAllApiContentdataGet({q, skip, limit, sort}).subscribe((result: any) => {
      this.postsTableOptions.pageData = [];
      if (result.data.length) {
        this.postsTableOptions.pageData = result.data;
        this.postsTableOptions.tableOptions.pageTotal = result.total;
      } else {
        this.postsTableOptions.pageData = [];
        this.postsTableOptions.tableOptions.pageTotal = 0;
      }
      this.postsShowHideLoading(false);
      this.loaderService.display(false);
    });
    
  }
}