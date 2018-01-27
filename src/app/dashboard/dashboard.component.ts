import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  savingAccountCustomers = [
    {
      id: Math.random(),
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      id: Math.random(),
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      id: Math.random(),
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  currentAccountCustomers = [
    {
      id: Math.random(),
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      id: Math.random(),
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

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

  ngOnInit() {
  }

}
