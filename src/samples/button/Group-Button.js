export class GroupButton {
  constructor() {
    this.roundedCorner = true;
    this.localData = [
        { text: 'Day', contentType: 'textonly' },
        { text: 'Week', contentType: 'textonly' },
        { text: 'Work Week', contentType: 'textonly' },
        { text: 'Month', contentType: 'textonly', selected: 'selected' },
        { text: 'Agenda', contentType: 'textonly' }];
  }
}
