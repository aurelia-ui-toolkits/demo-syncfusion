export class BasicUse {
  constructor() {
    this.UnemploymentList = [{xName: 2006, yName: 7.8, yName1: 4.8}, {xName: 2007, yName: 7.2, yName1: 4.6}, {xName: 2008, yName: 6.8, yName1: 7.2}, {xName: 2009, yName: 10.7, yName1: 9.3}, {xName: 2010, yName: 10.8, yName1: 9.7}, {xName: 2011, yName: 9.8, yName1: 9}];
    this.commonSeriesOptions = {type: 'bar', enableAnimation: true, tooltip: {visible: true, format: '#series.name# <br/> #point.x# :  #point.y#'}, marker: {dataLabel: {font: {size: '13px', fontFamily: 'Segoe UI', fontStyle: 'Normal', fontWeight: 'regular'}, textPosition: 'top', angle: -45, visible: true}}};
    this.size = {width: '900px', height: '600px'};
    this.title = {text: 'Unemployment rate (%)'};
    this.legend = {visible: true, position: 'right', alignment: 'near'};
    this.primaryXAxis = {title: {text: 'Year'}, range: {min: 2005, max: 2012, interval: 1}};
    this.primaryYAxis = {range: {min: 3, max: 12, interval: 1}, labelFormat: '{value}%', title: {text: 'Percentage'}};
  }
}
