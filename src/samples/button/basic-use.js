export class EjButton {
  textValue = 'Click Here';
  checkValue=true;
  constructor() {
    this.status = true;
  }
  changeText() {
    this.textValue = 'Clicked';
  }
  enableButton() {
    this.status = true;
  }
  DisableButton() {
    this.status = false;
  }
}
