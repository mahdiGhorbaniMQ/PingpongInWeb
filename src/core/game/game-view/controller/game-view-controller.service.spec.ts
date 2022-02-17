import { TestBed } from '@angular/core/testing';

import { GameViewControllerService } from './game-view-controller.service';

describe('GameViewControllerService', () => {
  let service: GameViewControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameViewControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
