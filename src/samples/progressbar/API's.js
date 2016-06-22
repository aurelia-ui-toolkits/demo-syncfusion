export class ApiProgressBar {
  constructor() {
    this.percentage = 75;
    this.height = 18;
    this.width = '107px';
  }

  create() {
    this.progressBar = $('#progressBar').data('ejProgressBar');
    $('.api-progress-bar-txt').html(this.progressBar.getPercentage() + ' %');
  }

  changeState(event) {
    let args = event.detail;
    if (args.isChecked) this.progressBar.disable();
    else this.progressBar.enable();
  }

  onGetPercentage() {
    alert('Progress percentage : ' + this.progressBar.getPercentage()); // eslint-disable-line no-alert
  }
}
