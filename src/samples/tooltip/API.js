export class APITooltip {
  constructor() {
    this.reloadContent = 'Reload current page';
    this.reloadPosition = {
      target: {
        horizontal: 'center', vertical: 'bottom'
      },
      stem: {
        horizontal: 'left', vertical: 'top'
      }
    };
    this.goContent = 'search';
    this.goPosition = {
      target: {
        horizontal: 'center', vertical: 'bottom'
      },
      stem: {
        horizontal: 'left', vertical: 'top'
      }
    };
    this.backContent = 'Go back one page';
    this.backPosition = {
      target: {
        horizontal: 'center', vertical: 'bottom'
      },
      stem: {
        horizontal: 'left', vertical: 'top'
      }
    };
  }
  reloadCreate() {
    this.target = $('#reload').data('ejTooltip');
  }
  onEffectChange(event) {
    let args = event.detail;
    let content;
    if (args.value === 'back') {
      content = 'Go back one page';
    } else if (args.value === 'go') {
      content = 'search';
    } else {
      content = 'Reload current page';
    }
    this.target.setModel({ content: content });
    this.target.refresh($('#' + args.value));
    this.target.setModel({ content: content });
  }
  onEnableDisable(event) {
    let text;
    let args = event.detail;
    let btnObj = $('#hideButton').data('ejButton');
    let DropDownListObj = $('#refresh').data('ejDropDownList');
    if (args.model.text === 'Disable') {
      this.target.disable();
      text = 'Enable';
      btnObj.disable();
      DropDownListObj.disable();
    } else {
      this.target.enable();
      text = 'Disable';
      btnObj.enable();
      DropDownListObj.enable();
    }
    $('#btnEnable').ejButton({ text: text });
  }
  onShowHide(event) {
    let text;
    let args = event.detail;
    let DropDownListObj = $('#refresh').data('ejDropDownList');
    let value = DropDownListObj.getSelectedValue();
    let enableBtn = $('#btnEnable').data('ejButton');
    if (args.model.text === 'Hide') {
      this.target.hide();
      text = 'Show';
      enableBtn.disable();
    } else {
      let content;
      if (value === 'back') {
        content = 'Go back one page';
      } else if (value === 'go') {
        value = 'search';
      } else {
        content = 'Reload current page';
      }
      this.target.setModel({ content: content });
      this.target.refresh($('#' + value));
      this.target.show();
      text = 'Hide';
      enableBtn.enable();
    }
    $('#hideButton').ejButton({ text: text });
  }
}
