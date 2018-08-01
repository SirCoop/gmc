import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss']
})
export class ImageDialogComponent implements OnInit {
  image: string;

  constructor(public dialogRef: MatDialogRef<ImageDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.image = data.image;
   }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close({ savedData: 'modal closed'});
  }
  
  close() {
      this.dialogRef.close();
  }

}
