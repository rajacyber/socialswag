import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IntegrationActionsService {
  integrationActionShow = false;
  integrationAssetActionShow = false;
  integrationActionPopup = new EventEmitter();
  integrationActionEvent: Subject<any> = new Subject<any>();
  integrationAssetActionEvent: Subject<any> = new Subject<any>();
  integrationOauthEvent = new EventEmitter();
  applicationActionEvent: Subject<any> = new Subject<any>();
  singleClick = false;
  constructor() {
  }

  triggerAction(): void {
    if (!this.singleClick) {
      this.singleClick = true;
      this.integrationActionEvent.next({});
      setTimeout(() => {this.singleClick = false; }, 100);
    }
  }

  triggerAssetAction(): void {
    if (!this.singleClick) {
      this.singleClick = true;
      this.integrationAssetActionEvent.next({});
      setTimeout( () => { this.singleClick = false; }, 100);
    }
  }

  processAction(): void {
    if (!this.singleClick) {
      this.singleClick = true;
      this.applicationActionEvent.next({});
      setTimeout(() => {this.singleClick = false; }, 100);
    }
  }
}
