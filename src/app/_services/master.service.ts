import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MasterService {
  addCategory = new EventEmitter();
  constructor(
    
  ) { }

  addCategoryData(): void {
    this.addCategory.next({});
  }
}
