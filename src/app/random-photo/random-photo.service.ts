import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {pipe} from 'rxjs';
import {tap} from 'rxjs/operators';

const API_URL = 'https://jsonplaceholder.typicode.com/photos'

@Injectable()
export class RandomPhotoService {

  constructor(private httpClient: HttpClient) { }

  getRandomQuote(){
    let randomNumber: any = parseInt((Math.random() * 100 % 5).toString());
    return this.httpClient.get(`${API_URL}/${randomNumber ? 1: randomNumber}`)
    .pipe(
      tap((i: any) => i.url = `assets/images/${randomNumber}.jpeg`)
    );
  }
}
