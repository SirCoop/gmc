import { Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '../../node_modules/@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  currentUrl = '';
  hideSideNav = true;
  ipadWidth = 768;
  ipadHeight = 1024;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {
    router.events.subscribe((_: NavigationEnd) => {
      this.currentUrl = _.url;
      // force mat-sidenav to close after clicking icon on mobile
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }      
    });
  }

  isScreenSmall(): boolean {
    return window.innerWidth < this.ipadWidth && window.innerHeight < this.ipadHeight;
  }
}
