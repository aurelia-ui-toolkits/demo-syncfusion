export class Stock {
    constructor() {
      this.chartArea = { border: { color: 'transparent' } };
      this.chart_xaxis = { majorGridLines: { visible: false }, majorTickLines: { visible: false }, labelFormat: 'MMM-yy', valueType: 'datetime', rangePadding: 'none' };
      this.chart_yaxis = { axisLine: { visible: false }, majorTickLines: { visible: false }, majorGridLines: { visible: true }, rangePadding: 'none', range: { min: 0, max: 800, interval: 200 }, font: { color: 'transparent' } };
      this.chart_common = { tooltip: { visible: true } };
      this.chart_series = [{ name: 'Bank', type: 'hiloopenclose', border: { width: 1 }, tooltip: { template: 'Tooltip' } }];
      this.chart_title = { text: 'GOOG', font: { size: '45px', color: '#b9cfe7', fontWeight: 'lighter' }, textAlignment: 'far' };
      this.chart_legend = { visible: false };
      this.chart_size = { height: '300' };
      this.chart_margin = { right: 20 };
      this.col_xaxis = { range: { min: new Date(2008, 2, 1), max: new Date(2013, 1, 1), interval: 1 }, intervalType: 'Years', labelFormat: 'yyyy', valueType: 'datetime', majorGridLines: { visible: false }, majorTickLines: { visible: false } };
      this.col_yaxis = { range: { min: 100, max: 800, interval: 100 }, axisLine: { visible: false }, majorTickLines: { visible: false }, rangePadding: 'none', font: { color: 'transparent' } };
      this.col_series = [{ name: 'Gold', type: 'column', enableAnimation: true, fill: '#ba4558' }, { name: 'silver', type: 'column', enableAnimation: true, fill: '#1d9059' }];
      this.col_legend = { visible: false };
      this.col_size = { height: '250' };
      this.changeYear = [{ id: '5y' }, { id: '3y' }, { id: '2y' }, { id: '1y' }];
      this.googRange = { range: { min: 0, max: 800, interval: 200 } };
      this.nokRange = { range: { min: 0, max: 50, interval: 10 } };
      this.msftRange = { range: { min: 10, max: 40, interval: 10 } };
      this.aaplRange = { range: { min: 0, max: 800, interval: 200 } };
      this.toolTip = [{ name: 'Date:', tipName: '#point.x#' }, { name: 'Open:', tipName: '#point.open#' }, { name: 'High:', tipName: '#point.high#' }, { name: 'Low:', tipName: '#point.low#' }, { name: 'Close:', tipName: '#point.close#' }];
      this.stockAnalysis = [{ event: 'goog_ref', id: 'GOOG', wait: 'goog-wait', decrement: 'decrement', decrement_value: '70.39', down: 'down', downarrow: 'downarrow', high_value: 'High: 764.8', low_value: 'Low: 673.5', popup: true }, { event: 'msft_ref', id: 'MSFT', wait: 'msft-wait', decrement: 'increment', decrement_value: '1.82', down: 'up', downarrow: 'uparrow', high_value: 'High: 37.5', low_value: 'Low: 32.68', popup: false }, { event: 'aapl_ref', id: 'AAPL', wait: 'aapl-wait', decrement: 'increment', decrement_value: '7.61', down: 'up', downarrow: 'uparrow', high_value: 'High: 705.7', low_value: 'Low: 656.0', popup: false }, { event: 'nok_ref', id: 'NOK', wait: 'nok-wait', decrement: 'decrement', decrement_value: '10.35', down: 'down', downarrow: 'downarrow', high_value: 'High: 42.22', low_value: 'Low: 36.6', popup: false }];
    }
    attached() {
      this.Tile = { 'display': 'none' };
      let marginReady = this.getWidth();
      this.stockRow = { 'padding-left': marginReady };
    }
    created() {
      window.onresize = () => {
        this.Tile = { 'display': 'none' };
        let marginResize = this.getWidth();
        this.stockRow = { 'padding-left': marginResize };
      };
    }
    getWidth() {
      let ownerWindth = $(this.sampleTitle).width();
      if (ownerWindth < 700) this.owner = { 'display': 'none' };
        else this.owner = { 'display': 'inline' };
      let width = $(this.stock).width();
      if (width < 418) {
        this.Tile = { 'display': 'inline' };
        this.stockStatus = { 'display': 'none' };
        this.imageLabel = { 'font-size': '20px' };
      } else {
        this.Tile = { 'display': 'none' };
        this.stockStatus = { 'display': 'block' };
        this.imageLabel = { 'font-size': '27px' };
      }
      let eleWidth = 209;
      let value = 0;
      if (width > 0) {
        if (width > 825) {
          value = 0;
        } else if (width % eleWidth < 200) {
          value = ((width % eleWidth) / 2);
        } else if (width % (eleWidth * 2) < 200) {
          value = ((width % (eleWidth * 2)) / 2);
        } else if (width % (eleWidth * 3) < 200) {
          value = ((width % (eleWidth * 2)) / 2);
        } else {
          value = 0;
        }
        return value;
      }
    }
    stockClick(e, element) {
      Object.keys(this.stockAnalysis).forEach((key, keyIndex) => {
        if (this.stockAnalysis[key].id === element.id) {
          this.stockAnalysis[keyIndex].popup = true;
        }
      });
      this.showPopupHilo = true;
      this.getWebAPIData(element.id);
      this.hiloChart.widget.element.ejChart({ title: { text: element.id } });
      let columnData = this.getData();
      this.columnChart.widget.element.ejChart({ 'datasource': this.setdatasource(columnData), 'primaryXAxis': this.setRangeAxis(5) });
    }
    tilClick(e) {
      if (this.stockStatus.display === 'inline') {
        this.stockStatus = { 'display': 'none' };
      } else {
        this.stockStatus = { 'display': 'inline' };
      }
    }
    hiloChartLoad(sender) {
      this.showPopupHilo = true;
      let hiloWidth = $(this.stock).width();
      if (hiloWidth > 400) {
        Object.keys(this.stockAnalysis).forEach((key, keyIndex) => {
          if (this.stockAnalysis[key].id === sender.model.title.text) {
            this.stockAnalysis[keyIndex].popup = true;
          }
        });
      }
      this.getWebAPIData(sender.model.title.text, sender);
      this.getWebAPIData('GOOG', sender);
      this.getWebAPIData('NOK', sender);
      this.getWebAPIData('AAPL', sender);
      this.getWebAPIData('MSFT', sender);
    }
    getWebAPIData(filename, sender) {
      let dataManger = ej.DataManager({ // eslint-disable-line new-cap
        url: 'http://mvc.syncfusion.com/Services/api/Stock/' + filename + ''
      });
      dataManger.executeQuery(ej.Query()).done((e) => { // eslint-disable-line new-cap
        this.hiloChart.widget.element.ejChart({ 'datasource': this.sethilodatasource(e.result), 'primaryXAxis': this.setHiloRangeXAxis(), 'primaryYAxis': this.setHiloRangeAxis(filename) });
        Object.keys(this.stockAnalysis).forEach((key, keyIndex) => {
          if (this.stockAnalysis[key].id === filename) {
            this.stockAnalysis[keyIndex].popup = false;
          }
        });
        this.showPopupHilo = false;
      });
    }
    sethilodatasource(data) {
      return {
        series: [{ dataSource: data, xName: 'XValue', high: 'High', open: 'Open', low: 'Low', close: 'Close' }]
      };
    }
    setdatasource(data) {
      return {
        series: [{ dataSource: data.Open, xName: 'XValue', yName: 'YValue' }, { dataSource: data.Close, xName: 'XValue', yName: 'YValue' }]
      };
    }
    setHiloRangeXAxis() {
      return {
        range: { min: new Date(2007, 9, 1), max: new Date(2012, 10, 31), interval: 10 },
        intervalType: 'Months'
      };
    }
    setHiloRangeAxis(range) {
      switch (range) {
      case 'GOOG':
      case 'NOK':
      case 'MSFT':
      case 'AAPL':
        return this[range.toLocaleLowerCase() + 'Range'];
      default:
      }
    }
    colChartLoad(sender) {
      let data = this.getData(5);
      sender.model.series[0].dataSource = data.Open;
      sender.model.series[0].xName = 'XValue';
      sender.model.series[0].yName = 'YValue';
      sender.model.series[1].dataSource = data.Close;
      sender.model.series[1].xName = 'XValue';
      sender.model.series[1].yName = 'YValue';
    }
    setRangeAxis(range) {
      switch (range) {
      case 1:
        return {
          range: { min: new Date(2011, 12, 1), max: new Date(2012, 12, 1), interval: 1 },
          intervalType: 'Months',
          labelFormat: 'MMM'
        };
      case 2:
        return {
          range: { min: new Date(2011, 2, 1), max: new Date(2013, 2, 1), interval: 1 },
          intervalType: 'Years',
          labelFormat: 'yyyy'
        };
      case 3:
        return {
          range: { min: new Date(2010, 2, 1), max: new Date(2013, 2, 1), interval: 1 },
          intervalType: 'Years',
          labelFormat: 'yyyy'
        };
      default:
        return {
          range: { min: new Date(2008, 2, 1), max: new Date(2013, 2, 1), interval: 1 },
          intervalType: 'Years',
          labelFormat: 'yyyy'
        };
      }
    }
    getData(year) {
      let series1 = [];
      let series2 = [];
      let value = 100;
      let value1 = 150;
      for (let i = 1; i <= 64; i++) {
        if (Math.random() > 5) {
          value = this.getRandomNum(700, 800);
        } else {
          value = this.getRandomNum(350, 700);
        }
        let point = { XValue: new Date(2008, 1 + i, 15), YValue: value };
        series1.push(point);
        if (value > 400) {
          value1 = value - 100;
        } else {
          value1 = value + 200;
        }
        let point1 = { XValue: new Date(2008, 1 + i, 15), YValue: value1 };
        series2.push(point1);
      }
      let data = { Open: series1, Close: series2 };
      return data;
    }
    getRandomNum(ubound, lbound) {
      return (Math.floor(Math.random() * (ubound - lbound)) + lbound);
    }
    yearClick(e) {
      this.columnChart.widget.element.ejChart({ 'primaryXAxis': this.setRangeAxis(parseInt(e.target.id.replace('y', ''), 10)) });
    }
}
