import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-calendar',
  templateUrl: './custom-calendar.component.html',
  styleUrls: ['./custom-calendar.component.scss']
})
export class CustomCalendarComponent implements OnInit {
  constructor() { }
  @Input() inputarray: any = [];
  @Input() bindArray: any = [];
  @Output() finalValueChange = new EventEmitter();
  @Output() cancelClick = new EventEmitter();
  selectedArry: any = [];
  savedArray: any = [];

  array = [];

  ngOnInit(): void {
    this.bindArray.forEach((element: any) => {
      this.selectedArry[element] = element;
      this.savedArray[element] = element;
    });
  }
  itemClick(val: any): void {
    const index: number = this.selectedArry.indexOf(val);
    if (index !== -1) {
      this.selectedArry.splice(index, 1);
      this.array = Object.assign([], this.selectedArry);
      this.selectedArry = [];
      this.array.forEach(element => {
        this.selectedArry[element] = element;
      });
    } else {
      this.selectedArry[val] = val;
    }
  }

  setValues(): void {
    this.savedArray = Object.assign([], this.selectedArry);
    this.finalValueChange.emit(this.selectedArry);
  }

  onCancel(): void {
    this.selectedArry = Object.assign([], this.savedArray);
    this.cancelClick.emit();
  }
}
