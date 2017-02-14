export class Baseline {
  constructor() {
    this.editsettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      allowIndent: true,
      editMode: 'cellEditing'
    };
    this.ProjectData = [
      {
        'TaskId': 1,
        'TaskName': 'Task 1',
        'StartDate': '10/23/2013',
        'BaselineStartDate': '10/23/2013',
        'BaselineEndDate': '10/28/2013',
        'Duration': 10,
        'Progress': 70,
        'Children': [
                  { 'TaskId': 2, 'TaskName': 'Child task 1', 'StartDate': '10/23/2013', 'BaselineStartDate': '10/23/2013', 'BaselineEndDate': '10/26/2013', 'Duration': 4, 'Progress': 80 },
                  { 'TaskId': 3, 'TaskName': 'Child task 2', 'StartDate': '10/24/2013', 'BaselineStartDate': '10/24/2013', 'BaselineEndDate': '10/28/2013', 'Duration': 5, 'Progress': 65, 'Predecessor': '2' },
          {
            'TaskId': 4,
            'TaskName': 'Child task 3',
            'StartDate': '10/25/2013',
            'BaselineStartDate': '10/26/2013',
            'BaselineEndDate': '10/28/2013',
            'Duration': 6,
            'Progress': 77,
            'Children': [
                          { 'TaskId': 5, 'TaskName': 'Grand child task 1', 'StartDate': '10/28/2013', 'BaselineStartDate': '10/27/2013', 'BaselineEndDate': '11/1/2013', 'Duration': 5, 'Progress': 60 },
                          { 'TaskId': 6, 'TaskName': 'Grand child task 2', 'StartDate': '10/29/2013', 'BaselineStartDate': '10/29/2013', 'BaselineEndDate': '10/31/2013', 'Duration': 6, 'Progress': 77, 'Predecessor': '5' },
                          { 'TaskId': 7, 'TaskName': 'Grand child task 3', 'StartDate': '10/25/2013', 'BaselineStartDate': '10/25/2013', 'BaselineEndDate': '10/25/2013', 'Duration': 0, 'Progress': 0, 'Predecessor': '6' }
            ]
          }
        ]
      }
    ];
  }
}
