import { Pipe, PipeTransform } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { memoize } from 'lodash.memoize'

@Pipe({
  name: 'calculateAmout',
  //pure: true //defaults to true
})
export class CalculateAmoutPipe implements PipeTransform {
  constructor(private utilityService: UtilityService){}
  transform(value: any, args?: any): any {
    return memoize(this.utilityService.calculateBalance(value));
  }
}
