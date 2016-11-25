export class BasicUse {
  constructor() {
    this.dataSource = this.getdata().Open;
    this.legend = {visible: false};
    this.style =  {borderWidth: 2 };
    this.crosshair = {visible: true, type: 'trackball', marker: {shape: 'circle', size: {height: 9, width: 9}, visible: true, border: {width: 1}}, line: {color: 'transparent'}};
    this.tooltip = {visible: true, format: '#point.x#  :  ej.format(#point.y#,n2)'};
    this.selectedRangeSettings = {start: '100', end: '250'};
    this.sizeSettings = {width: '950', height: '100'};
    this.size = {width: '1000', height: '300'};
  }

  onchartloaded(sender) {
    let chartobj = $('#chart').data('ejChart');
    if (chartobj) {
      chartobj.model.primaryXAxis.zoomPosition = sender.detail.zoomPosition;
      chartobj.model.primaryXAxis.zoomFactor = sender.detail.zoomFactor;
      $('#chart').ejChart('redraw');
    }
  }
  onchartload(sender) {
    let data = this.getdata();
    sender.detail.model.series[0].dataSource = data.Open;
    sender.detail.model.series[0].xName = 'XValue';
    sender.detail.model.series[0].yName = 'YValue';
    sender.detail.model.series[1].dataSource = data.Close;
    sender.detail.model.series[1].xName = 'XValue';
    sender.detail.model.series[1].yName = 'YValue';
    if (!ej.util.isNullOrUndefined(window.orientation)) {            //to modify chart properties for mobile view
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
      model.primaryXAxis.labelIntersectAction = 'rotate45';
      model.primaryXAxis.title.text = '';
      model.primaryXAxis.edgeLabelPlacement = 'hide';
      model.primaryYAxis.labelIntersectAction = 'rotate45';
      model.primaryYAxis.title.text = '';
      model.primaryYAxis.edgeLabelPlacement = 'hide';
      if (model.axes) {
        for (let j = 0; j < model.axes.length; j++) {
          model.axes[j].labelIntersectAction = 'rotate45';
          model.axes[j].title.text = '';
          model.axes[j].edgeLabelPlacement = 'hide';
        }
      }
    }
  }

  getdata() {
    let series1 = [];
    let series2 = [];
    let data;
    let value = 100;
    let value1 = 120;
    let point1;
    let point2;
    for (let i = 0; i < 351; i++) {
      if (Math.random() > 0.5) {
        value += Math.random();
        value1 += Math.random();
      } else {
        value -= Math.random();
        value1 -= Math.random();
      }
      point1 = { XValue: i, YValue: value };
      point2 = { XValue: i, YValue: value1 };
      series1.push(point1);
      series2.push(point2);
    }
    data = { Open: series1, Close: series2 };
    return data;
  }
}
