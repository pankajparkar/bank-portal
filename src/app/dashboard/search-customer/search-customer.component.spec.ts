import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCustomerComponent } from './search-customer.component';

describe('SearchCustomerComponent', () => {
  let component: SearchCustomerComponent;
  let fixture: ComponentFixture<SearchCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
