export class BasicUse {
  constructor() {
    this.SelfInsuredPlans = [{xName: 'All plans', yName: 36, yName1: 61}, {xName: 'HMO', yName: 18, yName1: 31}, {xName: 'PPO', yName: 59, yName1: 70}, {xName: 'POS', yName: 40, yName1: 31}, {xName: 'HDHP', yName: 60, yName1: 62}];
    this.commonSeriesOptions = {tooltip: { visible: true, format: '#point.x# : #point.y#%' } };
    this.size = {width: '900px', height: '550px'};
    this.title = {text: 'Employees In Self Insured Plans, 2013'};
    this.legend = {visible: true};
    this.primaryXAxis = {axisLine: {visible: false}, majorGridLines: {visible: true, color: '#a9a9a9', opacity: 0.12}};
    this.primaryYAxis = {title: {text: '% of Employees'}, majorGridLines: {visible: true, color: '#a9a9a9', opacity: 0.12}};
  }
}
