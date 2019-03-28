import { TestBed } from '@angular/core/testing';

import { ApplicanceService } from './applicance.service';

describe('ApplicanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicanceService = TestBed.get(ApplicanceService);
    expect(service).toBeTruthy();
  });
});
