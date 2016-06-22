export class BasicUse {
  constructor() {
    this.line = [12, 14, 11, 12, 11, 15, 12, 10, 11, 12, 15, 13, 12, 11, 10, 13, 15, 12, 14, 16, 14, 12, 11];
    this.column = [2, 6, -1, 1, 12, 5, -2, 7, -3, 5, 8, 10];
    this.area = [12, -10, 11, 8, 17, 6, 2, -17, 13, -6, 8, 10];
    this.winloss = [12, 15, -11, 13, 17, 0, -12, 17, 13, -15, 8, 10];
    this.quarter1 = [4, 6, 7];
    this.quarter2 = [8, 9, 1];
    this.quarter3 = [2, 3, 5];
    this.quarter4 = [10, 12, 11];
    this.tooltip = {visible: true, font: { size: '12px'}};
    this.size = { height: '40', width: '170' };
    this.size1 = { height: '100', width: '150' };
    this.size2 =  { height: '40', width: '40' };
    this.markerSettings = {visible: true};
  }
}
