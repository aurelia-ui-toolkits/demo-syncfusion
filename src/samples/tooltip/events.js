export class EventsTooltip {
  constructor() {
    this.content = 'Learn to use the Python language to create programs of all kinds to creating practical applications.';
    this.position = {
      stem: {
        horizontal: 'left',
        vertical: 'center'
      },
      target: {
        horizontal: 'right',
        vertical: 'center'
      }
    };
  }
  tipCreate(event) {
    this.logger.log('Tooltip control has been created.');
  }
  tipTrack(event) {
    this.logger.log('Tooltip has been Tracking');
  }
  tipHide(event) {
    this.logger.log('beforeClose event is fired for Tooltip.');
  }
  tipShown(event) {
    this.logger.log('beforeOpen event is fired for Tooltip.');
  }
  onHide(event) {
    this.logger.log('Tooltip popup is closed.');
  }
  onShow(event) {
    this.logger.log('Tooltip popup is opened.');
  }
}
