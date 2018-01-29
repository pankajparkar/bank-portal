import { TestBed, inject } from '@angular/core/testing';

import { RandomTweetsService } from './random-tweets.service';

describe('RandomTweetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomTweetsService]
    });
  });

  it('should be created', inject([RandomTweetsService], (service: RandomTweetsService) => {
    expect(service).toBeTruthy();
  }));
});
