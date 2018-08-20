import { Component, ViewChild, NgZone } from '@angular/core';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '../../node_modules/@angular/material';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

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
  activeSpinner = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  constructor(private router: Router,
              private ngZone: NgZone,
              private breakpointObserver: BreakpointObserver,
              private spinnerService: Ng4LoadingSpinnerService) {
    this.router.events.subscribe((_: NavigationEnd) => {
      this.currentUrl = _.url;
      // force mat-sidenav to close after clicking icon on mobile
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }      
    });

    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      // We wanna run this function outside of Angular's zone to
      // bypass change detection
      this.ngZone.runOutsideAngular(() => {
        this.spinnerService.show();
      });
    }
    if (event instanceof NavigationEnd) {
      this.spinnerService.hide();
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.spinnerService.hide();
    }
    if (event instanceof NavigationError) {
      this.spinnerService.hide();
    }
  }

  /* use these methods to toggle spinner
  *  this.spinnerService.show();
  *  this.spinnerService.hide();
  * */

  isScreenSmall(): boolean {
    return window.innerWidth < this.ipadWidth && window.innerHeight < this.ipadHeight;
  }

}
