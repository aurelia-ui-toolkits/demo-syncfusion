export class EventRating {
  create() {
    this.logger.log('Rating control has been created.');
  }
  click() {
    this.logger.log('Rating control has been clicked.');
  }
  mouseOver() {
    this.logger.log('Rating control has been hovered-in.');
  }
  mouseOut() {
    this.logger.log('Rating control has been hovered-out.');
  }
  change(event) {
    this.logger.log('Rating value has been changed to ' + event.detail.value + ' out of 5.');
  }
}
