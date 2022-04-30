import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MasterService } from 'src/app/_services/master.service';
import { MyToastrService } from 'src/app/_services/toastr.service';

export class ConfirmDialogModel {
  constructor(
    public title: string,
    public message: string,
    public CancelText: string,
    public AcceptText: string,
    public showReason?: boolean | undefined,
    public cancelColor?: string | undefined,
    public acceptColor?: string | undefined,
    public htmlMsg?: boolean | undefined,
    public reverse?: boolean | undefined,
    public isIcon?: boolean
  ) {
  }
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})

export class ConfirmDialogComponent {
  isIcon?: boolean;
  title: string;
  message: string;
  CancelText: string;
  AcceptText: string;
  CancelColor: string | undefined;
  AcceptColor: string | undefined;
  HtmlMsg: boolean | undefined;
  Reverse: boolean | undefined;
  showReason?: boolean;
  reason: any = '';
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel, public masterService: MasterService, public toast: MyToastrService) {
    this.title = data.title;
    this.message = data.message;
    this.CancelText = data.CancelText;
    this.AcceptText = data.AcceptText;
    this.CancelColor = data.cancelColor;
    this.AcceptColor = data.acceptColor;
    this.HtmlMsg = data.htmlMsg;
    this.Reverse = data.reverse;
    this.isIcon = data.isIcon;
    this.showReason = data.showReason;

  }

  onConfirm(): void {
    if(this.showReason){
      if(!this.reason) {
        this.toast.sToast('error', 'Reason is required!.');
        return;
      }
    }
    this.masterService.reasonData(this.reason);
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}

