import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Directive({
  selector: '[appToggleSidebar]'
})
export class ToggleSidebarDirective {
  currentUrl = '';

  constructor(private el: ElementRef, private router: Router, private renderer: Renderer2) {
    
    router.events.subscribe((_: NavigationEnd) => {
      this.currentUrl = _.url;
      
      if (this.currentUrl === '/') {
        renderer.addClass(el.nativeElement, 'landing-page');
        // el.nativeElement.style.display = 'none';
      } else {
        // el.nativeElement.style.display = 'block';
      }
     });
  }
}

