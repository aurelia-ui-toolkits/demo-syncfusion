let timer = window.clearInterval(timer);
let k = 10;

export class EventsProgressBar {

  constructor() {
    this.height = 22;
    this.value = 10;
    this.showComplete = true;
  }

  create(event) {
    this.logger.log('Progressbar has been created.');
    this.progresObj = $('#progressBar').data('ejProgressBar');
    this.progresObj.option('text', this.progresObj.getPercentage() + ' %');
  }

  start(event) {
    this.logger.log('Progressbar has been started.');
  }

  change(event) {
    let args = event.detail;
    this.logger.log('Progressbar value has been changed to ' + args.percentage + '%.');
    if (args.percentage > 50) {
      $(this.progresObj.element.find('div.e-prgress.txt')).addClass('e-prodefault');
    }
  }

  complete(event) {
    let buttonObj = $('#startButton').data('ejToggleButton');
    this.progresObj.option('text', 'Completed');
    timer = window.clearInterval(timer);
    k = 0;
    if (this.showComplete) {
      this.onComplete();
    }
    buttonObj.setModel({ 'toggleState': false, 'defaultText': 'Restart' });
  }

  onComplete() {
    this.logger.log('The process has been completed successfully.');
  }

  startProcess(event) {
    startProgressProcess(event);
  }


}

function startProgressProcess(event) {
  let args = event.detail;
  let progresObj = $('#progressBar').data('ejProgressBar');

  if (args.isChecked) {
    $(progresObj.element).find('div.e-progress-txt').removeClass('e-prodefault');
    timer = window.setInterval(draw, 100);
  } else {
    let buttonObj = $('#startButton').data('ejToggleButton');
    buttonObj.setModel({ 'defaultText': 'Start' });
    timer = window.clearInterval(timer);
  }
}
function draw() {
  let progresObj = $('#progressBar').data('ejProgressBar');
  progresObj.option('text', ++k + ' %');
  progresObj.option('percentage', k);
}
