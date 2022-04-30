import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseRequestService } from 'src/app/_services/base.service';
import { ConfirmDialogService } from 'src/app/_services/confirmdialog.service';
import { LoaderService } from 'src/app/_services/loader.service';
import { ModalService } from 'src/app/_services/modal.service';
import { MyToastrService } from 'src/app/_services/toastr.service';

@Component({
  selector: 'app-live-learning',
  templateUrl: './live-learning.component.html',
  styleUrls: ['./live-learning.component.scss']
})
export class LiveLearningComponent implements OnInit {
  liveLearningTableOptions: any;
  showLiveLearning = true;
  showLiveLearningTable = true;

  constructor(private _formBuilder: FormBuilder, public baseService: BaseRequestService,
    public loaderService: LoaderService, public httpClient: HttpClient,
    public modalService: ModalService, public toast: MyToastrService,
    public confirmDialog: ConfirmDialogService) { 
      this.liveLearningTableOptions = {
        columns: [
          {
            header: 'Name',
            columnDef: 'title',
            filter: '',
            cell: '(element: any) => `${element.title}`',
            order: 0,
            visible: true,
            isSort: true,
            iscolumnSearch: true,
            colFilters: {type: 'text', hKey: true},
          }, {
            header: 'Master Name',
            columnDef: 'entity_ref.name',
            filter: '',
            cell: '(element: any) => `${entity_ref.name}`',
            order: 1,
            visible: true,
            isSort: true,
            iscolumnSearch: true,
            colFilters: {type: 'text', hKey: true},
          }, {
            header: 'Created on',
            columnDef: 'c',
            filter: 'DD-MMM-YYYY',
            cell: '(element: any) => `${element.c}`',
            order: 2,
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
            order: 3,
            visible: true,
            isSort: true,
            iscolumnSearch: true,
            israngeSearch: true,
            colFilters: {type: 'range', hKey: true},
            dateCol: {start: '', end: ''},
            width: '150px'
          }, {
            header: 'Released on',
            columnDef: 'released_on',
            filter: 'DD-MMM-YYYY',
            cell: '(element: any) => `${element.released_on}`',
            order: 4,
            visible: true,
            isSort: true,
            iscolumnSearch: true,
            israngeSearch: true,
            colFilters: {type: 'range', hKey: true},
            dateCol: {start: '', end: ''}
          }, {
            header: 'Episode Count',
            columnDef: 'episodes_total',
            filter: '',
            cell: '(element: any) => `${element.episodes_total}`',
            order: 5,
            visible: true,
            isSort: true,
            iscolumnSearch: false,
          }, {
            header: 'Category',
            id: 'Category',
            columnDef: 'name',
            filter: '',
            cell: '(element: any) => `${element.name}`',
            order: 6,
            visible: true,
            listView: true,
            dictView: true,
            iscolumnSearch: true,
            isSort: true,
            selectFilter: true,
            list: true,
            colFilters: {type: 'text', hKey: true},
          },  {
            header: 'Status',
            id: 'status',
            columnDef: 'status',
            filter: '',
            cell: '(element: any) => `${element.status}`',
            order: 7,
            visible: true,
            isSort: true,
            iscolumnSearch: true,
            selectFilter: true,
            colFilters: {
              type: 'select',
              hKey: false, isKeyword: true,
              options: [{value: 'Published', name: 'Published'}, {value: 'ComingSoon', name: 'ComingSoon'}]
            }
          }, {
            header: 'Languages',
            columnDef: 'languages',
            cell: '(element: any) => `${element.languages}`',
            order: 8,
            filter: false,
            visible: true,
            listView: true,
            iscolumnSearch: true,
            isSort: true,
            width: '300px',
            selectFilter: true,
            list: true,
            colFilters: {type: 'text', hKey: true},
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
            {text: 'Delete', icon: 'delete_forever', callback: 'deleteFn', isGlobal: false},
            {text: 'Change Status', icon: 'tags', callback: 'changeFn', isGlobal: false},
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
    this.liveLearningTableOptions.tableOptions.loader = false;
  }

liveLearningsortCall(event: any): void {

}

liveLearningfilterCall(event: any): void {
    
}

liveLearningactionCall(event: any): void {
    
}

liveLearningpageCall(event: any): void {
    
}

liveLearningaddTableData(): void {
    
}

liveLearningtimerCallData(): void {
    
}

liveLearningColFilterCall(event: any): void {
    
}

getLiveLearning(): void {
    
}

}
