import {Injectable, Output, EventEmitter} from '@angular/core';
import {ConfirmDialogModel, ConfirmDialogComponent} from '../shared/confirm-dialog/confirm-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})

export class ConfirmDialogService {
  result = '';
  htmlMsg: boolean | undefined = false;
  reverse = false;

  constructor(private dialog: MatDialog) {
  }

  @Output() dialogResult = new EventEmitter();

  confirmDialog(title: string, msg: string, cancelText: string, acceptText: string,
                cancelColor?: string, acceptColor?: string, htmlMsg?: boolean, reverse?: boolean): void {
    this.htmlMsg = htmlMsg;
    this.dialogResult.observers = [];
    const dialogData = new ConfirmDialogModel(title, msg, cancelText,
      acceptText, cancelColor, acceptColor, htmlMsg, reverse);
    const dialogRef = this.dialog.open(ConfirmDialogComponent,
      {minWidth:'400px', maxWidth: '600px', data: dialogData, panelClass: 'custom-modalbox'});
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.dialogResult.next(dialogResult);
    });
  }
}
