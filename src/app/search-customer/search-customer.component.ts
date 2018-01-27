import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bp-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {

  @Output() searchChaned = new EventEmitter<string>();

  constructor() { }

  inputChangedAction(query: string){
    this.searchChaned.emit(query);
  }

  ngOnInit() {
  }

}
