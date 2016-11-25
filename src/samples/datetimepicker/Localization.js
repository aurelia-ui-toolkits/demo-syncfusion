export class Localization {
    constructor() {
      this.datetimeValue = '5/18/2016 2:00 AM';
      this.target = 'localelist';
      this.localeValue = 'en-US';
      this.btnText =  { today: 'Today', timeNow: 'Time Now', done: 'Done', timeTitle: 'Time' };
      this.placeholder = 'Select datetime';
    }
    get updateLocale() {
      return this.localeValue;
    }
    set updateLocale(value) {
      this.localeValue = value;
      if (this.localeValue === 'zh-CN') {
        this.btnText = { today: '今天', timeNow: '現在時間', done: '做过', timeTitle: '时间' };
        this.placeholder = '选择日期时间';
      }
      if (this.localeValue === 'vi-VN') {
        this.btnText = { today: 'hôm nay', timeNow: 'Bây giờ là', done: 'được rồi', timeTitle: 'thời gian' };
        this.placeholder = 'Chọn ngày giờ';
      }
      if (this.localeValue === 'en-US') {
        this.btnText = { today: 'Today', timeNow: 'Time Now', done: 'Done', timeTitle: 'Time' };
        this.placeholder = 'Select datetime';
      }
    }
}
