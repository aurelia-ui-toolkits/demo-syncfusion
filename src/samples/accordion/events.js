export class EventsAccordion {
    create() {
      this.logger.log('Accordion has been created');
    }
    beforeActivate(event) {
      let args = event.detail;
      if (!ej.isNullOrUndefined(args.activeIndex)) {
        this.logger.log('BeforeActiveClick event is fired for Index ' + args.activeIndex + '.');
      }
    }
    onActivate(event) {
      let args = event.detail;
      if (!ej.isNullOrUndefined(args.activeIndex)) {
        this.logger.log('ActiveClick event is fired for Inde ' + args.activeIndex + '.');
      }
    }
    beforeInactivate(event) {
      let args = event.detail;
      if (!ej.isNullOrUndefined(args.activeIndex)) {
        this.logger.log('Index ' + args.inActiveIndex + ' is on BeforeInactive');
      }
    }
    inActivate(event) {
      let args = event.detail;
      if (!ej.isNullOrUndefined(args.activeIndex)) {
        this.logger.log('Index ' + args.inActiveIndex + ' is on inActive');
      }
    }
    ajaxBeforeLoad() {
      this.logger.log('BeforeLoad event is fired.');
    }
    ajaxLoad() {
      this.logger.log('Ajax content is loaded');
    }
    ajaxSuccess() {
      this.logger.log('Ajax content is loaded successfully.');
    }
    ajaxError() {
      this.logger.log('Ajax content is loaded with an error.');
    }
}
