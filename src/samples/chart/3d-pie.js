export class BasicUse {
  constructor() {
    this.Expenditure = [{xName: 'Housing', data: 'Housing', yName: 31}, {xName: 'Food', data: 'Food', yName: 16}, {xName: 'Transportation', data: 'Transportation', yName: 14}, {xName: 'Clothing', data: 'Clothing', yName: 6}, {xName: 'Health care', data: 'Health care', yName: 8}, {xName: 'Education', data: 'Education', yName: 17}, {xName: 'Miscellaneous', data: 'Miscellaneous', yName: 8}];
    this.commonSeriesOptions = {labelPosition: 'outside', tooltip: {visible: true, format: '#point.x# :  #point.y#%'}, marker: {dataLabel: {shape: 'none', visible: true, textPosition: 'top', border: {width: 1}, connectorLine: {height: 70, stroke: 'black'}, textMappingName: 'data'}}};
    this.size = {width: '900px', height: '550px'};
    this.title = {text: 'Expenditure shares on a child from birth through age 17'};
    this.seriesborder = { width: 2, color: 'white' };
  }
  onchartload(sender) {
    if (!ej.util.isNullOrUndefined(window.orientation) && sender) {
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
