import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { UtilityService } from '../../core/services/utility.service';
import { animate, style, transition, trigger, state, group } from '@angular/animations';

@Component({
  selector: 'bp-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListComponent implements OnInit {
  @Input()  customers: any[];
  @Input()  searchTerm: string;
  @Output() add = new EventEmitter<string>();
  @Output() remove = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Customer>();
  @Output() select = new EventEmitter<Customer>();
  
  customerName: string;

  constructor(private utilityService: UtilityService) { }
  
  addCustomerAction(){
    this.add.emit(this.customerName);
  }

  calculateBalance(balance: number){
    return this.utilityService.calculateBalance(balance);
  }

  ngOnInit() {
  }

}
