export class EventRTE {
  create() {
    this.logger.log('RTE has been created.');
  }
  preRender(event) {
    this.logger.log('RTE onPreRender has been triggered.');
  }
  change(event) {
    this.logger.log('RTE value has been changed.');
  }
  keydown(event) {
    this.logger.log('Keydown event is fired.');
  }
  keyup(event) {
    this.logger.log('Keyup event is fired.');
  }
  execute(event) {
    this.logger.log(event.detail.commandName.toUpperCase() + ' command has been Executed');
  }
}
