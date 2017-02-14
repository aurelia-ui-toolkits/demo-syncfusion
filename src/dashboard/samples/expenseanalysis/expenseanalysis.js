export class Expense {
    constructor() {
      this.monthText = ej.preferredCulture().calendars.standard.months.names[new Date().getMonth()];
      this.changeMonth({ 'selectedText': this.monthText });
      this.monthValue = this.monthText;
      this.backBtn = false;
      this.monthData = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      this.column = [
            { field: 'DateTime', headerText: 'Date', textAlign: ej.TextAlign.Right, width: 40, validationRules: { required: true }, format: '{0:MMM dd yyyy}', editType: ej.Grid.EditingType.DatePicker },
            { field: 'CategoryName', headerText: 'Category Name', visible: false, validationRules: { required: true, minlength: 3 }, width: 100 },
            { field: 'Description', headerText: 'Description', validationRules: { required: true, minlength: 3 }, width: 100 },
            { field: 'SubCategory', headerText: 'Category', validationRules: { required: true, minlength: 3 }, width: 70, priority: 3 },
            { field: 'Amount', headerText: 'Amount', validationRules: { required: true }, textAlign: ej.TextAlign.Right, editType: ej.Grid.EditingType.Numeric, editParams: { decimalPlaces: 2, minValue: 0 }, format: '{0:C}', width: 50, priority: 4 }
      ];
      this.gridSettings = { allowEditing: false, allowAdding: true, editMode: ej.Grid.EditMode.Dialog };
      this.gridPage = { pageCount: 4 };
      this.chartTitle = { text: 'Expense Analysis' };
      this.chartLegend = { visible: false };
      this.series = [{ dataSource: this.series, type: 'pie', border: { width: 1 }, name: 'ExpenseChart', enableAnimation: true, labelPosition: 'outside', explode: true, marker: { connectorLine: { height: 20 }, dataLabel: { visible: true } }, xName: 'ExpenseCategory', yName: 'Amount' }];
      this.empData = [{ classLabel: 'e-name', id: 'David Carter' }, { classLabel: 'e-phone', id: 'Phone : +1 919.494.1974' }, { classLabel: 'e-mail', id: 'email : davidc@syncfusion.com' }];
    }
    backButton(sender) {
      this.series = this.pieSeries();
      this.backBtn = false;
    }
    addButton(sender) {
      let gridObj = this.expenseGrid.widget;
      gridObj.addRecord();
    }
    changeMonth(sender) {
      this.showPopup = true;
      this.updatechart(sender.selectedText);
    }
    seriesRender(e) {
      $.each(e.data.series.points, function() {
        this.text = this.x + '- $' + parseInt(ej.format(this.YValues, 'n0'), 10);
      });
    }
    formatNumber(number) {
      return ej.format(number, 'n0');
    }
    updatechart(month) {
      let dataManger = ej.DataManager({// eslint-disable-line new-cap
        url: 'http://mvc.syncfusion.com/Services/api/expense?month=' + month,
        offline: true,
        requiresFormat: false
      });
      dataManger.ready.done((e) => {
        this.gridData = e.result[1];
        this.series = [{ dataSource: e.result[0], type: 'pie', border: { width: 1 }, name: 'ExpenseChart', enableAnimation: true, labelPosition: 'outside', explode: true, marker: { connectorLine: { height: 20 }, dataLabel: { visible: true } }, xName: 'ExpenseCategory', yName: 'Amount' }];
        this.employeeExpense = [{ amt: 'pos-amt-td sideborder', _amt: 'pos-amt', _text: 'pos-text', amount: ('$' + this.formatNumber(parseInt(e.result[5], 10))), trans: (e.result[8] + ' Transactions'), _trans: 'pos-transc', text: 'Positive' }, { amt: 'neg-amt-td sideborder', _amt: 'neg-amt', _text: 'neg-text', amount: ('$' + this.formatNumber(parseInt(e.result[6], 10))), trans: (e.result[9] + ' Transactions'), _trans: 'neg-transc', text: 'Negative' }, { amt: 'bal-amt-td', _amt: 'bal-amt', _text: 'bal-text', amount: ('$' + this.formatNumber(parseInt(e.result[7], 10))), text: 'Balance' }];
        this.overallExpense = [{ spent: 'most-spent', spent_text: 'most-spent-text', text: 'Most Spent', spent_amt: 'most-spent-amt', amt: e.result[2] }, { spent: 'least-spent', spent_text: 'least-spent-text', text: 'Least Spent', spent_amt: 'least-spent-amt', amt: e.result[3] }, { spent: 'avg-spent', spent_text: 'avg-spent-text', text: 'Avg Spent', spent_amt: 'avg-spent-amt', amt: e.result[4] }];
        this.chartDS = e.result[0];
        this.Home = e.result[10];
        this.DailyLiving = e.result[11];
        this.Entertainment = e.result[12];
        this.Health = e.result[13];
        this.Transportation = e.result[14];
        this.Personal = e.result[15];
        this.showPopup = false;
      });
    }
    completeAnimation(sender) {
      if (sender.model.series[0].name !== 'ExpenseChart') this.backBtn = true;
        else this.backBtn = false;
    }
    onclick(sender) {
      let isIe8 = ej.browserInfo().name === 'msie' && parseInt(ej.browserInfo().version, 10) === 8;
      if (sender.model.AnimationComplete || isIe8) {
        let index = sender.data.region.Region.PointIndex;
        let name = sender.model.series[0].points[index].x;
        if (sender.model.series[0].name === 'ExpenseChart') {
          this.expenseChart.widget.element.ejChart({ 'drilldown': this.pieSeries(name) });
        }
        if (isIe8) {
          this.backBtn = true;
        }
      }
    }
    pieSeries(seriesName) {
      switch (seriesName) {
      case 'Home':
      case 'Health':
      case 'Transportation':
      case 'Personal':
        return this.genarateSeries(seriesName);
      case 'Entertainment':
        this.Entertainment[1].Amount = 45;
        return this.genarateSeries(seriesName);
      case 'Daily Living':
        return this.genarateSeries('DailyLiving');
      default:
        {
          return (this.series = [{ dataSource: this.chartDS, explodeOffset: 25, AnimationComplete: false, type: 'pie', pieCoefficient: 0.8, name: 'ExpenseChart', enableAnimation: true, labelPosition: 'outside', explode: true, marker: { dataLabel: { visible: true, font: { fontFamily: 'Segoe UI', fontStyle: 'Normal ', fontWeight: 'Regular', size: '12px', color: '#707070', opacity: 1 }, shape: 'none', connectorLine: { color: 'black', width: 0.5 } } }, xName: 'ExpenseCategory', yName: 'Amount' }]);
        }
      }
    }
    genarateSeries(sName) {
      return (this.seriesData = { series: [{ dataSource: this[sName], type: 'pie', pieCoefficient: 0.8, enableAnimation: true, labelPosition: 'outside', explode: false, marker: { dataLabel: { visible: true, font: { fontFamily: 'Segoe UI', fontStyle: 'Normal ', fontWeight: 'Regular', size: '12px', color: '#707070', opacity: 1 }, shape: 'none', connectorLine: { color: 'black', width: 0.5 } } }, xName: 'ExpenseCategory', yName: 'Amount' }], legend: { visible: false } });
    }
}
