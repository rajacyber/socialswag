import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveLearningComponent } from './live-learning.component';

describe('LiveLearningComponent', () => {
  let component: LiveLearningComponent;
  let fixture: ComponentFixture<LiveLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
