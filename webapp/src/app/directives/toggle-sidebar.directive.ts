import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Directive({
  selector: '[appToggleSidebar]'
})
export class ToggleSidebarDirective implements OnInit {
  currentUrl = '';

  constructor(private el: ElementRef, private router: Router, private renderer: Renderer2) {
    
    router.events.subscribe((_: NavigationEnd) => {
      this.currentUrl = _.url;
      
      console.log('this.currentUrl: ', this.currentUrl);
      if (this.currentUrl === '/' || this.currentUrl === 'undefined') {
        this.el.nativeElement.style.visibility = 'hidden';
      } else {
        this.el.nativeElement.style.visibility = 'visible';
      }
     });
  }

  ngOnInit() {    
    if (this.currentUrl === '/' || this.currentUrl === 'undefined') {
      this.el.nativeElement.style.visibility = 'hidden';
    } else {
      this.el.nativeElement.style.visibility = 'visible';
    }
  }
}

