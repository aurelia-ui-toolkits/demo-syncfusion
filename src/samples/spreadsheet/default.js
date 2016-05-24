import '../scripts/xljsondata.js';
export class Default {
  constructor() {
    this.scroll = { height: '100%', width: '100%', isResponsive: 'true' };
    this.range = [{ dataSource: window.defaultData, startCell: 'A1' }];
    this.import = { importMapper: 'http://js.syncfusion.com/ExportingServices/api/JSXLExport/Import'};
    this.export = { excelUrl: 'http://js.syncfusion.com/ExportingServices/api/JSXLExport/ExportToExcel',
                    csvUrl: 'http://js.syncfusion.com/ExportingServices/api/JSXLExport/ExportToCsv',
					pdfUrl: 'http://js.syncfusion.com/ExportingServices/api/JSXLExport/ExportToPdf'};
  }
}
