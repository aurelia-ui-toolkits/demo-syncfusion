export class API {
    constructor() {
      this.datetimeValue = '5/18/2016 2:00 AM';
      this.btnStatus = true;
      this.dtStatus = true;
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
        this.dtStatus = false;
        this.btnStatus = false;
      } else {
        this.dtStatus = true;
        this.btnStatus = true;
      }
    }
    getValue() {
      let dateTimeObj = $('#datetimepick').ejDateTimePicker('instance');
      /*eslint-disable */
      alert('Selected Date&Time is : ' + dateTimeObj.getValue());
      /*eslint-enable */
    }
    onShow(args) {
      let dateTimeObj = $('#datetimepick').ejDateTimePicker('instance');
      if (args.detail.isChecked) dateTimeObj.show();
      else dateTimeObj.hide();
    }
}
