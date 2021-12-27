import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  constructor() { }
  visibility = "none";
  message = "";
  fruits : Array<string> = ["apple", "pineapple", "orange", "peach", "grape"];

  getInfo(index:any) {
    this.visibility = "block";
    this.message =  this.fruits[index];
  }

  addFruit(fruit:string) {
    this.fruits.push(fruit)
  }

  ngOnInit(): void {
  }

}
