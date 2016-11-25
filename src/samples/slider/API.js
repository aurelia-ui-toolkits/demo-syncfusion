export class methods {
    constructor() {
      this.status = true;
      this.width = '100%';
    }
    enableButton() {
      this.status = true;
    }
    DisableButton() {
      this.status = false;
    }
    GetValue() {
      let sliderObj = $('#slider').ejSlider('instance');
       /*eslint-disable */
      alert('Selected Date is : ' + sliderObj.getValue());
       /*eslint-enable */
    }
}
