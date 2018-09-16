import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {
  trigger,
  style,
  animate,
  keyframes,
  transition
} from '@angular/animations';
import { containerConfig, widgetmetadatas, IWidgetDashboard } from './models';

@Component({
  selector: 'app-draggable-desktop',
  templateUrl: './draggable-desktop.component.html',
  styleUrls: ['./draggable-desktop.component.scss'],
  animations: [
    trigger('widgetTrigger', [
      transition('none => loaded', [
        animate(500, keyframes([
          style({ transform: 'translate(1px, 1px) rotate(0deg)' }),
          style({ transform: 'translate(-1px, -2px) rotate(-1deg)' }),
          style({ transform: 'translate(-3px, 0px) rotate(1deg)' }),
          style({ transform: 'translate(3px, 2px) rotate(0deg)' }),
          style({ transform: 'translate(1px, -1px) rotate(1deg)' }),
          style({ transform: 'translate(-1px, 2px) rotate(-1deg)' }),
          style({ transform: 'translate(-3px, 1px) rotate(0deg)' }),
          style({ transform: 'translate(3px, 1px) rotate(-1deg)' }),          
          style({ transform: 'translate(-1px, -1px) rotate(1deg)' }),
          style({ transform: 'translate(1px, 2px) rotate(0deg)' }),
          style({ transform: 'translate(1px, -2px) rotate(-1deg)' }), 
        ]))
      ])
    ])
  ]
})
export class DraggableDesktopComponent implements OnInit, AfterViewInit {
  state = 'none';
  title = 'app';

  public dashboardconfig$: IWidgetDashboard;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.createDashboard();
  }

  ngAfterViewInit() {
    this.state = 'loaded';
    this.cdr.detectChanges();
  }

  createDashboard() {
    this.dashboardconfig$ = {
      'WidgetContainer': containerConfig,
      'Widgets': widgetmetadatas,
    };
  }

}
