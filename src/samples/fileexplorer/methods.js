export class methods {
    constructor() {
      this.path = 'http://mvc.syncfusion.com/ODataServices/FileBrowser/';
      this.ajaxAction = 'http://mvc.syncfusion.com/OdataServices/fileExplorer/fileoperation/doJSONAction';
      this.width = '100%';
      this.height = '100%';
    }
    adjustSize() {
      let fileobj = $('#fileexplorer').ejFileExplorer('instance');
      fileobj.adjustSize();
    }
    DisableMenuitem() {
      let fileobj = $('#fileexplorer').ejFileExplorer('instance');
      fileobj.disableMenuItem('Upload');
    }
    disableToolbarItem() {
      let fileobj = $('#fileexplorer').ejFileExplorer('instance');
      fileobj.disableToolbarItem('Searchbar');
    }
    enableMenuItem() {
      let fileobj = $('#fileexplorer').ejFileExplorer('instance');
      fileobj.enableMenuItem('Upload');
    }
    enableToolbarItem() {
      let fileobj = $('#fileexplorer').ejFileExplorer('instance');
      fileobj.enableToolbarItem('Searchbar');
    }
    refresh() {
      let fileobj  = $('#fileexplorer').ejFileExplorer('instance');
      fileobj.refresh();
    }
    removeToolbarItem() {
      let fileobj = $('#fileexplorer').ejFileExplorer('instance');
      fileobj.removeToolbarItem('Searchbar');
    }
}
