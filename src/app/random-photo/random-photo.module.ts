import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { CoreModule } from '../core/core.module';
import { RandomPhotoService } from './random-photo.service';
import { RandomPhotoComponent } from './random-photo.component';

const routes: Route[] = [
  {path: '', component: RandomPhotoComponent}
]

@NgModule({
  imports: [
    CommonModule,
    CoreModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [RandomPhotoComponent],
  providers: [
    RandomPhotoService
  ]
})
export class RandomPhotoModule { }
