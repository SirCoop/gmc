import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import worldCountries from './world-countries-geoJSON';
import worldPopulation from './world-population';
import visitedLocationCoordinates from './visited-locations';
import countryList from './country-list';

/* imported via script tags due to typing and compatibility issues */
declare let d3: any;
declare let topojson: any;

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.scss']
})
export class WorldmapComponent implements OnInit {

  titleCase(name: string): string {
    return name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  }

  isCountry(country: string): boolean {
    return countryList.indexOf(country) > -1;
  }

  ready() {
    const data: any = worldCountries;
    const population: any = worldPopulation;
    const format = d3.format(',');

    /* Set tooltips */
    const tip = d3.tip()
                .attr('class', 'd3-tip')
                // added z-index due to nesting app inside angular material sidenav
                .style('z-index', 1)
                .offset([10, -10])
                .html(function(d) {
                  return (
                    `<span style="color: #fff;"><strong>Country: </strong><span class="details">${d.properties.name}</span><br>
                    </span><span style="color: #fff;"><strong>Population: </strong><span class="details">${format(d.population)}</span></span>`);
                });
    
    const margin = {top: 0, right: 0, bottom: 0, left: 0};
    const width = 1500 - margin.left - margin.right;
    const height = 1300 - margin.top - margin.bottom;
    
    const color = d3.scaleThreshold()
        .domain([10000, 100000, 500000, 1000000, 5000000, 10000000, 50000000, 100000000, 500000000, 1500000000])
        .range(
          [
            'rgb(222, 222, 222)',
            'rgb(222,235,247)',
            'rgb(198,219,239)',
            'rgb(158,202,225)',
            'rgb(107,174,214)',
            'rgb(66,146,198)',
            'rgb(33,113,181)',
            'rgb(8,81,156)',
            'rgb(8,48,107)',
            'rgb(3,19,43)'
          ]
        );

    let path = d3.geoPath();
    
    const svg = d3.select( '#mapContainer' )
                .append('svg')                
                .attr('width', width)
                .attr('height', height)
                .append('g')
                .attr('class', 'map');            

    /* Invoke the tip in the context of this visualization */
    svg.call(tip);
    
    const projection = d3.geoMercator()
                        .scale(250)
                        .translate( [width / 2, height / 1.75]);
    
    path = d3.geoPath().projection(projection);

    const populationById = {};
  
    population.forEach(function(d) { populationById[d.id] = + d.population; });
    data.features.forEach(function(d) { d.population = populationById[d.id]; });    

    svg.append('g')
        .attr('class', 'data')
      .selectAll('path')
        .data(data.features)
      .enter().append('path')
        .attr('d', path)
        /* fills country with color based on population */
        .style('fill', function(d) { return color(populationById[d.id]); })
        .style('stroke', 'white')
        .style('stroke-width', 1.5)
        .style('opacity', 0.8)
        /* change country styling on focus */
          .style('stroke', 'white')
          .style('stroke-width', 0.3)          
          .on('mouseover', function(d) {            
            /* 
            *  d = Feature (country data)
            *  this = <path> element (target)
            */
            tip.show(d, this);

            d3.select(this)
              .style('opacity', 1)
              .style('stroke', 'white')
              .style('stroke-width', 3)
              .style('cursor', 'pointer');
          })
          .on('mouseout', function(d) {
            tip.hide(d, this);
  
            d3.select(this)
              .style('opacity', 0.8)
              .style('stroke', 'white')
              .style('stroke-width',  0.3);
          })
          .on('click', (countryFeature) => {
            const { name } = countryFeature.properties;
            /* Ensure only valid country names from map data */
            if (this.isCountry(name)) {
              tip.hide();
              /* TitleCase country name to prettify url */
              this.redirect(this.titleCase(name));
            } else {
              // handle this issue
            }
            
          });
  
    svg.append('path')
        .datum(topojson.mesh(data.features, function(a, b) { return a.id !== b.id; }))
        .attr('class', 'names')
        .attr('d', path);

    /* add circles to svg */
    svg.selectAll('circle')
      .data(visitedLocationCoordinates).enter()
      .append('circle')
      .attr('cx', (d: any) => projection(d)[0])
      .attr('cy', (d: any) => projection(d)[1])
      .attr('r', '3px')
      .attr('fill', 'red');

  }

  redirect(country: string) {
    this.router.navigate(['/travel-gallery', country]);
  }
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.ready();
  }

}
