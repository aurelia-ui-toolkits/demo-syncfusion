export class HierarchicalTree {
    constructor() {
      let data = [
          { 'Name': 'Diagram', 'fillColor': '#916DAF' },
          { 'Name': 'Layout', 'Category': 'Diagram' },
          { 'Name': 'Tree Layout', 'Category': 'Layout' },
          { 'Name': 'Organizational Chart', 'Category': 'Layout' },
          { 'Name': 'Hierarchical Tree', 'Category': 'Tree Layout' },
          { 'Name': 'Radial Tree', 'Category': 'Tree Layout' },
          { 'Name': 'Mind Map', 'Category': 'Hierarchical Tree' },
          { 'Name': 'Family Tree', 'Category': 'Hierarchical Tree' },
          { 'Name': 'Management', 'Category': 'Organizational Chart' },
          { 'Name': 'Human Resource', 'Category': 'Management' },
          { 'Name': 'University', 'Category': 'Management' },
          { 'Name': 'Business', 'Category': 'Management' }
      ];
      this.tool = ej.datavisualization.Diagram.Tool.ZoomPan;
      this.layout = { type: 'hierarchicaltree', horizontalSpacing: 25, verticalSpacing: 35, marginX: 0, marginY: 50 };

      this.defaultSettings = {
        node: {
          constraints: ej.datavisualization.Diagram.NodeConstraints.Select | ej.datavisualization.Diagram.NodeConstraints.PointerEvents,
          fillColor: '#88C65C', width: 100, height: 40, borderColor: 'black', borderWidth: 1,
          labels: [{ name: 'label1', fontColor: 'white', fontSize: 12, margin: { left: 10, right: 10 } }]
        },
        connector: {
          lineColor: '#000000', constraints: ej.datavisualization.Diagram.ConnectorConstraints.None, segments: [{ type: 'orthogonal' }]
        }
      };
      this.nodeTemplate = nodeTemplate;
      this.dataSourceSettings = { id: 'Name', parent: 'Category', dataSource: data };
      this.pageSettings = { scrollLimit: 'diagram' };
      this.snapSettings = { snapConstraints: ej.datavisualization.Diagram.SnapConstraints.None };
      this.hieryList = 'hieryList';
      this.hieryListText = 'Top-Bottom';
      this.hieryListTextvalue = 'value';
      this.XWmark = 'Margin X';
      this.XValue = 3;
      this.XMinValue = -160;
      this.XMaxValue = 10000;
      this.YWmark = 'Margin Y';
      this.YValue = 3;
      this.YMinValue = -160;
      this.YMaxValue = 10000;
      this.HWmark = 'Horizontal Spacing';
      this.HValue = 25;
      this.HMinValue = 1;
      this.HMaxValue = 100000;
      this.VWmark = 'Vertical Spacing';
      this.VValue = 35;
      this.VMinValue = 1;
      this.VMaxValue = 100000;

      function nodeTemplate(diagram, node) {
        node.labels[0].text = node.Name;
      }
    }
    orientationChange(args) {
      $('#diagram').ejDiagram({
        layout: {
          orientation: args.detail.value
        }
      });
    }
    MarginXChange(args) {
      $('#diagram').ejDiagram({
        layout: {
          marginX: args.detail.value
        }
      });
    }
    MarginYChange(args) {
      $('#diagram').ejDiagram({
        layout: {
          marginY: args.detail.value
        }
      });
    }
    HorizontalChange(args) {
      $('#diagram').ejDiagram({
        layout: {
          horizontalSpacing: args.detail.value
        }
      });
    }
    VerticalChange(args) {
      $('#diagram').ejDiagram({
        layout: {
          verticalSpacing: args.detail.value
        }
      });
    }
}
