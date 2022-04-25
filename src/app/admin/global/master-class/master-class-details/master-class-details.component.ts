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
import { LoaderService } from 'src/app/_services/loader.service';
import { MyToastrService } from "src/app/_services/toastr.service";

@Component({
  selector: 'app-master-class-details',
  templateUrl: './master-class-details.component.html',
  styleUrls: ['./master-class-details.component.scss']
})
export class MasterClassDetailsComponent implements OnInit {

  constructor(public baseService: BaseRequestService, public loaderService: LoaderService, 
    public toast: MyToastrService, public contentService: ContentDataService) { }

  @Input() content_id: any = '';
  languages: any = [];
  masterClassData: any = [];

  getMasterClassDetails(): void {
    // this.loaderService.display(true);
    let cq: any;
    cq = {query: {bool: {must: [{match: {'data_type.keyword': 'MasterClass'}}, {match: {_id: this.content_id}}]}}};
    const q = JSON.stringify(cq);
    this.contentService.getAllApiContentdataGet({q}).subscribe((result: any) => {
      console.log(result);
      if(result.data.length){
        this.languages = result.data[0].languages;
        this.masterClassData = result.data;
      } else {
        this.toast.sToast("error", result.data);
      }
      
    });
  }

  ngOnInit(): void {
    this.getMasterClassDetails();
  }

}
