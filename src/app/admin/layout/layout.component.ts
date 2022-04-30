import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationError, Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { LoaderService } from '../../_services/loader.service';
import { BaseRequestService } from '../../_services/base.service';
import { CommonService } from '../../_services/common.services';
import { AuthenticationService } from '../../_services/authentication.service';
import { ConfirmDialogService } from '../../_services/confirmdialog.service';
import { ModalService } from '../../_services/modal.service';
import { MyToastrService } from '../../_services/toastr.service';
import { CompanySharedService } from '../../_services/company-shared.service';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, interval, ReplaySubject, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';
import { MatMenuTrigger } from '@angular/material/menu';

const INTERVAL = interval(1800);

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  @ViewChild('companySelect', {static: true}) companySelect!: MatSelect;
  @ViewChild('sidenav', {static: true}) sidenav: MatSidenav;
  @ViewChild('createMSPMenuTrigger', {static: false}) createMSPMenuTrigger: MatMenuTrigger;
  public companyCtrl: FormControl = new FormControl();
  public companyFilterCtrl: FormControl = new FormControl();
  public filteredCompanies: ReplaySubject<any> = new ReplaySubject<any>(1);
  public searching = false;
  public domain =  window.location.host;
  isLoading = false;
  protected onDestroySearch = new Subject<void>();
  filterUpdate = new Subject<string>();
  contentText: any;
  showLoader = new BehaviorSubject<boolean>(false);
  loading$ = this.showLoader.asObservable();
  result: any;
  Objectkeys = Object.keys;
  showSearch = false; searchGlobal = '';
  company: any; companies: any; companyHash: any = {}; allComp: any;
  ccve: any;
  // sidenavVisible = false;
  cveid: any;
  logoHeight = 40;
  trial: any;
  logo = {
    src: '/assets/images/cybercns_logo.png', srcOn: '/assets/images/cybercns_logo.png',
    srcOut: '/assets/images/cybercns_logo.png'
  };
  build: any;
  feeds: any;
  isOpen = true;
  totalCompanies: any;
  patchingDetails: any = {
    title: '',
    type: '',
    info: '',
    sections:[],
  };
  releaseNotes: any = {}; tableId: any; sessionData: any;
  selectedCompany: any;
  searchTxt: any = 'Search Company';
  searchid = 'CompSearch';
  showTimeAgo = false;
  forceSet = false;
  trialPeriodWidth = 700;
  mspDomain: any; mspEmail: any;
  restrictRedirect: any = ['global', 'toolkit'];
  updateStatus: any;
  // gettingStarted = false;
  isHidden: boolean;
  toggleSetting: any;
  sideNavView = '';
  constructor(public baseService: BaseRequestService, private router: Router, private loaderService: LoaderService,
              private confirmDialog: ConfirmDialogService, public modalService: ModalService,
              private toast: MyToastrService, public cs: CompanySharedService,
              public commonService: CommonService, public authService: AuthenticationService,
               ) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url.indexOf('companies') > -1) {
          this.baseService.showAssessment = false;
          this.baseService.showCompany = true;
          if (this.baseService.isAssessment) {
            this.allComp = []; this.commonService.cHash = undefined;
            this.companies = undefined;
            this.companyCtrl.setValue('');
            this.filteredCompanies.next([]); this.getCompanies();
            this.baseService.isAssessment = false;
          } else if (!this.allComp || !this.allComp.length) {
            this.getCompanies();
          }
          if (event.url.indexOf('companies/onboarding') > -1) {
            this.baseService.showCompany = false;
          } else {
            this.baseService.showCompany = true;
          }
        } else if (event.url.indexOf('assessments') > -1) {
          this.baseService.showAssessment = true;
          this.baseService.showCompany = false;
          this.baseService.isAssessment = true;
          this.allComp = [];
          this.commonService.cHash = undefined;
          this.companies = undefined;
          this.filteredCompanies.next([]);
          this.commonService.currentCompany = {_id: '_assessment'};
          localStorage.removeItem('cmp');
          this.getCompanies();
        } else {
	        if (this.authService.currentUser && this.authService.currentUser.permissions
            && (this.authService.currentUser.permissions.includes !== ''
            && this.authService.currentUser.permissions.includes !== '*')
            && event.url.indexOf('toolkit') === -1 ) {
            this.router.navigateByUrl('/companies');
          }
          this.allComp = []; this.commonService.cHash = undefined;
          this.companies = undefined;
          this.filteredCompanies.next([]);
          this.baseService.showCompany = false;
          this.baseService.showAssessment = false;
        }
      }
      if (event instanceof NavigationError) {
        if (event.url.indexOf('companies') === -1) {
          this.baseService.showCompany = false;
        }
      }
    });
    console.log(this.showSearch);
    this.cs.reloadAndSetCompanyEVE.subscribe((value: any) => {
      if (!value.value) {
        setTimeout(() => { this.getCompanies(); }, 2000);
      } else {
        this.forceSet = true;
        if (value.value.indexOf(' ') > -1 ) { value.value = value.value.split(' ')[0]; }
        setTimeout(() => { this.getCompanies(value.value); }, 2000);
      }
    });
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.code === 'Escape') {
      this.loaderService.display(false);
      this.loaderService.Modeldisplay(false);
    }
  }
  closeCurrentCompany(event: any): void {
    this.showTimeAgo = event;
    if (this.allComp) {
      this.companies = Object.assign([], this.allComp) ;
      this.filteredCompanies.next(this.allComp.slice());
    }
    if (!event && !this.selectedCompany) {
      this.getCompanies();
    }
  }

  updateCurrentCompany(event: any): void {
    this.loaderService.selectedSiteChange(this.companyHash[event]);
    this.selectedCompany = this.companyHash[event].name;
    localStorage.setItem('cmp', this.selectedCompany);
    this.commonService.currentCompany = this.companyHash[event];
  }

  getCompanies(search?: string): void {
    if (!this.authService || !this.authService.isAuthenticated ) {
      setTimeout(() => { this.getCompanies(); }, 2000);
      return;
    }
    let cq: any;
    const cmpq = {query: {bool: {must: [{exists: {field: 'description'}}], must_not: [{match: {isAssessment: true}}, {exists: {field: 'companyRef'}}]}}};
    const asmq = {query: {bool: {must: [{match: {isAssessment: true}}, {exists: {field: 'description'}}], must_not: [{exists: {field: 'companyRef'}}]}}};
    cq = (this.baseService.showAssessment) ? asmq : cmpq;
    if (search && search !== '') {
      // @ts-ignore
      cq.query.bool.must.push({ match_bool_prefix: { name: search.toLowerCase() } });
    }
    const q = JSON.stringify(cq);
    const skip = 0;
    const limit = 1000;
    const sort = JSON.stringify([{'name.keyword': {order: 'asc'}}]);
    const fields = JSON.stringify(['name', 'customerInfo', 'c']);
    this.searching = true;
    // this.companyService.getAllApiCompanyGet({q, skip, limit, sort, fields}).subscribe((result: any) => {
    //   if (!result.total && !this.forceSet && !search && !this.baseService.showAssessment) {
    //     this.router.navigateByUrl('companies/onboarding').then(r => console.log(r) );
    //   }
    //   if (result.data.length) {
    //     for (const c of result.data) { if (c._id) { this.companyHash[c._id] = c; } }
    //     result.data.sort((a: any, b: any) => {
    //       const c = (a.name) ? a.name.toLowerCase() : ''; const d = (b.name) ? b.name.toLowerCase() : '';
    //       if (c < d) { return -1; } else if (c > d) { return 1; } else { return 0; }
    //     });
    //     this.commonService.cHash = this.companyHash;
    //     this.commonService.companiesList = result.data;
    //     this.companies = result.data; if (!search) { this.allComp = result.data; }

    //     this.filteredCompanies.next(result.data.slice());
    //     const cmp = localStorage.getItem('cmp');
    //     if (!this.companyCtrl.value && !cmp) {
    //       this.companyCtrl.setValue(this.companies[0]._id);
    //       this.updateCurrentCompany(this.companies[0]._id);
    //     } else if (cmp){
    //       const company = this.companies.filter((x: any) => x.name === cmp);
    //       if (company.length) {
    //         this.companyCtrl.setValue(company[0]._id);
    //         this.updateCurrentCompany(company[0]._id);
    //         localStorage.removeItem('cmp');
    //       } else {
    //         this.companyCtrl.setValue(this.companies[0]._id);
    //         this.updateCurrentCompany(this.companies[0]._id);
    //       }
    //     }
    //     if (this.forceSet) {
    //       setTimeout(() => {
    //         this.companyCtrl.setValue(this.companies[0]._id);
    //         this.updateCurrentCompany(this.companies[0]._id);
    //         this.forceSet = false;
    //       }, 1000);
    //     }
    //     this.searching = false;
    //     this.searchTxt = (result.total > 0) ? `Search Company from ${this.allComp.length} Companies` : 'Search Company';
    //   } else {
    //     if (this.baseService.showAssessment) {
    //       this.companies = [];
    //       this.companyCtrl.setValue('');
    //     }
    //     if (window.location.pathname === '/assessments/assessment-company') {
    //     let disableMenuItem = true
    //     this.cs.disableMenu.next(disableMenuItem);
    //     this.cs.disableOverview.next(disableMenuItem);
    //   }
    //     this.filteredCompanies.next([]);
    //     this.searching = false;
    //   }
    // }, error => {
    //     // no errors in our simulated example
    //     this.searching = false;
    //     // handle error...
    //   });
  }
  ngOnInit(): void {
    this.loaderService.status.subscribe((val: boolean, text: string) => {
      this.result = val;
      setTimeout(() => { this.showLoader.next(this.result.value); });
      this.contentText = this.result.text;
    });
    // this.authService.getSessionSettings();
    // setTimeout(() => {
    //   const rn = localStorage.getItem('isReleaseNotes');
    //   if (rn === undefined || rn === null || rn === '') {
    //     this.getSessionSettings();
    //   }
    // }, 3000);
    // this.companyFilterCtrl.valueChanges.pipe(debounceTime(300), takeUntil(this.onDestroySearch)).subscribe(() => {
    //   this.filterCompanies();
    // });
    // this.getCompanies();
    // const query = {query: {bool: {must: [{match: {userId: this.authService.currentUser?.email}}, {match: {tableId: 'toggle'}}]}}};
    // const q = JSON.stringify(query);
    // const skip = 0;
    // const limit = 1;
    // this.tableSettingsService.getAllApiTablesettingsGet({ q, skip, limit }).subscribe((result: any) => {
    //   console.log('toggle Setting Result', result);
    //   if (result.data.length){
    //     this.toggleSetting = result.data[0];
    //     this.isHidden  =  this.toggleSetting.columnRepr === 'True';
    //   }else{
    //     this.isHidden = false;
    //   }
    //   if (!this.isHidden) {
    //     this.sideNavView = 'gettingStarted';
    //     setTimeout(() => this.sidenav.open());
    //   }
    // });
  }

  apiLink(): void {
    window.open('/docs', '_blank');
  }

  closeSideNav(reason: string): void {
    this.sideNavView = '';
    this.sidenav.close();
    this.ccve = undefined;
    this.cveid = undefined;
  }

  gettingStartedOpen(): void {
    this.sideNavView = 'gettingStarted';
    setTimeout(() => this.sidenav.open());
  }

  searchCVE(): void {
    this.sideNavView = 'cveSearch';
    // this.sidenavVisible = true;
    setTimeout(() => this.sidenav.open());
  }

  searchCVEDetail(CVE: string): void {
    this.loaderService.display(true, `CVE-${CVE} Details...`);
    const cmp = (this.baseService.showCompany) ? this.commonService.currentCompany._id : '';
    // this.companyService.companysearchCveApiCompanyIdSearchCvePost(
    //   {id: this.commonService.currentCompany._id, body: {companyid: cmp, cve: `CVE-${CVE}`}}).subscribe((result: any) => {
    //   this.loaderService.display(false);
    //   if (result[0]) {
    //     this.ccve = result[1];
    //   } else {
    //     this.toast.sToast('error', result[1]);
    //   }
    // });
  }
  navToAsset(): void {
    localStorage.setItem('newTab', 'cveAssets');
    window.open('/company/companies', '_blank');
  }

  getSessionSettings(): void {
    const cq = {
      query: {
        bool: {
          must: [{match: {'userid.keyword': this.authService.currentUser?.email}}, {exists: {field: 'releaseNotesCheck'}}]
        }
      }
    };
    const q = JSON.stringify(cq);
    const skip = 0;
    const limit = 1;
    this.loaderService.display(true, 'Loading...');
    this.baseService.doRequest('/api/usersettings','get', null, {q, skip, limit}).subscribe((res: any) => {
      this.loaderService.display(false);
      if (res && res.data && res.data.length) {
        this.sessionData = res.data[0];
        this.checkReleaseNotes(res.data[0].releaseNotesCheck);
      }
    });
  }


  getBuild(): void {
    this.modalService.open('build');
    this.loaderService.Modeldisplay(true, 'Getting build info...');
    this.baseService.doRequest(`/api/cyberutils/dummy/getBuildInfo`, 'post',
      {}, null, this.baseService.authHeader).subscribe((result: any) => {
        this.loaderService.Modeldisplay(false);
        if (result && result[0]) {
          this.build = result[1];
          this.getUpdatesAvailable();
        }
    });
  }

  getUpdatesAvailable(): void {
    this.loaderService.display(true, 'Checking is new updates available... ');
    this.baseService.doRequest(`/api/cyberutils/dummy/checkCyberUpdates`, 'post', {}).subscribe((result: any) => {
      this.loaderService.display(false);
      if (result[0]) {
        this.updateStatus = result[1];
      } else {
        this.toast.sToast('error', result[1]);
      }
    });
  }

  installUpdate(): void {
    const titleName = 'Confirmation';
    const message = 'Are you sure you want to update the latest patch?';
    const cancelText = 'No';
    const acceptText = 'Yes';
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText);
    this.confirmDialog.dialogResult.subscribe(res => {
      if (res) {
        this.baseService.doRequest(`/api/cyberutils/dummy/installCyberUpdates`, 'post', {}).subscribe((result: any) => {
          if (result[0]) {
            this.toast.sToast('success', result[1]);
          } else {
            this.toast.sToast('error', result[1]);
          }
        });
      }
    });
  }


  getVulsSyncInfo(): void {
    this.modalService.open('feedInfo');
    this.loaderService.Modeldisplay(true, 'Getting vulnerability feed info...');
    this.baseService.doRequest(`/api/cyberutils/dummy/getFeedInfo`, 'post', {})
      .subscribe((result: any) => {
        this.loaderService.Modeldisplay(false);
        if (result && result[0]) {
        this.feeds = result[1];
      }
    });
  }

  trialPeriod(): void {
    this.trial = {domain: window.location.hostname, action: 'buyNow', comment: '', button: 'Contact me'};
    this.loaderService.display(true, 'Getting trial information');
    // this.baseService.doRequest(`/api/cyberutils/dummy/getTrialPeriod`, 'post').subscribe((result: any) => {
    this.loaderService.display(false);
      // if (result) {
    this.modalService.open('trialPeriod');
      // } else {
      //   this.toast.sToast('error', result.msg);
      // }
    // });
  }

  checkReleaseNotes(show: boolean): void {
    this.loaderService.display(true, 'Getting release notes');
    this.baseService.doRequest(`/api/cyberutils/dummy/getReleaseNotesNew`, 'post', {})
      .subscribe((result: any) => {
      this.loaderService.display(false);
      if (result[0]) {
        this.patchingDetails = (result[1]) ? result[1] : {};
        if (show) {
          this.modalService.open('releaseNotesModal');
        } else if (!this.tableId) {
          this.modalService.open('releaseNotesModal');
        } else if (this.tableId && this.sessionData) {
          let s = false;
          // @ts-ignore
          this.sessionData.forEach(obj => {
            if (obj.userdata === this.releaseNotes.date) {
              s = true; return false;
            }
          });
          if (!s) {
            this.modalService.open('releaseNotesModal');
          }
        }
      } else {
        this.toast.sToast('error', result[1]);
      }
    });
  }

  readWhatsNew(): void {
    this.modalService.close('releaseNotesModal');
    const method = (this.sessionData && this.sessionData._id) ? 'put' : 'post';
    const url = `/api/usersettings`;
    const data =  (this.sessionData) ? this.sessionData : {releaseNotesCheck: false, userid: this.authService.currentUser?.email};
    this.baseService.doRequest(url, method, data).subscribe((result: any) => {
      if (result) {
        return;
      } else {
        return;
      }
    });
  }

  onLogOut(): void {
    const titleName = 'Logout message';
    const message = 'Are you sure you want to logout?';
    const cancelText = 'Cancel';
    const acceptText = 'OK';
    this.confirmDialog.confirmDialog(titleName, message, cancelText, acceptText, false, '', '', true);
    this.confirmDialog.dialogResult.subscribe(res => {
      if (res) {
        localStorage.removeItem('isLoggedin');
        this.authService.logout();
      }
    });
  }

  toggleSearch(): void {
    this.showSearch = !this.showSearch;
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

  updateTrial(): void {
    console.log(JSON.stringify(this.trial));
    this.modalService.close('trialPeriod');
  }

  updateTrialForm(action: any): void {
    if (action === 'buyNow') {
      this.trial.button = 'Contact me';
    } else {
      this.trial.button = 'Cancel Trial';
    }
  }
  SaveSettings(): void {
    let item: any; item = {
      tableId: 'toggle',
      userId: this.authService.currentUser?.email,
      columnRepr: this.isHidden ? 'True' : 'False'
    };
    const method = (this.toggleSetting && this.toggleSetting._id) ? 'put' : 'post';
    if (this.toggleSetting && this.toggleSetting._id) { item._id = this.toggleSetting._id; }
    this.baseService.doRequest(`/api/tablesettings/`, method, item).subscribe((res: any) => {
      if (res && res._id && res.c !== null && res.u !== null) {
        this.toast.sToast('success', 'Successfully updated!');
      } else {
        this.toast.sToast('error', res._id);
      }
    });
  }
  gettingStartedtoggle(isHidden: any): void {
    this.isHidden = isHidden;
    this.SaveSettings();
  }

  createMSP(): void {
    this.loaderService.display(true, 'Creating MSP...');
    this.isLoading = true;
    // this.companyService.companycreateMspApiCompanyIdCreateMspPost(
    //   {id: 'dummy', body: {mspdomain: 'beta' + this.mspDomain, email: this.mspEmail}}).subscribe((result: any) => {
    //   this.loaderService.display(false);
    //   this.toast.sToast('success',
    //     `beta${this.mspDomain}.mycybercns.com domain initiated. Please browse after 2 minutes.`);
    //   this.isLoading = false;
    //   this.mspDomain = ''; this.mspEmail = '';
    //   this.createMSPMenuTrigger.closeMenu();
    // });
  }

  partnerOverview(): void {
    this.sideNavView = 'partnerOverview';
    this.sidenav.open();
  }

}
