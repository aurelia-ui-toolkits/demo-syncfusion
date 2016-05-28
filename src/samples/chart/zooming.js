export class BasicUse {
  constructor() {
    this.commonSeriesOptions = {enableAnimation: true, name: 'Server', type: 'line'};
    this.size = {width: '900px', height: '550px'};
    this.title = {text: 'Server CPU Load'};
    this.legend = {visible: true};
    this.zooming = {enable: true, type: 'x, y', enableMouseWheel: true, enableScrollbar: true};
    this.primaryXAxis = {title: {text: 'Date'}, valueType: 'datetime'};
    this.primaryYAxis = {title: {text: 'CPU Load'}, labelFormat: '{value}%'};
  }
  onchartload(sender) {
    let data  =  this.getdata();
    sender.detail.model.series[0].dataSource  =  data.Open;
    sender.detail.model.series[0].xName =  'XValue';
    sender.detail.model.series[0].yName =  'YValue';
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
