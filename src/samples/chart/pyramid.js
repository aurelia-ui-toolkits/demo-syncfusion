export class BasicUse {
  constructor() {
    this.WebSiteVisitor = [{xName: 'Renewed', yName: 18.2}, {xName: 'Subscribe', yName: 27.3}, {xName: 'Support', yName: 55.9}, {xName: 'Downloaded', yName: 76.8}, {xName: 'Visited', yName: 100}];
    this.commonSeriesOptions = {type: 'pyramid', enableAnimation: true, tooltip: {visible: true}, marker: {dataLabel: {visible: true, shape: 'none', font: {color: 'black', size: '12px', fontWeight: 'lighter'}}}};
    this.size = {width: '900px', height: '600px'};
    this.title = {text: 'Web Site Visitor'};
    this.legend = {visible: true};
  }
}
