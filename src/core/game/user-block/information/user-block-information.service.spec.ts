import { TestBed } from '@angular/core/testing';

import { UserBlockInformationService } from './user-block-information.service';

describe('UserBlockInformationService', () => {
  let service: UserBlockInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBlockInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
