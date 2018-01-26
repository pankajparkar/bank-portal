import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bp-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @Input()  customers: any[];
  @Output() addCustomer = new EventEmitter<string>();
  @Output() removeCustomer = new EventEmitter<number>();
  
  customerName: string;

  constructor() { }
  
  addCustomerAction(){
    this.addCustomer.emit(this.customerName);
    this.customerName = '';
  }

  removedCustomerAction(id: number){
    this.removeCustomer.emit(id);
  }

  ngOnInit() {
  }

}
