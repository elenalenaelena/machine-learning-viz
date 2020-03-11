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

  margin = {top: 10, right: 10, bottom: 60, left: 60};

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
    console.log('contentHeigth: ' + contentHeight + ', contentWidth: ' + contentWidth)
 
    const xScale = d3
      .scaleBand()
      .range([0, contentWidth], .2)
      .padding(.4)
      .domain(nest.map(function(d) { return d.key; }));

    const yScale = d3       
      .scaleLinear()
      .range([0, contentHeight])
      .domain([2000,0]);
      
    const g = svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + contentHeight + ')')
      .call(d3.axisBottom(xScale))
      .append('text')   
        .attr('text-anchor', 'middle')
        .attr("transform", "translate("+ contentWidth/2 +", " + this.margin.bottom/2 + ")") 
        .style('fill', "#3d3d3d")
        .attr("font-size", "14pt")
        .text('language');

    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(yScale).ticks(10))
      .append('text')        
        .attr('text-anchor', 'middle')
        .attr('transform', "translate(" + this.margin.left/2 + "," + contentHeight/2 +")rotate(-90)")
        .style('fill', "#3d3d3d")
        .attr("font-size", "14pt")
        .text('no.of events');

    g.selectAll('.bar')
      .data(nest)
      .enter().append('rect')
        .attr('class', 'bar')   
        .attr("x", function(d) { console.log(d.key); return xScale(d.key); }) 
        .attr("y", function(d) { console.log(yScale(d.value)); return yScale(d.value); })
        .attr("width", xScale.bandwidth())
        .attr("height", function(d) { return contentHeight - yScale(d.value); })
        .style('fill', '#0097a7' )
        .on("mouseover", function() {
          d3.select(this).style('fill', '#56c8d8' )
        })
        .on("mouseout", function() {
            d3.select(this).style('fill', '#0097a7' )
         });
  }
}