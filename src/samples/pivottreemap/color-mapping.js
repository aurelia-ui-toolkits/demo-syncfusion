export class BasicUse {
  constructor() {
    this.pivotData = {
      data: 'http://bi.syncfusion.com/olap/msmdpump.dll', //data
      catalog: 'Adventure Works DW 2008 SE',
      cube: 'Adventure Works',
      rows: [
        {
          fieldName: '[Date].[Fiscal]'
        }
      ],
      columns: [
        {
          fieldName: '[Customer].[Customer Geography]'
        }
      ],
      values: [
        {
          measures: [
            {
              fieldName: '[Measures].[Internet Sales Amount]'
            }
          ],
          axis: 'columns'
        }
      ]
    };
  }
  renderFieldList(args) {
    let treemapTarget = $('#pivotTreeMapColorTreeMapContainer').data('ejTreeMap');
    treemapTarget.model.colorValuePath = '';
    treemapTarget.model.enableGradient = false;
    treemapTarget.model.showLegend = false;
    treemapTarget.model.legendSettings.leftLabel = '';
    treemapTarget.model.legendSettings.rightLabel = '';
    treemapTarget.model.rangeColorMapping = [];
    treemapTarget.model.colorValuePath = 'Index';
    treemapTarget.model.rangeColorMapping.push(
      { color: '#9de24f', from: '0', to: '0' },
      { color: '#a2e2fe', from: '1', to: '1' },
      { color: '#ffff66', from: '2', to: '2' },
      { color: '#FF0040', from: '3', to: '3' },
      { color: '#f6b53f', from: '4', to: '4' },
      { color: '#6FAAB0', from: '5', to: '5' },
      { color: '#C4C24A', from: '6', to: '6' }
    );
    treemapTarget.refresh();
  }
}
