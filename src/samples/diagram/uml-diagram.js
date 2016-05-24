export class UMLDiagram {
  constructor() {
    this.nodes = [
      {
        name: 'Patient', className: 'Patient', properties: [{ name: 'accepted', type: 'Date' }, { name: 'sickness', type: 'History' }, { name: 'prescription', type: 'String[*]' }, { name: 'allergies', type: 'String[*]' }],
        methods: [{ name: 'getHistory', returnType: 'Date', parameter: 'History' }], offsetX: 85, offsetY: 200, minHeight: 100, minWidth: 150, Parent: ''
      },
      {
        name: 'Doctor', className: 'Doctor', properties: [{ name: 'specialist', type: 'String[*]' }, { name: 'locations', type: 'String[*]' }],
        offsetX: 125, offsetY: 515, minHeight: 50, minWidth: 150, Parent: 'Patient'
      },
      {
        name: 'Person', className: 'Person', properties: [{ name: 'name', type: 'Name' }, { name: 'title', type: 'String[*]' }, { name: 'gender', type: 'Gender' }],
        offsetX: 290, offsetY: 85, minHeight: 50, minWidth: 150
      },
      {
        name: 'Hospital', className: 'Hospital', properties: [{ name: 'name', type: 'Name' }, { name: 'address', type: 'Address' }, { name: 'phone', type: 'Phone' }],
        methods: [{ name: 'getDepartment', returnType: '', parameter: 'String' }], offsetX: 493, offsetY: 70, minHeight: 100, minWidth: 150
      },
      {
        name: 'Department', className: 'Department',
        methods: [{ name: 'getStaffCount', returnType: '', parameter: 'Int' }], offsetX: 493, offsetY: 250, minHeight: 10, minWidth: 150
      },
      {
        name: 'Staff', className: 'Staff', properties: [{ name: 'joined', type: 'Date' }, { name: 'education', type: 'string[*]' }, { name: 'certification', type: 'String[*]' }, { name: 'languages', type: 'String[*]' }],
        methods: [{ name: 'isDoctor', returnType: '', parameter: 'bool' }, { name: 'getHistory', returnType: '', parameter: 'bool' }], offsetX: 490, offsetY: 425, minHeight: 100, minWidth: 150
      },
      {
        name: 'OperationStaff', className: 'OperationStaff', offsetX: 295, offsetY: 425, minHeight: 160, minWidth: 150, width: 100
      },
      {
        name: 'Nurse', className: 'Nurse', offsetX: 295, offsetY: 515, minHeight: 515, minWidth: 150, width: 70
      },
      {
        name: 'Surgeon', className: 'Surgeon', offsetX: 125, offsetY: 635, minHeight: 160, minWidth: 150, width: 100
      },
      {
        name: 'AdministrativeStaff', className: 'AdministrativeStaff', offsetX: 487, offsetY: 575, minHeight: 163, minWidth: 150, width: 110
      },
      {
        name: 'FrontDeskStaff', className: 'FrontDeskStaff', offsetX: 485, offsetY: 635, minHeight: 160, minWidth: 150, width: 100
      },
      {
        name: 'TechnicalStaff', className: 'TechnicalStaff', offsetX: 783, offsetY: 425, minHeight: 160, minWidth: 150, width: 100
      },
      {
        name: 'Technician', className: 'Technician', offsetX: 680, offsetY: 515, minHeight: 160, minWidth: 150, width: 100
      },
      {
        name: 'Technologist', className: 'Technologist', offsetX: 880, offsetY: 515, minHeight: 160, minWidth: 150, width: 100
      },
      {
        name: 'SurgicalTechnologist', className: 'SurgicalTechnologist', offsetX: 880, offsetY: 600, minHeight: 160, minWidth: 150, width: 130
      }
    ];
    this.connectors = [
      { name: 'connect1', sourceNode: 'Patient', targetNode: 'Person', segments: [{ type: 'straight' }] },
      { name: 'connect2', sourceNode: 'Person', targetNode: 'Hospital', targetDecorator: { shape: 'none' }, segments: [{ type: 'straight' }] },
      { name: 'connect3', sourceNode: 'Department', targetNode: 'Hospital', targetDecorator: { shape: 'diamond' }, segments: [{ type: 'straight' }] },
      { name: 'connect4', sourceNode: 'OperationStaff', targetNode: 'Patient', targetDecorator: { shape: 'none' }, segments: [{ type: 'straight' }] },
      { name: 'connect5', sourceNode: 'Doctor', targetNode: 'OperationStaff', segments: [{ type: 'straight' }] },
      { name: 'connect6', sourceNode: 'Nurse', targetNode: 'OperationStaff', segments: [{ type: 'straight' }] },
      { name: 'connect7', sourceNode: 'Surgeon', targetNode: 'Doctor', segments: [{ type: 'straight' }] },
      { name: 'connect8', sourceNode: 'FrontDeskStaff', targetNode: 'AdministrativeStaff', segments: [{ type: 'straight' }] },
      { name: 'connect9', sourceNode: 'Technician', targetNode: 'TechnicalStaff', segments: [{ type: 'straight' }] },
      { name: 'connect10', sourceNode: 'Technologist', targetNode: 'TechnicalStaff', segments: [{ type: 'straight' }] },
      { name: 'connect11', sourceNode: 'SurgicalTechnologist', targetNode: 'Technologist', segments: [{ type: 'straight' }] },
      { name: 'connect12', sourceNode: 'Staff', targetNode: 'Department', segments: [{ type: 'straight' }] },
      { name: 'connect13', sourceNode: 'Staff', targetNode: 'Person', segments: [{ type: 'straight' }] },
      { name: 'connect14', sourceNode: 'OperationStaff', targetNode: 'Staff', segments: [{ type: 'straight' }] },
      { name: 'connect15', sourceNode: 'AdministrativeStaff', targetNode: 'Staff', segments: [{ type: 'straight' }] },
      { name: 'connect16', sourceNode: 'TechnicalStaff', targetNode: 'Staff', segments: [{ type: 'straight' }] }
    ];
    this.constraints = ej.datavisualization.Diagram.DiagramConstraints.Default & ~ej.datavisualization.Diagram.DiagramConstraints.PageEditable;
    this.pageSettings = {
      scrollLimit: 'diagram'
    };
    this.defaultSettings = {
      connector: {
        constraints: ej.datavisualization.Diagram.ConnectorConstraints.None,
        segments: [{
          type: 'straight'
        }],
        targetDecorator: {
          width: 10,
          height: 10,
          fillColor: '#666666'
        }
      },
      node: {
        constraints: ej.datavisualization.Diagram.NodeConstraints.Default ^ ej.datavisualization.Diagram.NodeConstraints.Select,
        fillColor: '#26A0DA',
        borderColor: 'transparent',
        borderWidth: 2
      },
      group: {
        constraints: ej.datavisualization.Diagram.NodeConstraints.Default ^ ej.datavisualization.Diagram.NodeConstraints.Select,
        fillColor: '#26A0DA',
        borderColor: 'transparent',
        borderWidth: 2
      }
    };
    for (let i = 0; i < this.nodes.length; i++) {
      nodeTemplate(this.nodes[i]);
    }
    function nodeTemplate(node) {
      if ((node.properties && node.properties.length > 0) || (node.methods && node.methods.length > 0)) {
        node.type = 'group';
        node.children = node.children ? node.children : [];
        node.container = { type: 'stack' };
        node.children.push({
          parent: node.name,
          horizontalAlign: 'stretch',
          height: 30, width: node.minWidth, labels: [{ text: node.className, fontColor: 'white', fontFamily: 'Segoe UI', readOnly: true }]
        });
        createClassMembers(node, node.properties, 'property');
        createClassMembers(node, node.methods, 'method');
      } else {
        node.height = 30;
        if (!node.labels) node.labels = [];
        node.labels.push({ text: node.className, fontColor: 'white', fontFamily: 'Segoe UI', readOnly: true });
      }
    }
    function createClassMembers(node, membersCollection, memberType) {
      if (membersCollection && membersCollection.length > 0) {
        createLine(node);
        for (let j in membersCollection) {
          if (memberType === 'property') {
            createChild(node, membersCollection[j].name + ':' + membersCollection[j].type);
          } else {
            createChild(node, membersCollection[j].name + '(' + membersCollection[j].returnType + '):' + membersCollection[j].parameter);
          }
        }
      }
    }
    function createLine(node) {
      node.children.push({ height: 0.5, width: node.minWidth, borderColor: 'white' });
    }
    function createChild(node, text) {
      node.children.push({
        height: 25, width: node.minWidth, borderColor: 'transparent',
        labels: [{
          fontColor: 'white',
          margin: { left: -64, top: -10 }, horizontalAlignment: 'left', verticalAlignment: 'top',
          text: text,
          fontFamily: 'Segoe UI',
          readOnly: true
        }]
      });
    }
  }
}
