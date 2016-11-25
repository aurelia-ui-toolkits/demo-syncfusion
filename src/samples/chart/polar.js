export class BasicUse {
  constructor() {
    this.dataList = [{xName: 'N', yName: 42, yName1: 63, yName2: 80}, {xName: 'NE', yName: 28, yName1: 73, yName2: 88}, {xName: 'E', yName: 40, yName1: 58, yName2: 79}, {xName: 'SE', yName: 45, yName1: 65, yName2: 83}, {xName: 'S', yName: 20, yName1: 47, yName2: 78}, {xName: 'SW', yName: 40, yName1: 70, yName2: 90}, {xName: 'W', yName: 25, yName1: 45, yName2: 78}, {xName: 'NW', yName: 40, yName1: 70, yName2: 85}];
    this.commonSeriesOptions = {type: 'polar', enableAnimation: true, tooltip: {visible: true}};
    this.size = {width: '900px', height: '550px'};
    this.legend = {visible: true};
    this.marker = {visible: true};
    this.primaryYAxis = {range: {min: 15, max: 90, interval: 15}};
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
