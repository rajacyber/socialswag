import { Directive, HostListener, ElementRef } from '@angular/core';
import {MyToastrService} from '../_services/toastr.service';

@Directive({
  selector: '[appNameCheck]'
})
export class NameCheckDirective {

  constructor(private el: ElementRef, private toast: MyToastrService) { }

  Name_REGX = new RegExp(/^[a-zA-Z][a-zA-Z0-9-_]{1,30}$/);

  @HostListener('focusout')
  onFocusOut() {
    const current: string = this.el.nativeElement.value;
    if (current !== '') {
      if (current && !String(current).match(this.Name_REGX)) {
        this.toast.sToast('error', 'Invalid Name. The name should start with alphabets,' +
          ' followed by any alphanumeric with special characters( - and _ ) with min 2 characters');
        this.el.nativeElement.focus();
      }
    }
  }
}
