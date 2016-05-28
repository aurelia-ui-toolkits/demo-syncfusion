export class BasicUse {
  constructor() {
    this.CountriesList = [{xName: 'USA', yName: 50, yName1: 70, yName2: 45}, {xName: 'China', yName: 40, yName1: 60, yName2: 55}, {xName: 'Japan', yName: 70, yName1: 60, yName2: 50}, {xName: 'Australia', yName: 60, yName1: 56, yName2: 40}, {xName: 'France', yName: 50, yName1: 45, yName2: 35}, {xName: 'Germany', yName: 40, yName1: 30, yName2: 22}, {xName: 'Italy', yName: 40, yName1: 35, yName2: 37}, {xName: 'Sweden', yName: 30, yName1: 25, yName2: 27}];
    this.commonSeriesOptions = {type: 'column', enableAnimation: true, tooltip: {visible: true, format: '#point.x# :  #point.y#'}};
    this.size = {width: '900px', height: '550px'};
    this.title = {text: 'Olympic Medals'};
    this.legend = {visible: true, position: 'top'};
    this.primaryXAxis = {title: {text: 'Countries'}};
    this.primaryYAxis = {range: {min: 0, max: 80, interval: 20}, title: {text: 'Medals'}};
  }
}
