import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterClassDetailsComponent } from './master-class-details.component';

describe('MasterClassDetailsComponent', () => {
  let component: MasterClassDetailsComponent;
  let fixture: ComponentFixture<MasterClassDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterClassDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterClassDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
