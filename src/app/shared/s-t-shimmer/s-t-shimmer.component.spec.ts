import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STShimmerComponent } from './s-t-shimmer.component';

describe('STShimmerComponent', () => {
  let component: STShimmerComponent;
  let fixture: ComponentFixture<STShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
