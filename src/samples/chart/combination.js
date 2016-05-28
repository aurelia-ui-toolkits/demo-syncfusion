export class BasicUse {
  constructor() {
    this.data = [{xName: 'Jan', yName: 45, yName1: 10}, {xName: 'Feb', yName: 100, yName1: 30}, {xName: 'March', yName: 25, yName1: 10}, {xName: 'April', yName: 100, yName1: 70}, {xName: 'May', yName: 85, yName1: 50}, {xName: 'June', yName: 140, yName1: 140}];
    this.commonSeriesOptions = {tooltip: {visible: true}};
    this.primaryXAxis = {title: {text: 'Month'}};
    this.primaryYAxis = {title: {text: 'Unit Sold'}};
    this.tooltip = {format: '#point.x# <br/> Unit Sold :  #point.y# <br/>'};
    this.tooltip1 = {format: '#point.x# <br/> Profit :  #point.y# <br/>'};
    this.marker = {shape: 'circle', size: {height: 8, width: 8}, visible: true};
    this.border = {width: 2};
    this.size = {width: '900px', height: '550px'};
    this.title = {text: 'Sales Report '};
    this.legend = {visible: true, font: {size: '15px'}, shape: 'seriesType', position: 'Top', itemStyle: {width: 15, height: 15}};
  }
}
