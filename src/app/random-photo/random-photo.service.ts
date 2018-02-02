import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://jsonplaceholder.typicode.com/photos'

@Injectable()
export class RandomPhotoService {

  constructor(private httpClient: HttpClient) { }

  getRandomQuote(){
    return this.httpClient.get(`${API_URL}/${(Math.random()+1).toFixed(0)}`);
  }
}
