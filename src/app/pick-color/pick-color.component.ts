import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pick-color',
  templateUrl: './pick-color.component.html',
  styleUrls: ['./pick-color.component.css']
})
export class PickColorComponent implements OnInit {
  background: string;

  changeColor(value) {
    this.background = value;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
