import { TestBed } from '@angular/core/testing';

import { BallInformationService } from './ball-information.service';

describe('BallInformationService', () => {
  let service: BallInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BallInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
