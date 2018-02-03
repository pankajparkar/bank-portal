import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { UtilityService } from '../services/utility.service';

let cache = {};

@Pipe({
  name: 'calculateAmout',
  //pure: true //defaults to true
})
export class CalculateAmoutPipe implements PipeTransform {
  constructor(private utilityService: UtilityService, private decimalPipe: DecimalPipe){}

  private calculateMemoize = (val) => {
    if(!cache[val]) cache[val] = this.numberFormat(val);
    return cache[val];
  }

  private numberFormat = (value) =>{
    var result = this.utilityService.calculateBalance(value);
    return this.decimalPipe.transform(result, '.0-0')
  };

  transform(value: any, args?: any): any {
    return this.calculateMemoize(value);
  }
}
