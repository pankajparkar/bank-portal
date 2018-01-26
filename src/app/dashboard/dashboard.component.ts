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
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  currentAccountCustomers = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  addSavingAccountCustomer(empName){
    this.savingAccountCustomers.push({name: empName, updated: new Date()});
  }
  addCurrentAccountCustomer(empName){
    this.savingAccountCustomers.push({name: empName, updated: new Date()});
  }

  ngOnInit() {
  }

}
