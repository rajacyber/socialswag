import { Injectable, EventEmitter } from '@angular/core';
import { ContentDataService } from '../api/services';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
addlevel = new EventEmitter();

  constructor(public contentService: ContentDataService) { }
  addLevelData(): void {
    this.addlevel.next({});
  }
}

