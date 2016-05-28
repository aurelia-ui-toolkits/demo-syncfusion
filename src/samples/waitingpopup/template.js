export class TemplateWaitingPopup {
  create() {
    $('#target').ejWaitingPopup({template: $('#content')});
  }
}
