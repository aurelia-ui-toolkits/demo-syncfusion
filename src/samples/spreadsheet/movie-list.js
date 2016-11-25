import '../scripts/xljsondata.js';
export class MovieList {
  constructor() {
    this.scroll = { height: '100%', width: '100%', isResponsive: 'true' };
    this.range = [{ dataSource: window.movieData, startCell: 'B3', showHeader: false}];
    this.import = { importMapper: 'http://js.syncfusion.com/demos/ejservices/api/Spreadsheet/Import'};
  }
  loadcomplete(args) {
    let xlObj = $('#Spreadsheet1').ejSpreadsheet('instance');
    let xlFormat = xlObj.XLFormat;
    xlObj.setWidthToColumns([30, 55, 63, 120, 80, 215, 90, 98, 80, 85, 323 ]);
    xlFormat.format({ 'style': { 'background-color': '#000000', 'color': '#FFFFFF', 'font-size': '8pt' } }, 'A1:V40');
    xlFormat.format({ 'style': { 'background-color': '#ffcb0d' } }, 'A1:K1');
    xlFormat.format({ 'style': { 'background-color': '#ffcb0d', 'font-size': '9pt', color: '#000000', 'font-weight': 'bold' } }, 'B3:K3');
    xlObj.XLShape.setPicture('A1', 'images/spreadsheet/mv.png', 1275, 160);
    xlObj.setHeightToRows([162, 25, 25, 35, 35, 35, 35]);
    xlObj.XLFilter.filter('B3:K7');
    xlFormat.format({ 'style': { 'background-color': '#262626' } }, 'B5:K5');
    xlFormat.format({ 'style': { 'background-color': '#262626' } }, 'B7:K7');
    xlFormat.format({ 'style': { 'text-align': 'left' } }, 'B4:C7');
    xlFormat.format({ 'style': { 'vertical-align': 'middle' } }, 'B4:K7');
    $('#Spreadsheet1_picture1').css('background-color', 'transparent');
  }
}
