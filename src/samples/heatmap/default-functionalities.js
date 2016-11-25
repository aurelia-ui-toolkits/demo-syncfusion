export class BasicUse {
    constructor() {
      let columns = ['Vegie-spread', 'Tofuaa', 'Alice Mutton', 'Konbu', 'Fltemysost'];
      let itemSource = [];
      for (let i = 0; i < columns.length; i++) {
        for (let j = 0; j < 6; j++) {
          let value = Math.floor((Math.random() * 100) + 1);
          itemSource.push({ ProductName: columns[i], Year: 'Y' + (2011 + j), Value: value });
        }
      }
      let colorMappingCollection = [
        { value: 0, color: '#8ec8f8', label: { text: '0' } },
        { value: 100, color: '#0d47a1', label: { text: '100' } }
      ];
      this.colorMappingCollection = colorMappingCollection;
      this.itemsMapping = {
        column: { 'propertyName': 'ProductName', 'displayName': 'Product Name' },
        row: { 'propertyName': 'Year', 'displayName': 'Year' },
        value: { 'propertyName': 'Value' },
        columnMapping: [
            { 'propertyName': columns[0], 'displayName': columns[0] },
            { 'propertyName': columns[1], 'displayName': columns[1] },
            { 'propertyName': columns[2], 'displayName': columns[2] },
            { 'propertyName': columns[3], 'displayName': columns[3] },
            { 'propertyName': columns[4], 'displayName': columns[4] }
        ],
        headerMapping: { 'propertyName': 'Year', 'displayName': 'Year' }
      };
      this.legendCollection = ['heatmap_legend'];
      this.itemsSource = itemSource;
    }
}
