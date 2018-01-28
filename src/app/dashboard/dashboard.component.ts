import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatSnackBar } from '@angular/material';

import { CustomerListService } from '../services/customer-list.service';
import { CustomerDialogComponent } from '../customer-list/customer-dialog/customer-dialog.component';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'bp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  savingAccountCustomers: Customer[];
  currentAccountCustomers: Customer[];
  originalData: Customer[];

  constructor(
      private customerListService: CustomerListService,
      private dialog: MatDialog,
      private snackBar: MatSnackBar
    ) { }

  getCustomers(){
    return this.customerListService.getCustomers().subscribe(
      (data: any) => {
        this.originalData = data;
        this.savingAccountCustomers = data.filter(c => c.type === "Saving");
        this.currentAccountCustomers = data.filter(c => c.type === "Current");
      }
    );
  }

  searchChanged(query: string){
    this.savingAccountCustomers = this.originalData.filter((c: any)=> c.type === "Saving" && ~c.name.indexOf(query));
    this.currentAccountCustomers = this.originalData.filter((c: any) => c.type === "Current" && ~c.name.indexOf(query));
  }

  createCustomer(empName: string, type: string){
    return {name: empName, id: Math.random(), balance: 10000, type};
  }

  addSavingAccountCustomer(empName: string){
    this.savingAccountCustomers.push(this.createCustomer(empName, 'Saving'));
  }
  
  addCurrentAccountCustomer(empName: string){
    this.currentAccountCustomers.push(this.createCustomer(empName, 'Current'));
  }

  removeSavingAccountCustomer(id: number){
    let dialog = this.dialog.open(ConfirmDeleteDialogComponent);
    dialog.componentInstance.customer = this.savingAccountCustomers.filter(person => person.id === id)[0];
    dialog.afterClosed().subscribe((tobeDeleted: boolean) => {
      if(tobeDeleted){
        this.savingAccountCustomers = this.savingAccountCustomers.filter(person => person.id !== id);
        this.snackBar.open('Customer deleted successfully.', 'Ok', {
          duration: 2000,
        });
      }
    });
  }
  
  removeCurrentAccountCustomer(id: number){
    let dialog = this.dialog.open(ConfirmDeleteDialogComponent);
    dialog.componentInstance.customer = this.currentAccountCustomers.filter(person => person.id === id)[0];

    dialog.afterClosed().subscribe((tobeDeleted: boolean) => {
      if(tobeDeleted){
      this.currentAccountCustomers = this.currentAccountCustomers.filter(person => person.id !== id);
        this.snackBar.open('Customer deleted successfully.', 'Ok', {
          duration: 2000,
        });
      }
    });
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
