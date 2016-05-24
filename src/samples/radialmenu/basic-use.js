export class BasicUse {
    constructor() {
      this.listViewSettings = { width: 300, selectedItemIndex: 0, mouseUp: 'headChange' };
      this.width = '100%';
    }
    rteChange(args) {
      $('#defaultradialmenu').ejRadialMenu('enableItem', 'Undo');
    }
    radialShow(e) {
      let target;
      let radialRadius;
      let radialDiameter;
      target = $('#radialtarget1');
      radialRadius = 150;
      radialDiameter = 2 * radialRadius;
      $('#defaultradialmenu').ejRadialMenu({autoOpen: true});
                // To get Iframe positions
      iframeY = target.offset().top + e.detail.event.clientY;
      iframeX = target.offset().left + e.detail.event.clientX;
      xPos = (iframeX > radialRadius ? iframeX - radialRadius : 0);
      yPos = (iframeY > radialRadius ? iframeY - radialRadius : 0);
      x = iframeX > (target.width() - radialRadius) ? (target.width() - radialDiameter) : xPos;
      y = iframeY > (target.height() - radialRadius) ? (target.height() - radialDiameter) : yPos;
      $('#defaultradialmenu').ejRadialMenu('setPosition', x, y);
    }


}
