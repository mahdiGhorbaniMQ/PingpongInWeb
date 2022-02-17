import { TestBed } from '@angular/core/testing';

import { BlocksInformationService } from './blocks-information.service';

describe('BlocksInformationService', () => {
  let service: BlocksInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlocksInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
