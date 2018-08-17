import { SelfAssessmentComponent } from './../self-assessment/self-assessment.component';
import { Component, OnInit, Input } from '@angular/core';
import d3Bullet from './bullet.js';

/* imported via script tags due to typing and compatibility issues */
declare let d3: any;

@Component({
  selector: 'app-bullet-chart',
  templateUrl: './bullet-chart.component.html',
  styleUrls: ['./bullet-chart.component.scss']
})
export class BulletChartComponent implements OnInit {
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
    const margin = { top: 5, right: 40, bottom: 20, left: 300 },
      // width = this.device.width >= 960 ? 960 - margin.left - margin.right : this.device.width,
      width = 960 - margin.left - margin.right,
      height = 50 - margin.top - margin.bottom;

    const chart = d3.bullet()
      .width(width)
      .height(height);

    const svg = d3.select(selector).selectAll('svg')
      .data(data)
      .enter().append('svg')
      .attr('class', 'bullet')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
      .call(chart);

    const title = svg.append('g')
      .style('text-anchor', 'end')
      .attr('transform', 'translate(-6,' + height / 2 + ')');

    title.append('text')
      .attr('class', 'title')
      .text(function (d) { return d.title; });

    title.append('text')
      .attr('class', 'subtitle')
      .attr('dy', '1em')
      .text(function (d) { return d.subtitle; });

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
