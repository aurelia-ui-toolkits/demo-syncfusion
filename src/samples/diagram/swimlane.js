export class Swimlane {
  constructor() {
    let pathData = 'M 120 24.9999 C 120 38.8072 109.642 50 96.8653 50 L 23.135' +
                    ' 50 C 10.3578 50 0 38.8072 0 24.9999 L 0 24.9999 C' +
                    '0 11.1928 10.3578 0 23.135 0 L 96.8653 0 C 109.642 0 120 11.1928 120 24.9999 Z';
    let palettes = [
      {
        name: 'Flow Shapes', expanded: true,
        items: [
          //add the flow shapes to the symbol palette
          {
            name: 'Rectangle', height: 45, width: 70, offsetX: 70 / 2,
            offsetY: 45 / 2, fillColor: 'white', borderWidth: 1.5, type: 'basic',
            shape: 'rectangle'
          },
          {
            name: 'Ellipse', width: 70, height: 70, offsetX: 20, offsetY: 20,
            fillColor: 'white', borderWidth: 1.5, type: 'basic', shape: 'ellipse'
          },
          {
            name: 'Parallelogram', width: 70, height: 70, offsetX: 20,
            offsetY: 30, fillColor: 'white', borderWidth: 1.8, shape: 'polygon',
            points: [
                        { x: 25, y: 1 },
                        { x: 99, y: 1 },
                        { x: 75, y: 99},
                        { x: 1, y: 99}
            ]
          },
          {
            name: 'Dimond', width: 70, height: 70, offsetX: 20,
            offsetY: 20, fillColor: 'white', borderWidth: 1.8, shape: 'polygon',
            points: [
                        { x: 50, y: 1 },
                        { x: 100, y: 50 },
                        { x: 50, y: 100 },
                        { x: 1, y: 50 }
            ]
          }
        ]
      },
      {
        name: ' Swimlane Shapes',
        expanded: true,
        items: [
            //add the swimlane shapes to the symbol palette
          {
            name: 'stackCanvas1',
            header: { width: 50, height: 50,
                fillColor: '#C7D4DF', fontSize: 11
            },
            height: 60, width: 140, fillColor: '#f5f5f5', offsetX: 70,
            offsetY: 30, orientation: 'horizontal', isLane: true
          },
          {
            name: 'stackCanvas2',
            header: { width: 50, height: 50,
                fillColor: '#C7D4DF', fontSize: 11
            },
            height: 140, width: 60, fillColor: '#f5f5f5',
            offsetX: 30, offsetY: 70, orientation: 'vertical', isLane: true
          },
          {
            name: 'verticalPhase', type: 'phase',
            lineWidth: 1, lineDashArray: '3,3', lineColor: '#A9A9A9',
            parent: '', orientation: 'vertical',
            label: { text: '' }
          },
          {
            name: 'horizontalPhase', type: 'phase', lineWidth: 1, lineDashArray: '3,3',
            lineColor: '#A9A9A9', parent: '', orientation: 'horizontal',
            label: { text: '' }
          }
        ]
      },
      {
        name: ' Connectors',
        expanded: true,
        items: [
            //add the connectors to the symbol palette
          {
            name: 'Link1',
            segments: [{
              type: 'orthogonal'
            }],
            sourcePoint: {
              x: 0,
              y: 0
            },
            targetPoint: {
              x: 40,
              y: 40
            },
            targetDecorator: {
              shape: 'arrow',
              borderColor: '#A9A9A9',
              fillColor: '#A9A9A9'
            },
            lineWidth: 2,
            lineColor: '#A9A9A9'
          },
          {
            name: 'Link21',
            segments: [{
              type: 'straight'
            }],
            sourcePoint: {
              x: 0,
              y: 0
            },
            targetPoint: {
              x: 40,
              y: 40
            },
            targetDecorator: {
              shape: 'arrow',
              borderColor: '#A9A9A9',
              fillColor: '#A9A9A9'
            },
            lineWidth: 2,
            lineColor: '#A9A9A9'
          }
        ]
      }];
    let darkColor = '#C7D4DF';
    let lightColor = '#f5f5f5';
    let nodes = [{
      //creating the swimlane and set its type as swimlane
      type: 'swimlane',
      name: 'swimlane',
      //initialize swimlane header
      header: {
        text: 'ONLINE PURCHASE STATUS',
        height: 50,
        fillColor: darkColor,
        fontSize: 11
      },
      fillColor: lightColor,
      orientation: 'horizontal',
      offsetX: 350,
      offsetY: 290,
      height: 100,
      width: 650,
      lanes: [
        //initialize the lanes
        {
          name: 'stackCanvas1',
          //set the header properties
          header: {
            text: 'CUSTOMER',
            width: 50,
            fillColor: darkColor,
            fontSize: 11
          },
          fillColor: lightColor,
          height: 120,
          //initialize the lane children
          children: [{
            shape: 'path',
            pathData: pathData,
            name: 'Order',
            labels: [{
              text: 'ORDER',
              fontSize: 11
            }],
            marginLeft: 70,
            marginTop: 1
          }]
        },
        {
          name: 'stackCanvas2',
          header: {
            text: 'ONLINE',
            width: 50,
            fillColor: darkColor,
            fontSize: 11
          },
          fillColor: lightColor,
          height: 120,
          children: [
            {
              name: 'selectItemaddcart',
              labels: [{
                text: 'Select item\nAdd cart'
              }],
              marginLeft: 190,
              marginTop: 20
            },
            {
              name: 'paymentondebitcreditcard',
              labels: [{
                text: 'Payment on\nDebit/Credit Card'
              }],
              marginLeft: 350,
              marginTop: 20
            }
          ]
        },
        {
          name: 'stackCanvas3',
          header: {
            text: 'SHOP',
            width: 50,
            fillColor: darkColor,
            fontSize: 11
          },
          fillColor: lightColor,
          height: 120,
          children: [
            {
              name: 'getmaildetailaboutorder',
              labels: [{
                text: 'Get mail detail\nabout order'
              }],
              marginLeft: 190,
              marginTop: 20
            },
            {
              name: 'pakingitem',
              labels: [{
                text: 'Paking item'
              }],
              marginLeft: 350,
              marginTop: 20
            }
          ]
        },
        {
          name: 'stackCanvas4',
          header: {
            text: 'DELIVERY',
            width: 50,
            fillColor: darkColor,
            fontSize: 11
          },
          fillColor: lightColor,
          height: 120,
          children: [
            {
              name: 'sendcourieraboutaddress',
              labels: [{
                text: 'Send Courier\n about Address'
              }],
              marginLeft: 190,
              marginTop: 20
            },
            {
              name: 'deliveryonthataddress',
              labels: [{
                text: 'Delivery on that\n Address'
              }],
              marginLeft: 350,
              marginTop: 20
            },
            {
              name: 'getitItem',
              shape: 'path',
              pathData: pathData,
              labels: [{
                text: 'GET IT ITEM',
                fontSize: 11
              }],
              marginLeft: 500,
              marginTop: 20
            }
          ]
        }
      ],
      //creating the phases of the swimlane
      phases: [
        //set the properties of the phase
        {
          name: 'phase1',
          offset: 200,
          lineWidth: 1,
          lineDashArray: '3,3',
          lineColor: '#606060',
          label: {
            text: 'Phase'
          }
        },
        {
          name: 'phase2',
          offset: 500,
          lineWidth: 1,
          lineDashArray: '3,3',
          lineColor: '#606060',
          label: {
            text: 'Phase'
          }
        }
      ],
      phaseSize: 20
    }];
    //create the connectors
    let connectors = [
      //add the connector properties
      {
        name: 'connector1',
        sourceNode: 'Order',
        targetNode: 'selectItemaddcart'
      },
      {
        name: 'connector2',
        sourceNode: 'selectItemaddcart',
        targetNode: 'paymentondebitcreditcard'
      },
      {
        name: 'connector3',
        sourceNode: 'paymentondebitcreditcard',
        targetNode: 'getmaildetailaboutorder'
      },
      {
        name: 'connector4',
        sourceNode: 'getmaildetailaboutorder',
        targetNode: 'pakingitem'
      },
      {
        name: 'connector5',
        sourceNode: 'pakingitem',
        targetNode: 'sendcourieraboutaddress'
      },
      {
        name: 'connector6',
        sourceNode: 'sendcourieraboutaddress',
        targetNode: 'deliveryonthataddress'
      },
      {
        name: 'connector7',
        sourceNode: 'deliveryonthataddress',
        targetNode: 'getitItem'
      }
    ];
    this.nodes = nodes;
    this.connectors = connectors;
    this.palettes = palettes;
    this.defaultSettings = {
      //set the default properties of the nodes.
      node: {
        width: 100,
        height: 40,
        fillColor: 'white',
        labels: [{
          fontSize: 11
        }]
      },
      //set the default properties of the connectors.
      connector: {
        targetDecorator: {
          shape: 'arrow',
          borderColor: '#606060',
          width: '10',
          height: '10'
        },
        lineColor: '#606060',
        segments: [{
          type: 'orthogonal',
          length: null
        }]
      }
    };
    this.pageSettings = {
      pageHeight: 1020,
      pageWidth: 1020,
      scrollLimit: 'diagram'
    };
    //remove the rotate handle through selector constraints.
    this.selectedItems = {
      constraints: ej.datavisualization.Diagram.SelectorConstraints.All ^
          ej.datavisualization.Diagram.SelectorConstraints.Rotator
    };
  }
}
