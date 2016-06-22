export class APIToolbar {
  constructor() {
    this.width = '100px';
  }
  create() {
    this.toolbar1 = $('#toolbarMethods').data('ejToolbar');
  }
  onSelectChange(event) {
    $('#optDeselectId').data('ejDropDownList').option('selectedItemIndex', 0);
    this.toolbar1.selectItemByID(event.detail.value);
  }
  onDeselectChange(event) {
    $('#optSelectId').data('ejDropDownList').option('selectedItemIndex', 0);
    this.toolbar1.deselectItemByID(event.detail.value);
  }
  onDisableChange(event) {
    $('#optEnableId').data('ejDropDownList').option('selectedItemIndex', 0);
    this.toolbar1.disableItemByID(event.detail.value);
  }
  onEnableChange(event) {
    $('#optDisableId').data('ejDropDownList').option('selectedItemIndex', 0);
    this.toolbar1.enableItemByID(event.detail.value);
  }

  onEnableDisableAll(event) {
    let args = event.detail;
    if (args.isChecked) {
      this.toolbar1.disable();
    } else {
      this.toolbar1.enable();
    }
    $('#optSelectId').data('ejDropDownList').option('selectedItemIndex', 0);
    $('#optDeselectId').data('ejDropDownList').option('selectedItemIndex', 0);
    $('#optDisableId').data('ejDropDownList').option('selectedItemIndex', 0);
    $('#optEnableId').data('ejDropDownList').option('selectedItemIndex', 0);
  }
  onShowHide(event) {
    let args = event.detail;
    if (args.isChecked) {
      this.toolbar1.hide();
    } else {
      this.toolbar1.show();
    }
  }
}
