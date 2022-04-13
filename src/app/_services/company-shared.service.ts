import {Injectable, EventEmitter} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanySharedService {
  // Global Search
  searchFilter = new Subject<string>();
  setCurrentView = new EventEmitter();
  updateMenu = new EventEmitter();
  disableMenu = new EventEmitter();
  disableOverview = new EventEmitter();
  // Discovery Settings Actions
  companyScanEVE = new EventEmitter();

  // Asset Actions
  showAssetTable = false;
  jobsUpdateEVE = new EventEmitter();
  cmpScanEVE = new EventEmitter();
  ExtScanEVE = new EventEmitter();
  ADScanEVE = new EventEmitter();
  AssetEVE = new EventEmitter();
  AgentpopupEVE = new EventEmitter();
  assetTableView = new EventEmitter();
  globalFilterEVE = new EventEmitter();
  addAssetEVE = new EventEmitter();
  refreshAssetEVE = new EventEmitter();
  updateAssetEVE = new EventEmitter();
  assetScanEVE = new EventEmitter();
  assetSortEVE = new EventEmitter();
  firewallScanEVE = new EventEmitter();
  downloadReportEVE = new EventEmitter();
  assetFilterEVE = new EventEmitter();
  getstartintEVE = new EventEmitter();
  getstartRemEVE = new EventEmitter();
  getstartNotificationEVE = new EventEmitter();
  getstartApplicationBaselineEVE = new EventEmitter();
  getstartRolesEVE = new EventEmitter();
  getstartUsersEVE = new EventEmitter();
  getstartSchedulerEVE = new EventEmitter();
  getstartReportBuilderEVE = new EventEmitter();
  currentAsset!: any;
  externalScanEVE = new EventEmitter();
  remediationSuppressEVE = new EventEmitter();
  rmPatchEvent: Subject<any> = new Subject<any>();
  rmViewAssetsEvent: Subject<any> = new Subject<any>();
  rmViewEvidence: Subject<any> = new Subject<any>();
  totalEVE: Subject<any> = new Subject<any>();
  reloadAndSetCompanyEVE: Subject<any> = new Subject<any>();
  jobsViewEVE: Subject<any> = new Subject<any>();
  filterUpdateEVE: Subject<any> = new Subject<any>();
  filterUpdate = new Subject<string>();
  reportFilterUpdate = new Subject<string>();
  selectAllUpdate = new Subject<boolean>();
  updateTag = new Subject<any>();
  updateImportance = new Subject<any>();
  selectedAssets: boolean | undefined = false;

  // Shared Keys
  totals: any =  {};
  assetFilter = '';
  reportFilter: any;

  constructor() {
    this.searchFilter.pipe( debounceTime(500), distinctUntilChanged()) .subscribe(value => {
      this.globalFilterEVE.next(value);
    });
    this.filterUpdate.pipe(debounceTime(1500), distinctUntilChanged()).subscribe(value => {
      this.filterUpdateEVE.next(value);
    });
  }

  showAssetTableView(value: any): void {
    this.showAssetTable = value;
    this.assetTableView.next({value});
  }

  setCurrentCompany(company: string): void {
    this.reloadAndSetCompanyEVE.next({value: company});
  }

  companyScan(scanType: string): void {
    this.companyScanEVE.next({st: scanType});
  }

  addAsset(): void {
    this.addAssetEVE.next({});
  }

  reloadAsset(): void {
    this.refreshAssetEVE.next({});
  }

  updateAsset(): void {
    this.updateAssetEVE.next({});
  }

  firewallScan(): void {
    this.firewallScanEVE.next({});
  }

  assetScan(val: any): void {
    this.assetScanEVE.next({value: val});
  }

  assetSort(key: string, sort: string): void {
    this.assetSortEVE.next({key, sort});
  }

  downloadReport(): void {
    this.downloadReportEVE.next({});
  }

  externalScan(): void {
    this.externalScanEVE.next({});
  }

  suppressRemediation(): void {
    this.remediationSuppressEVE.next({});
  }

  patchRemediation(): void {
    this.rmPatchEvent.next({});
  }

  viewRemediationAssets(): void {
    this.rmViewAssetsEvent.next({});
  }

  viewRemediateEvidence(): void {
    this.rmViewEvidence.next({});
  }

}
