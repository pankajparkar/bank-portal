import { TestBed, inject } from '@angular/core/testing';

import { SearchNameService } from './search-name.service';

describe('SearchNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchNameService]
    });
  });

  it('should be created', inject([SearchNameService], (service: SearchNameService) => {
    expect(service).toBeTruthy();
  }));
});
