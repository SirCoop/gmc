import { Component,  Renderer2, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import worldData from './world-data.js';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.scss']
})
export class WorldmapComponent implements OnInit {

  getFeatures(topology, key) {
    return topology.objects[key].geometries.map(function(geom) {
      return {
        type: 'Feature',
        id: geom.id,
        properties: geom.properties || {},
        geometry: {
          type: geom.type,
          coordinates: topojson.feature(topology, geom).geometry
        }
      };
    });
  }
  

  appendData() {

    const margin = {top: 0, right: 0, bottom: 0, left: 0};
    const width = 1080 - margin.left - margin.right;
    const height = 720 - margin.top - margin.bottom;
   
    const color = d3.scaleThreshold()
      .domain([10000, 100000, 500000, 1000000, 5000000, 10000000, 50000000, 100000000, 500000000, 1500000000]);
  
    const svg = d3.select( '#mapContainer' )
      .append( 'svg' )
      .attr( 'width', width )
      .attr( 'height', height )
      .append('g')
      .attr('class', 'map');
  
    const projection = d3.geoMercator()
      .scale( 130 )
      .rotate( [71.057, 0] )
      .center( [0, 42.313] )
      .translate( [width / 2, height / 1.5] );
  
    const geoPath = d3.geoPath()
      .projection( projection );

    // create FeatureCollection
    const countries: any = topojson.feature(worldData, worldData.objects.countries);
    // get features
    const countryFeatures: any = countries.features;
    // add states from topojson
    console.log('countries: ', countries);

    svg.selectAll('path')
      .data(countryFeatures).enter()
      .append('path')
      .attr('class', 'feature')
      .style('fill', 'steelblue')
      .attr('d', geoPath);
    
    // put boarder around states 
    svg.append('path')
      .datum(topojson.mesh(worldData, worldData.objects.countries, function(a, b) { return a !== b; }))
      .attr('class', 'mesh')
      .attr('d', geoPath);
    
    // add circles to svg
    const visitedLocationCoordinates: any = [
      [-122.490402, 37.786453],
      [-122.389809, 37.72728]
    ];

    svg.selectAll('circle')
      .data(visitedLocationCoordinates).enter()
      .append('circle')
      .attr('cx', (d: any) => projection(d)[0])
      .attr('cy', (d: any) => projection(d)[1])
      .attr('r', '8px')
      .attr('fill', 'red');
  }

  constructor(private renderer: Renderer2) { }

  ngOnInit() { 
    this.appendData();
  }

}
