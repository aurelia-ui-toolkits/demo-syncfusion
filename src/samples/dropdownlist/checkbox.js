export class EjDDLCheckBox {
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
    this.target = $('#skillsets').data('ejDropDownList');
  }
  checkUncheckAll(event) {
    let args = event.detail;
    if (args.isChecked) {
      this.target.checkAll();
    } else {
      this.target.unCheckAll();
    }
  }
}
