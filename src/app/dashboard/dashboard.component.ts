import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerListService } from '../services/customer-list.service';

@Component({
  selector: 'bp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  savingAccountCustomers: any[];
  currentAccountCustomers: any[];

  constructor(private customerListService: CustomerListService) { }

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

  openSaveCustDialog(){

  }

  openCurrentCustDialog(){
    
  }

  ngOnInit() {
    this.getCustomers();
  }

}
