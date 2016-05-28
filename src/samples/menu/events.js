export class EventsMenu {
  constructor() {
    this.type = ej.MenuType.NormalMenu;
  }
  create() {
    this.logger.log('Menu has been created.');
  }
  mouseOver(event) {
    let args = event.detail;
    if (args.ID) {
      this.logger.log('Menu item id "' + args.ID + '" has been hovered-in.');
    } else {
      this.logger.log('Menu item has been hovered-in.');
    }
  }
  mouseOut(event) {
    let args = event.detail;
    if (args.ID) {
      this.logger.log('Menu item id "' + args.ID + '" has been hovered-out.');
    } else {
      this.logger.log('Menu item has been hovered-out.');
    }
  }
  menuClick(event) {
    let args = event.detail;
    if (args.ID) {
      this.logger.log('Menu item id "' + args.ID + '" is clicked.');
    } else {
      this.logger.log('Menu item is clicked.');
    }
  }
  keyDown(event) {
    let args = event.detail;
    if (args.ID) {
      this.logger.log('Menu item id "' + args.ID + '" has been changed by keys.');
    } else {
      this.logger.log('Menu item has been changed by keys.');
    }
  }
}
