import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-travel-images',
  templateUrl: './travel-images.component.html',
  styleUrls: ['./travel-images.component.scss']
})
export class TravelImagesComponent implements OnInit {
  images$: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.images$ = this.route.snapshot.data['images'];
    console.log('images: ', this.images$);
  }

}
