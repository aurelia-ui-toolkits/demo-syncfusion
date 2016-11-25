export class API {
    constructor() {
      this.timeStatus = true;
      this.timeValue = '2:00 AM';
    }
    onCreate() {
      $('.e-togglebutton').mousedown(function(e) {
        e.stopPropagation();
      });
    }
    onClose() {
      let tgleBtn = $('#showHide').ejToggleButton('instance');
      tgleBtn.option('toggleState', false);
    }
    onOpen() {
      let tgleBtn = $('#showHide').ejToggleButton('instance');
      tgleBtn.option('toggleState', true);
    }
    onEnable(args) {
      if (args.detail.isChecked) {
        this.timeStatus = false;
        this.btnStatus = false;
      } else {
        this.timeStatus = true;
        this.btnStatus = true;
      }
    }
    getTime() {
      let timeObj = $('#timepick').ejTimePicker('instance');
      /*eslint-disable */
      alert('Selected time is : ' + timeObj.getValue());
      /*eslint-enable */
    }
    updateTime() {
      let timeObj = $('#timepick').ejTimePicker('instance');
      timeObj.setCurrentTime();
    }
    onShow(args) {
      let timeObj = $('#timepick').ejTimePicker('instance');
      args.detail.isChecked ? timeObj.show() : timeObj.hide();
    }
}
