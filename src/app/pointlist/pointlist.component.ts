import { Component, ElementRef, Input, OnInit, OnChanges, ViewChild, ViewEncapsulation, HostListener} from '@angular/core';
import * as d3 from 'd3';
import * as tf from '@tensorflow/tfjs';
import { ZooModel } from 'src/app/data/zoo.model';

@Component({
  selector: 'app-pointlist',
  templateUrl: './pointlist.component.html',
  styleUrls: ['./pointlist.component.css']
})
export class PointlistComponent implements OnInit, OnChanges {

  linearModel: tf.Sequential;
  prediction: any;

  @ViewChild('pointlist')
  private listContainer: ElementRef;

  @Input()
  data: ZooModel[];
  margin = {top: 20, right: 20, bottom: 30, left: 40};
  
  constructor() { }

  ngOnInit(): void {
    //called One after OnChanges(), that's where the heavy initialization logic belongs. 

    this.train();
  }

  ngOnChanges(): void {
    if (!this.data) { return; }
    this.createPointlist();
  }

  onResize(event) {
    this.createPointlist();
  }

  private createPointlist(): void {

    d3.select('svg').remove();

    const element = this.listContainer.nativeElement;   
    const data = this.data;

    const svg = d3.select(element).append('svg')
        .attr('width', element.offsetWidth)
        .attr('height', element.offsetHeight);

    const contentWidth = element.offsetWidth - this.margin.left - this.margin.right;
    const contentHeight = element.offsetHeight - this.margin.top - this.margin.bottom;
 
    const x = d3
      .scaleBand()
      .rangeRound([0, contentWidth])
      .padding(0.1)
      .domain(data.map(d => d.class_type));

    const y = d3
      .scaleLinear()
      .rangeRound([contentHeight, 0])
      .domain([0, d3.max(data, d => d.legs)]);

    let myColor = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.legs)])
      .range(["red", "blue"])
   
    const g = svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + contentHeight + ')')
      .call(d3.axisBottom(x))
      .append('text')
        .attr('x', 6)
        .attr('dx', '0.71em')
        .attr('text-anchor', 'end')
        .text('Animal Class');

    g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3.axisLeft(y).ticks(5))
      .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Legs');

    g.selectAll('.circle')
      .data(data)
      .enter().append('circle')
        .attr('class', 'circle')
        .attr('cx', function(d) {
          let xval = x(d.class_type)
          xval += 15
          return xval         
      })
        .attr('cy', d => y(d.legs))
        .attr('r', 5)
        .attr("fill", function(d){return myColor(d.legs) })
        .on("mouseover", d=> function() {
          d3.select(this)
              .attr("fill", "red");
              console.log(d.animal_name)
        })
        .on("mouseout", function(d) {
            d3.select(this).attr("fill", function() {
                return "" + myColor(d.legs) + "";
            });
        });
  }

  async train() {
     // Define a model for linear regression.
     this.linearModel = tf.sequential();
     this.linearModel.add(tf.layers.dense({units: 1, inputShape: [1]}));
 
     // Prepare the model for training: Specify the loss and the optimizer.
     this.linearModel.compile({loss: 'meanSquaredError', optimizer: 'sgd'}); 
 
     // Training data, completely random stuff
     const xs = tf.tensor1d([3.2, 4.4, 5.5]);
     const ys = tf.tensor1d([1.6, 2.7, 3.5]);
 
 
     // Train
     await this.linearModel.fit(xs, ys)
 
     console.log('model trained!')
  }

  predict(val: number) {
    const output = this.linearModel.predict(tf.tensor2d([val], [1, 1])) as any;
    this.prediction = Array.from(output.dataSync())[0]
  }

}
