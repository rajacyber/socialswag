import {Directive, ElementRef, HostListener} from '@angular/core';
import {MyToastrService} from "../_services/toastr.service";

@Directive({
  selector: '[appPasswordCheck]'
})
export class PasswordCheckDirective {

  constructor(private el: ElementRef, private toast: MyToastrService) {
  }

  PASSWORD_REGX = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%_-])[0-9a-zA-Z!@#$%_-](?=.{5,13})');

  @HostListener('focusout')

  onFocusOut(): boolean {
    const current: string = this.el.nativeElement.value;
    if (current !== '') {
      if (current && !String(current).match(this.PASSWORD_REGX)) {
        this.toast.sToast('error', 'Invalid Password. The password must contain atleast 6 to 13 characters without spaces at the beginning and end. It must contain one uppercase,lowercase,number and special characters(!@#$%_-)');
        this.el.nativeElement.focus();
        return false;
      } else {
        return true;
      }
    }
    return false;
  }
}
