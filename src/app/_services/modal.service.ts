import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CommonService} from './common.services';

@Injectable({providedIn: 'root'})
export class ModalService {

  constructor(private snackBar: MatSnackBar, private cs: CommonService) {
  }

  private modals: any[] = [];

  openSnackBar(message: string, action: string, config?: any): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  add(modal: any): void {
    // add modal to array of active modals
    this.modals.push(modal);
  }

  remove(id: string): void {
    // remove modal from array of active modals
    this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id: string): void {
    // open modal specified by id
    if (this.cs.modalHolder.indexOf(id) > -1) { return; }
    const modal: any = this.modals.filter(x => x.id === id)[0];
    modal.open();
    this.cs.modalHolder.push(id);
  }

  close(id: string): void {
    // close modal specified by id
    const modal: any = this.modals.filter(x => x.id === id)[0];
    if ( this.cs.modalHolder.indexOf(id) > -1 ) { this.cs.modalHolder.splice(this.cs.modalHolder.indexOf(id), 1); }
    modal.close();
  }
}
