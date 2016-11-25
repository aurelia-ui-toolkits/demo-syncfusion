export class BasicUse {
  constructor() {
    this.data = [{xName: 'Jan', yName: 45, yName1: 10}, {xName: 'Feb', yName: 100, yName1: 30}, {xName: 'March', yName: 25, yName1: 10}, {xName: 'April', yName: 100, yName1: 70}, {xName: 'May', yName: 85, yName1: 50}, {xName: 'June', yName: 140, yName1: 140}];
    this.commonSeriesOptions = {tooltip: {visible: true}};
    this.tooltip = {format: '#point.x# <br/> Unit Sold :  #point.y# <br/>'};
    this.tooltip1 = {format: '#point.x# <br/> Profit :  #point.y# <br/>'};
    this.marker = {shape: 'circle', size: {height: 8, width: 8}, visible: true};
    this.border = {width: 2};
    this.size = {width: '900px', height: '550px'};
    this.title = {text: 'Sales Report '};
    this.legend = {visible: true, font: {size: '15px'}, shape: 'seriesType', position: 'Top', itemStyle: {width: 15, height: 15}};
  }
  onchartload(sender) {
    if (!ej.util.isNullOrUndefined(window.orientation) && sender) {            //to modify chart properties for mobile view
      let model = sender.detail.model;
      seriesLength = model.series.length;
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
