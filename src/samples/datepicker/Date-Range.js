export class DateRange {
    constructor() {
      this.today = new Date();
      this.currentYear = this.today.getFullYear();
      this.currentMonth = this.today.getMonth();
      this.currentDay = this.today.getDate();
      this.dtValue1 = this.today;
      this.minDate1 = new Date(this.currentYear, this.currentMonth, this.currentDay - 7);
      this.maxDate1 = new Date(this.currentYear, this.currentMonth + 3, this.currentDay);
      this.dtValue2 = new Date(this.currentYear, this.currentMonth, this.currentDay + 7);
      this.minDate2 =  this.today;
      this.maxDate2 = new Date(this.currentYear, this.currentMonth + 3, this.currentDay);
    }
    onSelectDate1(args) {
      let curDate = new Date(args.detail.value);
      this.minDate2 =  curDate;
      this.dtValue2 =  new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate() + 7);
    }
    onSelectDate2(args) {
      this.maxDate1 = new Date(args.detail.value);
    }
}
