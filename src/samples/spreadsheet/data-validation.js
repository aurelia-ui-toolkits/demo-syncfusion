import '../scripts/xljsondata.js';
export class Datavalidation {
  constructor() {
    this.scroll = { height: '100%', width: '100%', isResponsive: 'true' };
    this.range = [{ dataSource: window.validationData, startCell: 'A1', showHeader: false}];
  }
  loadcomplete(args) {
    let xlObj = $('#Spreadsheet1').ejSpreadsheet('instance');
    let values = [];
    let xlFormat = xlObj.XLFormat;
    let xlValidate = xlObj.XLValidate;
    xlObj.setWidthToColumns([120, 40, 210, 40, 160, 40, 85, 40, 190, 40, 200 ]);
    xlFormat.format({ 'style': { 'font-weight': 'bold', 'text-align': 'center' } }, 'A1:K1');
    xlFormat.format({ 'type': 'currency' }, 'E2:E15');
    xlObj.sheetRename('Data Validation');
    values = ['Greater', '6'];
    xlValidate.applyDVRules('A2:A15', values, 'number', true, true);
    xlValidate.highlightInvalidData('A2:A15');
    values = ['LessOrEqual', '35'];
    xlValidate.applyDVRules('C2:C15', values, 'text', true, true);
    xlValidate.highlightInvalidData('C2:C15');
    values = ['Between', '150', '200'];
    xlValidate.applyDVRules('E2:E15', values, 'decimal', true, true);
    xlValidate.highlightInvalidData('E2:E15');
    values = ['list', '=A4:A10'];
    xlValidate.applyDVRules('G2:G15', values, 'list', true, true);
    xlValidate.highlightInvalidData('G2:G15');
    values = ['Greater', '07/09/2014'];
    xlValidate.applyDVRules('I2:I15', values, 'date', true, true);
    xlValidate.highlightInvalidData('I2:I15');
    values = ['GreaterOrEqual', '11:23:23'];
    xlValidate.applyDVRules('K2:K15', values, 'time', true, true);
    xlValidate.highlightInvalidData('K2:K15');
    xlObj.performSelection('A2');
  }
}
