export class SymbolPalette {
    constructor() {
      this.palettes = [
        {
          name: 'Flow Shapes', expanded: true,
          items: [
              { name: 'Process', width: 44, height: 40, offsetX: 20, offsetY: 20, fillColor: 'white', borderWidth: 1, type: 'flow', shape: ej.datavisualization.Diagram.FlowShapes.Process },
              { name: 'Decision', width: 44, height: 40, offsetX: 20, offsetY: 20, fillColor: 'white', borderWidth: 1, type: 'flow', shape: ej.datavisualization.Diagram.FlowShapes.Decision },
              { name: 'Sort', width: 44, height: 40, offsetX: 20, offsetY: 20, fillColor: 'white', borderWidth: 1, type: 'flow', shape: ej.datavisualization.Diagram.FlowShapes.Sort },
              { name: 'Document', width: 44, height: 40, offsetX: 20, offsetY: 15, fillColor: 'white', borderWidth: 1, type: 'flow', shape: ej.datavisualization.Diagram.FlowShapes.Document },
              { name: 'MultiDocument', width: 43, height: 40, offsetX: 20, offsetY: 15, fillColor: 'white', borderWidth: 1, type: 'flow', shape: ej.datavisualization.Diagram.FlowShapes.MultiDocument }
          ]
        },
        {
          name: 'Connectors',
          expanded: true,
          items: [
              { name: 'Link1', segments: [{ type: 'orthogonal' }], sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 }, targetDecorator: { shape: 'arrow' }, paletteItem: { height: 45, width: 57, enableScale: false } },
              { name: 'link2', segments: [{ type: 'orthogonal' }], sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 }, targetDecorator: { shape: 'none' }, paletteItem: { height: 45, width: 57, enableScale: false } },
              { name: 'Link3', segments: [{ type: 'straight' }], sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 }, targetDecorator: { shape: 'arrow' }, paletteItem: { height: 45, width: 57, enableScale: false } },
              { name: 'Link4', segments: [{ type: 'straight' }], sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 40, y: 40 }, targetDecorator: { shape: 'none' }, paletteItem: { height: 45, width: 57, enableScale: false } }
          ]
        },
        {
          name: 'Basic Shapes',
          expanded: true,
          items: [
              { name: 'Rectangle', width: 80, height: 160, paletteItem: { enableScale: false, margin: { left: 4, right: 4, top: 12, bottom: 10 } }, fillColor: 'white', borderWidth: 1, type: 'basic', shape: 'rectangle' },
              { name: 'Rectangle', width: 70, height: 70, fillColor: 'white', borderWidth: 1.5, type: 'basic', shape: 'rectangle' },
              { name: 'Ellipse', width: 70, height: 70, fillColor: 'white', borderWidth: 1.5, type: 'basic', shape: 'ellipse' },
              { name: 'Hexagon', width: 70, height: 70, fillColor: 'white', borderWidth: 1.5, type: 'basic', shape: 'polygon', points: [{ x: 25, y: 0 }, { x: 75, y: 0 }, { x: 100, y: 50 }, { x: 75, y: 100 }, { x: 25, y: 100 }, { x: 0, y: 50 }] },
              { name: 'Triangle', width: 70, height: 70, fillColor: 'white', borderWidth: 1.5, type: 'basic', shape: 'polygon', points: [{ x: 50, y: 0 }, { x: 100, y: 100 }, { x: 0, y: 100 }] }
          ]
        }
      ];
      this.value = 30;
      this.minValue = 20;
      this.maxValue = 100;
      this.palettelist = 'palettelist';
      this.palettelistValue = 'Basic Shapes';
      this.paletteName = 'Flow Shapes';
    }
    changenumeric(args) {
      let symbolpalette = $('#symbolpalette').ejSymbolPalette('instance');
      symbolpalette.setHeaderHeight(args.detail.value);
    }

    change(args) {
      let symbolpalette = $('#symbolpalette').ejSymbolPalette('instance');
      if (!window.preventChange && symbolpalette.activePalette && args && args.detail && args.detail.model) {
        switch (args.detail.model.id) {
        case 'headervisibility':
          symbolpalette.updatePalette(symbolpalette.activePalette.name, { constraints: symbolpalette.activePalette.constraints ^ ej.datavisualization.Diagram.PaletteConstraints.HeaderVisibility });
          break;
        case 'headerinteraction':
          symbolpalette.updatePalette(symbolpalette.activePalette.name, { constraints: symbolpalette.activePalette.constraints ^ ej.datavisualization.Diagram.PaletteConstraints.Expandable });
          break;
        case 'visiblepalette':
          symbolpalette.updatePalette(symbolpalette.activePalette.name, { constraints: symbolpalette.activePalette.constraints ^ ej.datavisualization.Diagram.PaletteConstraints.Visible });
          break;
        default:
          symbolpalette.updatePalette(symbolpalette.activePalette.name, { constraints: ej.datavisualization.Diagram.PaletteConstraints.Default });
          break;
        }
        if (args.detail.model.id === 'itemtext') {
          symbolpalette.showPaletteItemText(!symbolpalette.model.showPaletteItemText);
        }
      }
    }
    palettechange(args) {
      let symbolpalette = $('#symbolpalette').ejSymbolPalette('instance');
      let constraints;
      if (args && args.detail && args.detail.selectedValue) {
        $('#symbolpalette').ejSymbolPalette({ selectedPaletteName: args.detail.selectedValue });
      }
      window.preventChange = true;
      $('#itemtext').ejCheckBox({ checked: symbolpalette.model.showPaletteItemText ? 'checked' : '' });
      constraints = symbolpalette.activePalette.constraints & ej.datavisualization.Diagram.PaletteConstraints.HeaderVisibility;
      $('#headervisibility').ejCheckBox({ checked: constraints ? 'checked' : '' });
      constraints = symbolpalette.activePalette.constraints & ej.datavisualization.Diagram.PaletteConstraints.Visible;
      $('#visiblepalette').ejCheckBox({ checked: constraints ? 'checked' : '' });
      constraints = symbolpalette.activePalette.constraints & ej.datavisualization.Diagram.PaletteConstraints.Expandable;
      $('#headerinteraction').ejCheckBox({ checked: constraints ? 'checked' : '' });
      window.preventChange = false;
    }
}
