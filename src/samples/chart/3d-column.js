export class BasicUse {
  constructor() {
    this.FruitsList = [{xName: 'Calcium', yName: 11, yName1: 6}, {xName: 'Phosphorus', yName: 20, yName1: 26}, {xName: 'Sodium', yName: 8, yName1: 7}, {xName: 'Magnesium', yName: 9, yName1: 32}, {xName: 'Manganese', yName: 8.5, yName1: 9.6}, {xName: 'Iron', yName: 6.3, yName1: 8.1}];
    this.commonSeriesOptions = {tooltip: {visible: true, format: '#point.x# :  #point.y#mg'}, type: 'column'};
    this.size = {width: '900px', height: '550px'};
    this.title = {text: 'Fruits Nutrients'};
    this.legend = {visible: true, position: 'top'};
    this.primaryXAxis = {valueType: 'category', labelFormat: 'MMM', title: {text: 'Minerals'}, majorGridLines: {visible: true, color: '#a9a9a9', opacity: 0.12}};
    this.primaryYAxis = {majorGridLines: {visible: true, color: '#a9a9a9', opacity: 0.12}};
  }
}
