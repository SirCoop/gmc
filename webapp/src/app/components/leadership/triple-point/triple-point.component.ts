import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triple-point',
  templateUrl: './triple-point.component.html',
  styleUrls: ['./triple-point.component.scss']
})
export class TriplePointComponent implements OnInit {

  imagePath = '../../../../assets/triple_point.png';

  constructor() { }

  ngOnInit() {
  }

}
