import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as topojson from 'topojson';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.scss']
})
export class WorldmapComponent implements OnInit {
    width: any = 900;
    height: any = 600;

    projection: any = d3.geoMercator();
    svg: any = d3.select('body').append('svg')
        .attr('width', this.width)
        .attr('height', this.height);
    path: any = d3.geoPath()
        .projection(this.projection);
    g: any = this.svg.append('g');
    callback(error: any, topology: any) {
      this.g.selectAll('path')
        .data(topojson.feature(topology, topology.objects.countries).features)
        .enter()
        .append('path')
        .attr('d', this.path);
      }

  constructor() { }

  ngOnInit() {
    d3.json('world-110m2.json', this.callback);
  }

}
