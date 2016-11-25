export class ApiMenu {
  constructor() {
    this.width = '120px';
  }
  create() {
    this.menuObj = $('#JobSearch').data('ejMenu');
  }
  disableChange(event) {
    let args = event.detail;
    this.menuObj.disableItem(args.value);
    $('#Enable').ejDropDownList('clearText');
  }
  enableChange(event) {
    let args = event.detail;
    this.menuObj.enableItem(args.value);
    $('#Disable').ejDropDownList('clearText');
  }
  disbaleEnableChange(event) {
    let args = event.detail;
    $('#Disable').ejDropDownList('clearText');
    $('#Enable').ejDropDownList('clearText');
    if (args.isChecked) {
      this.menuObj.disable();
    } else {
      this.menuObj.enable();
    }
  }
}
