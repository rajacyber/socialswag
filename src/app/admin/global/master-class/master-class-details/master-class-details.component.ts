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
import { MatSidenav } from '@angular/material/sidenav';
import { ContentDataService, ContentEpisodesService } from 'src/app/api/services';
import { BaseRequestService } from 'src/app/_services/base.service';
import { LoaderService } from 'src/app/_services/loader.service';
import { MasterService } from 'src/app/_services/master.service';
import { MyToastrService } from "src/app/_services/toastr.service";

@Component({
  selector: 'app-master-class-details',
  templateUrl: './master-class-details.component.html',
  styleUrls: ['./master-class-details.component.scss']
})
export class MasterClassDetailsComponent implements OnInit {
  @ViewChild('episode', {static: false}) episode: MatSidenav;
  episodeId: any;

  constructor(public baseService: BaseRequestService, public loaderService: LoaderService, 
    public toast: MyToastrService, public contentService: ContentDataService, public episodeService: ContentEpisodesService,
    public httpClient: HttpClient, public masterService: MasterService) { 
      this.subscribedKeys.contentEVE = masterService.contentEVE.subscribe((value: any) => {
        this.content_id = value.id;
        this.languages = value.languages
        this.getMasterClassDetails();
      });
     }

  @Input() content_id: any = '';
  @Input() languages: any = [];
  masterClassData: any = [];
  description: any = {};
  showdes = false;
  showsec = false;
  subscribedKeys: any = {};
  episodeLanguages: any = [];
  episodeDescription: any = {};
  Objectkeys = Object.keys;

  async getDescription(event: any, language?:any): Promise<any> {
    this.loaderService.display(true);
    const eventlang = (event) ? event.tab.textLabel : null;
    const lang = (event && eventlang) ?  eventlang.toLowerCase() : language.toLowerCase();
    const description = await this.baseService.getDescription(this.content_id, lang);
    if(description) this.description = {...this.description, ...description};
    else this.toast.sToast("error", 'Masterclass details not found!.');
    this.loaderService.display(false);
  }

  async getEpisodeDescription(event: any, language?:any): Promise<any> {
    this.loaderService.display(true);
    const eventlang = (event) ? event.tab.textLabel : null;
    const lang = (event && eventlang) ?  eventlang.toLowerCase() : language.toLowerCase();
    const description = await this.baseService.getDescription(this.episodeId, lang);
    if(description) this.episodeDescription = {...this.episodeDescription, ...description};
    else this.toast.sToast("error", 'Episode details not found!.');
    this.loaderService.display(false);
  }

  handleClickTab(event: any): void {
    const eventtab = (event) ? event.tab.textLabel : null;
    (eventtab === 'Episodes') ? this.getEpisodes() : this.getDescription('', this.languages[0]);
  }

  getEpisodes(): void {
    this.loaderService.display(true);
    const query = {query: {bool: {must: [
      {match: {'contentdata_ref.id.keyword': this.content_id}}]
    }}};
    const q = JSON.stringify(query);
    const limit = 100;
    this.baseService.doRequest(`/api/contentepisodes/`, 'get', null,  {q,limit})
    .subscribe((result: any) => {
      if(result.data){
        this.masterClassData = result.data;
      }else{
        this.toast.sToast("error", result.data);
      }
      this.loaderService.display(false);
    });
  }

  getEpisode(row: any): void {
    this.episodeLanguages = (row.languages) ? row.language : row.videos.map((x: any) => x.language);
    this.episodeDescription = row;
    this.episodeId = row._id;
    this.getEpisodeDescription('', this.episodeLanguages[0])
    this.episode.open();
  }

  getMasterClassDetails(): void {
    this.loaderService.display(true);
    let cq: any;
    cq = {query: {bool: {must: [{match: {'data_type.keyword': 'MasterClass'}}, {match: {_id: this.content_id}}]}}};
    const q = JSON.stringify(cq);
    this.contentService.getAllApiContentdataGet({q}).subscribe((result: any) => {
      if(result.data.length){
        this.getDescription('',this.languages[0]);
        this.description = result.data[0];
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
