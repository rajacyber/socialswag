import { Injectable, EventEmitter } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  constructor() { }
  tableProgressOff: Subject<object> = new Subject<object>();
  public status = new EventEmitter();
  public ModelStatus = new EventEmitter();
  public selectedSiteChanged = new EventEmitter();
  public setCompanyTab = new EventEmitter();

  private data: number | undefined;
  private tabNo: number | undefined;

  tableProgress(value: boolean): void {
    this.tableProgressOff.next({val: value});
  }

  display(value: boolean, text?: any): void {
    this.status.next({ value, text });
  }

  Modeldisplay(value: boolean, text?: any): void {
    this.ModelStatus.next({ value, text });
  }

  selectedSiteChange(value: any): void {
    this.selectedSiteChanged.next(value);
  }

  changeCompanyTab(value: any): void {
    this.setCompanyTab.next(value);
  }

  setOption(value: number | undefined): void {
    this.data = value;
  }

  getOption(): any {
    return this.data;
  }

  setTabNo(value: number | undefined): void {
    this.tabNo = value;
  }

  getTabNo(): any {
    return this.tabNo;
  }

  /**
   * Identify which elements have changed in list to properly re-render DOM elements.
   */
  public trackByFn(_: any, item: any): number {
    return item.stepIndex;
  }
}
