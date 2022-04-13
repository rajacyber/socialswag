import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SExpTableComponent } from './s-exp-table.component';

describe('SExpTableComponent', () => {
  let component: SExpTableComponent;
  let fixture: ComponentFixture<SExpTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SExpTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SExpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
