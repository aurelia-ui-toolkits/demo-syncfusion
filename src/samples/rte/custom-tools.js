export class CustomToolsRTE {
  cstmTools = {
    customTools: [{
      name: 'codeInsert',
      tooltip: 'Insert code snippets ',
      css: 'codeInsert',
      text: 'codeInsert',
      action: function() {
        $('#srcCode').val('').show();
        $('#cutomSourceCode').ejDialog('open');
        $('#srcCode').focus();
      }
    }]
  };
  constructor() {
    this.toolsList = ['customTools'];
    this.tools = this.cstmTools;
  }
  create() {
    this.rteObj = $('#rteSample').data('ejRTE');
    //Add text for custom tool bar element.
    $('div.codeInsert').html('Insert code');
    //load the CodeMirror css in the iframe
    $('#rteSample_Iframe').contents().find('head').append($("<link href='jspm_packages/github/PrismJS/prism@1.3.0/themes/prism.css' rel='stylesheet'></link>"));
    $('#cutomSourceCode').find('.e-rte-btn').ejButton({ click: this.customBtnClick });
  }

  customBtnClick(args) {
    if (this._id === 'src_insert') {
      let obj = $('#rteSample').data('ejRTE');
      let val = $('#srcCode').val();
      let lang = $('#languageList').val();
      let htmlEditor = Prism.highlight(val, Prism.languages[lang]);
      obj.executeCommand('inserthtml', htmlEditor);
    }
    $('#cutomSourceCode').ejDialog('close');
  }

}


