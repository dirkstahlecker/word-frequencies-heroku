import * as React from "react";
import {observable, runInAction, action} from "mobx";
import {observer} from "mobx-react";

export interface GraphPlaceProps
{
  // machine: GraphPlaceMachine;
}

export class GraphPlaceMachine
{

}

type d3Node = {
  id: string,
  group: number
};

type d3Link = {
  source: string,
  target: string,
  value: number
};

type Graph = {
  nodes: d3Node[],
  links: d3Link[]
};

@observer
export class GraphPlace extends React.Component<GraphPlaceProps>
{
  // private doThing(): void
  // {
  //   // set the dimensions and margins of the graph
  //   let margin = {top: 20, right: 20, bottom: 30, left: 40},
  //       width = 960 - margin.left - margin.right,
  //       height = 500 - margin.top - margin.bottom;
  //
  //   // set the ranges
  //   var x = d3.scaleBand()
  //             .range([0, width])
  //             .padding(0.1);
  //   var y = d3.scaleLinear()
  //             .range([height, 0]);
  //
  //   // append the svg object to the body of the page
  //   // append a 'group' element to 'svg'
  //   // moves the 'group' element to the top left margin
  //   var svg = d3.select("body").append("svg")
  //       .attr("width", width + margin.left + margin.right)
  //       .attr("height", height + margin.top + margin.bottom)
  //     .append("g")
  //       .attr("transform",
  //             "translate(" + margin.left + "," + margin.top + ")");
  //
  //   // get the data
  //   d3.csv("sales.csv", function(error, data) {
  //     if (error) throw error;
  //
  //     // format the data
  //     data.forEach(function(d) {
  //       d.sales = +d.sales;
  //     });
  //
  //     // Scale the range of the data in the domains
  //     x.domain(data.map(function(d) { return d.salesperson; }));
  //     y.domain([0, d3.max(data, function(d) { return d.sales; })]);
  //
  //     // append the rectangles for the bar chart
  //     svg.selectAll(".bar")
  //         .data(data)
  //       .enter().append("rect")
  //         .attr("class", "bar")
  //         .attr("x", function(d) { return x(d.salesperson); })
  //         .attr("width", x.bandwidth())
  //         .attr("y", function(d) { return y(d.sales); })
  //         .attr("height", function(d) { return height - y(d.sales); });
  //
  //     // add the x Axis
  //     svg.append("g")
  //         .attr("transform", "translate(0," + height + ")")
  //         .call(d3.axisBottom(x));
  //
  //     // add the y Axis
  //     svg.append("g")
  //         .call(d3.axisLeft(y));
  //
  //   });
  // }

  // private ref: SVGSVGElement;

  // componentDidMount()
  // {
  //   d3.select(this.ref)
  //   .append("circle")
  //   .attr("r", 5)
  //   .attr("cx", this.props.width / 2)
  //   .attr("cy", this.props.height / 2)
  //   .attr("fill", "red");
  // }

  render() {
    return null;
    // return (
    //   <svg className="container" ref={(ref: SVGSVGElement) => this.ref = ref}
    //     width={this.props.width} height={this.props.height}>
    //   </svg>
    // );
  }
}
