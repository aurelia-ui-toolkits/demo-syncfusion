﻿import '../scripts/xljsondata.js';
export class ImportExport {
  constructor() {
    let filteredData = ej.DataManager(window.importData).executeLocal(ej.Query().take(10).select('OrderID', 'CustomerID', 'EmployeeID', 'ShipName', 'ShipCity', 'ShipAddress'));
    this.scroll = { height: '100%', width: '100%', isResponsive: 'true' };
    this.range = [{ dataSource: filteredData, showHeader: 'true'}];
    this.import = {importMapper: 'http://js.syncfusion.com/ExportingServices/api/JSXLExport/Import'};
    this.export = { excelUrl: 'http://js.syncfusion.com/ExportingServices/api/JSXLExport/ExportToExcel',
                    csvUrl: 'http://js.syncfusion.com/ExportingServices/api/JSXLExport/ExportToCsv',
					pdfUrl: 'http://js.syncfusion.com/ExportingServices/api/JSXLExport/ExportToPdf' };
  }
  loadcomplete(args) {
    let xlObj = $('#Spreadsheet1').ejSpreadsheet('instance');
    let formatObj;
    let xlFormat = xlObj.XLFormat;
    if (!xlObj.isImport) {
      formatObj = { header: true, formatName: 'TableStyleLight1', name: 'Table0', format: { contentBorder: { border: { bottom: '1px solid #000000' } }, contentLayout: [{ 'background-color': '#D9D9D9', color: '#000000' }, { color: '#000000' }], headerLayout: { 'font-weight': 'bold', color: '#000000', border: { top: '1px solid #000000', bottom: '1px solid #000000' } } } };
      xlObj.mergeCells('A1:F2', true);
      xlObj.XLEdit.updateValue('A1', 'SHIPMENT DETAIL ANALYSIS');
      xlObj.setWidthToColumns([110, 140, 140, 200, 160, 180 ]);
      xlFormat.format({ 'style': { 'font-weight': 'bold', 'vertical-align': 'middle', 'text-align': 'center'} }, 'A1');
      xlFormat.format({ 'style': { 'font-weight': 'bold' } }, 'A3:G3');
      xlFormat.createTable(formatObj, 'A3:F13');
      xlFormat.removeTable(1);
      xlObj.XLCFormat.setCFRule({ 'action': 'lessthan', 'input1': '5', 'color': 'yellowft', 'range': 'C4:C13' });
      xlObj.setHyperlink('D8', { webAddr: 'http://www.google.com', text: xlObj.XLEdit.getPropertyValue(7, 3) }, 0);
      xlObj.setHyperlink('D10', { webAddr: 'http://www.yahoo.com', text: xlObj.XLEdit.getPropertyValue(9, 3) }, 0);
      xlObj.XLComment.setComment('D4', 'Free shipping for this order.', false);
      xlFormat.format({ 'type': 'currency' }, 'E4:F13');
      xlObj.performSelection('A4');
    }
  }
}
