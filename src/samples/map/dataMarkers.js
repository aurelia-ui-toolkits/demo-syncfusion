import '../scripts/WorldMap.js';
export class BasicUse {
  constructor() {
    this.worldmap = window.worldMap;
    this.syncfusion_locations =
    [
	   { 'Name': 'USA', 'latitude': 38.8833, 'longitude': -77.0167},
	   { 'Name': 'Brazil', 'latitude': -15.7833, 'longitude': -47.8667},
	   { 'Name': 'India', 'latitude': 21.0000, 'longitude': 78.0000},
	   { 'Name': 'China', 'latitude': 35.0000, 'longitude': 103.0000},
	   { 'Name': 'Indonesia', 'latitude': -6.1750, 'longitude': 106.8283}
    ];
    this.shapesettings = { fill: '#626171', strokeThickness: 1, stroke: '#6F6F79', highlightStroke: '#6F6F79', valuePath: 'name', highlightColor: 'gray'};
  }
}
