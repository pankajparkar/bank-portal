// import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
// import { UtilityService } from '../../core/services/utility.service';

// @Component({
//   selector: 'bp-customer-item',
//   templateUrl: './customer-item.component.html',
//   styleUrls: ['./customer-item.component.css']
// })
// export class CustomerItemComponent implements OnInit {

//   @Input() customer: Customer;
//   @Input() searchTerm: string;
//   @Output() openDialog: EventEmitter<Customer> = new EventEmitter<Customer>();
//   @Output() selectCustomer: EventEmitter<Customer> = new EventEmitter<Customer>();
//   @Output() removedCustomer: EventEmitter<number> = new EventEmitter<number>();

//   constructor(private utilityService: UtilityService) { }

//   ngOnInit() {
//   }

//   calculateBalance(balance: number){
//     return this.utilityService.calculateBalance(balance);
//   }

// }
