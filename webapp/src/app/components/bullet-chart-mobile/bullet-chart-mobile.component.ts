import { Component, OnInit, Input } from '@angular/core';
import d3Bullet from '../bullet-chart/bullet';

/* imported via script tags due to typing and compatibility issues */
declare let d3: any;

@Component({
  selector: 'app-bullet-chart-mobile',
  templateUrl: './bullet-chart-mobile.component.html',
  styleUrls: ['./bullet-chart-mobile.component.scss']
})
export class BulletChartMobileComponent implements OnInit {
  @Input() dataSource: any[] = [];

  skills = {
    machineLearningSkills: false,
    frontEndSkills: false,
    backEndSkills: false
  };

  device = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  randomize(d) {
    if (!d.randomizer) {
      d.randomizer = this.randomizer(d);
    }
    d.ranges = d.ranges.map(d.randomizer);
    d.markers = d.markers.map(d.randomizer);
    d.measures = d.measures.map(d.randomizer);
    return d;
  }

  randomizer(d) {
    const k = d3.max(d.ranges) * .2;
    return () => Math.max(0, d + k * (Math.random() - .5));
  }

  ready(data, selector) {
    d3Bullet();
    const margin = { top: 15, right: 40, bottom: 20, left: 10 },
      width = this.device.width - margin.left - margin.right,
      height = 35;

    const chart = d3.bullet()
      .width(width)
      .height(height);

    const svg = d3.select(selector).selectAll('svg')
      .data(data)
      .enter().append('svg')
      .attr('class', 'bullet')
      .style('padding-top', 5)
      .style('margin-bottom', 5)
      .attr('width', width + margin.left + margin.right)
      .attr('height', '80px')
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
      .call(chart);

    const title = svg.append('g');

    title.append('text')
      .attr('class', 'title')
      .style('fill', 'azure')
      .text(function (d) { return d.title; });

    // title.append('text')
    //   .attr('class', 'subtitle')
    //   .style('fill', 'azure')
    //   .attr('dy', '1em')
    //   .text(function (d) { return d.subtitle; });

    d3.selectAll('button').on('click', function () {
      svg.datum(this.randomize).call(chart.duration(1000));
    });
  }

  constructor() { }

  ngOnInit() {
    this.dataSource.forEach(src => {
      // need to remove # from id in order to make this match skills obj props
      const matcher = src.selector.split('#')[1];
      this.skills[matcher] = true;
      this.ready(src.data, src.selector);      
    });
  }
 
}
