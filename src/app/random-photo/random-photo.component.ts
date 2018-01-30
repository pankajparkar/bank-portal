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
    // this.randomPhoto.
  }

  ngOnInit() {
    setInterval(()=> {
      this.getRandomPhoto();
    }, 5000)
  }

}
