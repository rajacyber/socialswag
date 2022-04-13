import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SShimmerComponent } from './s-shimmer.component';

describe('SShimmerComponent', () => {
  let component: SShimmerComponent;
  let fixture: ComponentFixture<SShimmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SShimmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
