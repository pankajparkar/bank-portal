import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bp-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @Input()  customers: any[];
  @Output() addCustomer = new EventEmitter<any>();
  
  customerName: string;

  constructor() { }
  
  addCustomerAction(){
    debugger
    this.addCustomer.emit(this.customerName);
    this.customerName = '';
  }

  ngOnInit() {
  }

}
