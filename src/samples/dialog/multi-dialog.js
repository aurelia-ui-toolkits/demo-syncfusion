export class BasicUse {
  constructor() {
    this.dialog1Position = { X: 70, Y: 50 };
    this.dialog2Position = { X: 570, Y: 50 };
    this.dialog3Position = { X: 300, Y: 260 };
  }
onOpen(args) {
  $('#btnOpen').hide();
  $('#basicDialog').ejDialog('open');
}
 onDialogClose(args) {
   $('#btnOpen').show();
 }
}
