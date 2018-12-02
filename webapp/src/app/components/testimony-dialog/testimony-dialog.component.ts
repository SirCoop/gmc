import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-testimony-dialog',
  templateUrl: './testimony-dialog.component.html',
  styleUrls: ['./testimony-dialog.component.scss']
})
export class TestimonyDialogComponent implements OnInit {
  testimony: any;

  constructor(public dialogRef: MatDialogRef<TestimonyDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.testimony = data.testimony;
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
