export class Virtualization {
    constructor() {
      let colorMappingCollection = [
        { value: 0, color: '#fe0002', label: { text: '0' } },
        { value: 30, color: '#ffff01', label: { text: '30' } },
        { value: 60, color: '#13ab11', label: { text: '60' } },
        { value: 100, color: '#005ba2', label: { text: '100' } }
      ];
      let heatmapData = [];
      for (let i = 0; i < 900; i++) {
        heatmapData.push({
          'Year': 2016 - i,
          'Jan': getValue(), 'Feb': getValue(), 'Mar': getValue(), 'Apr': getValue(), 'May': getValue(), 'Jun': getValue(),
          'Jul': getValue(), 'Aug': getValue(), 'Sep': getValue(), 'Oct': getValue(), 'Nov': getValue(), 'Dec': getValue()
        });
      }
      this.colorMappingCollection = colorMappingCollection;
      this.itemsMapping = {
        headerMapping: { 'propertyName': 'Year', 'displayName': 'Year', columnStyle: { textAlign: 'right' } },
        columnMapping: [
            { 'propertyName': 'Jan', 'displayName': 'January' },
            { 'propertyName': 'Feb', 'displayName': 'February' },
            { 'propertyName': 'Mar', 'displayName': 'March' },
            { 'propertyName': 'Apr', 'displayName': 'April' },
            { 'propertyName': 'May', 'displayName': 'May' },
            { 'propertyName': 'Jun', 'displayName': 'June' },
            { 'propertyName': 'Jul', 'displayName': 'July' },
            { 'propertyName': 'Aug', 'displayName': 'August' },
            { 'propertyName': 'Sep', 'displayName': 'September' },
            { 'propertyName': 'Oct', 'displayName': 'October' },
            { 'propertyName': 'Nov', 'displayName': 'November' },
            { 'propertyName': 'Dec', 'displayName': 'December' }
        ]
      };
      this.legendCollection = ['heatmap_legend'];
      this.itemsSource = heatmapData;
    }
}
function getValue() {
  return Math.floor((Math.random() * 100) + 1);
}
