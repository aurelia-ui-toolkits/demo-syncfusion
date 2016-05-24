export class BasicUse {
  constructor() {
    this.AverageSales = [{xName: 10, yName: 30, yName1: 54, yName2: 76, yName3: 98, yName4: 116}, {xName: 20, yName: 35, yName1: 45, yName2: 70, yName3: 90, yName4: 110}, {xName: 30, yName: 40, yName1: 43, yName2: 63, yName3: 83, yName4: 100}, {xName: 40, yName: 36, yName1: 50, yName2: 72, yName3: 90, yName4: 102}, {xName: 50, yName: 28, yName1: 54, yName2: 77, yName3: 86, yName4: 97}, {xName: 60, yName: 33, yName1: 56, yName2: 79, yName3: 84, yName4: 89}, {xName: 70, yName: 39, yName1: 60, yName2: 72, yName3: 106, yName4: 88}, {xName: 80, yName: 38, yName1: 63, yName2: 68, yName3: 99, yName4: 90}, {xName: 90, yName: 34, yName1: 69, yName2: 78, yName3: 110, yName4: 88}, {xName: 100, yName: 46, yName1: 70, yName2: 65, yName3: 102, yName4: 75}, {xName: 110, yName: 54, yName1: 72, yName2: 81, yName3: 90, yName4: 63}, {xName: 120, yName: 65, yName1: 75, yName2: 80, yName3: 85, yName4: 70}, {xName: 130, yName: 39, yName1: 75, yName2: 94, yName3: 110, yName4: 55}];
    this.commonSeriesOptions = {type: 'line', enableAnimation: true, tooltip: {visible: true}, marker: {shape: 'circle', size: {height: 10, width: 10}, visible: true}};
    this.primaryXAxis = {title: {text: 'Year'}, axisLine: {visible: false}, majorGridLines: {visible: false}};
    this.primaryYAxis = {title: {text: 'Revenue'}, labelFormat: '{value}K', majorTickLines: {visible: false}, range: {min: 20, max: 120, interval: 20}, axisLine: {visible: false}};
    this.crosshair = {visible: true, type: 'trackball'};
    this.size = {width: '900px', height: '600px'};
    this.title = {text: 'Web Site Visitor'};
    this.legend = {visible: true};
  }
}
