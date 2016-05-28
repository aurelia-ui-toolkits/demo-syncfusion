export class ODataBinding {
    constructor() {
      // DataManager creation
      this.dataManger = ej.DataManager({ url: 'http://mvc.syncfusion.com/Services/Northwnd.svc/' }); // eslint-disable-line new-cap
      // Query creation
      this.query = ej.Query().from('Categories').select('CategoryID,CategoryName').take(3); // eslint-disable-line new-cap
      this.fieldData =  {
        dataSource: this.dataManger, query: this.query, id: 'CategoryID', text: 'CategoryName',
        child: { dataSource: this.dataManger, tableName: 'Products', parentId: 'CategoryID', text: 'ProductName' }
      };
    }
}
