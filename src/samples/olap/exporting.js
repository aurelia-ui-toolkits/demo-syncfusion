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
    this.textValue = 'Export';
  }
  btnExportClick(args) {
    let gridObj = $('.e-pivotgrid').data('ejPivotGrid');
    gridObj.exportPivotGrid('http://js.syncfusion.com/ExportingServices/api/JSPivotGridExport/Export');
  }
}
