export class Tooltip {
    constructor() {
      let Diagram = ej.datavisualization.Diagram;
      let BPMNShapes = Diagram.BPMNShapes;
      let BPMNEvents = Diagram.BPMNEvents;
      let BPMNTriggers = Diagram.BPMNTriggers;
      let BPMNGateways = Diagram.BPMNGateways;

      this.nodes = [
        { name: 'node1', width: 60, height: 60, offsetX: 35, offsetY: 90, labels: [{ 'text': 'Customer query' }], Description: 'Queries from the customer', type: 'bpmn', shape: BPMNShapes.Start, trigger: BPMNTriggers.Message },
        { name: 'node2', width: 75, height: 70, offsetX: 140, offsetY: 90, labels: [{ 'text': 'Enough details?', offset: { x: 0.50, y: 0.50 } }], Description: 'Whether the provided information is enough?', type: 'bpmn', shape: BPMNShapes.Gateway },
        { name: 'node3', width: 60, height: 50, offsetX: 265, offsetY: 90, labels: [{ 'text': 'Analyse', offset: { x: 0.50, y: 0.50 } }], Description: 'Analysing the query', type: 'bpmn', shape: BPMNShapes.Activity, activity: ej.datavisualization.Diagram.BPMNActivity.Task },
        { name: 'node4', width: 75, height: 70, offsetX: 370, offsetY: 90, type: 'bpmn', shape: BPMNShapes.Gateway, gateway: BPMNGateways.Exclusive, constraints: ej.datavisualization.Diagram.NodeConstraints.Default & ~ej.datavisualization.Diagram.NodeConstraints.InheritTooltip },
        { name: 'node5', width: 75, height: 70, offsetX: 520, offsetY: 90, labels: [{ 'text': 'Validate', offset: { x: 0.50, y: 0.50 } }], Description: 'Whether the reported/requested bug/feature is valid?', type: 'bpmn', shape: BPMNShapes.Gateway },
        { name: 'node6', width: 60, height: 60, offsetX: 645, offsetY: 90, Description: 'Send the invalid message to customer', type: 'bpmn', shape: BPMNShapes.Start, event: BPMNEvents.End, trigger: BPMNTriggers.Message },
        { name: 'node7', width: 60, height: 50, offsetX: 140, offsetY: 200, labels: [{ 'text': 'Request', offset: { x: 0.50, y: 0.50 } }], Description: 'Requesting for more information', type: 'bpmn', shape: BPMNShapes.Activity, activity: ej.datavisualization.Diagram.BPMNActivity.Task, task: { type: ej.datavisualization.Diagram.BPMNTasks.Send } },
        { name: 'node8', width: 60, height: 60, offsetX: 370, offsetY: 200, Description: 'Share the User Guide/Knowledge Base link', type: 'bpmn', shape: BPMNShapes.Start, event: BPMNEvents.End, trigger: BPMNTriggers.Message },
        { name: 'node9', width: 70, height: 50, offsetX: 520, offsetY: 200, labels: [{ 'text': 'Log bug/feature', offset: { x: 0.50, y: 0.50 } }], Description: 'Log the bug/feature', type: 'bpmn', shape: BPMNShapes.Activity, activity: ej.datavisualization.Diagram.BPMNActivity.Task },
        { name: 'node10', width: 75, height: 55, offsetX: 390, offsetY: 300, labels: [{ 'text': 'Implement', offset: { x: 0.50, y: 0.50 } }], Description: 'Fix the bug/Add the feature', type: 'bpmn', shape: BPMNShapes.Activity, activity: ej.datavisualization.Diagram.BPMNActivity.SubProcess, subProcess: { collapsed: false, events: [{ event: 'intermediate', trigger: 'timer', offset: { x: 0.5, y: 1 }, width: 25, height: 25 }] } },
        { name: 'node12', width: 60, height: 60, offsetX: 265, offsetY: 300, Description: 'Provide the solution', type: 'bpmn', shape: BPMNShapes.Start, event: BPMNEvents.End, trigger: BPMNTriggers.Message },
        { name: 'node13', width: 60, height: 60, offsetX: 645, offsetY: 300, Description: 'Share the task details', type: 'bpmn', shape: BPMNShapes.Start, event: BPMNEvents.End, trigger: BPMNTriggers.Message },
        { name: 'node14', width: 60, height: 60, offsetX: 520, offsetY: 300, type: 'bpmn', shape: BPMNShapes.Gateway, gateway: BPMNGateways.Parallel, constraints: ej.datavisualization.Diagram.NodeConstraints.Default & ~ej.datavisualization.Diagram.NodeConstraints.InheritTooltip }
      ];
      this.connectors = [
        { name: 'connector1', sourceNode: 'node1', targetNode: 'node2' },
        { name: 'connector2', sourceNode: 'node2', targetNode: 'node3' },
        { name: 'connector3', sourceNode: 'node3', targetNode: 'node4' },
        { name: 'connector4', sourceNode: 'node4', targetNode: 'node5', labels: [{ 'text': 'Feature/ Bug', offset: { x: 0.5, y: 0.9 }, fillColor: 'white', wrapping: ej.datavisualization.Diagram.TextWrapping.Wrap }] },
        { name: 'connector5', sourceNode: 'node5', targetNode: 'node6', labels: [{ 'text': 'Invalid', offset: { x: 0.5, y: 0.050 }, fillColor: 'white' }] },
        { name: 'connector6', sourceNode: 'node2', targetNode: 'node7' },
        { name: 'connector7', sourceNode: 'node4', targetNode: 'node8', labels: [{ 'text': 'How to?', offset: { x: 0.5, y: 0.5 }, fillColor: 'white' }] },
        { name: 'connector8', sourceNode: 'node5', targetNode: 'node9' },
        { name: 'connector9', sourceNode: 'node14', targetNode: 'node13' },
        { name: 'connector10', sourceNode: 'node7', targetNode: 'node3', segments: [{ type: 'orthogonal', length: 100, direction: 'right' }, { type: 'orthogonal', length: 100, direction: 'top' }] },
        { name: 'connector11', sourceNode: 'node14', targetNode: 'node10' },
        { name: 'connector12', sourceNode: 'node10', targetNode: 'node12' },
        { name: 'connector13', sourceNode: 'node9', targetNode: 'node14' }
      ];
      this.snapSettings = {snapConstraints: ej.datavisualization.Diagram.SnapConstraints.None};
      this.pageSettings = {  scrollLimit: 'diagram'};
      this.defaultSettings = {
        node: {
          borderColor: 'black', labels: [{ 'fontColor': 'black' }]
        },
        connector: {
          constraints: ej.datavisualization.Diagram.ConnectorConstraints.Default & ~ej.datavisualization.Diagram.ConnectorConstraints.InheritTooltip,
          targetDecorator: { shape: 'arrow', borderColor: 'black', width: '5', height: '10' }, segments: [{ 'type': 'orthogonal' }], lineWidth: 1, lineColor: 'black'
        }
      };
      this.tooltip = { templateId: 'mouseovertoolTipId', alignment: { horizontal: 'center', vertical: 'bottom' } };
      this.segmentTarget = 'options';
      this.segmentText = 'Object';
      this.MarginValue = 10;
      this.MarginMinValue = 0;
      this.MarginMaxValue = 10;
      this.horizontalalignlist = 'horizontalalignlist';
      this.horizontalalignValue = 'Center';
      this.verticalalignlist = 'verticalalignlist';
      this.verticalalignValue = 'Bottom';
    }
    changeOptions(args) {
      $('#diagram').ejDiagram({ tooltip: { relativeMode: ej.datavisualization.Diagram.RelativeMode[args.detail.value] } });
    }
    changeMargin(args) {
      $('#diagram').ejDiagram({ tooltip: { margin: { left: args.detail.value, right: args.detail.value, top: args.detail.value, bottom: args.detail.value } } });
    }
    changeHorizontalAlign(args) {
      $('#diagram').ejDiagram({ tooltip: { alignment: { horizontal: args.detail.value } } });
    }
    changeVerticalAlign(args) {
      $('#diagram').ejDiagram({ tooltip: { alignment: { vertical: args.detail.value } } });
    }
}
