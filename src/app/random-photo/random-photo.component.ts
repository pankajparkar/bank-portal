import { Component, OnInit } from '@angular/core';
import { RandomPhotoService } from './random-photo.service';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'bp-random-photo',
  templateUrl: './random-photo.component.html',
  styleUrls: ['./random-photo.component.css']
})
export class RandomPhotoComponent implements OnInit {

  randomPhoto: any;
  defaultUrl: string = 'assets/images/5.jpeg';

  constructor(private randomPhotoService: RandomPhotoService) { }

  getRandomPhoto(){
    this.randomPhotoService.getRandomQuote().subscribe(
      photo => this.randomPhoto = photo
    )
  }

  ngOnInit() {
    setInterval(()=> {
      this.getRandomPhoto();
    }, 8000)
    // this.randomPhoto = Observable.interval(8000).switchMap(()=> this.randomPhotoService.getRandomQuote());
  }
}
