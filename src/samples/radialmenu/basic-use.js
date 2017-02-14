export class BasicUse {
  constructor() {
    this.listViewSettings = { width: 300, selectedItemIndex: 0, mouseUp: 'headChange' };
    this.width = '100%';
    $(window).resize(function() {
      if (ej.isMobile() && ej.isPortrait()) {
        $('#defaultradialmenu').css({'left': 25 });
      }
    });
  }
  rteChange(args) {
    $('#defaultradialmenu').ejRadialMenu('enableItem', 'Undo');
  }
  radialShow(e) {
    let target;
    let radialRadius;
    let radialDiameter;
    let iframeY;
    let iframeX;
    let xPos;
    let yPos;
    let x;
    let y;
    target = $('#radialtarget1');
    radialRadius = 150;
    radialDiameter = 2 * radialRadius;
    $('#defaultradialmenu').ejRadialMenu({ autoOpen: true });
    iframeY = e.detail.event.clientY;
    iframeX = e.detail.event.clientX;
    xPos = (iframeX > radialRadius ? iframeX - radialRadius : 0);
    yPos = (iframeY > radialRadius ? iframeY - radialRadius : 0);
    x = iframeX > (target.width() - radialRadius) ? (target.width() - radialDiameter) : xPos;
    y = iframeY > (target.height() - radialRadius) ? (target.height() - radialDiameter) : yPos;
    $('#defaultradialmenu').ejRadialMenu('setPosition', x, y);
    $('iframe').contents().find('body').blur();
  }
  itemsClick(e) {
    let rteObj = $('#rteSample1').data('ejRTE');
    if (e.detail.text && e.detail.text.toLowerCase() === 'bold') {
      rteObj.executeCommand('bold');
    }
    if (e.detail.text && e.detail.text.toLowerCase() === 'italic') {
      this.italic(e.detail.text);
    }
    if (e.detail.text && e.detail.text.toLowerCase() === 'undo') {
      this.undo(e.detail.text);
    }
    if (e.detail.text && e.detail.text.toLowerCase() === 'redo') {
      this.redo(e.detail.text);
    }
  }
  italic(e) {
    let rteObj = $('#rteSample1').data('ejRTE');
    rteObj.executeCommand('italic');
  }
  undo(e) {
    let rteObj = $('#rteSample1').data('ejRTE');
    rteObj.executeCommand('undo');
    $('#defaultradialmenu').ejRadialMenu('disableItem', 'Undo');
    $('#defaultradialmenu').ejRadialMenu('enableItem', 'Redo');
  }
  redo(e) {
    let rteObj = $('#rteSample1').data('ejRTE');
    rteObj.executeCommand('redo');
    $('#defaultradialmenu').ejRadialMenu('disableItem', 'Redo');
    $('#defaultradialmenu').ejRadialMenu('enableItem', 'Undo');
  }


}
