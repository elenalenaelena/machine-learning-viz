import { Component, ElementRef, Input, OnChanges, ViewChild, ViewEncapsulation, HostListener } from '@angular/core';
import * as d3 from 'd3';
import { EventModel } from 'src/app/models/event.model';

@Component({
  selector: 'app-bar-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnChanges {
  @ViewChild('chart')
  private chartContainer: ElementRef;

  @Input()
  data: EventModel[];

  margin = {top: 20, right: 20, bottom: 30, left: 40};

  constructor() { }

  ngOnChanges(): void {
    if (!this.data) { return; }
    this.createChart();
  }

  onResize(event) {
    this.createChart();
  }

  private createChart(): void {
    d3.select('svg').remove();

    const element = this.chartContainer.nativeElement;

    const svg = d3.select(element).append('svg')
        .attr('width', element.offsetWidth)
        .attr('height', element.offsetHeight);

    const contentWidth = element.offsetWidth - this.margin.left - this.margin.right;
    const contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom;

    const dataset = this.data;
  
    let nest = d3.nest()
      .key(function(d) { return d.language;  })
      .sortKeys(d3.ascending)
      .rollup(function(v) { return v.length; })
      .entries(dataset)

    console.log(JSON.stringify(nest));
 
    const xScale = d3
      .scaleOrdinal()
      .domain(nest.map(function(d) { return d.key; }));

    const yScale = d3       
      .scaleLinear()
      .domain([0, nest.map(function(d) { return d.length; })]);
   
    const g = svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + contentHeight + ')')
      .call(d3.axisBottom(xScale))
      .append('text')
        .attr('x', 6)
        .attr('dx', '0.71em')
        .attr('text-anchor', 'end')
        .text('language');

    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(yScale).ticks(10))
      .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('No. of Events');

    g.selectAll('.bar')
      .data(nest)
      .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => xScale(nest.language))
        .attr('y', d => yScale(nest.language.count))
        .attr('width', contentWidth)
        .attr('height', d => contentHeight - yScale(nest.language))
        .style('fill', "blue");
   
  }
}