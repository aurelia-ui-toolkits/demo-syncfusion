export class DefaultFunctionalities {
  constructor() {
    this.value = 45;
    this.height = '20';
  }

  create() {
    let progress = $('#progressBar').data('ejProgressBar');
    progress.setModel({ text: progress.getPercentage() + ' %' });
  }
}
