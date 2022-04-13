import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OauthGrantComponent } from './oauth-grant.component';

describe('OauthGrantComponent', () => {
  let component: OauthGrantComponent;
  let fixture: ComponentFixture<OauthGrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OauthGrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OauthGrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
