export class BasicUse {
constructor() {
  this.UnemploymentList = [{xName: new Date(1950, 1, 12), high: 125, low: 70, open: 115, close: 90}, {xName: new Date(1953, 1, 12), high: 150, low: 60, open: 120, close: 70}, {xName: new Date(1956, 1, 12), high: 200, low: 140, open: 160, close: 190}, {xName: new Date(1959, 1, 12), high: 160, low: 90, open: 140, close: 110}, {xName: new Date(1962, 1, 12), high: 200, low: 100, open: 180, close: 120}, {xName: new Date(1965, 1, 12), high: 100, low: 45, open: 70, close: 50}, {xName: new Date(1968, 1, 12), high: 150, low: 70, open: 140, close: 130}, {xName: new Date(1971, 1, 12), high: 90, low: 60, open: 65, close: 80}, {xName: new Date(1974, 1, 12), high: 225, low: 170, open: 175, close: 220}, {xName: new Date(1977, 1, 12), high: 250, low: 180, open: 223, close: 190}, {xName: new Date(1980, 1, 12), high: 200, low: 140, open: 160, close: 190}, {xName: new Date(1983, 1, 12), high: 160, low: 90, open: 140, close: 110}, {xName: new Date(1986, 1, 12), high: 200, low: 100, open: 180, close: 120}, {xName: new Date(1989, 1, 1), high: 130, low: 95, open: 120, close: 100}, {xName: new Date(1991, 1, 12), high: 100, low: 70, open: 92, close: 75}, {xName: new Date(1994, 1, 12), high: 50, low: 85, open: 65, close: 80}, {xName: new Date(1997, 1, 12), high: 185, low: 110, open: 130, close: 170}, {xName: new Date(2000, 1, 12), high: 90, low: 30, open: 80, close: 50}, {xName: new Date(2003, 1, 12), high: 200, low: 140, open: 160, close: 190}, {xName: new Date(2006, 1, 12), high: 170, low: 90, open: 140, close: 110}, {xName: new Date(2008, 1, 12), high: 200, low: 100, open: 180, close: 120}];
  this.primaryXAxis = {title: {text: 'Date'}, intervalType: 'years'};
  this.primaryYAxis = {range: {min: 0, max: 250, interval: 50}, title: {text: 'Price in Dollars'}, labelFormat: '${value}'};
  this.size = {width: '900px', height: '500px'};
  this.title = {text: 'Foreign Exchange Rate Analysiss'};
  this.legend = {visible: false};
	}
}
