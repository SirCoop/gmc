import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-travel-images',
  templateUrl: './travel-images.component.html',
  styleUrls: ['./travel-images.component.scss']
})
export class TravelImagesComponent implements OnInit {
  imageUrls$: any;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.imageUrls$ = this.route.snapshot.data.images.data;
  }

}
