import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {BaseRequestService} from './base.service';
import {MyToastrService} from './toastr.service';

@Injectable({providedIn: 'root'})
export class CommonService {
  previousLink = '';
  cHash: any;
  companiesList: any = [];
  modifiedDiscoverItems: any;
  Objectkeys = Object.keys;
  complianceMaster: any = {};
  complianceList: any = [];
  securityMatrix: any = {};
  complianceMatrix: any = {};
  angularEditorChange: Subject<object> = new Subject<object>();
  bwListChange: Subject<object> = new Subject<object>();
  captureScreenChange: Subject<object> = new Subject<object>();
  initCaptureChange: Subject<object> = new Subject<object>();
  openSideNavChange: Subject<object> = new Subject<object>();
  selectedSiteChange: Subject<any> = new Subject<any>();
  rmRefreshEvent: Subject<any> = new Subject<any>();
  selectedNode = {};
  networkDeviceReloadChange: Subject<any> = new Subject<any>();
  addCompanyChange: Subject<any> = new Subject<any>();
  addSiteChange: Subject<any> = new Subject<any>();
  checkNode = {};
  timeZoneList: any;
  currentTimezone: any;
  unauth: any;
  currentCompany: any;
  ccId: any;
  modalHolder: string[] = [];
  currentAssessment: any;
  currentCompanyView: string;
  eulaContent = 'IMPORTANT!\n' +
    'PLEASE READ THE TERMS AND CONDITIONS OF THIS LICENSE AGREEMENT CAREFULLY BEFORE CONTINUING WITH THIS PROGRAM INSTALL.\n' +
    '\n' +
    'In plain English: CyberCNS Patch Management Solution is available as a "Beta" software feature that is provided free of cost on a "As-is" and "As available" basis for use in conjunction with a CyberCNS Subscription or made available for evaluation during a free trial period. You may install and use updates provided by CyberCNS during these periods; however, when your subscription or trial period terminates you must remove and destroy the software. Please contact CyberCNS to obtain or renew your subscription.\n' +
    '\n' +
    'CyberCNS "PATCHING FEATURE" UPDATE END-USER LICENSE AGREEMENT 2.0\n' +
    'This CyberCNS Update End-User License Agreement ("EULA") constitutes a legal agreement between you, the "End User" (either an individual or a single entity) and CyberCNS (Netalytics Security Inc.) for the CyberCNS software updates you download and install (the Update). By installing, copying, or otherwise using this Update you agree to be bound by these terms. If you do not agree to the terms of this EULA, do not install or use the Update. The Update is protected by copyright laws and international copyright treaties, as well as other intellectual property laws and treaties. The Update is licensed, not sold.\n' +
    '\n' +
    'Definitions\n' +
    'A "Product" is a software package made available by CyberCNS and subject to the terms thereof.\n' +
    'A "Licensed Product" is a Product that is covered by an authorized commercial agreement between the End User and CyberCNS, or between the End User and a third party (Partner/OEM/MSP/MSSP) that has an authorized commercial agreement with CyberCNS.\n' +
    '"Term" means the term as defined in a license agreement for a Licensed Product, or the duration of any trial period extended to the End User.\n' +
    'An "Update" is a software component made available by CyberCNS that augments the capability or addresses an issue with an installed software.\n' +
    'Grant of License\n' +
    'Subject to the terms and conditions contained herein and any applicable Subscription Agreement, including the usage limits described therein, CyberCNS grants the End User a non-exclusive, non-transferrable, renewable license to use the Update as follows:\n' +
    '\n' +
    'Installation and Use: CyberCNS grants you the right to install and use copies of the Update in a Licensed Product during the Term. You shall not exceed the number of licenses, tiers, nodes, or other use restrictions or authorizations agreed to and paid for in the commercial agreement.\n' +
    'Backup Copies: You may make copies of the Update as may be necessary for backup and archival purposes.\n' +
    'Other Limitations\n' +
    'Maintenance of Copyright Notices: You shall not remove or alter any copyright or license notices that appear in or on the Update.\n' +
    'Modification: You shall not modify, alter, decompile, decrypt, disassemble, translate, or reverse engineer the Update.\n' +
    'Distribution: You shall not distribute copies of the Update to third parties.\n' +
    'Rental: You shall not rent, lease, or lend the Update, including renting, leasing, or lending a Product that includes the Update.\n' +
    'SaaS: You shall not make the Update or Product that includes the Update available as commercial Software-as-a-Service.\n' +
    'Compliance with Applicable Laws: You shall comply with all applicable laws regarding the use of the Update.\n' +
    'Termination\n' +
    'These terms, including the Software License, shall expire at the end of the Term, unless Licensee and CyberCNS agrees to renew such License. Without prejudice to any other rights, CyberCNS may terminate this EULA if you fail to comply with the terms and conditions of this EULA.\n' +
    '\n' +
    'Upon expiration or termination of these terms, you shall uninstall and destroy all copies of the CyberCNS Software in your possession. Termination or expiration of this EULA shall not affect End Users\' rights to use any Product in accordance with the terms and conditions of the applicable EULA, or to receive services in accordance with a support agreement, or other agreement as may be applicable.\n' +
    '\n' +
    'Copyright\n' +
    'All right, title and interest, including but not limited to intellectual property rights such as copyrights, in and to the Update and any copies thereof, are owned by CyberCNS or its suppliers. All right, title and interest, including but not limited to intellectual property rights such as copyrights, in and to the content which may be accessed through use of the Update is the property of the respective content owner and may be protected by applicable copyright or other intellectual property laws and treaties. This EULA grants you no rights to use such content. All rights not expressly granted are reserved by CyberCNS.\n' +
    '\n' +
    'No Warranties\n' +
    'UNLESS EXPRESSLY PROVIDED HEREIN TO THE CONTRARY, AND TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, AND ANY AND ALL SERVICES AND SOFTWARE INCLUDING PATCHES AND SERVICE PACKS PROVIDED BY CyberCNS HEREUNDER ARE PROVIDED "AS IS" WITHOUT ANY WARRANTIES OR CONDITIONS OF ANY KIND, INCLUDING IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. NO WARRANTY, WRITTEN OR ORAL, IS EXPRESSED OR IMPLIED BY CyberCNS OR MAY BE INFERRED FROM A COURSE OF DEALING OR USAGE OF TRADE. NOTHING STATED IN THIS AGREEMENT WILL IMPLY THAT THE OPERATION OF ANY SOFTWARE WILL BE UNINTERRUPTED OR ERROR-FREE, OR THAT ERRORS WILL BE CORRECTED.\n' +
    '\n' +
    'Limitation of Liability\n' +
    'IN NO EVENT WILL CyberCNS BE LIABLE FOR ANY INCIDENTAL INDIRECT, SPECIAL, OR CONSEQUENTIAL COSTS OR DAMAGES INCLUDING, WITHOUT LIMITATION, DOWNTIME COSTS; LOST BUSINESS, REVENUES, OR PROFITS; FAILURE TO REALIZE EXPECTED SAVINGS; LOSS OF OR DAMAGE TO DATA; OR SOFTWARE RESTORATION, REGARDLESS OF WHETHER ANY OF THE FOREGOING ARE FORESEEABLE, AND REGARDLESS OF WHETHER CyberCNS HAS BEEN NOTIFIED OF THE POSSIBILITY OF ANY OF THE FOREGOING. THESE LIMITATIONS WILL APPLY REGARDLESS OF THE BASIS OF LIABILITY; INCLUDING NEGLIGENCE; MISREPRESENTATION; BREACH; LIBEL; INFRINGEMENT OF PUBLICITY, PRIVACY, OR INTELLECTUAL PROPERTY RIGHTS; OR ANY OTHER CONTRACT OR TORT CLAIM.\n' +
    '\n' +
    'Disclaimer of Warranty. YOU ACKNOWLEDGE THAT THE PATCHING FEATURE  is "Beta" Software AND ANY AND ALL PARTS THEREOF ARE PROVIDED “AS IS” and "AS AVAILABLE". CyberCNS (Netalytics) MAKES NO REPRESENTATIONS OR WARRANTIES WITH RESPECT TO THE LICENSED MATERIALS AND OR PARTS THEREOF WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. YOU ACKNOWLEDGE THAT YOU HAVE RELIED ON NO WARRANTIES AND THAT NO WARRANTIES ARE MADE BY CYBERCNS (Netalytcis) OR GRANTED BY LAW WHENEVER IT IS PERMITTED BY LAW.\n' +
    'BY CLICKING “I ACCEPT”, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND THIS\n' +
    'AGREEMENT AND ACCEPT THE PRODUCT’S FUNCTIONS. DO NOT CLICK THE “I ACCEPT”\n' +
    'BUTTON IF YOU DO NOT ACCEPT THIS AGREEMENT AND THE PRODUCT’S FUNCTIONS.';
  constructor(public baseRequestService: BaseRequestService,
              private toast: MyToastrService) {
  }

  isPrivateIP(ip: string): boolean {
    const parts = ip.split('.');
    return parts[0] === '10' ||
      (parts[0] === '172' && (parseInt(parts[1], 10) >= 16 && parseInt(parts[1], 10) <= 31)) ||
      (parts[0] === '192' && parts[1] === '168');
  }

  isUuid(uuid: string): boolean {
    if (uuid) {
      // @ts-ignore
      return ( uuid.match(/^[0-9A-Fa-f]{8}(?:-[0-9A-Fa-f]{4}){3}-[0-9A-Fa-f]{12}$/) ?.length > 0 );
    } else {
      return false;
    }
  }

  nl2br(str: string): string{
   return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }

  compare(a: number | string, b: number | string, isAsc: boolean): any {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  buildQuery(data: { [x: string]: any; }): any {
    const baseQuery = {query: {bool: {must: []}}};
    this.Objectkeys(data).forEach(obj => {
      const tmpObj = {match: {}};
      // @ts-ignore
      tmpObj.match[obj] = data[obj];
      // @ts-ignore
      baseQuery.query.bool.must.push(tmpObj);
    });
    return baseQuery;
  }
  onlyUnique(value: any, index: any, self: string | any[]): boolean {
      return self.indexOf(value) === index;
  }
  reloadDevice(deviceId: any): void {
    this.networkDeviceReloadChange.next(deviceId);
  }

  percentCalculator(x: number, y: number): number {
    return Math.floor((y / x) * 100);
  }

  copyClip(cmd: string): void {
    const el = document.createElement('textarea');
    el.value = cmd;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.toast.sToast('success', 'Copied to clipboard');
  }

  getTimeZone(): void {
    const offset = (new Date()).getTimezoneOffset();
    const timezones = {
    '-12': 'Pacific/Kwajalein',
    '-11': 'Pacific/Samoa',
    '-10': 'Pacific/Honolulu',
    '-9': 'America/Juneau',
    '-8': 'America/Los_Angeles',
    '-7': 'America/Denver',
    '-6': 'America/Mexico_City',
    '-5': 'America/New_York',
    '-4': 'America/Caracas',
    '-3.5': 'America/St_Johns',
    '-3': 'America/Argentina/Buenos_Aires',
    '-2': 'Atlantic/Azores',
    '-1': 'Atlantic/Azores',
    0: 'Europe/London',
    1: 'Europe/Paris',
    2: 'Europe/Helsinki',
    3: 'Europe/Moscow',
    3.5: 'Asia/Tehran',
    4: 'Asia/Baku',
    4.5: 'Asia/Kabul',
    5: 'Asia/Karachi',
    5.5: 'Asia/Calcutta',
    6: 'Asia/Colombo',
    7: 'Asia/Bangkok',
    8: 'Asia/Singapore',
    9: 'Asia/Tokyo',
    9.5: 'Australia/Darwin',
    10: 'Pacific/Guam',
    11: 'Asia/Magadan',
    12: 'Asia/Kamchatka'
  };
    // @ts-ignore
    this.currentTimezone = timezones[-offset / 60];
    const timeZone = localStorage.getItem('_timeZones');
    if (timeZone && timeZone.length > 0 ) {
      this.timeZoneList = JSON.parse(timeZone);
    } else {
      this.baseRequestService.doRequest(`/api/cyberutils/dummy/getSupportedTimeZones`, 'post', {})
        .subscribe((result: any) => {
        this.timeZoneList = result;
      });
    }
  }
  addCompany(name: any): void {
    this.addCompanyChange.next(name);
  }
  addSite(ele: any, name: any): void {
    ele.action = name.action;
    this.addSiteChange.next(ele);
  }

  async getAgents(cId?: string): Promise<any> {
    const query = (cId)
      ? { query: { bool: { must: [ {match: {'companyRef.id.keyword': cId + ''}},
              {match: {agent_type: 1}}, {exists: {field: 'agent_type'}}] } } }
      : { query: { bool: { must: [ {match: {agent_type: 4}}, {exists: {field: 'agent_type'}}],
            must_not: [{exists: {field: 'companyRef.id.keyword'}}] } } };
    const q = JSON.stringify(query); const skip = 0; const limit = 1000;
    return true;
  }
  async sortFn(arr: any, key?: string): Promise<any> {
    if (key) {
      return await arr.sort((a: any, b: any) => {
        const c = a[key]; const d = b[key];
        if (c < d) { return -1; } else if (c > d) { return 1; } else { return 0; }
      });
    }
    return await arr.sort((c: any, d: any) => {
      if (c < d) { return -1; } else if (c > d) { return 1; } else { return 0; }
    });
  }
}
