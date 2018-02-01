import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'bp-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {

  @Output() searchChaned = new EventEmitter<string>();
  searchControl = new FormControl();

  constructor() { }

  ngOnInit() {
    this.searchControl.valueChanges
    // .debounceTime(500)
    .subscribe(query => {
      this.searchChaned.emit(query);
    });
  }

}
