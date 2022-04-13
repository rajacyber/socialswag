import { TestBed } from '@angular/core/testing';

import { PreventMultiClickService } from './prevent-multi-click.service';

describe('PreventMultiClickService', () => {
  let service: PreventMultiClickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreventMultiClickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
