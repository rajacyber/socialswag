import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCrudTComponent } from './s-crud-t.component';

describe('SCrudTComponent', () => {
  let component: SCrudTComponent;
  let fixture: ComponentFixture<SCrudTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SCrudTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SCrudTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
