import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

  constructor() { }

  calculateBalance(balance: number){
    let interest = 0.1*balance;
    console.log(interest);
    return balance + interest;
  }
}
