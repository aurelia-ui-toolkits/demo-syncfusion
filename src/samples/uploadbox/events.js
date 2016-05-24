export class EventsUploadbox {
  constructor() {
    this.saveURL = 'http://js.syncfusion.com/demos/web/uploadbox/saveFiles.ashx';
    this.removeURL = 'http://js.syncfusion.com/demos/web/uploadbox/removeFiles.ashx';
  }

  formatSize(bytes) {
    let i = -1;
    if (!bytes) {
      return '0.0KB';
    }
    do {
      bytes = bytes / 1024;
      i++;
    } while (bytes > 99);
    return Math.max(bytes, 0).toFixed(1) + ['KB', 'MB', 'GB', 'TB', 'PB', 'EB'][i];
  }

  create(event) {
    this.logger.log('Upload box control has been created.');
  }

  fileSelect(event) {
    let args = event.detail;
    for (let i = 0; i < args.files.length; i++) {
      this.logger.log(args.files[i].name + '- file has been selected.');
    }
  }

  begin(event) {
    this.logger.log('Upload has been started -' + event.detail.files.name);
  }

  cancel(event) {
    this.logger.log('Upload has been canceled.');
  }

  inProgress(event) {
    let args = event.detail;
    this.logger.log("Upload <span class='eventTitle'>is InProgress</span> - " + args.percentage + '% - ' + args.file.name + ' (' + this.formatSize(args.e.loaded) + ').');
  }

  complete(event) {
    this.logger.log('Upload action has been completed successfully.');
  }

  remove(event) {
    this.logger.log('Uploaded file has been removed successfully.');
  }

  error(event) {
    this.logger.log('Upload action has thrown an error.');
  }

  destroy(event) {
    this.logger.log('Upload control has been destroyed.');
  }

  success(event) {
    this.logger.log('Upload of ' + event.detail.files.name + ' is success.');
  }
}
