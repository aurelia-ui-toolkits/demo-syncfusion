export class ApiUploadbox {
  constructor() {
    this.save = 'http://mvc.syncfusion.com/Services/FileUpload/UploadBox/saveFiles';
    this.remove = 'http://mvc.syncfusion.com/Services/FileUpload/UploadBox/removeFiles';
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
