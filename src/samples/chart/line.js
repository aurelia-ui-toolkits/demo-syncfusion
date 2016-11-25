export class BasicUse {
  constructor() {
    this.EfficiencyList = [{'Year': '2005', 'yName': 28, 'yName1': 31, 'yName2': 36, 'yName3': 39}, {'Year': '2006', 'yName': 25, 'yName1': 28, 'yName2': 32, 'yName3': 36}, {'Year': '2007', 'yName': 26, 'yName1': 30, 'yName2': 34, 'yName3': 40}, {'Year': '2008', 'yName': 27, 'yName1': 36, 'yName2': 41, 'yName3': 44}, {'Year': '2009', 'yName': 32, 'yName1': 36, 'yName2': 42, 'yName3': 45}, {'Year': '2010', 'yName': 35, 'yName1': 39, 'yName2': 42, 'yName3': 48}, {'Year': '2011', 'yName': 30, 'yName1': 37, 'yName2': 43, 'yName3': 46}];
    this.commonSeries = {type: 'line', enableAnimation: true, tooltip: {visible: true}, marker: {shape: 'circle', size: {height: 10, width: 10}, visible: true}, border: {width: 2}};
    this.size = {width: '900px', height: '550px'};
    this.title = {text: 'Efficiency of oil-fired power production'};
    this.primaryXAxis = {};
    this.primaryYAxis = {labelFormat: '{value}%', range: {min: 25, max: 50, interval: 5}};
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
