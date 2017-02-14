export class BasicUse {
  constructor() {
    this.pivotData = {
      data: [{ Amount: 100, Country: 'Canada', Date: 'FY 2005', Product: 'Bike', Quantity: 2, State: 'Alberta' },
        { Amount: 200, Country: 'Canada', Date: 'FY 2006', Product: 'Van', Quantity: 3, State: 'British Columbia' },
        { Amount: 300, Country: 'Canada', Date: 'FY 2007', Product: 'Car', Quantity: 4, State: 'Brunswick' },
        { Amount: 150, Country: 'Canada', Date: 'FY 2008', Product: 'Bike', Quantity: 3, State: 'Manitoba' },
        { Amount: 200, Country: 'Canada', Date: 'FY 2006', Product: 'Car', Quantity: 4, State: 'Ontario' },
        { Amount: 100, Country: 'Canada', Date: 'FY 2007', Product: 'Van', Quantity: 1, State: 'Quebec' },
        { Amount: 200, Country: 'France', Date: 'FY 2005', Product: 'Bike', Quantity: 2, State: 'Charente-Maritime' },
        { Amount: 250, Country: 'France', Date: 'FY 2006', Product: 'Van', Quantity: 4, State: 'Essonne' },
        { Amount: 300, Country: 'France', Date: 'FY 2007', Product: 'Car', Quantity: 3, State: 'Garonne (Haute)' },
        { Amount: 150, Country: 'France', Date: 'FY 2008', Product: 'Van', Quantity: 2, State: 'Gers' },
        { Amount: 200, Country: 'Germany', Date: 'FY 2006', Product: 'Van', Quantity: 3, State: 'Bayern' },
        { Amount: 250, Country: 'Germany', Date: 'FY 2007', Product: 'Car', Quantity: 3, State: 'Brandenburg' },
        { Amount: 150, Country: 'Germany', Date: 'FY 2008', Product: 'Car', Quantity: 4, State: 'Hamburg' },
        { Amount: 200, Country: 'Germany', Date: 'FY 2008', Product: 'Bike', Quantity: 4, State: 'Hessen' },
        { Amount: 150, Country: 'Germany', Date: 'FY 2007', Product: 'Van', Quantity: 3, State: 'Nordrhein-Westfalen' },
        { Amount: 100, Country: 'Germany', Date: 'FY 2005', Product: 'Bike', Quantity: 2, State: 'Saarland' },
        { Amount: 150, Country: 'United Kingdom', Date: 'FY 2008', Product: 'Bike', Quantity: 5, State: 'England' },
        { Amount: 250, Country: 'United States', Date: 'FY 2007', Product: 'Car', Quantity: 4, State: 'Alabama' },
        { Amount: 200, Country: 'United States', Date: 'FY 2005', Product: 'Van', Quantity: 4, State: 'California' },
        { Amount: 100, Country: 'United States', Date: 'FY 2006', Product: 'Bike', Quantity: 2, State: 'Colorado' },
        { Amount: 150, Country: 'United States', Date: 'FY 2008', Product: 'Car', Quantity: 3, State: 'New Mexico' },
        { Amount: 200, Country: 'United States', Date: 'FY 2005', Product: 'Bike', Quantity: 4, State: 'New York' },
        { Amount: 250, Country: 'United States', Date: 'FY 2008', Product: 'Car', Quantity: 3, State: 'North Carolina' },
        { Amount: 300, Country: 'United States', Date: 'FY 2007', Product: 'Van', Quantity: 4, State: 'South Carolina' }
      ],
      rows: [
        {
          fieldName: 'Country',
          fieldCaption: 'Country'
        },
        {
          fieldName: 'State',
          fieldCaption: 'State'
        },
        {
          fieldName: 'Date',
          fieldCaption: 'Date'
        }
      ],
      columns: [
        {
          fieldName: 'Product',
          fieldCaption: 'Product'
        }
      ],
      values: [
        {
          fieldName: 'Amount',
          fieldCaption: 'Amount'
        }
      ]
    };
    this.zooming = {enableScrollbar: true};
    this.primaryYAxis = {title: {text: 'Amount'}};
    this.size = {height: '460px', width: '750px'};
    this.legend = {visible: true};
    this.loadTheme = 'laodTheme';
    this.commonSeries = {
      enableAnimation: true,
      type: 'column'
    };
    this.Type = 'Column';
    this.target = 'Type';
  }
  onChange(args) {
    let chartTarget = $('.e-pivotchart').data('ejPivotChart');
    chartTarget.model.type = args.detail.text.toLowerCase();
    chartTarget.model.commonSeriesOptions.type = args.detail.text.toLowerCase();
    if (jQuery.inArray(chartTarget.model.type, ['line', 'spline', 'area', 'splinearea', 'stepline', 'steparea', 'stackingarea', 'scatter']) > -1) {
      chartTarget.model.commonSeriesOptions.marker = {
        shape: ej.PivotChart.SymbolShapes.Circle,
        size: { height: 12, width: 12 },
        visible: true, connectorLine: { height: 30, type: 'line' },
        border: { width: 3, color: 'white' }
      };
    } else if (jQuery.inArray(chartTarget.model.type, ['funnel']) > -1) {
      chartTarget.model.commonSeriesOptions.marker = {
        dataLabel: {
          visible: true,
          shape: 'none',
          font: { color: 'white', size: '12px', fontWeight: 'lighter' }
        }
      };
    } else {
      chartTarget.model.commonSeriesOptions.marker = { visible: false };
    }
    if (chartTarget.model.type === 'pie' || chartTarget.model.type === 'pyramid' || chartTarget.model.type === 'funnel' || chartTarget.model.type === 'doughnut' || chartTarget.model.type === 'scatter') {
      chartTarget.model.legend = { visible: true };
    } else {
      chartTarget.model.legend = { visible: false };
    }
    if (jQuery.inArray(chartTarget.model.type, ['pie', 'doughnut']) > -1) {
      chartTarget.model.commonSeriesOptions.explode = true;
    } else {
      chartTarget.model.commonSeriesOptions.explode = false;
    }
    chartTarget.renderControlSuccess({ 'JsonRecords': JSON.stringify(chartTarget.getJSONRecords()), 'OlapReport': chartTarget.getOlapReport() });
  }
}
