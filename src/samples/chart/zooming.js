export class BasicUse {
  constructor() {
    this.commonSeriesOptions = {enableAnimation: true, name: 'Server', type: 'line'};
    this.size = {width: '900px', height: '550px'};
    this.title = {text: 'Server CPU Load'};
    this.legend = {visible: true};
    this.zooming = {enable: true, type: 'x,y', enableMouseWheel: true, enableScrollbar: true};
    this.primaryXAxis = {valueType: 'datetime'};
    this.primaryYAxis = {labelFormat: '{value}%'};
  }
  onchartload(sender) {
    let data  =  this.getdata();
    sender.detail.model.series[0].dataSource  =  data.Open;
    sender.detail.model.series[0].xName =  'XValue';
    sender.detail.model.series[0].yName =  'YValue';
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

  getdata() {
    let series1  =  [];
    let value  =  100;
    let i;
    let point;
    let data;
    for (i  =  1; i < 250; i++) {
      if (Math.random() > 0.5) {
        value +=  Math.random();
      } else {
        value -=  Math.random();
      }
      point  = {XValue: new Date(1970,  i + 2,  i), YValue: value };
      series1.push(point);
    }
    data  = {Open: series1};
    return data;
  }
}
