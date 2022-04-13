import { ComponentFixture, TestBed } from '@angular/core/testing';

import { O365GrantComponent } from './o365-grant.component';

describe('O365GrantComponent', () => {
  let component: O365GrantComponent;
  let fixture: ComponentFixture<O365GrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ O365GrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(O365GrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
