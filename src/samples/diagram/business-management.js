export class BusinessManagement {
  constructor() {
    let data = [ { 'Id': 'parent', 'Role': 'Board', 'color': '#71AF17' },
    { 'Id': '1', 'Role': 'General Manager', 'Manager': 'parent', 'ChartType': 'right', 'color': '#71AF17' },
    { 'Id': '11', 'Role': 'Assistant Manager', 'Manager': '1', 'color': '#71AF17' },
    { 'Id': '2', 'Role': 'Human Resource Manager', 'Manager': '1', 'ChartType': 'right', 'color': '#1859B7' },
    { 'Id': '3', 'Role': 'Trainers', 'Manager': '2', 'color': '#2E95D8' },
    { 'Id': '4', 'Role': 'Recruiting Team', 'Manager': '2', 'color': '#2E95D8' },
    { 'Id': '5', 'Role': 'Finance Asst. Manager', 'Manager': '2', 'color': '#2E95D8' },
    { 'Id': '6', 'Role': 'Design Manager', 'Manager': '1', 'ChartType': 'right', 'color': '#1859B7' },
    { 'Id': '7', 'Role': 'Design Supervisor', 'Manager': '6', 'color': '#2E95D8' },
    { 'Id': '8', 'Role': 'Development Supervisor', 'Manager': '6', 'color': '#2E95D8' },
    { 'Id': '9', 'Role': 'Drafting Supervisor', 'Manager': '6', 'color': '#2E95D8' },
    { 'Id': '10', 'Role': 'Operation Manager', 'Manager': '1', 'ChartType': 'right', 'color': '#1859B7' },
    { 'Id': '11', 'Role': 'Statistic Department', 'Manager': '10', 'color': '#2E95D8' },
    { 'Id': '12', 'Role': 'Logistic Department', 'Manager': '10', 'color': '#2E95D8' },
    { 'Id': '16', 'Role': 'Marketing Manager', 'Manager': '1', 'ChartType': 'right', 'color': '#1859B7' },
    { 'Id': '17', 'Role': 'Oversea sales Manager', 'Manager': '16', 'color': '#2E95D8' },
    { 'Id': '18', 'Role': 'Petroleum Manager', 'Manager': '16', 'color': '#2E95D8' },
    { 'Id': '20', 'Role': 'Service Dept. Manager', 'Manager': '16', 'color': '#2E95D8' },
    { 'Id': '21', 'Role': 'Quality Department', 'Manager': '16', 'color': '#2E95D8' }
    ];
    this.layout = {
      type: 'organizationalchart', horizontalSpacing: 40, verticalSpacing: 40, marginY: 30,
      getLayoutInfo: getLayoutInfo
    };
    this.pageSettings = { scrollLimit: 'diagram' };
    this.defaultSettings = {
      node: {
        width: 150, height: 50, shape: 'rectangle', borderColor: 'transparent',
        labels: [{ name: 'label1', fontColor: '#ffffff', fontSize: 12, margin: { left: 5, right: 5 } }]
      },
      connector: { segments: [{ 'type': 'orthogonal' }], targetDecorator: { shape: 'none' } }
    };
    this.nodeTemplate = nodeTemplate;
    this.tool = ej.datavisualization.Diagram.Tool.ZoomPan;
    this.snapSettings = { snapConstraints: ej.datavisualization.Diagram.SnapConstraints.None };
    this.pageSettings = { scrollLimit: 'diagram' };
    this.enableContextMenu = false;
    this.dataSourceSettings = {
      id: 'Id', parent: 'Manager', dataSource: data
    };
    function nodeTemplate(diagram, node) {
      node.labels[0].text = node.Role;
      node.fillColor = node.color;
    }
  }
}

function getLayoutInfo(diagram, node, options) {
  if (node.labels[0].text === 'General Manager') {
    options.assistants.push(options.children[0]);
    options.children.splice(0, 1);
  }
  if (!options.hasSubTree) {
    if (node.ChartType) {
      options.type = node.ChartType;
    }
    options.offset = -58;
  }
}
