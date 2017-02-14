import '../scripts/WorldSalesData';
export class Sales {
  constructor() {
    this.salesOverAllData2011 = window.salesOverAllData2011;
    this.renderRange = false;
    this.gaugeData = [];
    this.chartData = [];
    this.gridData = [];
    this.background = '';
    this.rangeData = [];
    this.mapData = [];
    this.renderingCount = 0;
    this.commonScale = [{
      maximum: 300, scaleBorderWidth: 0.5, startAngle: 170, sweepAngle: 200, radius: 50, showScaleBar: false, size: 1, majorIntervalValue: 100, minorIntervalValue: 10, pointerCap: { radius: 3 }, labels: [{ distanceFromScale: -14, color: '#8c8c8c' }], ticks: [{ style: 'Major', distanceFromScale: 2, height: 16, width: 1, color: 'transparent' }, { style: 'Minor', height: 8, width: 1, distanceFromScale: 2, color: 'transparent' }]
    }];
    this.scale = [[{ showRanges: true }], [{ showRanges: true }], [{ showRanges: true }], [{ showRanges: true }]];
    this.circularGauge = [{
      class: 'automotive', id: 'Automotive', index: 0, model: 'automotiveRef' }, { class: 'books', id: 'Books', index: 1, model: 'booksRef' }, { class: 'clothing', id: 'Clothing', index: 2, model: 'clothingRef' }, { class: 'electronics', id: 'Electronics', index: 3, model: 'electronicsRef'
    }];
    this.prevDate = null;
    this.initialLoading = true;
    this.colChartColor = ['#E8BD46', '#369E63', '#B73939', '#2BAABF', '#CC793B', '#4586A0', '#7AA542', '#C13870', '#B348E5'];
  }
  attached() {
    this.salesOverAllData = JSON.parse(JSON.stringify(this.salesOverAllData2011), this.jsonDeserializeHelper);
    this.renderDatasource();
  }
  created() {
    window.onresize = () => {
      this.containerSale = { 'padding-left': this.getWidth() };
    };
  }
  getWidth() {
    let width = jQuery('.gaugecontainer').width();
    let eleWidth = 204;
    let value = 0;
    if (width > 0) {
      if (width > 825) {
        value = 0;
      } else if (width % eleWidth < 204) {
        value = (width % (eleWidth * 2)) / 3;
      } else if (width % (eleWidth * 2) < 204) {
        value = (width % (eleWidth * 2)) / 3;
      } else if (width % (eleWidth * 3) < 204) {
        value = (width % (eleWidth * 2)) / 4;
      } else {
        value = 0;
      }
      return value;
    }
  }
  jsonDeserializeHelper(key, value) {
    if (typeof value === 'string') {
      let regexp = /^\d\d\d\d-\d\d-\d\dT/.exec(value);
      if (regexp) {
        return new Date(value);
      }
    }
    return value;
  }
  renderDatasource() {
    let dataMgr = ej.DataManager(this.salesOverAllData);// eslint-disable-line new-cap
    let group = ej.Query().from(this.salesOverAllData).group('State');// eslint-disable-line new-cap
    let grid = dataMgr.executeLocal(group);
    let singleDataMgr = ej.DataManager(grid[0].items);// eslint-disable-line new-cap
    group = ej.Query().from(grid[0].items).sortBy('CategoryName').group('CategoryName');// eslint-disable-line new-cap
    let chartgauge = singleDataMgr.executeLocal(group);
    group = ej.Query().from(grid[0].items).group('ShipDate');// eslint-disable-line new-cap
    let range = singleDataMgr.executeLocal(group);
    this.renderRangeData(range);
    this.renderRangeChart(this.rangeData);
    this.renderGaugeData(chartgauge);
    this.renderChartData(chartgauge);
    this.rendermapData(grid);
    this.renderGauge(this.gaugeData);
    this.renderGrid(this.mapData);
    this.renderChart(this.chartData);
    this.afterRender(null);
  }
  renderGaugeData(data, rangeChart) {
    jQuery.each(data, (index, value) => {
      let gauge = { 'Category': value.key, 'SalesPrice': ej.dataUtil.sum(value.items, 'SalesAmount') / (rangeChart ? 100000 : 10000) };
      this.gaugeData.push(gauge);
    });
  }
  labelRendering(args) {
    if (args.data.axis.orientation.toLowerCase() === 'vertical') {
      args.data.label.Text = args.data.label.Value / 10000000 + 'M';
    }
  }
  beforeChartRender(args) {
    jQuery.each(args.model.series[0].points, (index, value) => {
      value.fill = this.colChartColor[index];
    });
  }
  renderChartData(data) {
    let cData = [];
    jQuery.each(data, (index, value) => {
      let category = value.key;
      let sales = ej.dataUtil.sum(value.items, 'SalesAmount');
      let dataVal = { 'SalesPrice': sales, 'Category': category };
      cData.push(dataVal);
    });
    this.chartData.push({ 'series': cData });
  }
  renderRangeData(data) {
    let rangeAmount = 0;
    jQuery.each(data, (index, value) => {
      jQuery.each(value.items, (_index, _value) => {
        rangeAmount = rangeAmount + _value.SalesAmount;
      });
      let range = { 'Date': value.key, 'SalesPrice': rangeAmount };
      rangeAmount = 0;
      this.rangeData.push(range);
    });
  }
  rendermapData(data) {
    jQuery.each(data, (index, value) => {
      let state = value.key;
      let sales = ej.dataUtil.sum(value.items, 'SalesAmount');
      let grid = { 'State': state, 'Sales': sales, 'SalesvsTarget': window.targetData[value.key] / 100 };
      this.mapData.push(grid);
    });
  }
  renderRangeChart(rangeData) {
    this.selectedRangeSettings = { start: rangeData[rangeData.length - 8].Date.toString(), end: rangeData[rangeData.length - 6].Date.toString() };
    this.tooltipSettings = { visible: true, labelFormat: 'dd/MM/yyyy', color: '#2d2d2d', backgroundColor: '#e5e5e5' };
    this.rangeDataSource = rangeData;
    this.navigatorStyleSettings = { selectedregioncolor: 'lightgray', unselectedregioncolor: [{ color: 'black', colorstop: '20%' }, { color: 'white', colorstop: '100%' }], thumbcolor: 'black', thumbradius: 13, background: 'transparent', border: { color: 'transparent', stroke: 0 }, majorgridlinestyle: { color: 'black', visible: true }, minorgridlinestyle: { color: 'black', visible: true } };
    this.rangeSeries = [{ name: 'SalesRate', animation: true, type: 'line', opacity: 1, width: 3, interior: 'darkred', border: { color: 'transparent' } }];
    this.seriesSettings = { type: 'column', animation: true };
    this.labelSettings = { higherLevel: { visible: false, style: { font: { color: 'white', family: 'Segoe UI', style: 'Normal ', size: '10px', opacity: 1, weight: 'regular' } }, border: { color: '#FFFFFF', width: 0 }, gridLineStyle: { color: '#FFFFFF' } }, lowerLevel: { intervalType: 'months', visible: true, style: { font: { color: 'white', family: 'Segoe UI', style: 'Normal ', size: '10px', opacity: 1, weight: 'regular' } }, border: { color: '#FFFFFF', width: 0.1 }, gridLineStyle: { color: '#FFFFFF', width: 0.1 } } };
  }
  renderGauge(gaugeData) {
    let categories = ['automotive', 'books', 'clothing', 'electronics'];
    let firstRange = ['rgba(54,158,99,0.3)', 'rgba(183,57,57,0.3)', 'rgba(43,170,191,0.3)', 'rgba(232,189,70,0.3)'];
    let secondRange = ['rgba(54,158,99,0.6)', 'rgba(183,57,57,0.6)', 'rgba(43,170,191,0.6)', 'rgba(232,189,70,0.6)'];
    let thirdRange = ['rgba(54,158,99,1)', 'rgba(183,57,57,1)', 'rgba(43,170,191,1)', 'rgba(232,189,70,1)'];
    if (!this.initialLoading) {
      jQuery.each(categories, (i, v) => {
        this.circularGauge[i].model.setPointerValue(0, 0, jQuery.map(gaugeData, (value, index) => { if (value.Category.toLowerCase() === categories[i]) return value.SalesPrice; }));
        this.circularGauge[i].model.setCustomLabelValue(0, 0, '$' + parseInt((jQuery.map(gaugeData, (value, index) => { if (value.Category.toLowerCase() === categories[i]) return value.SalesPrice; })), 10) + 'K ' + '(' + ((jQuery.map(gaugeData, (value, index) => { if (value.Category.toLowerCase() === categories[i]) return value.SalesPrice; }) / 150) * 100).toFixed(2) + '%)');
      });
    } else {
      jQuery.each(categories, (i, v) => {
        this.commonLabel = [{
          pointers: [{ value: jQuery.map(gaugeData, (value, index) => { if (value.Category.toLowerCase() === categories[i]) return value.SalesPrice; }), showBackNeedle: true, backNeedleLength: 10, length: 35, width: 2, color: '#898989'}],
          customLabels: [{ value: '$' + parseInt((jQuery.map(gaugeData, (value, index) => { if (value.Category.toLowerCase() === categories[i]) return value.SalesPrice; })), 10) + 'K ' + '(' + ((jQuery.map(gaugeData, (value, index) => { if (value.Category.toLowerCase() === categories[i]) return   value.SalesPrice; }) / 150) * 100).toFixed(2) + '%', position: { x: 115, y: 102 }, font: { size: '11px', fontFamily: 'Segoe UI', fontStyle: 'normal' }, color: 'gray' }],
          ranges: [{ distanceFromScale: -20, startValue: 0, endValue: 95, backgroundColor: firstRange[i], border: { color: firstRange[i] }, size: 2 }, { distanceFromScale: -20, startValue: 101, endValue: 200, backgroundColor: secondRange[i], border: { color: secondRange[i] }, size: 2 }, { distanceFromScale: -20, startValue: 208, endValue: 300, backgroundColor: thirdRange[i], border: { color: thirdRange[i] }, size: 2 }]
        }];
        jQuery.extend(this.scale[i][0], this.commonLabel[0], this.commonScale[0]);
      });
    }
  }
  renderChart(chartData) {
    this.xAxis = { majorGridLines: { visible: false }, labelRotation: 35 };
    this.yAxis = { rangePadding: 'normal', labelFormat: '{value}M' };
    this.series = [{ dataSource: chartData[0].series, xName: 'Category', yName: 'SalesPrice', type: 'column', enableAnimation: true }];
    this.size = { height: '420' };
    this.legend = { visible: false };
  }
  renderGrid(gridData) {
    this.dataSource = gridData;
    this.scrollSettings = { height: 350, width: 0 };
    this.columns = [{ field: 'State', headerText: 'Country', width: 120 }, { field: 'Sales', headerText: 'Sales', width: 80 }, { field: 'SalesvsTarget', width: 70, headerText: 'Marketing vs Revenue' }];
  }
  queryCellInfo(args) {
    let element = jQuery(args.cell);
    switch (args.column.headerText) {
    case 'Sales':
      if (!element.hasClass('templatecell')) {
        let value = parseInt(parseFloat(args.cell.innerHTML, 10) / 10000, 10);
        args.cell.innerHTML = (ej.format(value, 'c0') + 'M');
      }
      break;
    case 'Marketing vs Revenue':
      let value = parseFloat(parseFloat(args.cell.innerHTML).toFixed(2));
      args.cell.innerHTML = ('<div class ="value">' + value + '%</div>');
      element.append(jQuery('<div class ="triangle"></div>'));
      if (parseInt(parseFloat(args.data.Sales, 10) / 10000, 10) < 45) {
        element.addClass('target');
      }
      break;
    default:
    }
  }
  clearRangeRelatedData() {
    this.mapData = [];
    this.gridData = [];
    this.chartData = [];
    this.gaugeData = [];
  }
  rangeDateSelected(args) {
    this.renderingCount++;
    if (!this.initialLoading && this.renderRange) {
      this.clearRangeRelatedData();
      this.background = 'addbackground';
      window.startDate = args.selectedRangeSettings.start;
      window.endDate = args.selectedRangeSettings.end;
      if (window.endDate === 'Invalid Date') {
        if (prevDate === null) {
          if (document.documentMode === 8) {
            let result = this.rangeData[this.rangeData.length - 6].Date;
            result = result.split('/');
            this.prevDate = new Date(result[2], result[1], result[0]).toString();
          } else {
            this.prevDate = this.rangeData[this.rangeData.length - 6].Date.toString();
          }
        }
        window.endDate = this.prevDate;
      } else {
        this.prevDate = window.endDate;
      }
      if (!window.isUpdated) {
        window.isUpdated = true;
        window.timeoutCallback = setTimeout(() => this.updateElements(), 500);
      } else {
        clearTimeout(window.timeoutCallback);
        window.timeoutCallback = setTimeout(() => this.updateElements(), 500);
        window.isUpdated = true;
      }
      this.background = '';
    }
    if (this.renderingCount === 2) {
      this.renderRange = true;
    }
  }
  updateElements() {
    let dataMgr = ej.DataManager(this.salesOverAllData);// eslint-disable-line new-cap
    let predicate = ej.Predicate('ShipDate', ej.FilterOperators.greaterThan, window.startDate, false);// eslint-disable-line new-cap
    predicate = predicate.and('ShipDate', ej.FilterOperators.lessThanOrEqual, window.endDate, false);
    let group = ej.Query().from(this.salesOverAllData).where(predicate).group('State');// eslint-disable-line new-cap
    let grid = dataMgr.executeLocal(group);
    if (grid.length > 0) {
      this.rendermapData(grid);
      group = ej.Query().from(this.salesOverAllData).where(predicate).sortBy('CategoryName').group('CategoryName');// eslint-disable-line new-cap
      let chartgauge = dataMgr.executeLocal(group);
      this.renderChartData(chartgauge);
      this.renderGaugeData(chartgauge, true);
      this.renderChart(this.chartData);
      this.renderGauge(this.gaugeData);
      this.renderGrid(this.mapData);
      this.background = '';
    }
  }
  afterRender(args) {
    setTimeout(() => {
      this.background = '';
      this.initialLoading = false;
    }, 0);
  }
  gridRowSelected(args) {
    this.background = 'addbackground';
    this.clearRangeRelatedData();
    this.initialLoading = true;
    let currentState = args.data.State;
    let dataMgr = ej.DataManager(this.salesOverAllData);// eslint-disable-line new-cap
    let group = ej.Query().from(this.salesOverAllData).where('State', ej.FilterOperators.equal, currentState).sortBy('CategoryName').group('CategoryName');// eslint-disable-line new-cap
    let chartgauge = dataMgr.executeLocal(group);
    this.renderChartData(chartgauge);
    this.renderGaugeData(chartgauge);
    this.renderChart(this.chartData);
    this.initialLoading = false;
    this.renderGauge(this.gaugeData);
    this.background = '';
  }
}
