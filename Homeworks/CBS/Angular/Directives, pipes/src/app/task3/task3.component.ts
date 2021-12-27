import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {
  myDate = new Date(2010, 11, 4)
  myText = "This is my text fOr homeWork"
  myNumber = 0.324324234

  constructor() { }

  ngOnInit(): void {
  }

}
