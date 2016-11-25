export class BasicUse {
  constructor() {
    this.FruitsList = [{xName: 'Calcium', yName: 11, yName1: 6}, {xName: 'Iron', yName: 20, yName1: 26}, {xName: 'Sodium', yName: 8, yName1: 7}];
    this.commonSeriesOptions = {tooltip: {visible: true, format: '#point.x# :  #point.y#mg'}, type: 'column'};
    this.size = {width: '900px', height: '550px'};
    this.title = {text: 'Fruits Nutrients'};
    this.legend = {visible: true, position: 'top'};
    this.primaryXAxis = {valueType: 'category', labelFormat: 'MMM', majorGridLines: {visible: true, color: '#a9a9a9', opacity: 0.12}};
    this.primaryYAxis = {majorGridLines: {visible: true, color: '#a9a9a9', opacity: 0.12}};
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
