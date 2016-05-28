export class KeyboardInteraction {
}
$(document).on('keydown', function(e) {
  if (e.altKey && e.keyCode === 74) { // j- key code.
    $('#colorPickerWrapper').focus();
  }
});

