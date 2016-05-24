export class BasicUse {
    constructor() {
      this.orientation = ej.Orientation.Vertical;
      this.properties = [{ paneSize: '50%' }, {}];
    }
    treeClicked(sender) {
      let content;
      if (sender.detail.currentElement.hasClass('_child')) {
        content = $('.' + sender.detail.currentElement[0].id).html();
        $('._content').html(content);
      }
    }
}
