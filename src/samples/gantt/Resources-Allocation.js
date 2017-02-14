export class Baseline {
  constructor() {
    this.toolbarsettings = {
      showToolbar: true,
      toolbarItems: [
        ej.Gantt.ToolbarItems.Add,
        ej.Gantt.ToolbarItems.Edit,
        ej.Gantt.ToolbarItems.Delete,
        ej.Gantt.ToolbarItems.Update,
        ej.Gantt.ToolbarItems.Cancel,
        ej.Gantt.ToolbarItems.Indent,
        ej.Gantt.ToolbarItems.Outdent,
        ej.Gantt.ToolbarItems.ExpandAll,
        ej.Gantt.ToolbarItems.CollapseAll
      ]
    };
    this.editsettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      allowIndent: true,
      editMode: 'cellEditing'
    };
    this.Resource = [
      { 'Id': 1, 'Name': 'Resource 1' },
      { 'Id': 2, 'Name': 'Resource 2' },
      { 'Id': 3, 'Name': 'Resource 3' },
      { 'Id': 4, 'Name': 'Resource 4' },
      { 'Id': 5, 'Name': 'Resource 5' },
      { 'Id': 6, 'Name': 'Resource 6' },
      { 'Id': 7, 'Name': 'Resource 7' }
    ];

    this.ProjectData = [
      {
        'TaskId': 1,
        'TaskName': 'Task 1',
        'StartDate': '10/23/2013',
        'BaselineStartDate': '10/23/2013',
        'BaselineEndDate': '10/28/2013',
        'Duration': 10,
        'Progress': 70,
        'Resources': [1, 2, 4, 5],
        'Children': [
          { 'TaskId': 2, 'TaskName': 'Child task 1', 'StartDate': '10/23/2013', 'BaselineStartDate': '10/23/2013', 'BaselineEndDate': '10/26/2013', 'Duration': 4, 'Progress': 80, 'Resources': [2, 4] },
          { 'TaskId': 3, 'TaskName': 'Child task 2', 'StartDate': '10/24/2013', 'BaselineStartDate': '10/24/2013', 'BaselineEndDate': '10/28/2013', 'Duration': 5, 'Progress': 65, 'Predecessor': '2', 'Resources': [1] },
          {
            'TaskId': 4,
            'TaskName': 'Child task 3',
            'StartDate': '10/25/2013',
            'BaselineStartDate': '10/26/2013',
            'BaselineEndDate': '10/28/2013',
            'Duration': 6,
            'Progress': 77,
            'Resources': [5],
            'Children': [
              { 'TaskId': 5, 'TaskName': 'Grand child task 1', 'StartDate': '10/28/2013', 'BaselineStartDate': '10/27/2013', 'BaselineEndDate': '11/1/2013', 'Duration': 5, 'Progress': 60, 'Resources': [1, 3, 7] },
              { 'TaskId': 6, 'TaskName': 'Grand child task 2', 'StartDate': '10/29/2013', 'BaselineStartDate': '10/29/2013', 'BaselineEndDate': '10/31/2013', 'Duration': 6, 'Progress': 77, 'Predecessor': '5', 'Resources': [7] },
              { 'TaskId': 7, 'TaskName': 'Grand child task 3', 'StartDate': '10/25/2013', 'BaselineStartDate': '10/25/2013', 'BaselineEndDate': '10/25/2013', 'Duration': 0, 'Progress': 0, 'Predecessor': '6', 'Resources': [1, 3] }
            ]
          }
        ]
      }
    ];
  }
}
