import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomTweetsComponent } from './random-tweets.component';

describe('RandomTweetsComponent', () => {
  let component: RandomTweetsComponent;
  let fixture: ComponentFixture<RandomTweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomTweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
