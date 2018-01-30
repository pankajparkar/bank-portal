import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://api.tronalddump.io/random/quote'

@Injectable()
export class RandomPhotoService {

  constructor(private httpClient: HttpClient) { }

  getRandomQuote(){
    return this.httpClient.get(API_URL);
  }

}
