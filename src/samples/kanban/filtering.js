import './KanbanJsonData';
export class Filtering {
  constructor() {
    this.filterKanbanData = filterKanbanData;
    this.Field = { primaryKey: 'Id', content: 'Summary', tag: 'Tags', color: 'Type', priority: 'RankId'};
    this.CardSettings = {colorMapping: {'#cb2027': 'Bug,Story', '#67ab47': 'Improvement', '#fbae19': 'Epic', '#6a5da8': 'Others'}};
    this.Filter = [{ text: 'Janet Issues', query: new ej.Query().where('Assignee', 'equal', 'Janet Leverling'), description: 'Displays issues which matches the assignee as Janet Leverling' }, { text: 'Testing Issues', query: new ej.Query().where('Status', 'equal', 'Testing'), description: 'Display the issues of Testing'}];
  }
}
