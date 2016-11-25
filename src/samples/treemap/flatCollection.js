export class BasicUse {
  constructor() {
    this.population_data = [
		{ Continent: 'Asia', Country: 'Indonesia', Growth: 3, Population: 237641326 },
		{ Continent: 'Asia', Country: 'Russia', Growth: 2, Population: 152518015 },
		{ Continent: 'Asia', Country: 'Malaysia', Growth: 1, Population: 29672000 },
		{ Continent: 'North America', Country: 'United States', Growth: 4, Population: 315645000 },
		{ Continent: 'North America', Country: 'Mexico', Growth: 2, Population: 112336538 },
		{ Continent: 'North America', Country: 'Canada', Growth: 1, Population: 39056064 },
		{ Continent: 'South America', Country: 'Colombia', Growth: 1, Population: 47000000 },
		{ Continent: 'South America', Country: 'Brazil', Growth: 3, Population: 193946886 },
		{ Continent: 'Africa', Country: 'Nigeria', Growth: 2, Population: 170901000 },
		{ Continent: 'Africa', Country: 'Egypt', Growth: 1, Population: 83661000 },
		{ Continent: 'Europe', Country: 'Germany', Growth: 1, Population: 81993000 },
		{ Continent: 'Europe', Country: 'France', Growth: 1, Population: 65605000 },
		{ Continent: 'Europe', Country: 'UK', Growth: 1, Population: 63181775 }
    ];
    this.leafitemsettings = { showLabels: true, labelPath: 'Country'};
    this.legendsettings = { leftLabel: '20000000', width: 150, height: 20, rightLabel: '300000000', title: 'Population', mode: 'interactive', dockPosition: 'top', alignment: 'center'};
    this.rangecolormapping = [
		{ from: 29671000, to: 315646000, gradientColors: ['#fde6cc', '#fab665']}
    ];
  }
}
