export class BasicUse {
    constructor() {
      this.primaryXAxis = {majorGridLines: {visible: false}};
      this.primaryYAxis = {range: {min: 0, max: 50, interval: 10}};
      this.size = {height: '430px', width: '900px'};
      this.legend = {visible: false};
    }

    onchartload(sender) {
      if (!ej.util.isNullOrUndefined(window.orientation) && sender) {          //to modify chart properties for mobile view
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
      let chartobj = sender.detail;
      let num = 100;
      let data = [];
      let data1 = [];
      let i;
      let value = 10;
      let chartData = null;
      let chartData1 = null;
      let value1 = 15;
      for (i = 0; i < num; i++) {
        if (Math.random() > 0.5) {
          if (value < 45) {
            value += Math.random() * 2.0;
          } else {
            value -= 2.0;
          }
          if (value1 < 40) {
            value1 += Math.random() * 1.8;
          } else {
            value1 -= 2.0;
          }
        } else {
          if (value > 5) {
            value -= Math.random() * 2.0;
          } else {
            value += 2.0;
          }
          if (value1 > 5) {
            value1 -= Math.random() * 1.8;
          } else {
            value1 += 2.0;
          }
        }
        data[i] = {
          x: i.toString(), y: value
        };
        data1[i] = {
          x: i.toString(), y: value1 + 10
        };
      }
      chartData = data;
      chartData1 = data1;
      chartobj.model.series[0].points = chartData;
      chartobj.model.series[1].points = chartData1;

      setInterval((count) => {
        let chart = jQuery('#verticalchart').data('ejChart');
        if (Math.random() > 0.5) {
          if (value < 45) {
            value += Math.random() * 2.0;
          } else {
            value -= 2.0;
          }
          if (value1 < 40) {
            value1 += Math.random() * 1.8;
          } else {
            value1 -= 2.0;
          }
        } else {
          if (value > 5) {
            value -= Math.random() * 2.0;
          } else {
            value += 2.0;
          }
          if (value1 > 5) {
            value1 -= Math.random() * 1.8;
          } else {
            value1 += 2.0;
          }
        }
        chartData.push({ x: i.toString(), y: value });
        chartData1.push({ x: i.toString(), y: value1 + 10 });
        i++;
        chartData.shift();
        chartData1.shift();
        if (chart && chart.model) {
          chart.model.series[0].points = chartData;
          chart.model.series[1].points = chartData1;
          chart.redraw();
        }
      }, 200);
    }
}
