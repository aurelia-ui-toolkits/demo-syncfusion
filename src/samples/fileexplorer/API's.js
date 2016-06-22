export class methods {
    constructor() {
      this.path = 'http://mvc.syncfusion.com/ODataServices/FileBrowser/';
      this.ajaxAction = 'http://mvc.syncfusion.com/OdataServices/fileExplorer/fileoperation/doJSONAction';
      this.width = '100%';
      this.height = '100%';
    }
    hideShowToolbar(event){
      let args = event.detail;
      let fileobj = $('#fileexplorer').ejFileExplorer('instance');
      fileobj.option("showToolbar", !args.isChecked);
    }
    hideShowFooter(event){
      let args = event.detail;
      let fileobj = $('#fileexplorer').ejFileExplorer('instance');
      fileobj.option("showFooter", !args.isChecked);
    }
    hideShowTreeView(event){
      let args = event.detail;
      let fileobj = $('#fileexplorer').ejFileExplorer('instance');
      fileobj.option("showNavigationPane", !args.isChecked);
    }
    hideShowContextMenu(event){
      let args = event.detail;
      let fileobj = $('#fileexplorer').ejFileExplorer('instance');
      fileobj.option("showContextMenu", !args.isChecked);
    }
}
