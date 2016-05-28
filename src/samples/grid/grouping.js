import '../scripts/jsondata.js';
export class gridgrouping {
    constructor() {
      this.CustomerList = window.gridData;
      this.groupedcolumn = {groupedColumns: ['ShipCountry']};
    }
}
