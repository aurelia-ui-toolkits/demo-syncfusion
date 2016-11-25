export class HtmlTableBinding {
    constructor() {
      this.pageSettings = { scrollLimit: 'diagram' };
      this.defaultSettings = {
        node: {
          width: 120, height: 40, shape: 'rectangle', borderColor: 'transparent',
          labels: [{ name: 'label1', fontColor: '#ffffff', 'margin': new ej.datavisualization.Diagram.Margin({ 'left': 5, 'right': 5 }) }]
        },
        connector: { segments: [{ 'type': 'orthogonal' }], targetDecorator: { fillColor: '#4F4F4F', borderColor: '#4F4F4F' } }
      };
      this.nodeTemplate = function(diagram, node) {
        node.labels[0].text = node.Role;
        node.fillColor = node.Color;
      };
      this.tool = ej.datavisualization.Diagram.Tool.ZoomPan;
      this.snapSettings = { snapConstraints: ej.datavisualization.Diagram.SnapConstraints.None };
      this.pageSettings = { scrollLimit: 'diagram' };
      this.enableContextMenu = false;
      this.layout = {
        type: 'hierarchicaltree', marginX: 0, marginY: 50, horizontalSpacing: 30, verticalSpacing: 40
      };
    }
    create(args) {
      $('#diagram').ejDiagram({
        dataSourceSettings: {
          id: 'Id', parent: 'ReportingPerson',
          dataSource: ej.DataManager(// eslint-disable-line new-cap
                  $('#htmlbinding'))
        },
        layout: {
          type: 'hierarchicaltree', marginX: 0, marginY: 50, horizontalSpacing: 30, verticalSpacing: 40
        }
      });
    }
}
