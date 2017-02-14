export class Health {
    constructor() {
      this.dataManger = ej.DataManager({// eslint-disable-line new-cap
        url: 'http://mvc.syncfusion.com/Services/api/Health/FoodInfo'
      });
      this.showPopup = true;
      this.sumColl = {};
      this.healthHeader = [{ board: 'boardpicdiv', dashboard: 'dashboardpic', text: 'Dashboard' }, { board: 'nopicdiv', dashboard: 'nopic', text: '4' }];
      this.healthSection = [{ measurement: 'bmidiv', labelText: 'BMI', measurementDiv: 'bmi', text: '21.7', labelUnit: 'Kg/m2' }, { measurement: 'weightdiv', labelText: 'Weight', measurementDiv: 'weight', text: '72.3', labelUnit: 'Kg' }];
      this.circularGauge = [{ gaugeClass: 'col-sm-6  gauge1', gaugeId: 'GaugeRDI', intake: 'todaylabel rdilabel', pending: 'pending todaylabel rdipenlabel', intakeText: 'Calories Intake - 450/2200', pendingText: '1750 calories pending', index: 0, model: 'RDI', intakeRef: 'rdilabel', pendingRef: 'rdipenlabel' }, { gaugeClass: 'col-sm-6 gauge2', gaugeId: 'GaugeBurnt', intake: 'todaylabel', pending: 'todaylabel pending', intakeText: 'Calories burnt - 650/1000', pendingText: '350 calories pending', index: 1, model: 'Burnt', intakeRef: 'label', pendingRef: 'penlabel' }];
      this.type = { frameType: 'halfcircle' };
      this.scale = [[{
        startAngle: 182, sweepAngle: 176, showRanges: true, showLabels: false, radius: 140, minimum: 0, maximum: 2200, majorIntervalValue: 200, pointerCap: { radius: 15, backgroundColor: '#3AB54B', borderColor: '#3AB54B', borderWidth: 15 },
        pointers: [{ border: { color: '#3AB54B' }, needleStyle: 'rectangle', width: 1, value: 450, length: 90 }],
        ticks: [{ color: '#FFFFFF', height: 16, width: 3 }, { color: '#FFFFFF', height: 7, width: 1 }], ranges: [{ size: 10, startValue: 0, endValue: 449, backgroundColor: '#3AB54B', border: { color: '#3AB54B' } }, { size: 10, startValue: 449, endValue: 2200, backgroundColor: '#B0D2C8', border: { color: '#B0D2C8' } }]
      }], [{
        startAngle: 182, sweepAngle: 176, showRanges: true, showLabels: false, radius: 140, minimum: 0, maximum: 1000, majorIntervalValue: 200, pointerCap: { radius: 15, backgroundColor: '#b24848', borderColor: '#b24848', borderWidth: 15 },
        pointers: [{ border: { color: '#b24848' }, needleStyle: 'rectangle', width: 1, value: 650, length: 90 }],
        ticks: [{ color: '#FFFFFF', height: 16, width: 3 }, { color: '#FFFFFF', height: 7, width: 1 }], ranges: [{ size: 10, startValue: 0, endValue: 649, backgroundColor: '#b24848', border: { color: '#c98c8b' } }, { size: 10, startValue: 649, endValue: 1000, backgroundColor: '#C9A5A6', border: { color: '#C9A5A6' } }]
      }]];
      this.smallChart = [{ chartContainer: 'col-sm-6 chart1', imageId: 'StepChartDiv', chartId: 'ChartStep', labelText: 'Step - 90/100', pendingText: '10 steps pending', index: 0 }, { chartContainer: 'col-sm-6 chart2', imageId: 'FloorChartDiv', chartId: 'ChartFloor', labelText: 'Floor - 4/10', pendingText: '6 floors pending', index: 1 }];
      this.series = [[{
        name: 'Newyork', type: 'doughnut', doughnutSize: 0.9, doughnutCoefficient: 0.7, enableAnimation: false, opacity: 0.8,
        points: [{ x: 'Carbohydrate', y: 10, visible: true, fill: '#D3C1D4' }, { x: 'Fat', y: 90, visible: true, fill: '#B26CAB' }], border: { color: '#D3C1D4' }
      }], [{
        points: [{ x: 'Carbohydrate', y: 6, visible: true, fill: '#7D70B3' }, { x: 'Fat', y: 4, visible: true, fill: '#BFBED9' }],
        name: 'Newyork', type: 'doughnut', labelPosition: 'inside', doughnutSize: 0.9, doughnutCoefficient: 0.7, enableAnimation: false, opacity: 0.8, border: { width: 1, color: '#BFBED9' }
      }]];
      this.margin = { top: 0, bottom: 0, left: 10, right: 10 };
      this.size = { height: '190', width: '200' };
      this.legend = [{ visible: false, font: { color: 'Black' } }, { visible: false, font: { color: 'Black', size: '12px' }, position: 'bottom' }];
      this.annotations = [[{ visible: true, content: 'stepAnnotation', region: 'series' }], [{ visible: true, content: 'floorAnnotation', region: 'series' }]];
      this.gridSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, editMode: ej.Grid.EditMode.DialogTemplate, dialogEditorTemplateID: '#healthAddTemplate' };
      this.gridColumn = [
        { field: 'Time', headerText: 'TIME', width: 70, textAlign: ej.TextAlign.Center, validationRules: { required: true } },
        { field: 'FoodName', headerText: 'FOOD', width: 110, textAlign: ej.TextAlign.Center, validationRules: { required: true } },
        { field: 'Fat', headerText: 'FAT', textAlign: ej.TextAlign.Center, width: 60, format: '{0:N0}g', validationRules: { required: true } },
        { field: 'Carbohydrate', headerText: 'CARB', textAlign: ej.TextAlign.Center, width: 60, format: '{0:N0}g', validationRules: { required: true } },
        { field: 'Protein', headerText: 'PROTEIN', textAlign: ej.TextAlign.Center, width: 60, format: '{0:N0}g', validationRules: { required: true }, priority: 4 },
        { field: 'Calorie', headerText: 'CALORIES', width: 65, textAlign: ej.TextAlign.Center, format: '{0:N0}cal', validationRules: { required: true }, priority: 5 },
        { field: 'FoodId', isPrimaryKey: true, visible: false }
      ];
      this.gridLines = ej.Grid.GridLines.Horizontal;
      this.gridSummary = [
        { title: 'Sum', summaryColumns: [{ summaryType: ej.Grid.SummaryType.Sum, displayColumn: 'Fat', dataMember: 'Fat', format: '{0:N0}g' }, { summaryType: ej.Grid.SummaryType.Sum, displayColumn: 'Carbohydrate', dataMember: 'Carbohydrate', format: '{0:N0}g' }, { summaryType: ej.Grid.SummaryType.Sum, displayColumn: 'Protein', dataMember: 'Protein', format: '{0:N0}g' }, { summaryType: ej.Grid.SummaryType.Sum, displayColumn: 'Calorie', dataMember: 'Calorie', format: '{0:N0}cal' }] }
      ];
      this.doughnutSeries = [{
        marker: { dataLabel: { visible: true, font: { color: '#707070', size: '15px', fontWeight: 'lighter' } } },
        name: 'Newyork', type: 'doughnut', labelPosition: 'outside', doughnutSize: 0.9, opacity: 0.8,
        border: { width: 1 }
      }];
      this.doughnutSize = { height: '270' };
      this.doughnutMargin = { left: 10, top: 0, right: 0, bottom: 0 };
      this.doughnutLegend = { visible: false };
      this.calorieChart = [{ chartClass: 'col-md-6  chart3 burntCal loadondemand ptiles', chartId: 'ChartBurnt', data: 'burntData', index: 0 }, { chartClass: 'col-md-6 chart4 ptiles', chartId: 'ChartCal', data: 'calData', index: 1 }];
      this.chartArea = { border: { width: 1 } };
      this.xAxis = [{ edgeLabelPlacement: 'hide', rangePadding: 'none', title: { text: 'Days', font: { fontStyle: 'Bold', size: '14px', fontWeight: 'Bold' } }, range: { min: 0, max: 31, interval: 3 }, majorGridLines: { visible: false }, font: { fontStyle: 'bold', size: '8px' }, columnIndex: 0, valueType: 'double' }, { edgeLabelPlacement: 'hide', title: { text: 'Days', font: { fontStyle: 'Bold', size: '14px', fontWeight: 'Bold' } }, font: { fontStyle: 'bold', size: '8px' }, range: { min: 0, max: 31, interval: 3 }, majorGridLines: { visible: false }, columnIndex: 0, valueType: 'double' }];
      this.yAxis = [{ rowIndex: '0', rangePadding: 'none', range: { min: 0, max: 1200, interval: 100 }, title: { text: 'Steps', font: { fontStyle: 'Bold', size: '14px', fontWeight: 'Bold' } }, font: { fontStyle: 'bold', size: '8px' }, valueType: 'double' }, { rowIndex: '0', rangePadding: 'none', range: { min: 0, max: 1200, interval: 100 }, font: { fontStyle: 'bold', size: '8px' }, title: { text: 'Calorie', font: { fontStyle: 'Bold', size: '14px', fontWeight: 'Bold' } }, valueType: 'double' }];
      this.chartTitle = [{ text: 'TOTAL STEPS' }, { text: 'CALORIES BURNT' }];
      this.chartSize = { height: '500' };
      this.commonSeries = [{ tooltip: { visible: true } }, { type: 'line', tooltip: { visible: true }, enableAnimation: true, marker: { size: { height: 10, width: 10 }, visible: true }, border: { width: 2 } }];
      this.chartSeries = [[{ name: 'Steps Moved', enableAnimation: true, fill: '#8CC640', tooltip: { template: 'BurntTooltip' }, xName: 'XValue', yName: 'YValue' }], [{ name: 'Calories Burnt', type: 'spline', enableAnimation: true, fill: '#24B7E5', tooltip: { template: 'CalTooltip' }, xName: 'XValue', yName: 'YValue' }]];
      this.columnX = { edgeLabelPlacement: 'hide', rangePadding: 'none', title: { text: 'Days', font: { fontStyle: 'Bold', size: '14px', fontWeight: 'Bold' } }, range: { min: 0, max: 31, interval: 3 }, majorGridLines: { visible: false }, columnIndex: 0, valueType: 'double' };
      this.columnY = { rowIndex: '0', rangePadding: 'none', range: { min: 0, max: 1200, interval: 100 }, title: { text: 'Cal', font: { fontStyle: 'Bold', size: '14px', fontWeight: 'Bold' } }, valueType: 'double' };
      this.columnSeries = [{ name: 'Carb', type: 'column', enableAnimation: true, fill: '#8CAA55', tooltip: { template: 'HydrateTooltip' }, xName: 'XValue', yName: 'YValue' }, { name: 'Protein', type: 'column', enableAnimation: true, fill: '#B34949', tooltip: { template: 'ProteinTooltip' }, xName: 'XValue', yName: 'YValue' }, { name: 'Fat', type: 'column', enableAnimation: true, fill: '#58A7C6', tooltip: { template: 'FatTooltip' }, xName: 'XValue', yName: 'YValue' }
      ];
      this.columnTitle = { text: 'MEAL INTAKE' };
      this.annotationsTemplate = [{ id: 'stepAnnotation', image: 'images/dashboard/healthtracker/step.png' }, { id: 'floorAnnotation', image: 'images/dashboard/healthtracker/floor.png' }];
      this.toolTip = [{ tooltipId: 'HydrateTooltip', toolId: 'hydrateTool', labelClass: 'hydlabel', month: 'hydratemonth', text: 'Carb', day: 'hydrateday' }, { tooltipId: 'ProteinTooltip', toolId: 'proteinTool', labelClass: 'proLabel', month: 'proteinmonth', text: 'Protein', day: 'proteinday' }, { tooltipId: 'FatTooltip', toolId: 'fatTool', labelClass: 'fatLabel', month: 'fatmonth', text: 'Fat', day: 'fatday' }];
    }
    attached() {
      setTimeout(()=>{
        this.dataManger.executeQuery(ej.Query()).done((e) => {// eslint-disable-line new-cap
          this.Grid.widget.dataSource(e.result.FoodInfo);
          this.sumColl = this.getSummaryDetails();
          this.updateChartSeries();
          this.calorieChart[0].data.widget.model.series[0].dataSource = e.result.ChartDB.BurntData;
          this.calorieChart[1].data.widget.model.series[0].dataSource = e.result.ChartDB.CalData;
          this.mealData.widget.model.series[0].dataSource = e.result.ChartDB.MealData.Open;
          this.calorieChart[1].data.widget.model.series[0].xName = this.calorieChart[0].data.widget.model.series[0].xName = this.mealData.widget.model.series[0].xName = this.mealData.widget.model.series[1].yName = this.mealData.widget.model.series[2].yName = 'XValue';
          this.calorieChart[1].data.widget.model.series[0].yName = this.calorieChart[0].data.widget.model.series[0].yName = this.mealData.widget.model.series[0].yName = this.mealData.widget.model.series[1].yName = this.mealData.widget.model.series[2].yName = 'YValue';
          this.mealData.widget.model.series[1].dataSource = e.result.ChartDB.MealData.Close;
          this.mealData.widget.model.series[2].dataSource = e.result.ChartDB.MealData.OpenClose;
          this.calorieChart[0].data.widget.redraw();
          this.calorieChart[1].data.widget.redraw();
          this.mealData.widget.redraw();
        });
      }, 0);
    }
    getSummaryDetails() {
      let griddata = this.Grid.widget;
      let sumValue = griddata.model.summaryRows[0].summaryColumns;
      this.sumColl = [];
      jQuery.each(sumValue, (index, item) => {
        this.sumColl.push(Math.round(griddata.getSummaryValues(item)));
      });
      return this.sumColl;
    }
    renderControl(args) {
      if (args.element.hasClass('titlecss')) {
        this.renderBurntCal();
      } else {
        this.renderMealIntake();
      }
    }
    renderBurntCal() {
      let chartCalObj = this.calorieChart[1].data.widget;
      let chartBurntObj = this.calorieChart[0].data.widget;
      chartCalObj.seriesRender();
      chartBurntObj.seriesRender();
    }
    renderMealIntake() {
      let chartMealObj = this.mealData.widget;
      chartMealObj.seriesRender();
    }
    updateChartSeries() {
      this.doughnutSeries = [{
        'points': [{ x: 'Carb', y: this.sumColl[1], fill: '#B44A4A', text: this.sumColl[1] + 'g' + ' Carb' },
        { x: 'Protein', y: this.sumColl[2], fill: '#53B2C1', text: this.sumColl[2] + 'g' + ' Protein' },
        { x: 'Fat', y: this.sumColl[0], fill: '#F9AF3C', text: this.sumColl[0] + 'g' + ' Fat' }]
      }];
    }
    add() {
      this.Grid.widget.addRecord();
    }
    complete() {
      this.showPopup = false;
    }
    actionComplete(args) {
      if (args.requestType === 'beginedit' || args.requestType === 'add') {
        jQuery('#Fat,#Carbohydrate,#Protein,#Calorie').ejNumericTextbox({ width: '120px', minValue: 1, maximum: 1000 });
        jQuery('#EditDialog_grid_Save').val('Done');
        jQuery('#Fat, #Carbohydrate, #Protein, #Calorie,#Time, #FoodName').css('text-align', 'left');
        jQuery('#EditDialog_grid_Cancel').remove();
        jQuery('#Time').ejTimePicker();
        if (args.requestType === 'beginedit') {
          jQuery('#MealSummary span.e-title').text('Edit');
        } else {
          jQuery('#Time').data('ejTimePicker').setCurrentTime();
          jQuery('#MealSummary span.e-title').text('Add Food');
        }
      }
      if (args.requestType !== 'refresh' && args.requestType === 'save') {
        args.data.FoodId = this.getRandomNum(6, 50);
        this.sumColl = this.getSummaryDetails();
        this.updateChartSeries();
        this.updateGauge(this.sumColl[3]);
      }
    }
    getRandomNum(ubound, lbound) {
      return (Math.floor(Math.random() * (ubound - lbound)) + lbound);
    }
    updateGauge(caloriesValue) {
      let gaugeObj = this.circularGauge[0].model.widget;
      gaugeObj.setPointerValue(0, 0, caloriesValue);
      gaugeObj.setRangeStartValue(0, 0, 0);
      gaugeObj.setRangeEndValue(0, 0, caloriesValue);
      gaugeObj.setRangeStartValue(0, 1, caloriesValue);
      gaugeObj.setRangeEndValue(0, 1, 2200);
      this.circularGauge[0].intakeRef.innerText = 'Calories Intake - ' + caloriesValue + '/2200';
      this.circularGauge[0].pendingRef.innerText = 2200 - caloriesValue + ' calories pending';
    }
}
