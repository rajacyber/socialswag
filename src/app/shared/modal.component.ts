import {Component, ElementRef, Input, OnInit, OnDestroy} from '@angular/core';
import {ModalService} from '../_services/modal.service';
import {LoaderService} from '../_services/loader.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 's-modal',
  template:
    `<div class="s-modal" [ngStyle]="{'width' : width}">
        <div class="s-modal-body">
          <div *ngIf="showModelLoader" class="loader-class">
            <img src="/assets/images/loading.gif" width="30" alt="Loading">
            <p>Loading... </p>
            <p class="m0">{{contentText}}</p>
          </div>
          <ng-content></ng-content>
        </div>
      </div>
      <div class="s-modal-background"></div>`,
  styles: [
    `.loader-class {
      z-index: 10000;
      position: fixed;
      width: 50%;
      top: 40%;
      left: 25%;
      right: 40%;
      bottom: 40%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #000000ba;
      color: white;
      border-radius: 10px;
      height: 150px
    }
    .s-modal {
      border-radius: 10px;
    }
    .custom-class p {
      color: white;
      word-break: break-all;
      padding: 0 10px;
      margin-bottom: 8px;
    }

    .custom-class p span {
      font-size: 14px
    }`
  ]
})
export class ModalComponent implements OnInit, OnDestroy {
  showModelLoader = false;
  contentText: any;
  result: any;
  @Input()
  id!: string;
  @Input() width: any;
  private readonly element: any;

  constructor(private modalService: ModalService, private el: ElementRef, private loaderService: LoaderService) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    this.loaderService.ModelStatus.subscribe((val: boolean, text: string) => {
      this.result = val;
      this.showModelLoader = this.result.value;
      this.contentText = this.result.text;
    });
    const modal = this;
    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }
    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', (e: any) => {
      if (e.target.className === 's-modal') {
        modal.close();
      }
    });
    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('s-modal-open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('s-modal-open');
  }
}
