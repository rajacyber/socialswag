import { Injectable, EventEmitter } from '@angular/core';
import { ContentDataService } from '../api/services';

@Injectable({
  providedIn: 'root'
})

export class MasterService {
  addCategory = new EventEmitter();
  contentEVE = new EventEmitter();
  reasonEVE = new EventEmitter();
  constructor(
    public contentService: ContentDataService
    
  ) { 
  }
  reasonData(value: any): void {
    this.reasonEVE.next(value);
  }

  addCategoryData(): void {
    this.addCategory.next({});
  }
  contentId(value: any): void {
    this.contentEVE.next(value);
  }
}
