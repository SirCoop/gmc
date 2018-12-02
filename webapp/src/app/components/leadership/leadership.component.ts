import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material';
import { TestimonyDialogComponent } from '../testimony-dialog/testimony-dialog.component';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent implements OnInit {
  testimonies$: any;
  currentUrl: string;
  fileName: string;

  constructor(private route: ActivatedRoute, private router: Router, private dialog: MatDialog) {
    router.events.subscribe((_: NavigationEnd) => {
      this.currentUrl = _.url;
    });
  }

  ngOnInit() {
    this.testimonies$ = this.sortTestimonies(this.marshallFileNames(this.route.snapshot.data.testimonies.data));
  }

   viewTestimony(testimony) {
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
        testimony
      }
    };

    this.dialog.open(TestimonyDialogComponent, config);
  }

  marshallFileNames(arr) {
    return arr.map(fileName => {
      const newFileName = fileName.replace('.pdf', '');
      const split = newFileName.split('_');
      const firstName = split[1];
      const lastName = split[2];
      return {
        index: split[0],
        value: `${firstName} ${lastName}`,
        fileName
      };
    });
  }

  sortTestimonies(arr) {
    return arr.sort((a, b) => {
      const textA = a.fileName.toUpperCase();
      const textB = b.fileName.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }

}
