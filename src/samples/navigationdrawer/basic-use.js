export class BasicUse {
    constructor() {
      this.listViewSettings = { width: 300, selectedItemIndex: 0 };
    }
      headChange(e) {
        $('#butdrawer').parent().children('h2').text($(e.target).text());
      }

}
