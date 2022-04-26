import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.scss']
})
export class AuditLogComponent implements OnInit {

  auditLogsTableOptions: any = [];

  constructor() { 
    this.auditLogsTableOptions = {
      columns: [
        {
          header: 'Who Did',
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
        }, {
          header: 'When Did',
          columnDef: 'entity_ref.name',
          filter: '',
          cell: '(element: any) => `${entity_ref.name}`',
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
          header: 'What',
          columnDef: 'what',
          filter: '',
          cell: '(element: any) => `${element.what}`',
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
          header: 'Impact',
          columnDef: 'impact',
          filter: '',
          cell: '(element: any) => `${element.impact}`',
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
        }
      ],
      sortOptions: {active: 'u', direction: 'desc'},
      faClass: 'AuditLogs',
      _pageData: [],
      tableOptions: {
        id: 'auditlogs',
        title: 'Audit Logs',
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
        showhideList: true,
        refreshData: true,
        exportExcel: true,
        columnSearch: true,
        compareData: false,
        hideDownload: true
      }
    };
  }

  auditLogsortCall(event: any): void {

  }

  auditLogsfilterCall(event: any): void {
      
  }

  auditLogsColFilterCall(event: any): void {
      
  }

  auditLogsactionCall(event: any): void {
      
  }

  auditLogspageCall(event: any): void {
      
  }

  getauditLogs(): void {
      
  }

  auditLogstimerCallData(): void {
      
  }
  ngOnInit(): void {
    this.auditLogsTableOptions.tableOptions.loading = false;
  }

}
