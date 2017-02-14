import '../scripts/xljsondata.js';
export class Chart {
  constructor() {
    this.scroll = { height: '100%', width: '100%', isResponsive: 'true' };
    this.range1 = [{ dataSource: window.chartData }];
    this.range2 = [{ dataSource: window.chartData }];
    this.range3 = [{ dataSource: window.chartData }];
    this.range4 = [{ dataSource: window.chartData }];
    this.range5 = [{ dataSource: window.chartData }];
    this.range6 = [{ dataSource: window.chartData }];
    this.range7 = [{ dataSource: window.chartData }];
    this.range8 = [{ dataSource: window.chartData }];
    this.range9 = [{ dataSource: window.chartData }];
    this.page = {pageCount: 9};
  }
  loadcomplete(args) {
    let xlObj = $('#Spreadsheet1').ejSpreadsheet('instance');
    let xlFormat = xlObj.XLFormat;
    let xlEdit = xlObj.XLEdit;
    let xlChart = xlObj.XLChart;
    xlObj.setWidthToColumns([{ colIndex: 0, width: 90 }, { colIndex: 1, width: 85 }, { colIndex: 2, width: 100 }, { colIndex: 11, width: 70 }]);
    xlObj.mergeCells('F16:G16', true);
    xlEdit.updateValue('F16', '2D Column');
    xlFormat.format({ 'type': 'currency' }, 'B2:B21');
    xlFormat.format({ 'style': { 'font-weight': 'bold' } }, 'F16:F16');
    xlFormat.format({ 'style': { 'font-weight': 'bold' } }, 'A1:C1');
    xlChart.createChart('A1:B6', { type: 'column', enable3D: false, marker: false, top: 40, left: 260, width: 340, height: 250 });
    xlObj.gotoPage(2, false);
    xlObj.setWidthToColumns([{ colIndex: 0, width: 90 }, { colIndex: 1, width: 85 }, { colIndex: 2, width: 100 }, { colIndex: 11, width: 70 }]);
    xlObj.mergeCells('F16:H16', true);
    xlEdit.updateValue('F16', '3D Column');
    xlFormat.format({ 'type': 'currency' }, 'B2:B21');
    xlFormat.format({ 'style': { 'font-weight': 'bold' } }, 'F16:F16');
    xlFormat.format({ 'style': { 'font-weight': 'bold' } }, 'A1:C1');
    xlChart.createChart('A1:B6', { type: 'column', enable3D: true, marker: { visible: false }, top: 40, left: 260, width: 340, height: 250 });
    xlObj.gotoPage(3, false);
    xlObj.setWidthToColumns([{ colIndex: 0, width: 90 }, { colIndex: 1, width: 85 }, { colIndex: 2, width: 100 }, { colIndex: 11, width: 70 }]);
    xlObj.mergeCells('F16:G16', true);
    xlEdit.updateValue('F16', '2D Bar');
    xlFormat.format({ 'type': 'currency' }, 'B2:B21');
    xlFormat.format({ 'style': { 'font-weight': 'bold' } }, 'F16:F16');
    xlFormat.format({ 'style': { 'font-weight': 'bold' } }, 'A1:C1');
    xlChart.createChart('A1:B6', { type: 'bar', enable3D: false, marker: { visible: false }, top: 40, left: 260, width: 340, height: 250 });
    xlObj.gotoPage(4, false);
    xlObj.setWidthToColumns([{ colIndex: 0, width: 90 }, { colIndex: 1, width: 85 }, { colIndex: 2, width: 100 }, { colIndex: 11, width: 70 }]);
    xlObj.mergeCells('F16:G16', true);
    xlEdit.updateValue('F16', '3D Bar');
    xlFormat.format({ 'type': 'currency' }, 'B2:B21');
    xlFormat.format({ 'style': { 'font-weight': 'bold' } }, 'F16:F16');
    xlFormat.format({ 'style': { 'font-weight': 'bold' } }, 'A1:C1');
    xlChart.createChart('A1:B6', { type: 'bar', enable3D: true, marker: { visible: false }, top: 40, left: 260, width: 340, height: 250 });
    xlObj.performSelection('A1');
    xlObj.gotoPage(5, false);
    xlObj.setWidthToColumns([{ colIndex: 0, width: 90 }, { colIndex: 1, width: 85 }, { colIndex: 2, width: 100 }, { colIndex: 11, width: 70 }]);
    xlObj.mergeCells('F16:G16', true);
    xlEdit.updateValue('F16', 'Radar with Markers');
    xlFormat.format({ 'type': 'currency' }, 'B2:B21');
    xlFormat.format({ 'style': { 'font-weight': 'bold' } }, 'F16:F16');
    xlFormat.format({ 'style': { 'font-weight': 'bold', 'font-size': '12px' } }, 'A1:C1');
    xlChart.createChart('A1:B6', { type: 'radar', enable3D: false, marker: { visible: true }, top: 40, left: 260, width: 340, height: 250 });
    xlObj.gotoPage(6, false);
    xlObj.setWidthToColumns([{ colIndex: 0, width: 90 }, { colIndex: 1, width: 85 }, { colIndex: 2, width: 100 }, { colIndex: 11, width: 70 }]);
    xlObj.mergeCells('F16:G16', true);
    xlEdit.updateValue('F16', 'Line with Markers');
    xlFormat.format({ 'type': 'currency' }, 'B2:B21');
    xlFormat.format({ 'style': { 'font-weight': 'bold' } }, 'F16:F16');
    xlFormat.format({ 'style': { 'font-weight': 'bold' } }, 'A1:C1');
    xlChart.createChart('A1:B6', { type: 'line', enable3D: false, marker: { visible: true }, top: 40, left: 260, width: 340, height: 250 });
    xlObj.gotoPage(7, false);
    xlObj.setWidthToColumns([{ colIndex: 0, width: 90 }, { colIndex: 1, width: 85 }, { colIndex: 2, width: 100 }, { colIndex: 7, width: 90 }, { colIndex: 11, width: 70 }]);
    xlObj.mergeCells('F16:G16', true);
    xlEdit.updateValue('F16', '2D Area');
    xlFormat.format({ 'type': 'currency' }, 'B2:B21');
    xlFormat.format({ 'style': { 'font-weight': 'bold' } }, 'F16:F16');
    xlFormat.format({ 'style': { 'font-weight': 'bold' } }, 'A1:C1');
    xlChart.createChart('A1:B6', { type: 'Area', enable3D: false, marker: { visible: false }, top: 40, left: 260, width: 340, height: 250 });
    xlObj.gotoPage(8, false);
    xlObj.setWidthToColumns([{ colIndex: 0, width: 90 }, { colIndex: 1, width: 85 }, { colIndex: 2, width: 100 }, { colIndex: 7, width: 90 }, { colIndex: 11, width: 70 }]);
    xlObj.mergeCells('F16:G16', true);
    xlEdit.updateValue('F16', '3D Pie');
    xlFormat.format({ 'type': 'currency' }, 'B2:B21');
    xlFormat.format({ 'style': { 'font-weight': 'bold' } }, 'F16:F16');
    xlFormat.format({ 'style': { 'font-weight': 'bold' } }, 'A1:C1');
    xlChart.createChart('B1:C6', { type: 'pie', enable3D: true, marker: { visible: false }, top: 40, left: 260, width: 360, height: 250 });
    xlObj.gotoPage(9, false);
    xlObj.setWidthToColumns([90, 85, 100]);
    xlObj.mergeCells('F16:G16', true);
    xlEdit.updateValue('F16', 'Scatter');
    xlFormat.format({ 'type': 'currency' }, 'B2:B21');
    xlFormat.format({ 'style': { 'font-weight': 'bold' } }, 'F16:F16');
    xlFormat.format({ 'style': { 'font-weight': 'bold' } }, 'A1:C1');
    xlChart.createChart('A1:B6', { type: 'scatter', enable3D: false, marker: { visible: false }, top: 40, left: 260, width: 340, height: 250 });
    xlObj.gotoPage(1, false);
    xlObj.performSelection('A1');
    xlObj.setSheetFocus();
  }
  actionbegin(args) {
    let details = args.detail;
    if (details.reqType === 'gotoSheet' && !details.newSheet) {
      let i = 0;
      let xlObj = $('#Spreadsheet1').data('ejSpreadsheet');
      let charts = xlObj.getSheetElement(details.gotoIndex).find('.e-datavisualization-chart');
      let len = charts.length;
      while (i < len) {
        $(charts[i]).ejChart('redraw');
        i++;
      }
    }
  }
}
