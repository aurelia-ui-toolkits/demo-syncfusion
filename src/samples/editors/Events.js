export class Events {
    constructor() {
      this.numericValue = 35;
      this.percentValue = 5;
      this.currencyValue = 500;
      this.cwidth = '100%';
      this.mvalue = '4242422424';
      this.maskFormat = '99 999-99999';
    }
    onNumericCreate(args) {
      this.logger.log('NumericTextbox has been created.');
    }
    onPercentageCreate(args) {
      this.logger.log('PercentageTextbox has been created.');
    }
    onCurrencyCreate(args) {
      this.logger.log('CurrencyTextbox has been created.');
    }
    onMaskCreate(args) {
      this.logger.log('MaskEditTextbox has been created.');
    }
    numericValChange(args) {
      this.logger.log('NumericTextbox value has been changed to ' + args.detail.value + '.<br/>');
    }
    percentValChange(args) {
      this.logger.log('PercentageTextbox value has been changed to ' + args.detail.value + '.<br/>');
    }
    currencyValChange(args) {
      this.logger.log('CurrencyTextbox value has been changed to ' + args.detail.value + '.<br/>');
    }
    maskValueChange(args) {
      this.logger.log('MaskEditTextbox value has been changed to ' + args.detail.value + '.<br/>');
    }
    numericFocusIn(args) {
      this.logger.log('NumericTextbox is in Focus');
    }
    numericFocusOut(args) {
      this.logger.log('NumericTextbox is out of Focus');
    }
    percentFocusIn(args) {
      this.logger.log('PercentTextbox is in Focus');
    }
    percentFocusOut(args) {
      this.logger.log('PercentTextbox is out of Focus');
    }
    currencyFocusIn(args) {
      this.logger.log('CurrencyTextbox is in Focus');
    }
    currencyFocusOut(args) {
      this.logger.log('CurrencyTextbox is out of Focus');
    }
    maskFocusIn(args) {
      this.logger.log('MaskEditTextbox is in Focus');
    }
    maskFocusOut(args) {
      this.logger.log('MaskEditTextbox is out of Focus');
    }
}
