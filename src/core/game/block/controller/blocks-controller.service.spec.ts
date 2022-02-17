import { TestBed } from '@angular/core/testing';

import { BlocksControllerService } from './blocks-controller.service';

describe('BlocksControllerService', () => {
  let service: BlocksControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlocksControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
