export class AllToolsRTE {
  tool = {
    formatStyle: ['format'],
    edit: ['findAndReplace'],
    font: ['fontName', 'fontSize', 'fontColor', 'backgroundColor'],
    style: ['bold', 'italic', 'underline', 'strikethrough'],
    alignment: ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
    lists: ['unorderedList', 'orderedList'],
    clipboard: ['cut', 'copy', 'paste'],
    doAction: ['undo', 'redo'],
    indenting: ['outdent', 'indent'],
    clear: ['clearFormat', 'clearAll'],
    links: ['createLink', 'removeLink'],
    images: ['image'],
    media: ['video'],
    tables: ['createTable', 'addRowAbove', 'addRowBelow', 'addColumnLeft', 'addColumnRight', 'deleteRow', 'deleteColumn', 'deleteTable'],
    effects: ['superscript', 'subscript'],
    casing: ['upperCase', 'lowerCase'],
    view: ['fullScreen', 'zoomIn', 'zoomOut'],
    print: ['print'],
    customUnorderedList: [{
      name: 'unOrderInsert',
      tooltip: 'Custom UnOrderList',
      css: 'e-rte-toolbar-icon e-rte-unlistitems customUnOrder',
      text: 'Smiley',
      listImage: "url('http://js.syncfusion.com/demos/web/content/images/rte/Smiley-GIF.gif')"
    }],
    customOrderedList: [{
      name: 'orderInsert',
      tooltip: 'Custom OrderList',
      css: 'e-rte-toolbar-icon e-rte-listitems customOrder',
      text: 'Lower-Greek',
      listStyle: 'lower-greek'
    }]
  };
  constructor() {
    this.width = '100%';
    this.minWidth = '150px';
    this.footer = true;
    this.htmlSource = true;
    this.tools = this.tool;
  }
}
