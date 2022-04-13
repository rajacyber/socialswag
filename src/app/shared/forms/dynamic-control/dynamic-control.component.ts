import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../../_services/authentication.service';

@Component({
  selector: 'app-dynamic-control',
  templateUrl: './dynamic-control.component.html',
  styleUrls: ['./dynamic-control.component.scss']
})
export class DynamicControlComponent{

  constructor(public authService: AuthenticationService) {
  }
  @Output() companyChange = new EventEmitter();
  @Output() valChange = new EventEmitter();
  @Input() outputValue: any;
  @Input() formElement: any;
  @Input() form!: FormGroup;

  get isValid(): any {
    // @ts-ignore
    return this.form.controls[this.formElement.key].valid;
  }



  // tslint:disable-next-line:use-lifecycle-interface
  /*ngOnChanges(): void {
    if (this.form === undefined) {
      this.form = this.formControlService.toFormControl(this.formElement);
    }
  }*/



  onKeydownMain(e: any): void {
    let i = 0;
    if (e.target.value.length < 1) {
      if (e.keyCode === 32) {
        return;
      }
    } else {
      if (e.keyCode === 32) {
        if (i !== 0) {
          return;
        }
        i++;
      } else {
        i = 0;
      }
    }
  }

  selectedFile(file: any, key: any): void {
    this.outputValue[key] = file;
  }

  callBack($event: any, callback: boolean, formElement: any): void {
    if (callback) {
      this.outputValue[formElement] = $event;
      this.valChange.emit($event);
    }
  }
}
