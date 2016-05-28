export class KeyboardInteraction {
}
//Control focus key
$(document).on('keydown', function(e) {
  if (e.altKey && e.keyCode === 74) {
    // j- key code.
    $('.e-treeview.e-js').focus();
  }
});
