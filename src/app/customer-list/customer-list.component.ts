import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'bp-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @Input()  customers: any[];
  @Output() addCustomer = new EventEmitter<string>();
  @Output() removeCustomer = new EventEmitter<number>();
  @Output() openDialog = new EventEmitter<Customer>();
  @Output() selectCustomer = new EventEmitter<Customer>();
  
  customerName: string;

  constructor(private utilityService: UtilityService) { }
  
  addCustomerAction(){
    this.addCustomer.emit(this.customerName);
    this.customerName = '';
  }

  calculateBalance(balance: number){
    return this.utilityService.calculateBalance(balance);
  }

  removedCustomerAction(id: number, event: Event){
    this.removeCustomer.emit(id);
  }

  selectCustomerAction(customer: any){
    this.selectCustomer.emit(customer);
  }

  openDialogAction(customer: Customer, event: Event){
    this.openDialog.emit(customer);
  }

  ngOnInit() {
  }

}
