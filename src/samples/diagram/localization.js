export class Localization {
    constructor() {
      let FlowShapes = ej.datavisualization.Diagram.FlowShapes;
      ej.datavisualization.Diagram.Locale['es-ES'] = {
        cut: 'Corte',
        copy: 'Copia',
        paste: 'Pasta',
        undo: 'Deshacer',
        redo: 'Rehacer',
        selectAll: 'Seleccionar todo',
        grouping: 'Agrupacin',
        group: 'Grupo',
        ungroup: 'Desagrupar',
        order: 'Fin',
        bringToFront: 'Traer a delante',
        moveForward: 'Movimiento adelante',
        sendToBack: 'Enviar a espalda',
        sendBackward: 'Enviar hacia atrs'
      };
      ej.datavisualization.Diagram.Locale['de-DE'] = {
        cut: 'Schnitt',
        copy: 'Kopie',
        paste: 'Klebstoff',
        undo: 'Rckgngig ',
        redo: 'Rehacer',
        selectAll: 'Whlen alle',
        grouping: 'Gruppierung',
        group: 'Gruppe',
        ungroup: 'Aufheben',
        order: 'Bestellen',
        bringToFront: 'Bringen zu Front',
        moveForward: 'Umzug vorwrts',
        sendToBack: 'Senden zu zurck',
        sendBackward: 'Senden rckwrts'
      };
      this.objects =  [
        { name: 'NewIdea', width: 150, height: 60, offsetY: 60, labels: [{ 'text': 'Start Terminator', 'fontColor': 'white' }], type: 'flow', shape: FlowShapes.Terminator },
        { name: 'Meeting', width: 150, height: 60, offsetY: 165,  labels: [{ 'text': 'Progress'}], type: 'flow', shape: FlowShapes.Process  },
        { name: 'BoardDecision', width: 150, height: 100,  offsetY: 285, labels: [{ text: 'Decision' }], type: 'flow', shape: FlowShapes.Decision  },
        { name: 'Data', width: 150, height: 100,  offsetY: 425,  labels: [{ 'text': 'Data'}], type: 'flow', shape: FlowShapes.Data  },
        { name: 'Document', width: 150, height: 60,  offsetY: 545,  labels: [{ 'text': 'Document' }], type: 'flow', shape: FlowShapes. Document   },
        { name: 'End', width: 150, height: 60, offsetY: 650, labels: [{ 'text': 'End Terminator' }], type: 'flow', shape: FlowShapes.Terminator}
      ];
      this.connectors = [
        { name: 'connector1', sourceNode: 'NewIdea', targetNode: 'Meeting' },
        { name: 'connector2', sourceNode: 'Meeting', targetNode: 'BoardDecision' },
        { name: 'connector3', sourceNode: 'BoardDecision', targetNode: 'Data', labels: [{ 'text': 'Yes' }] },
        { name: 'connector4', sourceNode: 'Data', targetNode: 'Document', labels: [{ 'text': '' }] },
        { name: 'connector5', sourceNode: 'Document', targetNode: 'End', labels: [{ 'text': '' }] },
        { name: 'connector6', sourceNode: 'BoardDecision', targetNode: 'Meeting', segments: [{ 'type': 'orthogonal', length: 50, direction: 'right' }], labels: [{ 'text': 'No', horizontalAlignment: 'left' }], sourceDecorator: { shape: 'none'}, targetDecorator: { shape: 'arrow' }
      }];
      this.snapSettings = { snapConstraints: ej.datavisualization.Diagram.SnapConstraints.None };
      this.pageSettings = {  scrollLimit: 'diagram'};
      this.defaultSettings = {
        node: { offsetX: 340, borderColor: '#1BA0E2', fillColor: 'darkcyan', labels: [{ 'fontColor': 'white' }] },
        connector: { targetDecorator: { shape: 'arrow', borderColor: '#606060', width: '10', height: '10' }, segments: [{ 'type': 'orthogonal' }], lineWidth: 2, lineColor: '#606060', labels: [{ 'fillColor': 'white', 'fontColor': 'black' }] }
      };
      this.locale = 'es-ES';
      this.target = 'languageList';
      this.text = 'English';
    }
    Change(args) {
      let Labels = [];
      let diagram = $('#diagram').ejDiagram('instance');
      Labels = {
        'en-US': [
            { nodeName: 'NewIdea', label: 'Start Terminator' },
            { nodeName: 'Meeting', label: 'Progress' },
            { nodeName: 'BoardDecision', label: 'Decision' },
            { nodeName: 'Data', label: 'Data' },
            { nodeName: 'End', label: 'End Terminator' },
            { nodeName: 'Document', label: 'Document' },
            { nodeName: 'connector3', label: 'Yes' },
            { nodeName: 'connector6', label: 'No' }
        ],
        'de-DE': [
            { nodeName: 'NewIdea', label: 'Start Terminator' },
            { nodeName: 'Meeting', label: 'Fortschritt' },
            { nodeName: 'BoardDecision', label: 'Entscheidung' },
            { nodeName: 'Data', label: 'Daten' },
            { nodeName: 'End', label: 'Ende Terminator' },
            { nodeName: 'Document', label: 'Dokument' },
            { nodeName: 'connector3', label: 'Ja' },
            { nodeName: 'connector6', label: 'Keine' }
        ],
        'es-ES': [
            { nodeName: 'NewIdea', label: 'Comienzo Terminator' },
            { nodeName: 'Meeting', label: 'Progreso' },
            { nodeName: 'BoardDecision', label: 'Decisi�n' },
            { nodeName: 'Data', label: 'Datos' },
            { nodeName: 'End', label: 'Fin  Terminator' },
            { nodeName: 'Document', label: 'Documento' },
            { nodeName: 'connector3', label: 'S�' },
            { nodeName: 'connector6', label: 'No' }
        ]
      };
      let currentCulture = Labels[args.detail.value];
      $('#diagram').ejDiagram('model.locale', args.detail.value);
      for (let i = 0; i < currentCulture.length; i++) {
        let node = diagram.nameTable[currentCulture[i].nodeName];
        if (node) {
          diagram.updateLabel(node.name, node.labels[0], { text: currentCulture[i].label });
        }
      }
    }
    create() {
      let diagram = $('#diagram').ejDiagram('instance');
      diagram.fitToPage('height', 'content');
    }
}
