
export class EjCheckBox {

  constructor() {
    this.status1 = true;
    this.status2 = true;
  }
  get currentStatus() {
    return this.status1 &&  this.status2;
  }
  set currentStatus(value) {
    this.status1 = this.status2 = value;
  }
}
