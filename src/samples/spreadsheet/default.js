import '../scripts/xljsondata.js';
export class Default {
  constructor() {
    this.scroll = { height: '100%', width: '100%', isResponsive: 'true' };
    this.range = [{ dataSource: window.defaultData, startCell: 'A1', showHeader: 'true' }];
    this.import = { importMapper: 'http://js.syncfusion.com/ExportingServices/api/JSXLExport/Import'};
    this.export = { excelUrl: 'http://js.syncfusion.com/ExportingServices/api/JSXLExport/ExportToExcel',
                    csvUrl: 'http://js.syncfusion.com/ExportingServices/api/JSXLExport/ExportToCsv',
					          pdfUrl: 'http://js.syncfusion.com/ExportingServices/api/JSXLExport/ExportToPdf'};
  }
  loadcomplete(event) {
    let xlObj = $('#Spreadsheet1').ejSpreadsheet('instance');
    let xlFormat = xlObj.XLFormat;
    if (!xlObj.isImport) {
      xlObj.setWidthToColumns([140, 128, 105, 100, 100, 110, 120, 120, 100]);
      xlFormat.format({ 'style': { 'font-weight': 'bold' } }, 'A1:H1');
      xlFormat.format({ 'type': 'currency' }, 'E2:H11');
      xlObj.XLRibbon.updateRibbonIcons();
    }
  }
}
