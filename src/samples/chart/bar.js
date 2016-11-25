export class BasicUse {
  constructor() {
    this.UnemploymentList = [{xName: 2006, yName: 7.8, yName1: 4.8}, {xName: 2007, yName: 7.2, yName1: 4.6}, {xName: 2008, yName: 6.8, yName1: 7.2}, {xName: 2009, yName: 10.7, yName1: 9.3}, {xName: 2010, yName: 10.8, yName1: 9.7}, {xName: 2011, yName: 9.8, yName1: 9}];
    this.commonSeriesOptions = {type: 'bar', enableAnimation: true, tooltip: {visible: true, format: '#point.x# :  #point.y#'}, marker: {dataLabel: {font: {size: '13px', fontFamily: 'Segoe UI', fontStyle: 'Normal', fontWeight: 'regular'}, textPosition: 'top', angle: -45, visible: true}}};
    this.size = {width: '900px', height: '500px'};
    this.title = {text: 'Unemployment rate (%)'};
    this.legend = {visible: true, position: 'right', alignment: 'near'};
    this.primaryXAxis = {range: {min: 2005, max: 2012, interval: 1}};
    this.primaryYAxis = {range: {min: 3, max: 12, interval: 1}, labelFormat: '{value}%'};
  }
  onchartload(sender) {
    if (!ej.util.isNullOrUndefined(window.orientation) && sender) {          //to modify chart properties for mobile view
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
