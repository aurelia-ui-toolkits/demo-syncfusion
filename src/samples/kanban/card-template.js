import './KanbanJsonData';
export class cardTemplate {
  constructor() {
    this.tempKanbanData = tempKanbanData;
    this.Field = { primaryKey: 'Id', content: 'Summary', tag: 'Tags', color: 'Type', imageUrl: 'ImgUrl', priority: 'RankId'};
    this.CardSettings = { template: '#cardtemplate', colorMapping: {'#cb2027': 'Bug,Story', '#67ab47': 'Improvement', '#fbae19': 'Epic', '#6a5da8': 'Others'}};
    this.ToolTip = {enable: true};
  }
 }
