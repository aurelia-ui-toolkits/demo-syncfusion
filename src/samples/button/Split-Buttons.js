export class SplitButton {
  constructor() {
    this.normalBtnValue = 'normal';
    this.smallBtnValue = 'small';
    this.miniBtnValue = 'mini';
    this.mediumBtnValue = 'medium';
    this.largeBtnValue = 'large';
    this.roundedCorner = true;
    this.index = 0;
    this.buttonMode = 'split';
  }
  onChange(args) {
    this.buttonMode = args.detail.value;
  }
}
