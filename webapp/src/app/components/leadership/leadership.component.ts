import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent implements OnInit {
  testimonies$: any;
  currentUrl: string;
  fileName: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.subscribe((_: NavigationEnd) => {
      this.currentUrl = _.url;
           
    });
  }

  ngOnInit() {
    this.testimonies$ = this.sortTestimonies(this.marshallFileNames(this.route.snapshot.data.testimonies.data));
    console.log('this.testimonies$: ', this.testimonies$);
  }

   viewTestimony(fileName) {
    this.fileName = fileName;
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

  sortedTitles(arr) {
    let sorted = [];
    if (arr.length) {
      const items = arr.map(item => {
        console.log('item: ', item);
      })
      // sorted = arr.sort((a, b) => {
      //   console.log('a: ', a);
      //   console.log('b: ', b);
      //   const textA = a.value.toUpperCase();
      //   const textB = b.value.toUpperCase();
      //   return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      // });
    }
    return sorted;
  }

}
