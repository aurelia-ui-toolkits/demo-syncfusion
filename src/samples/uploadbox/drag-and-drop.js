export class DragAndDropUploadbox {
  constructor() {
    this.save = 'http://mvc.syncfusion.com/Services/FileUpload/UploadBox/saveFiles';
    this.remove = 'http://mvc.syncfusion.com/Services/FileUpload/UploadBox/removeFiles';
    this.dragAndDrop = true;
    this.multipleFiles = true;
  }
}
document.addEventListener('dragover', function(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'none';
  return false;
}, false);
document.addEventListener('drop', function(event) {
  event.dataTransfer.dropEffect = 'none';
  event.preventDefault();
  return false;
}, false);
