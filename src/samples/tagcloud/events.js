export class EventsTagCloud {
  carModels = [
                    { text: 'Hindustan Motors', url: 'http://www.zigwheels.com/newcars/Hindustan-Motors', frequency: 10 },
                    { text: 'Bentley Continental ', url: 'http://www.zigwheels.com/newcars/Bentley/Continental', frequency: 3 },
                    { text: 'BMW 7', url: 'http://www.zigwheels.com/newcars/BMW/7-Series', frequency: 8 },
                    { text: 'Bugatti Veyron', url: 'http://www.zigwheels.com/newcars/Bugatti/Veyron', frequency: 2 },
                    { text: 'Honda', url: 'http://www.zigwheels.com/newcars/Honda', frequency: 3 },
                    { text: 'Chevrolet Beat', url: 'http://www.zigwheels.com/newcars/Chevrolet/Beat', frequency: 7 },
                    { text: 'Force Motors', url: 'http://www.zigwheels.com/newcars/Force-Motors/Gurkha', frequency: 5 },
                    { text: 'Ford', url: 'http://www.zigwheels.com/newcars/Ford', frequency: 8 },
                    { text: 'Ferrari FF', url: 'http://www.zigwheels.com/newcars/Ferrari/FF', frequency: 5 },
                    { text: 'Audi A7', url: 'http://www.zigwheels.com/newcars/Audi/A7', frequency: 20 },
                    { text: 'HM Mitsubishi', url: 'http://www.zigwheels.com/newcars/HM-Mitsubishi', frequency: 1 },
                    { text: 'Hyundai Santro', url: 'http://www.zigwheels.com/newcars/Hyundai/Santro-Xing', frequency: 9 },
                    { text: 'Jaguar XKR', url: 'http://www.zigwheels.com/newcars/Jaguar/XKR', frequency: 0 },
                    { text: 'Rolls Royce', url: 'http://www.zigwheels.com/newcars/Rolls-Royce', frequency: 6 },
                    { text: 'Land Rover Range', url: 'http://www.zigwheels.com/newcars/Land-Rover/Range-Rover', frequency: 3 },
                    { text: 'Mercedes Benz', url: 'http://www.zigwheels.com/newcars/Mercedes-Benz/A-Class', frequency: 3 },
                    { text: 'Lamborghini', url: 'http://www.zigwheels.com/newcars/Lamborghini/Gallardo', frequency: 14 },
                    { text: 'Volvo S60', url: 'http://www.zigwheels.com/newcars/Volvo/S60', frequency: 1 }
  ];

  constructor() {
    this.title = 'Car Models';
    this.data = this.carModels;
    this.width = 'auto';
  }
  create() {
    this.logger.log('Tagcloud has been created.');
  }
  mouseOver(event) {
    this.logger.log('Mouse pointer is hovered on ' + event.detail.value + '.');
  }
  mouseOut(event) {
    this.logger.log('Mouse pointer is hovered away from ' + event.detail.value + '.');
  }
  click(event) {
    this.logger.log(event.detail.value + ' is clicked');
  }

}
