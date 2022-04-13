import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output, SimpleChange,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {FormControlService} from 'src/app/_services/form-control.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {debounceTime, takeUntil} from 'rxjs/operators';
import {MatSelect} from '@angular/material/select';
import {ReplaySubject, Subject} from 'rxjs';
import {AuthenticationService} from '../../../_services/authentication.service';
import {LoaderService} from '../../../_services/loader.service';
import {BaseRequestService} from '../../../_services/base.service';
import {MyToastrService} from '../../../_services/toastr.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [FormControlService]
})

export class DynamicFormComponent implements OnInit, OnDestroy, OnChanges {
  @Input() fnBtnName = 'Save';
  @Input() closeBtnName = 'Close';
  @Input() isCloseBtn = true;
  @Input() isSaveBtn = true;
  @Input() listOfFormElements: any = [];
  @Output() saveCallBack = new EventEmitter();
  @Output() cancelCallBack = new EventEmitter();
  // @Input() selectedValue: any;
  @Output() valueUpdate = new EventEmitter();
  form!: FormGroup;
  @Input() Valuesoutput: any = {};
  @Output() outputValue: any = {};
  payLoad = '';
  @ViewChild('companySelect', {static: true}) companySelect!: MatSelect;
  public companyCtrl: FormControl = new FormControl();
  public companyFilterCtrl: FormControl = new FormControl();
  public filteredCompanies: ReplaySubject<any> = new ReplaySubject<any>(1);
  public searching = false;
  protected onDestroySearch = new Subject<void>();
  agentList: any = [];
  company: any;
  companies: any;
  companyHash: any = {};
  allComp: any;
  agentEnum = ['', 'Probe', 'Lightweight Agent', 'Lightweight Agent Installed', 'External Scan Agent'];
  constructor(private formService: FormControlService, public toastr: ToastrService, 
              public authService: AuthenticationService, private loaderService: LoaderService,
              private baseService: BaseRequestService, private toast: MyToastrService) {
  }

  ngOnInit(): void {
    this.form = this.formService.toFormGroup(this.listOfFormElements);
    this.companyFilterCtrl.valueChanges.pipe(debounceTime(300), takeUntil(this.onDestroySearch)).subscribe(() => {
      this.filterCompanies();
    });
    const cmppicker = this.listOfFormElements.filter((x: any) => x.type === 'companypicker');
    const agtpicker = this.listOfFormElements.filter((x: any) => x.type === 'agentpicker');
    if (cmppicker.length) {
      this.getCompanies();
    }
    if (agtpicker && this.Valuesoutput.companyId) {
      this.updateCurrentCompany(this.Valuesoutput.companyId, 'companyId');
    }
  }
  getAgents(id: any): void {
    this.loaderService.display(true, 'Getting agent data...');
    this.baseService.doRequest('/api/company/imaws/getCompanyAgents',
      'post', {companyid: id}).subscribe((res: any) => {
        this.loaderService.display(false);
        if (res[0]) {
          const agentList: { key: string; value: any; }[] = [];
          res[1].forEach((obj: any) => {
            agentList.push({ key: obj.name + ' (' + this.agentEnum[obj.agent_type] + ')', value: obj._id});
          });
          this.agentList = agentList;
        } else {
          this.toast.sToast('error', res[1]);
        }
    });
  }

  Save(form: any): void {
    const frmValues = form.value;
    if (frmValues.netaName && !frmValues.netaName.replace(/\s/g, '').length) {
      this.toastr.error('Input cannot contain only whitespaces');
    } else {
      this.saveCallBack.emit(frmValues);
    }
  }

  Cancel(): void {
    this.cancelCallBack.emit();
  }

  fieldValChange($event: any): void {
    this.valueUpdate.emit($event);
  }

  onSubmit(): void {
    // this.form.value["SelectedDropdown"] = this.selectedValue.value;
    // delete  this.form.value.undefined;
    // @ts-ignore
    this.payLoad = JSON.stringify(this.form.value);
  }

  ngOnDestroy(): void {
    this.onDestroySearch.next();
    this.onDestroySearch.complete();
  }

  private filterCompanies(): void {
    if (!this.companies) {
      return;
    }
    // get the search keyword
    let search = this.companyFilterCtrl.value;
    if (!search) {
      this.filteredCompanies.next(this.companies.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.getCompanies(search);
  }

  closeCurrentCompany(event: any, key: any): void {
    if (this.allComp) {
      this.filteredCompanies.next(this.allComp.slice());
    }
    if (!event && !this.outputValue[key]) {
      this.getCompanies();
    }
  }

  getCompanies(search?: string): void {
    if (!this.authService || !this.authService.isAuthenticated) {
      setTimeout(() => {
        this.getCompanies();
      }, 2000);
      return;
    }
    let cq: any;
    const cmpq = {query: {bool: {must: [{exists: {field: 'description'}}], must_not: [{match: {isAssessment: true}}, {exists: {field: 'companyRef'}}]}}};
    const asmq = {query: {bool: {must: [{match: {isAssessment: true}}, {exists: {field: 'description'}}], must_not: [{exists: {field: 'companyRef'}}]}}};
    cq = (this.baseService.showAssessment) ? asmq : cmpq;
    if (search && search !== '') {
      cq.query.bool.must.push({ match_bool_prefix: { name: search.toLowerCase() } });
    }
    const q = JSON.stringify(cq);
    const skip = 0;
    const limit = 1000;
    const sort = JSON.stringify([{'name.keyword': {order: 'asc'}}]);
    const fields = JSON.stringify(['name', 'c']);
    this.searching = true;
    // this.companyService.getAllApiCompanyGet({q, skip, limit, sort, fields}).subscribe((result: any) => {
    //   if (result.data.length) {
    //     for (const c of result.data) {
    //       if (c._id) {
    //         this.companyHash[c._id] = c;
    //       }
    //     }
    //     result.data.sort((a: any, b: any) => {
    //       const c = (a.name) ? a.name.toLowerCase() : '';
    //       const d = (b.name) ? b.name.toLowerCase() : '';
    //       if (c < d) {
    //         return -1;
    //       } else if (c > d) {
    //         return 1;
    //       } else {
    //         return 0;
    //       }
    //     });
    //     this.companies = result.data;
    //     if (!search) {
    //       this.allComp = result.data;
    //     }
    //     this.filteredCompanies.next(result.data.slice());
    //     if (this.Valuesoutput.companyId) {
    //       this.updateCurrentCompany(this.Valuesoutput.companyId, 'companyId');
    //     }
    //     this.searching = false;
    //   } else {
    //     this.filteredCompanies.next([]);
    //     this.searching = false;
    //   }
    // }, error => {
    //   this.searching = false;
    // });
  }

  updateCurrentCompany(event: any, key: any): void {
    this.Valuesoutput[key] = event;
    this.form.controls[key].setValue(event);
    this.getAgents(event);
  }

  ngOnChanges(): void {
    if (this.Valuesoutput.companyId) {
      this.updateCurrentCompany(this.Valuesoutput.companyId, 'companyId');
    }
  }
}
