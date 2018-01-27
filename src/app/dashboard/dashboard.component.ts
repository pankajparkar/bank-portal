import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';

import { CustomerListService } from '../services/customer-list.service';
import { CustomerDialogComponent } from '../customer-list/customer-dialog/customer-dialog.component';

@Component({
  selector: 'bp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  savingAccountCustomers: any[];
  currentAccountCustomers: any[];

  constructor(
      private customerListService: CustomerListService,
      private dialog: MatDialog 
    ) { }

  getCustomers(){
    return this.customerListService.getCustomers().subscribe(
      (data: any) => {
        this.savingAccountCustomers = data.savingAccountCustomers;
        this.currentAccountCustomers = data.currentAccountCustomers;
      }
    );
  }

  createCustomer(empName: string){
    return {name: empName, updated: new Date(), id: Math.random()};
  }

  addSavingAccountCustomer(empName: string){
    this.savingAccountCustomers.push(this.createCustomer(empName));
  }
  
  addCurrentAccountCustomer(empName: string){
    this.currentAccountCustomers.push(this.createCustomer(empName));
  }

  removeSavingAccountCustomer(id: number){
    this.savingAccountCustomers = this.savingAccountCustomers.filter(person => person.id !== id);
  }
  
  removeCurrentAccountCustomer(id: number){
    this.currentAccountCustomers = this.currentAccountCustomers.filter(person => person.id !== id);
  }

  openSaveCustDialog(customer: any){
    let dialog = this.dialog.open(CustomerDialogComponent);
    dialog.componentInstance.customer = customer;
    dialog.afterClosed().subscribe((updatedCustomer: any) => {
      let currentCustomerIndex = this.savingAccountCustomers.findIndex(c => c.id === customer.id);
      updatedCustomer.name = updatedCustomer;
      this.savingAccountCustomers[currentCustomerIndex] = Object.assign({}, updatedCustomer)
    });
  }

  openCurrentCustDialog(customer: any){
    console.log(customer);
  }

  ngOnInit() {
    this.getCustomers();
  }

}
