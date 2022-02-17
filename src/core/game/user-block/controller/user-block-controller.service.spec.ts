import { TestBed } from '@angular/core/testing';

import { UserBlockControllerService } from './user-block-controller.service';

describe('UserBlockControllerService', () => {
  let service: UserBlockControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBlockControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
