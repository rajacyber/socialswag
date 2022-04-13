import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../_services/authentication.service';
import {ModalService} from '../../_services/modal.service';
import {LoaderService} from '../../_services/loader.service';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent implements OnInit {

  constructor(private authService: AuthenticationService, public modalService: ModalService,
              private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.loaderService.display(true);
    setTimeout(() => {
      this.modalService.open('unauthorized');
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
