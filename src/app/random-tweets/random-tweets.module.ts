import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomTweetsComponent } from './random-tweets.component';
import { RandomTweetsService } from './random-tweets.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RandomTweetsComponent],
  providers: [
    RandomTweetsService
  ]
})
export class RandomTweetsModule { }
