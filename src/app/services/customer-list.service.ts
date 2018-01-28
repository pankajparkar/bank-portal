import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerListService {

  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<Customer>{
    return this.httpClient.get<Customer>('assets/api/customer-list.json');
  }
}