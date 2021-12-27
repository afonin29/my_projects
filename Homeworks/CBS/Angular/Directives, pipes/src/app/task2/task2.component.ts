import { Component, OnInit } from '@angular/core';
import { withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  divColor = "white";
  getColor(color:any) {
    this.divColor = color;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
