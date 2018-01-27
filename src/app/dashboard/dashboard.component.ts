import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatSnackBar } from '@angular/material';

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
      private dialog: MatDialog,
      private snackBar: MatSnackBar
    ) { }

  getCustomers(){
    return this.customerListService.getCustomers().subscribe(
      (data: any) => {
        this.savingAccountCustomers = data.filter(c => c.type === "Saving");
        this.currentAccountCustomers = data.filter(c => c.type === "Current");;
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
      this.savingAccountCustomers[currentCustomerIndex] = Object.assign({}, updatedCustomer);
      this.snackBar.open('Customer saved successfully.', 'Ok', {
        duration: 2000,
      });
    });
  }

  openCurrentCustDialog(customer: any){
    let dialog = this.dialog.open(CustomerDialogComponent);
    dialog.componentInstance.customer = customer;
    dialog.afterClosed().subscribe((updatedCustomer: any) => {
      let currentCustomerIndex = this.currentAccountCustomers.findIndex(c => c.id === customer.id);
      this.currentAccountCustomers[currentCustomerIndex] = Object.assign({}, updatedCustomer);
      this.snackBar.open('Customer saved successfully.', 'Ok', {
        duration: 2000,
      });
    });
  }

  ngOnInit() {
    this.getCustomers();
  }

}
