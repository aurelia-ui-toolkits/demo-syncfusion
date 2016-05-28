export class OtherMonths {
    constructor() {
      this.status = true;
      this.dateValue = '5/18/2016';
    }
    get currentStatus() {
      return this.status;
    }
    set currentStatus(value) {
      this.status = value;
    }
}
