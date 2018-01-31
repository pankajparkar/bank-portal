import { Component, OnInit } from '@angular/core';
import { RandomPhotoService } from './random-photo.service';

@Component({
  selector: 'bp-random-photo',
  templateUrl: './random-photo.component.html',
  styleUrls: ['./random-photo.component.css']
})
export class RandomPhotoComponent implements OnInit {

  randomPhoto: any;

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
  }

}
