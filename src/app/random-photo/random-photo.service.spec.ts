import { TestBed, inject } from '@angular/core/testing';
import { RandomPhotoService } from './random-photo.service';


describe('RandomPhotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomPhotoService]
    });
  });

  it('should be created', inject([RandomPhotoService], (service: RandomPhotoService) => {
    expect(service).toBeTruthy();
  }));
});
