export class BasicUse {
  constructor() {
    this.primaryXAxis = {majorGridLines: {visible: false}, valueType: 'datetime', labelFormat: 'dd, hh:mm'};
    this.primaryYAxis = {range: {min: 1000, max: 1006, interval: 1}};
    this.size = {height: '550px', width: '900px'};
    this.legend = {visible: false};
  }

    onchartload(sender) {
      let chartobj; let i;
      let chart = $('#verticalchart').ejChart('instance');
      chart.count = 0;
      for (i = 0; i < 50; i = i + 1) {
        this.addpoint(sender.detail.model.series[0], 0, 1000);
        this.addpoint(sender.detail.model.series[1], 0, 1001);
      }
      setInterval(()=>{
        chartobj = chart;
        if (chartobj.model) {
          if (chartobj.model.series[0].points.length > 50) {
            chartobj.model.series[0].points.splice(0, 2);
            chartobj.model.series[1].points.splice(0, 2);
            chart.count += 2;
          }
          this.addpoint(chartobj.model.series[0], chart.count, 1000);
          this.addpoint(chartobj.model.series[1], chart.count, 1001);
          chartobj.model.colors = ['#E94649', '#F6B53F'];
          $('#verticalchart').ejChart('redraw');
        }
      }, 20);
    }

	addpoint(series, count, value) {
  if (series.points === undefined) {
    series.points = [];
  }
  series.points[series.points.length] = { x: new Date(1500, series.points.length + count, series.points.length + count), y: this.getRandomNum(value) };
}

    getRandomNum(value) {
      let value2 = 1002; let rand;
      if ( (Math.random() + value2) < 1004.85) {
        rand = Math.random();
        value += (rand + 2);
      } else {
        rand = Math.random(); value -= (rand + 2);
      }
      return value;
    }
}
