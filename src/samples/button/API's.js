export class API {
  constructor() {
    this.largeBtnValue = 'large';
    this.roundedCorner = true;
    this.status = true;
    this.arrowPosition = 'right';
  }
  onChange(args) {
    if (args.detail.isChecked) this.status = false;
    else this.status = true;
  }
  onArrowChange(args) {
    if (args.detail.value === 'top' || args.detail.value === 'bottom') $('.splttd').css('padding', '6px 15px');
    this.arrowPosition = args.detail.value;
  }
}
