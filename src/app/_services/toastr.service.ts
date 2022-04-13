import {  Injectable, Inject, Injector } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MyToastrService {
  constructor(@Inject(Injector) private injector: Injector) { }
  private get _toastrService(): ToastrService {
    return this.injector.get(ToastrService);
  }
  sToast(type: string, message: string, title?: string | null): void {
    // @ts-ignore
    this._toastrService[type](message, title);
  }
}
