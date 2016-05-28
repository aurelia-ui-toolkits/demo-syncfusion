export class Localization {
    constructor() {
      this.dateValue = '5/18/2016';
      this.target = 'localelist';
      this.localeValue = 'en-US';
      this.watermark = 'Select Date';
      this.buttonTxt = 'Today';
    }
    get updateLocale() {
      return this.localeValue;
    }
    set updateLocale(value) {
      this.localeValue = value;
      if (this.localeValue === 'fr-FR') {
        this.watermark = 'Sélectionner une date';
        this.buttonTxt = 'Aujourd hui';
      }
      if (this.localeValue === 'vi-VN') {
        this.watermark = 'Chọn ngày';
        this.buttonTxt = 'Hôm nay';
      }
      if (this.localeValue === 'en-US') {
        this.watermark = 'Select Date';
        this.buttonTxt = 'Today';
      }
    }
}
