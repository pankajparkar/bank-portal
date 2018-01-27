import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerListService {

  constructor(private httpClient: HttpClient) { }

  getCustomers(){
    return this.httpClient.get('assets/api/customer-list.json');
  }

}