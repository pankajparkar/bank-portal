import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { UtilityService } from '../../core/services/utility.service';
import { animate, style, transition, trigger, state, group } from '@angular/animations';

@Component({
  selector: 'bp-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({width: 10, transform: 'translateX(50px)', opacity: 0}),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class CustomerListComponent implements OnInit {
  @Input()  customers: any[];
  @Input()  searchTerm: string;
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
