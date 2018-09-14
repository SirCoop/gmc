import { Component, OnInit } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import { delay } from 'rxjs/operators';
import { INgWidgetContainerConfig, INgWidgetConfig, INgWidgetEvent, NgWidgetContainer } from 'ngx-draggable-widget';
import { containerConfig, WidgetMetaData, widgetmetadatas, WidgetType, IWidgetDashboard, WIDGET_TYPES } from './models';

const widgetconfig$ = of(containerConfig);
const widgetitems$ = of(widgetmetadatas).pipe(delay(2000));

@Component({
  selector: 'app-draggable-desktop',
  templateUrl: './draggable-desktop.component.html',
  styleUrls: ['./draggable-desktop.component.scss']
})
export class DraggableDesktopComponent implements OnInit {



  private rgb = '#efefef';
  private curNum;
  private itemPositions: Array<any> = [];
  title = 'app';
  // public dashboardconfig$ = Observable.of<IWidgetDashboard>(null);
  public dashboardconfig$ = forkJoin(widgetconfig$, widgetitems$, (widgetconfig, widgetitems) => {
    return {
      'WidgetContainer': widgetconfig,
      'Widgets': widgetitems,
    };
  });

  constructor() { }

  ngOnInit() {
  }

  addWidget(): void {
    const conf: INgWidgetConfig = this._generateDefaultWidgetConfig();
    conf.payload = this.curNum++;
    // TODO
    // this.widgetsMetaData.push({ id: conf.payload, config: conf, name: 'Some Market' });
  }

  removeWidget(index: number): void {
    // TODO
    // if (this.widgetsMetaData[index]) {
    //   this.widgetsMetaData.splice(index, 1);
    //   }
  }

  updateItem(index: number, event: INgWidgetEvent): void {
    // Do something here
  }

  onDrag(index: number, event: INgWidgetEvent): void {
    // Do something here
  }

  onResize(index: number, event: INgWidgetEvent): void {
    // Do something here
  }

  private _generateDefaultWidgetConfig(): INgWidgetConfig {
    return { 'dragHandle': '.handle', 'col': 1, 'row': 1, 'sizex': 1, 'sizey': 1 };
  }


  private _generateDefaultDashBoardConfig(): INgWidgetConfig[] {
    return [
      { 'dragHandle': '.handle', 'row': 1, 'col': 1, 'unitx': 2, 'resizable': false },
      { 'dragHandle': '.handle', 'row': 1, 'col': 2, 'unitx': 2, 'resizable': false },
      { 'dragHandle': '.handle', 'row': 1, 'col': 3, 'unitx': 1 },
      { 'dragHandle': '.handle', 'row': 26, 'col': 1, 'unitx': 5 },
      { 'dragHandle': '.handle', 'row': 51, 'col': 1, 'unitx': 4 },
      { 'dragHandle': '.handle', 'row': 76, 'col': 89, 'unitx': 1 }];
  }




}
