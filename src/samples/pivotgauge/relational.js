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
        },
        {
          fieldName: 'Quantity',
          fieldCaption: 'Quantity'
        }
      ]
    };
    this.rowsCount = 2;
    this.columnsCount = 3;
    this.backgroundColor = 'transparent';
    this.loadGaugeTheme = 'loadGaugeTheme';
    this.scales = [{
      showRanges: true,
      radius: 150, showScaleBar: true, size: 1,
      border: {
        width: 0.5
      },
      showIndicators: true, showLabels: true,
      pointers: [{
        showBackNeedle: true,
        backNeedleLength: 20,
        length: 125,
        width: 7
      },
      {
        type: 'marker',
        markerType: 'diamond',
        distanceFromScale: 5,
        placement: 'center',
        backgroundColor: '#29A4D9',
        length: 25,
        width: 15
      }],
      ticks: [{
        type: 'major',
        distanceFromScale: 2,
        height: 16,
        width: 1, color: '#8c8c8c'
      }, {
        type: 'minor',
        height: 6,
        width: 1,
        distanceFromScale: 2,
        color: '#8c8c8c'
      }],
      labels: [{
        color: '#8c8c8c'
      }],
      ranges: [{
        distanceFromScale: -5,
        backgroundColor: '#fc0606',
        border: {
          color: '#fc0606'
        }
      }, {
        distanceFromScale: -5
      }],
      customLabels: [{
        position: { x: 180, y: 290 },
        font: { size: '10px', fontFamily: 'Segoe UI', fontStyle: 'Normal' }, color: '#666666'
      }, {
        position: { x: 180, y: 320 },
        font: { size: '10px', fontFamily: 'Segoe UI', fontStyle: 'Normal' }, lcolor: '#666666'
      }, {
        position: { x: 180, y: 150 },
        font: { size: '12px', fontFamily: 'Segoe UI', fontStyle: 'Normal' }, color: '#666666'
      }]
    }];
  }
}
