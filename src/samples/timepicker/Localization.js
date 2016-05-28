export class Localization {
    constructor() {
      this.timeValue = '14:00';
      this.target = 'localelist';
      this.localeValue = 'zh-CN';
    }
    get updateLocale() {
      return this.localeValue;
    }
    set updateLocale(value) {
      this.localeValue = value;
    }
}
