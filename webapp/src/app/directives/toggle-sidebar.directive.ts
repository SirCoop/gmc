import { Directive, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Directive({
  selector: '[appToggleSidebar]'
})
export class ToggleSidebarDirective {
  currentUrl = '';

  constructor(private el: ElementRef, private router: Router) {
    router.events.subscribe((_: NavigationEnd) => {
      this.currentUrl = _.url;
      if (this.currentUrl === '/') {
        el.nativeElement.style.display = 'none';
      } else {
        el.nativeElement.style.display = 'block';
      }
     });
  }
}

