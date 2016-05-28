export class API {
  constructor() {
    this.width = '107px';
  }
  create() {
    this.rte = $('#rteSample').data('ejRTE');
  }
  ongetHtmlString() {
    if (this.rte) {
      alert(this.rte.getHtml()); // eslint-disable-line no-alert
    }
  }
  ongetText() {
    if (this.rte) {
      alert(this.rte.getText()); // eslint-disable-line no-alert
    }
  }
  onexec() {
    if (this.rte) {
      this.rte.executeCommand('bold', true);
    }
  }
  oncmdStatus() {
    if (this.rte) {
      let status = this.rte.getCommandStatus('bold');
      alert(status); // eslint-disable-line no-alert
    }
  }
  onDestroyRestore(event) {
    let args = event.detail;
    if (args.isChecked) {
      this.rte.destroy();
      this.rte = null;
    } else {
      $('#rteSample').ejRTE({ width: '100%', minWidth: '150px', isResponsive: true});
      this.rte = $('#rteSample').data('ejRTE');
    }
  }
  onSelectAll() {
    if (!ej.isNullOrUndefined(this.rte)) {
      this.rte.selectAll();
    }
  }
  onSeletcRange() {
    if (!ej.isNullOrUndefined(this.rte)) {
      let range = this.rte.createRange();
      let liTag = this.rte.getDocument().getElementsByTagName('li');
      if (!this.rte._isIE8()) {
        range.setStart(liTag[2], 1);
        range.setEnd(liTag[4], 0);
      } else {
        range = this.rte.getDocument().body.createTextRange();
        range.moveToElementText(liTag[3]);
      }
      this.rte.selectRange(range);
    }
  }
  onPasteContent() {
    if (!ej.isNullOrUndefined(this.rte)) {
      let select = this.rte.getSelectedHtml();
      this.rte.pasteContent("<p style='background-color:yellow;color:skyblue'> " + select + ' </p>');
    }
  }
}
