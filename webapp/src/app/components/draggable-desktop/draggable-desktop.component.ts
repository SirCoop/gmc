import { Component, OnInit } from '@angular/core';
// import { of, forkJoin } from 'rxjs';
// import { delay } from 'rxjs/operators';
import { containerConfig, WidgetMetaData, widgetmetadatas, IWidgetDashboard } from './models';

@Component({
  selector: 'app-draggable-desktop',
  templateUrl: './draggable-desktop.component.html',
  styleUrls: ['./draggable-desktop.component.scss']
})
export class DraggableDesktopComponent implements OnInit {

  title = 'app';

  public dashboardconfig$: IWidgetDashboard;

  constructor() { }

  ngOnInit() {
    this.createDashboard();
  }

  createDashboard() {
    this.dashboardconfig$ = {
      'WidgetContainer': containerConfig,
      'Widgets': widgetmetadatas,
    };
  }

}
