export class RemoteDataBinding {
    constructor() {
      this.layout = {
        type: 'organizationalchart', marginY: 20, horizontalSpacing: 30, verticalSpacing: 70, getLayoutInfo: getLayoutInfo
      };
      this.pageSettings = { scrollLimit: 'diagram' };
      this.defaultSettings = {
        node: { width: 100, height: 40, labels: [{ name: 'label1', fontColor: '#ffffff' }], borderColor: 'none' }
      };
      this.nodeTemplate = nodeTemplate;
      this.tool = ej.datavisualization.Diagram.Tool.ZoomPan;
      this.snapSettings = { snapConstraints: ej.datavisualization.Diagram.SnapConstraints.None };
      this.connector = { segments: [{ 'type': 'straight' }], targetDecorator: { shape: 'none' } };
      this.pageSettings = { scrollLimit: 'diagram' };
      this.enableContextMenu = false;
      this.dataSourceSettings = {
        dataSource: ej.DataManager({// eslint-disable-line new-cap
          url: 'http://mvc.syncfusion.com/Services/Northwnd.svc/'
        }),
        query: ej.Query(// eslint-disable-line new-cap
        ).from('Employees').select('EmployeeID,ReportsTo,FirstName'),
        tableName: 'Employees', id: 'EmployeeID', parent: 'ReportsTo'
      };
      function nodeTemplate(diagram, node) {
        node.labels[0].text = node.FirstName;
      }
    }
}
function getLayoutInfo(diagram, node, options) {
  if (options.level === 3) {
    node.fillColor = '#3c418d';
  }
  if (options.level === 2) {
    node.fillColor = '#108d8d';
    options.type = 'center';
    options.orientation = 'horizontal';
  }
  if (options.level === 1) {
    node.fillColor = '#822b86';
  }
}
