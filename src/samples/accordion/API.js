export class APIAccordion {
  constructor() {
    this.width = '120px';
  }
  create() {
    this.acrdnObj = $('#APIAccordion').data('ejAccordion');
  }
  activeChangeDDL() {
    this.activeObj = $('#optActiveChange').data('ejDropDownList');
  }
  onDisableChangeDDL() {
    this.optDisable = $('#optDisableChange').data('ejDropDownList');
  }
  enableChangeDDL() {
    this.optEnable = $('#optEnableChange').data('ejDropDownList');
  }
  onEnableDisableAll(event) {
    let args = event.detail;
    if (this.acrdnObj) {
      if (args.isChecked) {
        this.acrdnObj.disable();
        this.activeObj.disable();
        this.optDisable.disable();
      } else {
        this.acrdnObj.enable();
        this.activeObj.enable();
        this.optDisable.enable();
      }
    }
  }
  onDestroyRestore(event) {
    let args = event.detail;
    if (args.isChecked) {
      this.acrdnObj.destroy();
      this.acrdnObj = null;
    } else {
      $('#APIAccordion').ejAccordion();
      this.acrdnObj = $('#APIAccordion').data('ejAccordion');
    }
  }
  onActiveChange(event) {
    let args = event.detail;
    if (this.acrdnObj) {
      this.acrdnObj.option({ selectedItemIndex: args.value });
      $('#optDisableChange').ejDropDownList('clearText');
      $('#optEnableChange').ejDropDownList('clearText');
    }
  }
  onDisableChange(event) {
    let args = event.detail; let arrIndex = []; let uncheck = [];
    if (args.isChecked) {
      arrIndex.push(parseInt(args.value, 10));
    } else {
      uncheck.push(parseInt(args.value, 10));
    }
    if (this.acrdnObj) {
      this.acrdnObj.disableItems(arrIndex); this.acrdnObj.enableItems(uncheck);
      $('#optActiveChange').ejDropDownList('clearText');
      $('#optEnableChange').ejDropDownList('clearText');
    }
  }
  onEnableChange(event) {
    let args = event.detail; let arrayIndex = []; let uncheck = [];
    if (args.isChecked) arrayIndex.push(parseInt(args.value, 10));
    else uncheck.push(parseInt(args.value, 10));
    if (this.acrdnObj) {
      this.acrdnObj.enableItems(arrayIndex);
      this.acrdnObj.disableItems(uncheck);
      $('#optActiveChange').ejDropDownList('clearText');
      $('#optDisableChange').ejDropDownList('clearText');
    }
  }
  onShowHide(event) {
    let args = event.detail;
    if (this.acrdnObj) {
      if (args.isChecked) {
        this.acrdnObj.show();
      } else {
        this.acrdnObj.hide();
      }
    }
  }
  onHeightAdjust(event) {
    let args = event.detail;
    if (this.acrdnObj) {
      this.acrdnObj.element.find('>.e-content').css('height', '');
      this.acrdnObj.option('heightAdjustMode', args.value);
    }
  }
  onShowHideCloseBtn(event) {
    this.acrdnObj && this.acrdnObj.option('showCloseButton', event.detail.isChecked);
  }
}
