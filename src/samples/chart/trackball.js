export class BasicUse {
  constructor() {
    this.AverageSales = [{xName: 10, yName: 30, yName1: 54, yName2: 76, yName3: 98, yName4: 116}, {xName: 20, yName: 35, yName1: 45, yName2: 70, yName3: 90, yName4: 110}, {xName: 30, yName: 40, yName1: 43, yName2: 63, yName3: 83, yName4: 100}, {xName: 40, yName: 36, yName1: 50, yName2: 72, yName3: 90, yName4: 102}, {xName: 50, yName: 28, yName1: 54, yName2: 77, yName3: 86, yName4: 97}, {xName: 60, yName: 33, yName1: 56, yName2: 79, yName3: 84, yName4: 89}, {xName: 70, yName: 39, yName1: 60, yName2: 72, yName3: 106, yName4: 88}, {xName: 80, yName: 38, yName1: 63, yName2: 68, yName3: 99, yName4: 90}, {xName: 90, yName: 34, yName1: 69, yName2: 78, yName3: 110, yName4: 88}, {xName: 100, yName: 46, yName1: 70, yName2: 65, yName3: 102, yName4: 75}, {xName: 110, yName: 54, yName1: 72, yName2: 81, yName3: 90, yName4: 63}, {xName: 120, yName: 65, yName1: 75, yName2: 80, yName3: 85, yName4: 70}, {xName: 130, yName: 39, yName1: 75, yName2: 94, yName3: 110, yName4: 55}];
    this.commonSeriesOptions = {type: 'line', enableAnimation: true, tooltip: {visible: true}, marker: {shape: 'circle', size: {height: 10, width: 10}, visible: true}};
    this.primaryXAxis = {axisLine: {visible: false}, majorGridLines: {visible: false}};
    this.primaryYAxis = {labelFormat: '{value}K', majorTickLines: {visible: false}, range: {min: 20, max: 120, interval: 20}, axisLine: {visible: false}};
    this.crosshair = {visible: true, type: 'trackball'};
    this.size = {width: '900px', height: '550px'};
    this.title = {text: 'Web Site Visitor'};
    this.legend = {visible: true};
  }
  onchartload(sender) {
    if (!ej.util.isNullOrUndefined(window.orientation) && sender) {             //to modify chart properties for mobile view
      let model = sender.detail.model;
      let seriesLength = model.series.length;
      model.title.enableTrim = true;
      model.elementSpacing = 5;
      model.legend.visible = false;
      model.size.height = null;
      model.size.width = null;
      for (let i = 0; i < seriesLength; i++) {
        if (!model.series[i].marker) {
          model.series[i].marker = {};
        }
        if (!model.series[i].marker.size) {
          model.series[i].marker.size = {};
        }
        model.series[i].marker.size.width = 6;
        model.series[i].marker.size.height = 6;
      }
      if (model.primaryXAxis.title) {
        model.primaryXAxis.title.text = '';
      }
      if (model.primaryYAxis.title) {
        model.primaryYAxis.title.text = '';
      }
      model.primaryXAxis.labelIntersectAction = 'rotate45';
      model.primaryXAxis.edgeLabelPlacement = 'hide';
      model.primaryYAxis.labelIntersectAction = 'rotate45';
      model.primaryYAxis.edgeLabelPlacement = 'hide';
      if (model.axes) {
        for (let j = 0; j < model.axes.length; j++) {
          model.axes[j].labelIntersectAction = 'rotate45';
          if (model.axes[j].title) {
            model.axes[j].title.text = '';
          }
          model.axes[j].edgeLabelPlacement = 'hide';
        }
      }
    }
  }
}
