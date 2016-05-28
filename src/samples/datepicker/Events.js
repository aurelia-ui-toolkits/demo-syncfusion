export class Events {
    onSelect(args) {
      this.logger.log(args.detail.value + ' value was selected');
    }
}
