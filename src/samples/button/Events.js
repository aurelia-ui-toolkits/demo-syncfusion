export class Events {
  constructor() {
    this.largeBtnValue = 'large';
    this.roundedCorner = true;
  }
 onToggleChange(args) {
   this.logger.log('Toggle State has been Changed to ' + args.detail.isChecked);
 }
 onItemSelected(args) {
   this.logger.log(args.detail.text + ' item has been selected');
 }
 onItemHover(args) {
   this.logger.log(args.detail.text + ' item has been hovered-in');
 }
 onItemBlur(args) {
   this.logger.log(args.detail.text + ' item has been hovered-out');
 }
 onBeforeSelect(args) {
   this.logger.log('Group Button before active index is ' + args.detail.index);
 }
 onKeyPress(args) {
   this.logger.log('Group Button focus changed to the index ' + args.detail.index);
 }
 onSelect(args) {
   this.logger.log('Group Button active index is ' + args.detail.index);
 }
}
