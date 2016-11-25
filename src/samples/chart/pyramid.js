export class BasicUse {
 constructor() {
   this.WebSiteVisitor = [{xName: 'Renewed', yName: 18.2}, {xName: 'Subscribe', yName: 27.3}, {xName: 'Support', yName: 55.9}, {xName: 'Downloaded', yName: 76.8}, {xName: 'Visited', yName: 100}];
   this.commonSeriesOptions = {type: 'pyramid', enableAnimation: true, tooltip: {visible: true}, marker: {dataLabel: {visible: true, shape: 'none', font: {color: 'black', size: '12px', fontWeight: 'lighter'}}}};
   this.size = {width: '900px', height: '550px'};
   this.title = {text: 'Web Site Visitor'};
   this.legend = {visible: true};
 }
 onchartload(sender) {
   if (!ej.util.isNullOrUndefined(window.orientation) && sender) {           //to modify chart properties for mobile view
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
