import { Directive, HostListener, ElementRef } from '@angular/core';
import {MyToastrService} from '../_services/toastr.service';

@Directive({
  selector: '[appUrlCheck]'
})
export class UrlCheckDirective {

  constructor(private el: ElementRef, private toast: MyToastrService) {
   }

  URL_REGX = new RegExp(/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/);

  @HostListener('focusout')
  onFocusOut(): any{
    const current: string = this.el.nativeElement.value;
    if (current !== '') {
      if (current && !String(current).match(this.URL_REGX)) {
        this.toast.sToast('error', 'Invalid Url,The Url should start with http:// or https://');
        this.el.nativeElement.focus();
      }
    }
  }
}
