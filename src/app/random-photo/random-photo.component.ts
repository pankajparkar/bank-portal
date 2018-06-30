import { Component, OnInit, OnDestroy } from '@angular/core';
import { RandomPhotoService } from './random-photo.service';

@Component({
  selector: 'bp-random-photo',
  templateUrl: './random-photo.component.html',
  styleUrls: ['./random-photo.component.css']
})
export class RandomPhotoComponent implements OnInit, OnDestroy {

  randomPhoto: any;
  defaultUrl: string = 'assets/images/5.jpeg';
  interval: any;

  constructor(private randomPhotoService: RandomPhotoService) { }

  getRandomPhoto(){
    this.randomPhotoService.getRandomQuote().subscribe(
      photo => this.randomPhoto = photo
    )
  }

  ngOnInit() {
    this.interval = setInterval(()=> {
      this.getRandomPhoto();
    }, 8000)
    // this.randomPhoto = Observable.interval(8000).switchMap(()=> this.randomPhotoService.getRandomQuote());
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
