export class BasicUse {
onOpen(args) {
  $('#btnOpen').hide();
  $('#basicDialog').ejDialog('open');
}
 onDialogClose(args) {
   $('#btnOpen').show();
 }
}
