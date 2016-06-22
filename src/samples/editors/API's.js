/* global $ */
export class API {
    constructor() {
      this.status = true;
      this.numericValue = 35;
      this.percentValue = 5;
      this.currencyValue = 500;
      this.cwidth = '100%';
    }
    onEnable(args) {
      if (args.detail.isChecked) this.status = false;
      else this.status = true;
    }
    onApply(args) {
      let numobject;
      let percentobject;
      let currencyobject;
      let val;
      let minVal;
      let maxVal;
      let decVal;
      numobject = $('#numeric').data('ejNumericTextbox');
      percentobject = $('#percent').data('ejPercentageTextbox');
      currencyobject = $('#currency').data('ejCurrencyTextbox');
      val = parseFloat($('#incrementStep').val());
      minVal = parseFloat($('#minValue').val());
      maxVal = parseFloat($('#maxValue').val());
      decVal = parseFloat($('#decimalValue').val());
      if (!isNaN(val)) {
        numobject.option('incrementStep', val);
        percentobject.option('incrementStep', val);
        currencyobject.option('incrementStep', val);
      }
      if (!isNaN(decVal) && !ej.isNullOrUndefined(decVal)) {
        numobject.option('decimalPlaces', decVal);
        percentobject.option('decimalPlaces', decVal);
        currencyobject.option('decimalPlaces', decVal);
      }
      if ((!isNaN(minVal)) && (!isNaN(maxVal)) && (maxVal < minVal)) {
        $('#error').html('Min value exceeds Max value');
      } else {
        if (!isNaN(minVal)) {
          numobject.option('minValue', minVal);
          percentobject.option('minValue', minVal);
          currencyobject.option('minValue', minVal);
          $('#error').html('');
        }
        if (!isNaN(maxVal)) {
          numobject.option('maxValue', maxVal);
          percentobject.option('maxValue', maxVal);
          currencyobject.option('maxValue', maxVal);
          $('#error').html('');
        }
      }
    }
}
