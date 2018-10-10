import { Component, OnInit } from '@angular/core';
import triplePoint from './triple-point';

@Component({
  selector: 'app-triple-point',
  templateUrl: './triple-point.component.html',
  styleUrls: ['./triple-point.component.scss']
})
export class TriplePointComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    triplePoint();
  }

}
