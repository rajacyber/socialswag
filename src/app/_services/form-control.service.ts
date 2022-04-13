import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {
  constructor() {
  }

  toFormGroup(controls: any): any {
    const group: any = {};
    controls.forEach((control: any) => {
      group[control.key] = control.required ? new FormControl(control.value || '', Validators.required)
        : new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }

  toFormControl(control: any): any {
    const group: any = {};
    group[control.key] = control.required ? new FormControl(control.value || '', Validators.required)
      : new FormControl(control.value || '');
    return new FormGroup(group);
  }
}
