export class HeaderOrientationTab {
  constructor() {
    this.width = '120px';
  }

  onTabDirectionChange(event) {
    let args = event.detail;
    $('#directionTab').ejTab('setModel', { headerPosition: args.value });
  }
}
