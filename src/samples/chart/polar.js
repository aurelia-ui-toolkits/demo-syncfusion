export class BasicUse {
  constructor() {
    this.dataList = [{xName: 'North', yName: 42, yName1: 63, yName2: 80}, {xName: 'NorthEast', yName: 28, yName1: 73, yName2: 88}, {xName: 'East', yName: 40, yName1: 58, yName2: 79}, {xName: 'SouthEast', yName: 45, yName1: 65, yName2: 83}, {xName: 'South', yName: 20, yName1: 47, yName2: 78}, {xName: 'SouthWest', yName: 40, yName1: 70, yName2: 90}, {xName: 'West', yName: 25, yName1: 45, yName2: 78}, {xName: 'NorthWest', yName: 40, yName1: 70, yName2: 85}];
    this.commonSeriesOptions = {type: 'polar', enableAnimation: true, tooltip: {visible: true}};
    this.size = {width: '900px', height: '550px'};
    this.legend = {visible: true};
    this.marker = {visible: true};
    this.primaryYAxis = {range: {min: 15, max: 90, interval: 15}};
  }
}
