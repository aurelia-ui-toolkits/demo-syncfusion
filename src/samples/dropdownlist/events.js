export class EventsDropDownList {
  skillSet = [
            { skill: 'ASP.NET' }, { skill: 'ActionScript' }, { skill: 'Basic' },
            { skill: 'C++' }, { skill: 'C#' }, { skill: 'dBase' }, { skill: 'Delphi' },
            { skill: 'ESPOL' }, { skill: 'F#' }, { skill: 'FoxPro' }, { skill: 'Java' },
            { skill: 'J#' }, { skill: 'Lisp' }, { skill: 'Logo' }, { skill: 'PHP' }
  ];
  constructor() {
    this.fields = {text: 'skill'};
    this.dataSource = this.skillSet;
    this.checkBox = true;
    this.watermarkText = 'Select your skill';
  }
  create() {
    this.logger.log('Dropdown control has been created.');
  }
  popupHide() {
    this.logger.log('Dropdown popup is closed.');
  }
  popupShown() {
    this.logger.log('Dropdown popup is opened.');
  }
  beforePopupShown() {
    this.logger.log('BeforePopupShow event is triggered.');
  }
  change(event) {
    let args = event.detail;
    if (args.text === '') {
      this.logger.log('Value has changed to null.');
    } else {
      this.logger.log('Value has changed to ' + args.text);
    }
  }
  select(event) {
    this.logger.log(event.detail.selectedText + ' is selected.');
  }
  search(event) {
    this.logger.log(event.detail.searchString + ' is searched.');
  }
  dataBound() {
    this.logger.log('The data value is bounded.');
  }
  popupResizeStart() {
    this.logger.log('Dropdown control popup Reszing has started.');
  }
  popupResize() {
    this.logger.log('Dropdown control popup is Resizing.');
  }
  popupResizeStop() {
    this.logger.log('Dropdown control popup Resizing has stopped.');
  }
  actionComplete() {
    this.logger.log('The data fetching action is Complete.');
  }
  actionSuccess() {
    this.logger.log('The data fetching action is Success.');
  }
  actionFailure() {
    this.logger.log('The data fetching action is Failure.');
  }
}
