export class ApiUploadbox {
  constructor() {
    this.save = 'http://js.syncfusion.com/demos/web/uploadbox/saveFiles.ashx';
    this.remove = 'http://js.syncfusion.com/demos/web/uploadbox/removeFiles.ashx';
  }

  create() {
    this.target = $('#UploadMethods').data('ejUploadbox');
  }

  onCheckUncheckAll(event) {
    let args = event.detail;
    if (args.isChecked) {
      this.target.disable();
    } else {
      this.target.enable();
    }
  }

  onCheck(event) {
    let args = event.detail;
    if (args.isChecked) {
      this.target.setModel({ multipleFilesSelection: true });
    } else {
      this.target.setModel({ multipleFilesSelection: false });
    }
  }
}
