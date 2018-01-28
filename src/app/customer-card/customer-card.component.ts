import { Component, OnInit, Input } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'bp-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {
  @Input() customer: Customer;

  constructor(private utility: UtilityService) { }

  calculate(balance: number){
    return this.utility.calculateBalance(balance);
  }

  ngOnInit() {
  }

}
