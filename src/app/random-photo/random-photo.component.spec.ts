import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomPhotoComponent } from './random-photo.component';

describe('RandomPhotoComponent', () => {
  let component: RandomPhotoComponent;
  let fixture: ComponentFixture<RandomPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
