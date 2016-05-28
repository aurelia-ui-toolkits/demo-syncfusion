export class BasicUse {
  constructor() {
    this.dataSource = this.getdata(new Date(2009, 0, 1), new Date(2010, 2, 1)).Open;
    this.legend = {visible: false};
    this.style = {borderWidth: 2};
    this.primaryXAxis = {crosshairLabel: {visible: true}};
    this.primaryYAxis = {crosshairLabel: {visible: true}, range: {min: 80, max: 130, interval: 10}};
    this.crosshair = {visible: true};
    this.tooltip = {format: '#point.x#  :  #point.y#'};
    this.selectedRangeSettings = {start: '2009/5/11', end: '2009/8/1'};
    this.scrollRangeSettings = {start: '2009/1/1', end: '2014/2/31'};
    this.sizeSettings = {width: '950', height: '120'};
    this.size = {width: '1000', height: '300'};
  }
  onScrollStart(sender) {
    $('#wait').ejWaitingPopup();
    $('#wait').ejWaitingPopup('show');
  }
  onScrollchange(sender) {
    let rangeobj = $('#navigator').data('ejRangeNavigator');
    if ((rangeobj.model.leftScrollbarClicked ||  rangeobj.model.rightScrollbarClicked) && Math.ceil(rangeobj.model.rectWidth) < 48) {
      $('#navigator').ejWaitingPopup();
      $('#navigator').ejWaitingPopup('hide');
    } else {
      $('#wait').ejWaitingPopup();
      $('#wait').ejWaitingPopup('show');
    }
  }
  onScrollbarChanged(sender) {
    let range = sender.detail;
    let startRange;
    let endRange;
    let data;
    $('#wait').ejWaitingPopup();
    $('#wait').ejWaitingPopup('hide');
    data = sender.detail.data;
    startRange = Date.parse(data.newRange.start);
    endRange = Date.parse(data.newRange.end);
    data = this.getdata(new Date(startRange), new Date(endRange));
    range.model.series[0].dataSource = data.Open;
    range.model.series[0].xName = 'XValue';
    range.model.series[0].yName = 'YValue';
    $('#navigator').ejRangeNavigator('redraw');
  }
  onchartloaded(sender) {
    let chartobj = $('#chart').data('ejChart');
    if (chartobj !== null) {
      chartobj.model.primaryXAxis.zoomPosition = sender.detail.zoomPosition;
      chartobj.model.primaryXAxis.zoomFactor = sender.detail.zoomFactor;
    }
    $('#chart').ejChart('redraw');
  }
  onchartload(sender) {
    let data = this.getdata(new Date(2009, 0, 1), new Date(2010, 2, 1));
    sender.detail.model.series[0].dataSource = data.Open;
    sender.detail.model.series[0].xName = 'XValue';
    sender.detail.model.series[0].yName = 'YValue';
  }
  getdata(start, end) {
    let series1 = [];
    let date;
    let data1;
    let value = 100;
    let i;
    let point1;
    for (i = 0; start <= end; i++) {
      date = Date.parse(start);
      if (Math.random() > 0.5) {
        value += Math.random();
      } else {
        value -= Math.random();
      }
      point1 = { XValue: new Date(date), YValue: value };
      start = new Date(start.setDate(start.getDate() + 1));
      series1.push(point1);
    }
    data1 = { Open: series1 };
    return data1;
  }
}
