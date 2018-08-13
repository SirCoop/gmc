import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  currentUrl = '';
  innerHeight: any;
  innerWidth: any;

  constructor(private router: Router) {
    router.events.subscribe((_: NavigationEnd) => {
      this.currentUrl = _.url;
    });
  }

  ngOnInit() {   
  }

  @HostListener('window:resize', ['$event']) onResize(event) {
    console.log('resize event: ', event);
    this.innerHeight = event.target.innerHeight;
    this.innerWidth = event.target.innerWidth;
  }

  toggleMenu() {
    const el = document.getElementById('navContainer');
    if (el.className === 'topnav') {
        el.className += ' responsive';
    } else {
        el.className = 'topnav';
    }
}

}
