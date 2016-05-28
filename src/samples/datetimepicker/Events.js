export class Events {
   constructor() {
     this.datetimeValue = '5/18/2016 2:00 AM';
   }
   onChange(args) {
     this.logger.log(args.detail.value + ' value was selected');
   }
}
