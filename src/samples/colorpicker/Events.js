export class Events {
   onSelect(args) {
     this.logger.log(args.detail.value + ' value was selected');
   }
   onChange(args) {
     this.logger.log('Value has been changed to ' + args.detail.value );
   }
}
