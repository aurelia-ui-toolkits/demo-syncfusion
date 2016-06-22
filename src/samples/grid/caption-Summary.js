import '../scripts/jsondata.js';
export class CaptionSummary {
    constructor() {
      this.OrdersList = window.gridData;
      this.group = {groupedColumns: ['ShipCountry']};
      this.summary = [{ showCaptionSummary: true, summaryColumns: [{ summaryType: ej.Grid.SummaryType.Average, displayColumn: 'Freight', dataMember: 'Freight', format: '{0:C2}', prefix: 'Average = ' }], showTotalSummary: false }];
    }
}
