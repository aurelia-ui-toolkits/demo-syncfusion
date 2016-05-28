/* global $ */
export class API {
    constructor() {
      this.status = true;
      this.dateValue = '5/18/2016';
    }
    ontglbtnCreate() {
      $('.e-togglebutton').mousedown(function(e) {
        e.stopPropagation();
      });
    }
    onClose() {
      let tgleBtn = $('#show').ejToggleButton('instance');
      tgleBtn.option('toggleState', false);
    }
    onOpen() {
      let tgleBtn = $('#show').ejToggleButton('instance');
      tgleBtn.option('toggleState', true);
    }
    onEnable(args) {
      if (args.detail.isChecked) {
        this.status = false;
        this.btnStatus = false;
      } else {
        this.status = true;
        this.btnStatus = true;
      }
    }
    getValue() {
      let dateObj = $('#datepick').ejDatePicker('instance');
      /*eslint-disable */
      alert('Selected Date is : ' + dateObj.getValue());
      /*eslint-enable */
    }
    onShow(args) {
      let dateObj = $('#datepick').ejDatePicker('instance');
      if (args.detail.isChecked) dateObj.show();
      else dateObj.hide();
    }
}
