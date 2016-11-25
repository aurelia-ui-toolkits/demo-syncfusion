import '../scripts/xljsondata.js';
export class DefaultFunctionalities {
  constructor() {
    this.scroll = { height: '100%', width: '100%', isResponsive: 'true' };
    this.range = [{ dataSource: window.defaultData, startCell: 'A1' }];
    this.import = { importMapper: 'http://js.syncfusion.com/demos/ejservices/api/Spreadsheet/Import'};
    this.export = { excelUrl: 'http://js.syncfusion.com/demos/ejservices/api/Spreadsheet/ExcelExport',
        csvUrl: 'http://js.syncfusion.com/demos/ejservices/api/Spreadsheet/CsvExport',
        pdfUrl: 'http://js.syncfusion.com/demos/ejservices/api/Spreadsheet/PdfExport'};
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
  openfailure(args) {
    let xlObj = $('#Spreadsheet1').data('ejSpreadsheet');
    let alertDlg = $('#' + xlObj._id + '_alertdlg');
    xlObj._renderAlertDlgContent(alertDlg, 'Alert', args.detail.statusText);
    alertDlg.ejDialog('open');
  }
}
