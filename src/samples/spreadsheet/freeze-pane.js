import '../scripts/xljsondata.js';
export class FreezePane {
  constructor() {
    let freezeData = ej.DataManager(window.freezeData).executeLocal(ej.Query().take(100).select('Supplier ID', 'Company Name', 'Contact Name', 'City', 'Contact Title', 'Postal Code', 'Country'));//eslint-disable-line new-cap
    this.scroll = { height: '100%', width: '100%', isResponsive: 'true' };
    this.range = [{ dataSource: freezeData, startCell: 'A1' }];
  }
  loadcomplete(args) {
    let xlObj = $('#Spreadsheet1').ejSpreadsheet('instance');
    xlObj.setWidthToColumns([ 122, 200, 150, 220, 102, 130 ]);
    xlObj.XLFormat.format({ 'style': { 'font-weight': 'bold' } }, 'A1:G1');
    xlObj.XLFormat.format({ 'style': { 'text-align': 'left' } }, 'F2:F30');
    xlObj.XLFreeze.freezePanes('C6');
  }
}
