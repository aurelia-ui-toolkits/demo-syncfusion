export class BasicUse {
  constructor() {
    this.ExpendituresList = [{xName: 'Other Personnal', yName: 94658, text: 'Other Personal,  88.47%'}, {xName: 'Medical care', yName: 9090, text: 'Medical care,  8.49%'}, {xName: 'Housing', yName: 2577, text: 'Housing,  2.40%'}, {xName: 'Transportation', yName: 473, text: 'Transportation,  0.44%'}, {xName: 'Education', yName: 120, text: 'Education,  0.11%'}, {xName: 'Electronics', yName: 70, text: 'Electronics,  0.06%'}];
    this.commonSeriesOptions = {marker: {dataLabel: {visible: true, shape: 'none', textMappingName: 'text', connectorLine: {type: 'bezier', color: 'black'}, font: {size: '14px'}}}, border: {width: 2, color: 'white'}, name: 'Expenses', type: 'pie', enableAnimation: true, labelPosition: 'outsideExtended', enableSmartLabels: true, startAngle: 145};
    this.size = {width: '900px', height: '550px'};
    this.title = {text: 'Expenditures'};
    this.legend = {visible: false};
  }
  onchartload(sender) {
    if (!ej.util.isNullOrUndefined(window.orientation) && sender) {            //to modify chart properties for mobile view
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
