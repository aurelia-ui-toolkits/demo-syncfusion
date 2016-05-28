import '../scripts/xljsondata.js';
export class Freezepane {
  constructor() {
    this.scroll = { height: '100%', width: '100%', isResponsive: 'true', allowVirtualScrolling: 'false' };
    this.range = [{ dataSource: window.freezeData, startCell: 'A1', showHeader: 'true' }];
  }
  loadcomplete(args) {
    let xlObj = $('#Spreadsheet1').ejSpreadsheet('instance');
    xlObj.setWidthToColumns([ 122, 200, 150, 220, 102, 130 ]);
    xlObj.XLFormat.format({ 'style': { 'font-weight': 'bold' } }, 'A1:G1');
    xlObj.XLFormat.format({ 'style': { 'text-align': 'left' } }, 'F2:F30');
    xlObj.XLFreeze.freezePanes('C6');
  }
}
