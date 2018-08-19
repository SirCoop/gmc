import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MatTabChangeEvent } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-writings',
  templateUrl: './writings.component.html',
  styleUrls: ['./writings.component.scss']
})
export class WritingsComponent implements OnInit {
  writings$: any;
  currentUrl: string;
  
  writingType: string;
  fileName: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.subscribe((_: NavigationEnd) => {
      this.currentUrl = _.url;
           
    });
   }

  ngOnInit() {
    this.writings$ = this.route.snapshot.data.writings.data;
    // this.changeRoute('journal');
  }

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    // console.log('tabChangeEvent => ', tabChangeEvent.tab.textLabel);
  }

  changeRoute(segment) {
    // this.router.navigate([`/${segment}`, { }], { relativeTo: this.route.url });
  }

  viewArt(type, fileName) {
    this.writingType = type;
    this.fileName = fileName;
  }

  sortedTitles(arr) {
    let sorted = [];
    if (arr.length) {
      sorted = arr.sort((a, b) => {
        const textA = a.value.toUpperCase();
        const textB = b.value.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
    }
    return sorted;
  }

}
