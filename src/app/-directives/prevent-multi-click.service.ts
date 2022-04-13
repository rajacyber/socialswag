import {Injectable, isDevMode} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreventMultiClickService {
  get busy(): boolean {
    return this.busyS;
  }

  constructor() {
    this.log(`'PreventMultiClickService'`);
  }

  isDevMode = isDevMode();
  private busyS: boolean;

  setDevMode(): void {
    this.isDevMode = true;
  }

  log = (s?: any, ...optional: any[]) => s && this.isDevMode && console.log(s, optional);

  set(): void {
    this.busyS = true;
  }

  reset(): void {
    this.busyS = false;
  }
}
