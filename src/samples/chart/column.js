export class BasicUse {
  constructor() {
    this.CountriesList = [{xName: 'USA', yName: 50, yName1: 70, yName2: 45}, {xName: 'China', yName: 40, yName1: 60, yName2: 55}, {xName: 'Japan', yName: 70, yName1: 60, yName2: 50}];
    this.commonSeriesOptions = {type: 'column', enableAnimation: true, tooltip: {visible: true, format: '#point.x# :  #point.y#'}};
    this.size = {width: '900px', height: '550px'};
    this.title = {text: 'Olympic Medals'};
    this.legend = {visible: true, position: 'top'};
    this.primaryXAxis = {tickLinesPosition: 'inside', labelIntersectAction: 'hide'};
    this.primaryYAxis = {range: {min: 0, max: 80, interval: 20}};
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
