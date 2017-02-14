export class BasicUse {
  constructor() {
    this.pivotData = {
      data: 'http://bi.syncfusion.com/olap/msmdpump.dll', //data
      catalog: 'Adventure Works DW 2008 SE',
      cube: 'Adventure Works',
      rows: [
        {
          fieldName: '[Date].[Fiscal]'
        }
      ],
      columns: [
        {
          fieldName: '[Customer].[Customer Geography]'
        }
      ],
      values: [
        {
          measures: [
            {
              fieldName: '[Measures].[Internet Sales Amount]'
            }
          ],
          axis: 'columns'
        }
      ]
    };
    this.commonSeries = {
      enableAnimation: true,
      type: 'column'
    };
    this.zooming = {enableScrollbar: true};
    this.loadTheme = 'loadTheme';
    this.primaryYAxis = {title: {text: 'Customer Count'}};
    this.size = {height: '460px', width: '950px'};
    this.legend = {visible: true, rowCount: 2 };
  }
}
