import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { ContentDataService } from 'src/app/api/services';
import { BaseRequestService } from 'src/app/_services/base.service';
import { CompanySharedService } from 'src/app/_services/company-shared.service';
import { LoaderService } from 'src/app/_services/loader.service';
import { MasterService } from 'src/app/_services/master.service';
import { MyToastrService } from "src/app/_services/toastr.service";

@Component({
  selector: 'app-master-class-details',
  templateUrl: './master-class-details.component.html',
  styleUrls: ['./master-class-details.component.scss']
})
export class MasterClassDetailsComponent implements OnInit {

  constructor(public baseService: BaseRequestService, public loaderService: LoaderService, 
    public toast: MyToastrService, public contentService: ContentDataService,
    public httpClient: HttpClient, public masterService: MasterService) { 
      this.subscribedKeys.contentEVE = masterService.contentEVE.subscribe((value: any) => {
        this.content_id = value;
        this.getMasterClassDetails();
      });
     }

  @Input() content_id: any = '';
  languages: any = [];
  masterClassData: any = [];
  description: any = {};
  showdes = false;
  showsec = false;
  subscribedKeys: any = {};
  Objectkeys = Object.keys;

  async getDescription(event: any, language?:any): Promise<any> {
    this.loaderService.display(true);
    const eventlang = (event) ? event.tab.textLabel : null;
    const lang = (event && eventlang) ?  eventlang.toLowerCase() : language.toLowerCase();
    const url = `https://content-socialswag.s3.ap-south-1.amazonaws.com/content/masterclass_${lang}.json`;
    const description = await this.httpClient.get<any>(url).toPromise();
    if(description[this.content_id]) this.description = {...this.description, ...description[this.content_id]};
    else this.toast.sToast("error", 'Masterclass details not found!.');
    this.loaderService.display(false);
    
  }

  getMasterClassDetails(): void {
    this.loaderService.display(true);
    let cq: any;
    cq = {query: {bool: {must: [{match: {'data_type.keyword': 'MasterClass'}}, {match: {_id: this.content_id}}]}}};
    const q = JSON.stringify(cq);
    this.contentService.getAllApiContentdataGet({q}).subscribe((result: any) => {
      if(result.data.length){
        this.languages = [];
        this.languages = result.data[0].languages;
        this.getDescription('',result.data[0]?.languages[0]);
        this.description.preview_image = result.data[0]?.content_preview?.preview_image;
        this.description.preview_image_thumbnail = result.data[0]?.content_preview?.preview_image_thumbnail;
        this.masterClassData = result.data;
      } else {
        this.toast.sToast("error", result.data);
      }
      this.loaderService.display(false);
    });
  }

  ngOnInit(): void {
    this.getMasterClassDetails();
  }

  ngOnDestroy(): void {
    this.Objectkeys(this.subscribedKeys).forEach((obj: string) => {
      this.subscribedKeys[obj].unsubscribe();
    });
  }
}
