import '../scripts/xljsondata.js';
export class Pivot {
  constructor() {
    this.scroll = { height: '100%', width: '100%', isResponsive: 'true' };
    this.range = [{ dataSource: window.pivotData, showHeader: 'true', startCell: 'A1'}];
    this.import = {importMapper: 'http://js.syncfusion.com/ExportingServices/api/JSXLExport/Import'};
    this.export = { excelUrl: 'http://js.syncfusion.com/ExportingServices/api/JSXLExport/ExportToExcel',
                    csvUrl: 'http://js.syncfusion.com/ExportingServices/api/JSXLExport/ExportToCsv',
					          pdfUrl: 'http://js.syncfusion.com/ExportingServices/api/JSXLExport/ExportToPdf'};
  }
  loadcomplete(args) {
    const xlObj = $('#Spreadsheet1').ejSpreadsheet('instance');
    if (!xlObj.isImport) {
      const settings = {
        rows: [{ fieldName: 'Country'}, { fieldName: 'State'}],
        columns: [{ fieldName: 'Product'}],
        values: [{ fieldName: 'Amount' }, { fieldName: 'Quantity'}],
        filters: [{ fieldName: 'Date' }]
      };
      xlObj.XLPivot.createPivotTable('Sheet1!$A$1:$F$25', null, null, settings);
    }
  }
}
