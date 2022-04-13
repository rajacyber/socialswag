import { Component, Input, OnInit } from '@angular/core';
import { BaseRequestService } from 'src/app/_services/base.service';
import { LoaderService } from 'src/app/_services/loader.service';
import { MyToastrService } from 'src/app/_services/toastr.service';

@Component({
  selector: 'app-suppress-vuls-days',
  templateUrl: './suppress-vuls-days.component.html',
  styleUrls: ['./suppress-vuls-days.component.scss']
})
export class SuppressVulsDaysComponent implements OnInit {
  @Input() companyid: any;
  snoozeDays = 0;
  constructor(private loaderService: LoaderService, private baseService: BaseRequestService, private toast: MyToastrService) { }

  ngOnInit(): void {
    this.getSnoozeDays();
  }

  getSnoozeDays(): void {
    const params: any = {};
    if (this.companyid) { params.companyid = this.companyid; }
    this.loaderService.display(true, 'Getting snooze days...');
    this.baseService.doRequest('/api/cyberutils/getSnoozedays', 'post', params).subscribe((data: any) => {
      this.loaderService.display(false);
      if (data[0]) {
        this.snoozeDays = data[1];
      } else {
        this.toast.sToast('error', data[1]);
      }
    });
  }

  setSnoozeDays(days: number): void {
    const params: any = {snoozeDays: days};
    if (this.companyid) { params.companyid = this.companyid; }
    this.loaderService.display(true, 'Updating...');
    this.baseService.doRequest(`/api/cyberutils/setSnoozedays`, 'POST', params).subscribe((result: any) => {
      this.loaderService.display(false);
      if (result[0]) {
        this.toast.sToast('success', 'Snooze days updated successfully');
      } else {
        this.toast.sToast('error', result[1]);
      }
    });
  }
}
