export class FileAndImageBrowserRTE {
  constructor() {
    this.fileService = 'http://mvc.syncfusion.com/OdataServices/fileExplorer/fileoperation/doJSONAction';

    if (this.isRestrictCrossOrigin()) {
      //IE8, IE9 browser restrict CORS, so we set ajax request as JSONP to enable CORS
      this.ajaxSettings = {
        read: {
          dataType: 'jsonp'
        },
        createFolder: {
          dataType: 'jsonp'
        },
        remove: {
          dataType: 'jsonp'
        }
      };
      this.ajaxSettings1 = {
        read: {
          dataType: 'jsonp',
          jsonpCallback: 'MyCallbackFunction1'
        },
        createFolder: {
          dataType: 'jsonp'
        },
        remove: {
          dataType: 'jsonp'
        }
      };
      //we have called "PerformJSONPAction" method to handle JSONP AJAX requests
      this.fileService = 'http://mvc.syncfusion.com/OdataServices/fileExplorer/fileoperation/doJSONPAction';
    }

    this.toolsList = ['images'];
    this.tools = {images: ['image']};
    this.imageBrowser = { filePath: 'http://mvc.syncfusion.com/OdataServices/FileBrowser/', ajaxAction: this.fileService, extensionAllow: '*.png, *.gif, *.jpg, *.jpeg, *.docx', ajaxSettings: this.ajaxSettings };
    this.fileBrowser = { filePath: 'http://mvc.syncfusion.com/OdataServices/FileBrowser/', ajaxAction: this.fileService, extensionAllow: '*.txt, *.png, *.pdf,*.jpeg', ajaxSettings: this.ajaxSettings1 };
  }
  isRestrictCrossOrigin() {
    let browserInfo = ej.browserInfo();
    return (browserInfo.name === 'msie' && browserInfo.version <= 9) ? true : false;
  }
}
