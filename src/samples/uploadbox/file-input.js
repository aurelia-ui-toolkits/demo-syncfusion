export class FileInputUploadbox {
  constructor() {
    this.save = 'http://mvc.syncfusion.com/Services/FileUpload/UploadBox/saveFiles';
    this.remove = 'http://mvc.syncfusion.com/Services/FileUpload/UploadBox/removeFiles';
    this.multipleFiles = true;
  }

  create() {
    this.uploadobject = $('#UploadInput').data('ejUploadbox');
  }

  error(event) {
    alert(event.detail.error); // eslint-disable-line no-alert
  }

  allowFileType(event) {
    this.uploadobject.option('extensionsAllow', $('#fileallow').val());
    this.uploadobject.option('extensionsDeny', '');
    $('#filedeny').val('');
  }

  denyFileType(event) {
    this.uploadobject.option('extensionsAllow', '');
    this.uploadobject.option('extensionsDeny', $('#filedeny').val());
    $('#fileallow').val('');
  }
}
