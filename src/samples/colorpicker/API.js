export class API {
    constructor() {
      this.status = true;
      this.colorValue = '#278787';
      this.opacityValue = 100;
      this.preview = true;
      this.enableOpacity = true;
      this.recentColor = false;
      this.buttons = true;
      this.largeBtnValue = 'large';
    }
    getValue() {
      /*eslint-disable */
      alert(this.colorValue);
      /*eslint-enable */
    }
    onValueChange(args) {
      if ($('#color-value').val() !== '') {
        if ($('#color-value').val().length === 4 || $('#color-value').val().length === 7) this.colorValue = $('#color-value').val();
      } else {
        /*eslint-disable */
        alert('Enter the value in proper format');
        /*eslint-enable */
      }
    }
    onOpacityChange(args) {
      this.opacityValue = parseInt(args.detail.value, 10);
    }
    enableButtons(args) {
      if (args.detail.isChecked) this.buttons = false;
      else this.buttons = true;
    }
    onDisable(args) {
      if (args.detail.isChecked) this.status = false;
      else this.status = true;
    }
    enableRecentColors(args) {
      if (args.detail.isChecked) this.recentColor = true;
      else this.recentColor = false;
    }
    enableOpacitySlider(args) {
      if (args.detail.isChecked) this.enableOpacity = false;
      else this.enableOpacity = true;
    }
    enablePreview(args) {
      if (args.detail.isChecked) this.preview = false;
      else this.preview = true;
    }
}

