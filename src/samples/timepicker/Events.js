export class Events {
   onChange(args) {
     this.logger.log('TimePicker value has been changed to' + args.detail.value );
   }
}
