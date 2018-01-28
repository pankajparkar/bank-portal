import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatSnackBar } from '@angular/material';

import { CustomerListService } from '../services/customer-list.service';
import { CustomerDialogComponent } from '../customer-dialog/customer-dialog.component';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';
import { CustomerCardComponent } from '../customer-card/customer-card.component';

const SAVE_ACCOUNT = 'Saving';
const CURRENT_ACCOUNT = 'Current';
const SAVE_MESSAGE = 'Customer saved successfully.';
const DELETE_MESSAGE = 'Customer deleted successfully.';

@Component({
  selector: 'bp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  savingAccountCustomers: Customer[];
  currentAccountCustomers: Customer[];
  originalData: Customer[];

  @ViewChild('showSelectedCustomer', {read: ViewContainerRef}) showSelectedCustomer: ViewContainerRef;

  constructor(
      private customerListService: CustomerListService,
      private dialog: MatDialog,
      private componentFactoryResolver: ComponentFactoryResolver,
      private snackBar: MatSnackBar
    ) { }

  getCustomers(){
    return this.customerListService.getCustomers().subscribe(
      (data: any) => {
        this.originalData = data;
        this.savingAccountCustomers = data.filter(c => c.type === SAVE_ACCOUNT);
        this.currentAccountCustomers = data.filter(c => c.type === CURRENT_ACCOUNT);
      }
    );
  }

  searchChanged(query: string){
    this.savingAccountCustomers = this.originalData.filter((c: any)=> 
      c.type === SAVE_ACCOUNT && ~c.name.indexOf(query)
    );
    this.currentAccountCustomers = this.originalData.filter((c: any) => 
      c.type === CURRENT_ACCOUNT && ~c.name.indexOf(query)
    );
  }

  createCustomer(empName: string, type: string){
    return {name: empName, id: Math.random(), balance: 10000, type};
  }

  addSavingAccountCustomer(empName: string){
    this.savingAccountCustomers.push(this.createCustomer(empName, SAVE_ACCOUNT));
  }
  
  addCurrentAccountCustomer(empName: string){
    this.currentAccountCustomers.push(this.createCustomer(empName, CURRENT_ACCOUNT));
  }

  removeSavingAccountCustomer(id: number){
    let dialog = this.dialog.open(ConfirmDeleteDialogComponent);
    dialog.componentInstance.customer = this.savingAccountCustomers.filter(person => person.id === id)[0];
    dialog.afterClosed().subscribe((tobeDeleted: boolean) => {
      if(tobeDeleted){
        this.savingAccountCustomers = this.savingAccountCustomers.filter(person => person.id !== id);
        this.snackBar.open(DELETE_MESSAGE, 'Ok', {
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
        this.snackBar.open(DELETE_MESSAGE, 'Ok', {
          duration: 2000,
        });
      }
    });
  }

  openSaveCustDialog(customer: any){
    let dialog = this.dialog.open(CustomerDialogComponent);
    dialog.componentInstance.customer = customer;
    dialog.afterClosed().subscribe((updatedCustomer: any) => {
      if(!updatedCustomer) return;
      let currentCustomerIndex = this.savingAccountCustomers.findIndex(c => c.id === customer.id);
      this.savingAccountCustomers[currentCustomerIndex] = Object.assign({}, updatedCustomer);
      this.snackBar.open(SAVE_MESSAGE, 'Ok', {
        duration: 2000,
      });
    });
  }

  openCurrentCustDialog(customer: any){
    let dialog = this.dialog.open(CustomerDialogComponent);
    dialog.componentInstance.customer = customer;
    dialog.afterClosed().subscribe((updatedCustomer: any) => {
      if(!updatedCustomer) return;
      let currentCustomerIndex = this.currentAccountCustomers.findIndex(c => c.id === customer.id);
      this.currentAccountCustomers[currentCustomerIndex] = Object.assign({}, updatedCustomer);
      this.snackBar.open(SAVE_MESSAGE, 'Ok', {
        duration: 2000,
      });
    });
  }

  loadComponent(customer: Customer) {
    // this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    // let adItem = this.ads[this.currentAddIndex];
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(CustomerCardComponent);

    let viewContainerRef = this.showSelectedCustomer;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<CustomerCardComponent>componentRef.instance).customer = customer;
  }
  

  selectCustomer(customer: Customer){
    //add dynamic component
    this.loadComponent(customer);
  }

  ngOnInit() {
    this.getCustomers();
  }

}
