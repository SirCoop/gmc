import { Component,  Renderer2, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as d3Tip from 'd3-tip';
import * as topojson from 'topojson';
import worldData from './world-data.js';
import visitedLocationCoordinates from './visited-locations';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.scss']
})
export class WorldmapComponent implements OnInit {

  getFeatures(topology, key) {
    return topology.objects[key].geometries.map(geom => {
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
    const format = d3.format(',');
  
    // Set tooltips
    // const tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return d; });
    // .attr('class', 'd3-tip')
    // .offset([-10, 0])
    // .html(function(d) {
    //   return (
    //     '<strong>Country: </strong><span class="details">' + 
    //     d.properties.name + '<br></span>' + '<strong>Population: </strong><span class="details">' + 
    //     format(d.population) + '</span>'
    //   );
    // });

    const margin = {top: 0, right: 0, bottom: 0, left: 0};
    const width = 900 - margin.left - margin.right;
    const height = 700 - margin.top - margin.bottom;
   
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
    // add countries from topojson
    svg.selectAll('path')
      .data(countryFeatures).enter()
      .append('path')
      .attr('class', 'feature')
      .style('fill', 'steelblue')
      .attr('d', geoPath);
    
    // put boarder around countries 
    svg.append('path')
      .datum(topojson.mesh(worldData, worldData.objects.countries, function(a, b) {
        /* 
         * a,b are FeaturePoint Objects with shape:
         * {
         *  arcs: Array,
         *  id: Number,
         *  type: String
         * }        
        */
        return a !== b; 
      }))
      .attr('class', 'mesh')
      .attr('d', geoPath);

    // add circles to svg
    svg.selectAll('circle')
      .data(visitedLocationCoordinates).enter()
      .append('circle')
      .attr('cx', (d: any) => projection(d)[0])
      .attr('cy', (d: any) => projection(d)[1])
      .attr('r', '3px')
      .attr('fill', 'red');
  }

  constructor(private renderer: Renderer2) { }

  ngOnInit() { 
    this.appendData();
  }

}
