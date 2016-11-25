export class APIRating {
  constructor() {
    this.width = '107px';
    this.ratingValue = 0;
  }
  create() {
    this.ratingObj = $('#apiRating').data('ejRating');
  }
  dropdownCreate() {
    this.ddlObj = $('#ddlRating').data('ejDropDownList');
  }
  setRatingValue(event) {
    let args = event.detail;
    if (this.ratingObj.model) {
      this.ratingObj.setValue(args.value);
    }
  }
  getValue(event) {
    if (this.ratingObj.model) {
      let val = this.ratingObj.getValue();
      alert('Current Value : ' + val); // eslint-disable-line no-alert
    }
  }
  reset(event) {
    if (this.ratingObj.model) {
      this.ratingObj.reset();
    }
    this.ddlObj.option('selectedIndex', 0);
  }
  showHideReset(event) {
    let args = event.detail;
    if (this.ratingObj.model) {
      if (args.isChecked) {
        this.ratingObj.option({ allowReset: false });
      } else {
        this.ratingObj.option({ allowReset: true });
      }
    }
  }
  showHideRating(event) {
    let args = event.detail;
    if (this.ratingObj.model) {
      if (args.isChecked) {
        this.ratingObj.hide();
      } else {
        this.ratingObj.show();
      }
    }
  }
  destroyRestore(event) {
    let args = event.detail;
    if (args.isChecked) {
      this.ratingObj.destroy();
      this.stateChange('disable');
    } else {
      $('#apiRating').ejRating();
      this.ratingObj = $('#apiRating').data('ejRating');
      this.ddlObj.option('value', '');
      this.stateChange('enable');
    }
  }
  stateChange(state) {
    $('#ddlRating').ejDropDownList(state);
    $('#btnGetValue').ejButton(state);
    $('#btnReset').ejButton(state);
    $('#chkResetbtn').ejToggleButton(state);
    $('#chkShowHideRating').ejToggleButton(state);
  }
}
