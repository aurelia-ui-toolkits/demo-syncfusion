export class BasicUse {
onOpen(args) {
  $('#btnOpen').hide();
  $('#lognForm').ejDialog('open');
}
 onDialogClose(args) {
   $('#btnOpen').show();
 }
}
