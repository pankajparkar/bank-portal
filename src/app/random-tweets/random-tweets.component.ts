import { Component, OnInit } from '@angular/core';

import { RandomTweetsService } from './random-tweets.service';

@Component({
  selector: 'bp-random-tweets',
  templateUrl: './random-tweets.component.html',
  styleUrls: ['./random-tweets.component.css']
})
export class RandomTweetsComponent implements OnInit {

  quotes: any;

  constructor(private randomTweets: RandomTweetsService) { }

  getRandomQuotes(){
    this.randomTweets.getRandomQuote().subscribe(
      quotes => this.quotes = quotes
    )
  }

  ngOnInit() {
  }

}
