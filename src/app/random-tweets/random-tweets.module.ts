import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomTweetsComponent } from './random-tweets.component';
import { RandomTweetsService } from './random-tweets.service';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { Route } from '@angular/router';

const routes: Route[] = [
  {path: '', component: RandomTweetsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    CoreModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [RandomTweetsComponent],
  providers: [
    RandomTweetsService
  ]
})
export class RandomTweetsModule { }
