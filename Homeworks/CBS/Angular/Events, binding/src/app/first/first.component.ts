import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  counter : number = 0;
  carImages : Array<string> = [
    'assets/audi.jpg', 'assets/bmw.jpg', 'assets/porsche.jpg', 'assets/toyota.jpg', 'assets/vw.jpg'
  ]

  imageWidth : number = 250;
  imageHeight : number = 165;
  
  decrease() {
    if (this.counter != 0) {
      this.counter--;
    } else {
      this.counter = 0;
    }
  }

  increase() {
    if (this.counter != (this.carImages.length - 1)) {
      this.counter++;
    } else {
      this.counter = this.carImages.length - 1;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

export class myImageClass {
  image : string = "assets/audi.jpg";
  imageWidth: number = 300;

}