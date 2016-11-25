export class BasicUse {
  constructor() {
    this.primaryXAxis = {range: {min: 60, max: 100, interval: 5}};
    this.primaryYAxis = {range: {min: -2, max: 16, interval: 2}};
    this.series = [{points: [{x: 92.2, y: 7.8, size: 1.347, fill: '#E94649', text: 'China'}, {x: 74, y: 6.5, size: 1.241, fill: '#F6B53F', text: 'India'}, {x: 90.4, y: 6.0, size: 0.238, fill: '#6FAAB0', text: 'Indonesia'}, {x: 99.4, y: 2.2, size: 0.312, fill: '#C4C24A', text: 'US'}, {x: 88.6, y: 1.3, size: 0.197, fill: '#FB954F', text: 'Brazil'}, {x: 54.9, y: 3.7, size: 0.177, fill: '#D9CEB2', text: 'Pakistan'}, {x: 99, y: 0.7, size: 0.0818, fill: '#FF8D8D', text: 'Germany'}, {x: 72, y: 2.0, size: 0.0826, fill: '#69D2E7', text: 'Egypt'}, {x: 99.6, y: 3.4, size: 0.143, fill: '#E27F2D', text: 'Russia'}, {x: 99, y: 0.2, size: 0.128, fill: '#6A4B82', text: 'Japan'}, {x: 86.1, y: 4.0, size: 0.115, fill: '#F6B53F', text: 'Mexico'}, {x: 92.6, y: 6.6, size: 0.096, fill: '#C4C24A', text: 'Philippines'}, {x: 61.3, y: 14.5, size: 0.162, fill: '#FF8D8D', text: 'Nigeria'}, {x: 56.8, y: 6.1, size: 0.151, fill: '#69D2E7', text: 'Bangladesh'}], enableAnimation: true, tooltip: {visible: true, format: '#point.text#<br/>Literacy Rate :  #point.x#%<br/>GDP Annual Growth Rate :  #point.y#<br/>Population :  #point.size# Billion'}, name: 'pound', type: 'bubble', opacity: 0.7}];
    this.size = {width: '900px', height: '550px'};
    this.title = {text: 'World Countries Details'};
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
