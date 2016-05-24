export class OrganizationalChart {
  constructor() {
    let addInfo = { orientation: 'vertical', type: 'alternate' };
    //Initialize data source
    let data = [
      { 'Id': 'parent', 'Function': 'Project Management' },
      { 'Id': '1', 'Function': 'R&D Team', 'Phase': 'parent' },
      { 'Id': '2', 'Function': 'HR Team', 'Phase': 'parent' },
      { 'Id': '3', 'Function': 'Sales Team', 'Phase': 'parent' },
      { 'Id': '4', 'Function': 'Philosophy', 'Phase': '1' },
      { 'Id': '5', 'Function': ' Organization', 'Phase': '1' },
      { 'Id': '6', 'Function': 'Technology', 'Phase': '1' },
      { 'Id': '7', 'Function': ' Funding', 'Phase': '1' },
      { 'Id': '8', 'Function': 'Resource', 'Phase': '1' },
      { 'Id': '9', 'Function': 'Targeting', 'Phase': '1' },
      { 'Id': '10', 'Function': 'Evaluation', 'Phase': '1' },
      { 'Id': '11', 'Function': 'Recruitment', 'Phase': '2' },
      { 'Id': '12', 'Function': 'Relation', 'Phase': '2' },
      { 'Id': '13', 'Function': 'Design', 'Phase': '3' },
      { 'Id': '14', 'Function': 'Operation', 'Phase': '3' },
      { 'Id': '15', 'Function': 'Support', 'Phase': '3' },
      { 'Id': '16', 'Function': 'Quality', 'Phase': '3' },
      { 'Id': '17', 'Function': 'Interaction', 'Phase': '3' },
      { 'Id': '18', 'Function': 'Support', 'Phase': '3' },
      { 'Id': '19', 'Function': 'Coordination', 'Phase': '3' }
    ];
    //Binds Custom JSON with node
    function nodeTemplate(diagram, node) {
      node.labels[0].text = node.Function;
      node.fillColor = node.Color;
      if (node.Id === 'parent') { node.fillColor = '#3484bb'; }
      if (node.Phase === 'parent') { node.fillColor = '#9ace7f'; }
      if (node.Phase === '1') { node.fillColor = '#9264aa'; }
      if (node.Phase === '2') { node.fillColor = '#9264aa'; }
      if (node.Phase === '3') { node.fillColor = '#9264aa'; }
    }
    //Customize subtree orientation
    function getLayoutInfo(diagram, node, options) {
      if (!options.hasSubTree) {
        options.orientation = node.addInfo.orientation;
        options.type = node.addInfo.type;
      }
    }
    this.tool = ej.datavisualization.Diagram.Tool.ZoomPan;
    this.layout = {
      type: 'organizationalchart',
      marginX: 3,
      marginY: 3,
      getLayoutInfo: getLayoutInfo
    };
    this.defaultSettings = {
      node: {
        constraints: ej.datavisualization.Diagram.NodeConstraints.Select | ej.datavisualization.Diagram.NodeConstraints.PointerEvents,
        addInfo: addInfo,
        width: 100,
        height: 40,
        borderColor: 'black',
        labels: [{
          fontColor: '#ffffff'
        }]
      },
      connector: {
        lineColor: '#000000',
        segments: [{
          type: 'orthogonal'
        }],
        targetDecorator: {
          shape: 'none'
        },
        constraints: ej.datavisualization.Diagram.ConnectorConstraints.None
      }
    };
    this.nodeTemplate = nodeTemplate;
    this.dataSourceSettings = {
      id: 'Id',
      parent: 'Phase',
      dataSource: data
    };
    this.pageSettings = {
      scrollLimit: 'diagram',
      muliplePages: false
    };
    this.snapSettings = {
      snapConstraints: ej.datavisualization.Diagram.SnapConstraints.None
    };
  }
}
