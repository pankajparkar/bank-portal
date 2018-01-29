import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UtilityService } from '../../core/services/utility.service';

@Component({
  selector: 'bp-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {
  @Input() customer: Customer;
  @Output() closeCard = new EventEmitter<boolean>();

  constructor(private utility: UtilityService) { }

  calculate(balance: number){
    return this.utility.calculateBalance(balance);
  }

  ngOnInit() {
  }

}
