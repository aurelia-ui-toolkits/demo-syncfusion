export class EventsTab {
  onClientBeforeLoad(event) {
    this.logger.log('BeforeLoad event is fired.');
  }
  onClientLoad(event) {
    this.logger.log('Ajax content has been loaded.');
  }
  onClientCreate(event) {
    this.logger.log('Tab is created.');
  }
  onClientActive(event) {
    this.logger.log('Index ' + event.detail.activeIndex + ' is activated.');
  }
  onClientBeforeActive(event) {
    this.logger.log('BeforeActive event is fired.');
  }
}
