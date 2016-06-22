export class BasicUse {
  constructor() {
    this.Expenditure = [{xName: 'Housing', data: 'Housing', yName: 31}, {xName: 'Food', data: 'Food', yName: 16}, {xName: 'Transportation', data: 'Transportation', yName: 14}, {xName: 'Clothing', data: 'Clothing', yName: 6}, {xName: 'Health care', data: 'Health care', yName: 8}, {xName: 'Education', data: 'Education', yName: 17}, {xName: 'Miscellaneous', data: 'Miscellaneous', yName: 8}];
    this.commonSeriesOptions = {labelPosition: 'outside', tooltip: {visible: true, format: '#point.x# :  #point.y#%'}, marker: {dataLabel: {shape: 'none', visible: true, textPosition: 'top', border: {width: 1}, connectorLine: {height: 70, stroke: 'black'}, textMappingName: 'data'}}};
    this.size = {width: '900px', height: '550px'};
    this.title = {text: 'Expenditure shares on a child from birth through age 17'};
    this.seriesborder = { width: 2, color: 'white' };
  }
}
