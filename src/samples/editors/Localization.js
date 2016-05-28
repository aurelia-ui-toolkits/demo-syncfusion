export class Localization {
    constructor() {
      this.numericValue = 35;
      this.percentValue = 5;
      this.currencyValue = 500;
      this.cwidth = '100%';
      this.target = 'localelist';
      this.localeValue = 'en-US';
      this.watermark = 'Enter value';
    }
    get updateLocale() {
      return this.localeValue;
    }
    set updateLocale(value) {
      this.localeValue = value;
      if (this.localeValue === 'de-DE') this.watermark = 'Geben Sie Wert';
      if (this.localeValue === 'fr-FR') this.watermark = 'Entrer la valeur';
      if (this.localeValue === 'zh-CN') this.watermark = '输入值';
      if (this.localeValue === 'en-US') this.watermark = 'Enter value';
    }
}
