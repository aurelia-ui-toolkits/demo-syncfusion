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
    this.olapSettings = {
      showKpi: false, showNamedSets: true
    };
  }
  renderFieldList(args) {
    let PivotSchemaDesigner = $('.e-pivotschemadesigner').data('ejPivotSchemaDesigner');

    if (PivotSchemaDesigner.model.pivotControl === null) {
      PivotSchemaDesigner.model.pivotControl = args.detail;
      PivotSchemaDesigner.model.layout = 'excel';
      PivotSchemaDesigner.model.olap = {showKpi: false, showNamedSets: true};
      PivotSchemaDesigner.model.enableWrapper = true;
      PivotSchemaDesigner._load();
    }
  }
}
