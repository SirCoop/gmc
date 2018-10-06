import { Component, OnInit } from '@angular/core';
import d3Bezier from './bezier';

@Component({
  selector: 'app-ambition',
  templateUrl: './ambition.component.html',
  styleUrls: ['./ambition.component.scss']
})
export class AmbitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    d3Bezier();
  }

}
