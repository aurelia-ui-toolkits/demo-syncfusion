export class Performance {
  constructor() {
    let data = [];
    this.columns =  [
                    { field: 'TaskId', headerText: 'Task Id', width: '45' },
                    { field: 'TaskName', headerText: 'Task Name' },
                    { field: 'StartDate', headerText: 'Start Date' },
                    { field: 'EndDate', headerText: 'End Date' },
                    { field: 'Duration', headerText: 'Duration' },
                    { field: 'Status', headerText: 'Progress' }
    ];
    let x = 0;
    for (let i = 0; i < 556; i++) {
      let parent = {};
      parent.TaskId = ++x;
      parent.TaskName = 'Task ' + x;
      parent.StartDate = '01/03/2013';
      parent.EndDate = '01/08/2013';
      parent.Duration = 5;
      parent.Status = Math.round(Math.random() * 100);
      let d = [];
      for (let j = 1; j < 3; j++) {
        let child = {};
        child.TaskId = ++x;
        child.TaskName = 'Task ' + x;
        child.StartDate = '01/12/2013';
        child.EndDate = '01/18/2013';
        child.Duration = 5;
        child.Status = Math.round(Math.random() * 100);
        let y = [];
        for (let k = 1; k < 4; k++) {
          let c = {};
          c.TaskId = ++x;
          c.TaskName = 'Task ' + x;
          c.StartDate = '01/12/2013';
          c.EndDate = '01/18/2013';
          c.Duration = 5;
          c.Status = Math.round(Math.random() * 100);
          y.push(c);
        }
        child.Child = y;
        d.push(child);
      }
      parent.Child = d;
      data[i] = parent;
    }
    this.ProjectData = data;
  }
}
