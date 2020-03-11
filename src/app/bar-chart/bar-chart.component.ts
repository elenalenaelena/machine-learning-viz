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

    // define our svg which is used as chart container
    const svg = d3.select(element).append('svg')
        .attr('width', element.offsetWidth)
        .attr('height', element.offsetHeight);

    // calculate width, height and margins for the bar chart inside the svg container
    const contentWidth = element.offsetWidth - this.margin.left - this.margin.right;
    const contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom;

    // load data
    const dataset = this.data;
  
    // group data (key: language; value: number of items in each group)
    let nest = d3.nest()
      .key(function(d) { return d.language;  })
      .sortKeys(d3.ascending)
      .rollup(function(v) { return v.length; })
      .entries(dataset)

    // for the sake of curiosity: log grouping result and some calculated numbers
    console.log(JSON.stringify(nest));
    console.log('contentHeigth: ' + contentHeight + ', contentWidth: ' + contentWidth)
 
    // define x scale parameters
    const xScale = d3
      .scaleBand()
      .range([0, contentWidth], .2)
      .padding(.4)
      .domain(nest.map(function(d) { return d.key; }));

    // define y scale parameters
    const yScale = d3       
      .scaleLinear()
      .range([0, contentHeight])
      .domain([2000,0]);
      
    // add chart path
    const g = svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    // add x axis using x scale parameters
    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + contentHeight + ')')
      .call(d3.axisBottom(xScale).tickSizeOuter(0)); 

    // add labeled y axis using y scale paramters
    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(yScale).ticks(10))
      .append('text')        
        .attr('text-anchor', 'end')
        .attr('transform', "translate(" + this.margin.left/2 + ", 0 )rotate(-90)")
        .style('fill', "#3d3d3d")
        .attr("font-size", "12pt")
        .text('no.of events')

    // ...and finally add bars to the chart!
    g.selectAll('.bar')
      .data(nest) // use grouped data as input
      .enter().append('rect')
        .attr('class', 'bar')   
        .attr("x", d => xScale(d.key))        // x values
        .attr("y", d => yScale(d.value))      // y values
        .attr("width", xScale.bandwidth())    // bar width
        .attr("height", function(d) { return contentHeight - yScale(d.value); })  // bar height
        .style('fill', '#0097a7' )          
        // mouseover events for some basic interactivity
        .on("mouseover", function() {
          d3.select(this).style('fill', '#56c8d8' )
        })
        .on("mouseout", function() {
            d3.select(this).style('fill', '#0097a7' )
         });
  }
}