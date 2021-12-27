import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mai',
  templateUrl: './mai.component.html',
  styleUrls: ['./mai.component.css']
})
export class MaiComponent implements OnInit {

  carImage1: string = 'assets/porsche.jpg';
  carImage2: string = 'assets/bmw.jpg';
  carImageWidth: number = 250;
  carImageHeight: number = 165;

  constructor() { }

  ngOnInit(): void {
  }

}

