import { TestBed, inject } from '@angular/core/testing';

import { CustomerListService } from './customer-list.service';

describe('CustomerListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerListService]
    });
  });

  it('should be created', inject([CustomerListService], (service: CustomerListService) => {
    expect(service).toBeTruthy();
  }));
});
