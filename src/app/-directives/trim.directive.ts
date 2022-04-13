import { Directive, EventEmitter, Input, ChangeDetectorRef, Output, ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appTrim]'
})
export class TrimDirective {
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private ngModel: NgModel) { }

  @HostListener('blur')
  onBlur(): void {
    let value = this.ngModel.model;

    if (value) {
      value = value.trim();
      this.renderer.setProperty(
        this.elementRef.nativeElement, 'value', value);
      this.renderer.setAttribute(
        this.elementRef.nativeElement, 'value', value);
      this.ngModel.update.emit(value);
    } else {
      this.renderer.setProperty(
        this.elementRef.nativeElement, 'value', '');
      this.renderer.setAttribute(
        this.elementRef.nativeElement, 'value', '');
      this.ngModel.update.emit('');
    }
  }
}
