export class Connectors {
    constructor() {
      let ports = [{ name: 'in', offset: { x: 0.4, y: 0.01 }, shape: 'circle' },
                  { name: 'inn', offset: { x: 0.6, y: 0.01 }, shape: 'circle' }
        ];
      let FlowShapes = ej.datavisualization.Diagram.FlowShapes;
      let addInfo;
      this.nodes =
      [
            { name: 'node1', width: 90, height: 40, offsetX: 80, offsetY: 90, labels: [{ 'text': 'Start' }], type: 'flow', shape: FlowShapes.Terminator },
            { name: 'node2', width: 130, height: 100, offsetX: 260, offsetY: 90, labels: [{ 'text': 'Already installed the software?' }], type: 'flow', shape: FlowShapes.Decision },
            { name: 'node3', width: 100, height: 50, offsetX: 440, offsetY: 90, labels: [{ 'text': 'Show license agreement' }], type: 'flow', shape: FlowShapes.Process },
            { name: 'node4', width: 110, height: 90, offsetX: 610, offsetY: 90, labels: [{ 'text': 'Agreed?' }], type: 'flow', shape: FlowShapes.Decision },
            { name: 'node5', width: 130, height: 100, offsetX: 260, offsetY: 240, labels: [{ 'text': 'Can \n override existing version?', margin: { left: 10, right: 10, top: 2, bottom: 2 } }], type: 'flow', shape: FlowShapes.Decision },
            { name: 'node6', width: 90, height: 50, offsetX: 610, offsetY: 240, labels: [{ 'text': 'Select destination folder' }], type: 'flow', shape: FlowShapes.Process },
            { name: 'node7', width: 110, height: 90, offsetX: 610, offsetY: 410, labels: [{ 'text': 'Enough disk space?' }], type: 'flow', shape: FlowShapes.Decision },
            { name: 'node8', width: 90, height: 50, offsetX: 440, offsetY: 410, labels: [{ 'text': 'Free Space' }], type: 'flow', shape: FlowShapes.Process },
            { name: 'node9', width: 90, height: 50, offsetX: 260, offsetY: 410, labels: [{ 'text': 'Copy files' }], type: 'flow', shape: FlowShapes.Process, ports: ports },
            { name: 'node10', width: 90, height: 40, offsetX: 80, offsetY: 410, labels: [{ 'text': 'End' }], type: 'flow', shape: FlowShapes.Terminator }
      ];
      this.connectors =
      [
            { name: 'connector1', sourceNode: 'node1', targetNode: 'node2' },
            { name: 'connector2', sourceNode: 'node2', targetNode: 'node3', labels: [{ 'text': 'No', fillColor: 'white' }] },
            { name: 'connector3', sourceNode: 'node3', targetNode: 'node4' },
            { name: 'connector4', sourceNode: 'node4', targetNode: 'node10', labels: [{ 'text': 'No', fillColor: 'white', offset: { x: 0.44, y: 0.27 } }], segments: [{ type: 'orthogonal', length: 30, direction: 'right' }, { type: 'orthogonal', length: 80, direction: 'bottom' }, { type: 'orthogonal', length: 620, direction: 'left' }, { type: 'orthogonal', length: 220, direction: 'bottom' }], addInfo: { segments: [{ type: 'orthogonal', length: 30, direction: 'right' }, { type: 'orthogonal', length: 80, direction: 'bottom' }, { type: 'orthogonal', length: 620, direction: 'left' }, { type: 'orthogonal', length: 220, direction: 'bottom' }] } },
            { name: 'connector5', sourceNode: 'node2', targetNode: 'node5', labels: [{ 'text': 'Yes', fillColor: 'white', offset: { x: 0.2, y: 0.2 } }] },
            { name: 'connector6', sourceNode: 'node4', targetNode: 'node6', labels: [{ 'text': 'Yes', fillColor: 'white', offset: { x: 0.4, y: 0.2 } }] },
            { name: 'connector7', sourceNode: 'node6', targetNode: 'node7' },
            { name: 'connector8', sourceNode: 'node7', targetNode: 'node8', labels: [{ 'text': 'No', fillColor: 'white' }] },
            { name: 'connector9', sourceNode: 'node8', targetNode: 'node9' },
            { name: 'connector10', sourceNode: 'node9', targetNode: 'node10' },
            { name: 'connector11', sourceNode: 'node5', targetNode: 'node9', labels: [{ 'text': 'Yes', fillColor: 'white', offset: { x: 0.01, y: 0.38 } }], targetPort: 'in', segments: [{ type: 'orthogonal', length: 20, direction: 'left' }, { type: 'orthogonal', length: 72, direction: 'bottom' }, { type: 'orthogonal', length: 20, direction: 'right' }], addInfo: { segments: [{ type: 'orthogonal', length: 20, direction: 'left' }, { type: 'orthogonal', length: 72, direction: 'bottom' }, { type: 'orthogonal', length: 20, direction: 'right' }] } },
            { name: 'connector12', sourceNode: 'node7', targetNode: 'node9', labels: [{ 'text': 'Yes', fillColor: 'white', offset: { x: 0.22, y: 0.01 } }], targetPort: 'inn', segments: [{ type: 'orthogonal', length: 20, direction: 'right' }, { type: 'orthogonal', length: 97, direction: 'top' }, { type: 'orthogonal', length: 416, direction: 'left' }], addInfo: { segments: [{ type: 'orthogonal', length: 20, direction: 'right' }, { type: 'orthogonal', length: 97, direction: 'top' }, { type: 'orthogonal', length: 416, direction: 'left' }] } }
      ];
      this.snapSettings = {snapConstraints: ej.datavisualization.Diagram.SnapConstraints.None};
      this.pageSettings = {  scrollLimit: 'diagram'};
      this.defaultSettings = {
        node: {
          borderColor: '#000000',
          constraints: ej.datavisualization.Diagram.NodeConstraints.Default & ~ej.datavisualization.Diagram.NodeConstraints.Drag,
          fillColor: '#6bbd45', labels: [{ 'fontColor': 'white', margin: { left: 20, right: 20, top: 2, bottom: 2 } }]
        },
        connector: {
          addInfo: addInfo, cornerRadius: 10,
          segments: [{ 'type': 'orthogonal' }], lineWidth: 2,
          constraints: ej.datavisualization.Diagram.ConnectorConstraints.Default | ej.datavisualization.Diagram.ConnectorConstraints.Bridging, lineColor: 'black'
        }
      };
      this.segmentTarget = 'segmentlistDiv';
      this.segmentText = 'Orthogonal';
      this.value = 'value';
      this.cornerValue = 10;
      this.cornerMinValue = 0;
      this.cornerMaxValue = 10;
      this.directionlistDiv = 'directionlistDiv';
      this.directionText = 'Top';
    }

    selectionChanged(event) {
      let diagram = $('#diagram').ejDiagram('instance');
      let ConnectorConstraints = ej.datavisualization.Diagram.ConnectorConstraints;
      let selectedConnectors = getSelectedConnectors(event.detail.selectedItems);
      let connectors = selectedConnectors.length ? selectedConnectors : diagram.model.connectors;
      updateCheckBox('dragable', connectors, ConnectorConstraints.Drag);
      updateCheckBox('dragablesource', connectors, ConnectorConstraints.DragSourceEnd);
      updateCheckBox('dragabletarget', connectors, ConnectorConstraints.DragTargetEnd);
      updateCheckBox('dragablesegment', connectors, ConnectorConstraints.DragSegmentThumb);
      updateCheckBox('bridge', connectors, ConnectorConstraints.Bridging);

      let checked;
      let radius = connectors[0].cornerRadius;
      for (i = 1; i < connectors.length; i++) {
        if (radius !== connectors[i].cornerRadius) {
          $('#cornerRadius').ejNumericTextbox({ enabled: false });
          checked = true;
          break;
        }
      }
      if (!checked) {
        $('#cornerRadius').ejNumericTextbox({ enabled: true });
        $('#cornerRadius').ejNumericTextbox({ value: radius });
      }
    }
    changeSegment(args) {
      let diagram = $('#diagram').ejDiagram('instance');
      let selectedConnectors = getSelectedConnectors(diagram.model.selectedItems.children);
      let connectors = selectedConnectors.length ? selectedConnectors : diagram.model.connectors;
      for (let i = 0; i < connectors.length; i++) {
        let connector = connectors[i];
        if (args.detail.value === 'orthogonal') {
          if (connector.addInfo.segments) {
            diagram.updateConnector(connector.name, { segments: connector.addInfo.segments });
          } else {
            diagram.updateConnector(connector.name, { segments: [{ type: args.detail.value }] });
          }
        } else {
          diagram.updateConnector(connector.name, { segments: [{ type: args.detail.value }] });
        }
      }
    }
    changeCornerRadius(args) {
      let diagram = $('#diagram').ejDiagram('instance');
      let selectedConnectors = getSelectedConnectors(diagram.model.selectedItems.children);
      let connectors = selectedConnectors.length ? selectedConnectors : diagram.model.connectors;
      for (let i = 0; i < connectors.length; i++) {
        let connector = connectors[i];
        diagram.updateConnector(connector.name, { cornerRadius: args.detail.value });
      }
    }
    updateConnectors(id, constraints) {
      let diagram = $('#diagram').ejDiagram('instance');
      let checkbox = $('#' + id).ejCheckBox('instance');
      let selectedConnectors = getSelectedConnectors(diagram.model.selectedItems.children);
      let connectors = selectedConnectors.length ? selectedConnectors : diagram.model.connectors;
      for (let i = 0; i < connectors.length; i++) {
        let connector = connectors[i];
        if (diagram.getObjectType(connector) === 'connector') {
          diagram.updateConnector(connector.name, {
            constraints: checkbox.isChecked() ? connector.constraints | constraints : connector.constraints & ~constraints
          });
        }
      }
    }
    changeBridgeDirection(args) {
      $('#diagram').ejDiagram({ bridgeDirection: args.detail.value });
    }
    create(args) {
      let diagram = $('#diagram').ejDiagram('instance');
      diagram.fitToPage('height', 'content');
    }
}

function getSelectedConnectors(selectedItems) {
  let diagram = $('#diagram').ejDiagram('instance');
  let connectors = [];
  for (let i = 0; i < selectedItems.length; i++) {
    if (diagram.getObjectType(selectedItems[i]) === 'connector') {
      connectors.push(selectedItems[i]);
    }
  }
  return connectors;
}

function updateCheckBox(id, connectors, constraints) {
  let enabled;
  let connector;
  let checked;
  let diagram = $('#diagram').ejDiagram('instance');
  enabled = connectors[0].constraints & constraints ? true : false;
  if (connectors.length === 1) $('#' + id).ejCheckBox({ enabled: enabled });
    else {
    for (let i = 1; i < connectors.length; i++) {
      connector = connectors[i];
      if (diagram.getObjectType(connector) === 'connector') {
        if ((connector.constraints & constraints ? true : false) !== enabled) {
          $('#' + id).ejCheckBox({ enabled: false });
          checked = true;
          break;
        }
      }
    }
  }
  if (!checked) {
    $('#' + id).ejCheckBox({ enabled: true });
    $('#' + id).ejCheckBox({ checked: enabled });
  }
}
