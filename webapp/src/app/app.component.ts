import { Component, NgZone, OnInit, HostListener } from '@angular/core';
import 'hammerjs';
import {
  Router,
  /* import as RouterEvent to avoid confusion with the DOM Event */
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  currentUrl = '';
  hideSideNav = true;
  ipadWidth = 768;
  ipadHeight = 1024;
  activeSpinner = false;
  timeOut: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.toggleMenu();
  }

  constructor(private router: Router,
    private ngZone: NgZone,
    private breakpointObserver: BreakpointObserver,
    private spinnerService: Ng4LoadingSpinnerService) {
    this.router.events.subscribe((_: NavigationEnd) => {
      this.currentUrl = _.url;     
    });

    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  ngOnInit() {
    this.toggleMenu();
  }

  /* Shows and hides the loading spinner during RouterEvent changes */
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      /* We wanna run this function outside of Angular's zone to bypass change detection */
      this.ngZone.runOutsideAngular(() => {
        this.spinnerService.show();
      });
    }
    if (event instanceof NavigationEnd) {
      this.spinnerService.hide();
    }

    /* Set loading state to false in both of the below events to hide the spinner in case a request fails */
    if (event instanceof NavigationCancel) {
      this.spinnerService.hide();
    }
    if (event instanceof NavigationError) {
      this.spinnerService.hide();
    }
  }


  /* Set the width of the side navigation to 250px */
  openNav(e) {
    e.stopPropagation();
    const el = document.getElementById('sidenav');
    el.classList.add('sidenav-opened');
  }

  /* Set the width of the side navigation to 0 */
  closeNav(e) {
    e.stopPropagation();
    const el = document.getElementById('sidenav');
    el.classList.remove('sidenav-opened');
  }

  isScreenSmall(): boolean {
    return window.innerWidth <= this.ipadWidth && window.innerHeight <= this.ipadHeight;
  }

  toggleMenu() {
    const largeNav = document.getElementById('navIcon-desktop');
    const smallNavContainer = document.getElementById('mobileNavIconContainer');
    const smallNav = document.getElementById('navIcon-mobile');
    if (!this.isScreenSmall()) {
      largeNav.style.display = 'block';
      smallNavContainer.style.display = 'none';
      smallNav.style.display = 'none';
    } else {
      largeNav.style.display = 'none';
      smallNavContainer.style.display = 'inline-block';
      smallNav.style.display = 'block';
    }
  }

}
