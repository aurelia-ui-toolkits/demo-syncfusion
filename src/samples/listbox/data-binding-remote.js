export class BasicUse {
  constructor() {
     // declaration
    this.fields = { text: 'CustomerID' };
    this.dataManger = ej.DataManager({url: 'http://mvc.syncfusion.com/Services/Northwnd.svc/'}); // eslint-disable-line new-cap
     // Query creation
    this.query = ej.Query().from('Customers').take(10);// eslint-disable-line new-cap
  }
}
