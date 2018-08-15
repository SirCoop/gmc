import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  currentUrl = '';
  hideSideNav = true;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private el: ElementRef, private renderer: Renderer2, private router: Router, private breakpointObserver: BreakpointObserver) {
    router.events.subscribe((_: NavigationEnd) => {
      this.currentUrl = _.url;
      // if (this.currentUrl === '/' || this.currentUrl === 'undefined') {
      //   this.hideSideNav = true;
      // } else {
      //   this.hideSideNav = false;
      // }
    });
  }

  ngOnInit() {
    // if (this.currentUrl === '/' || this.currentUrl === 'undefined') {
    //   this.hideSideNav = true;
    // } else {
    //   this.hideSideNav = false;
    // }
  }
}
