export class EventsToolbar {
  toolbarLoad() {
    this.logger.log('Toolbar control has been created. ');
  }
  toolbarClick() {
    this.logger.log('Toolbar item is clicked.');
  }
  toolbarChecked() {
    this.logger.log('Mouse pointer hovered on toolbar item. ');
  }
  toolbarUnChecked() {
    this.logger.log('Mouse pointer hovered away from toolbar item.');
  }
}
