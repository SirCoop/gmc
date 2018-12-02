import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog } from '@angular/material';
import { ImageDialogComponent } from './../image-dialog/image-dialog.component';

@Component({
  selector: 'app-travel-images',
  templateUrl: './travel-images.component.html',
  styleUrls: ['./travel-images.component.scss']
})
export class TravelImagesComponent implements OnInit {
  imageUrls$: any;

  constructor(private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    this.imageUrls$ = this.route.snapshot.data.images.data;
  }

  openDialog(image) {
    const config = {
      disableClose: false,
      panelClass: 'custom-overlay-pane-class',
      hasBackdrop: true,
      backdropClass: '',
      width: '',
      height: '',
      minWidth: '',
      minHeight: '',
      maxWidth: '',
      maxHeight: '',
      position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
      },
      data: {
        image
      }
    };

    this.dialog.open(ImageDialogComponent, config);

  }

}
