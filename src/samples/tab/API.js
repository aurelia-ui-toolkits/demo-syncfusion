export class ApiTab {
  constructor() {
    this.width = '120px';
  }
  create() {
    this.tabObj = $('#apiTab').data('ejTab');
  }
  disableDDL() {
    this.disableObj = $('#optDisable').data('ejDropDownList');
  }
  enableDDL() {
    this.enableObj = $('#optEnable').data('ejDropDownList');
  }
  removeDDL() {
    this.removeObj = $('#optRemove').data('ejDropDownList');
  }
  onDisableChange(event) {
    let args = event.detail;
    if (this.tabObj.model) {
      this.tabObj.option({ disabledItemIndex: [parseInt(args.value, 10)] });
      $('#optEnable').ejDropDownList('clearText');
      $('#optRemove').ejDropDownList('clearText');
    }
  }
  onEnableChange(event) {
    let args = event.detail;
    if (this.tabObj.model) {
      this.tabObj.option({ enabledItemIndex: [parseInt(args.value, 10)] });
      $('#optDisable').ejDropDownList('clearText');
      $('#optRemove').ejDropDownList('clearText');
    }
  }
  onRemoveChange(event) {
    let args = event.detail;
    if (this.tabObj.model) {
      this.tabObj.removeItem(parseInt(args.value, 10));
      let removObj = $('#optRemove').ejDropDownList('instance');
      $(removObj.items[removObj.popupListItems.length -= 1]).remove();
      let disObj = $('#optDisable').ejDropDownList('instance');
      $(disObj.items[disObj.popupListItems.length -= 1]).remove();
      let enObj = $('#optEnable').ejDropDownList('instance');
      $(enObj.items[enObj.popupListItems.length -= 1]).remove();
      $('#optDisable').ejDropDownList('clearText');
      $('#optEnable').ejDropDownList('clearText');
    }
  }
  onDestroyRestore(event) {
    let args = event.detail;

    $('#optEnable').ejDropDownList('clearText');
    $('#optRemove').ejDropDownList('clearText');
    $('#optDisable').ejDropDownList('clearText');
    if (args.isChecked) {
      this.tabObj.destroy();
      this.enableObj.disable();
      this.disableObj.disable();
      this.removeObj.disable();
    } else {
      $('#apiTab').ejTab();
      this.tabObj = $('#apiTab').data('ejTab');
      this.enableObj.enable();
      this.disableObj.enable();
      this.removeObj.enable();
    }
  }
}
