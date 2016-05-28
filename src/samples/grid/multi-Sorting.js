import '../scripts/jsondata.js';
export class MultiSorting {
    constructor() {
      this.OrderList = window.gridData;
      this.sort = { sortedColumns: [{ field: 'EmployeeID', direction: 'descending' }, { field: 'Freight' }, { field: 'CustomerID', direction: 'descending' }] };
      this.format = '{0:C}';
    }
}
