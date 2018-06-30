import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {pipe} from 'rxjs';
import {tap} from 'rxjs/operators';

const API_URL = 'https://jsonplaceholder.typicode.com/photos'

@Injectable()
export class RandomPhotoService {

  constructor(private httpClient: HttpClient) { }

  getRandomQuote(){
    debugger
    let randomNumber = parseInt((Math.random() * 100) % 5);
    return this.httpClient.get(`${API_URL}/${randomNumber ? 1: randomNumber.toFixed(0)}`)
    .pipe(
      tap(i => i.url = `assets/images/${randomNumber}.jpeg`)
    );
  }
}
