import './KanbanJsonData';
export class Constraints {
  constructor() {
    this.KanbanData = KanbanData;
    this.Field = { primaryKey: 'Id', content: 'Summary', imageUrl: 'ImgUrl'};
    this.Constraints = { max: 2 };
  }
}
