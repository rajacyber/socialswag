import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppressVulsDaysComponent } from './suppress-vuls-days.component';

describe('SuppressVulsDaysComponent', () => {
  let component: SuppressVulsDaysComponent;
  let fixture: ComponentFixture<SuppressVulsDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppressVulsDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppressVulsDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
