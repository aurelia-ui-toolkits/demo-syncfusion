export class RowDragAndDrop {
  constructor() {
    this.ProjectData =  [
             { 'TaskID': 1, 'TaskName': 'Parent Task 1', 'StartDate': '02/23/2014', 'EndDate': '02/27/2014', 'Progress': '40' },
             { 'TaskID': 2, 'TaskName': 'Child Task 1', 'StartDate': '02/23/2014', 'EndDate': '02/27/2014', 'Progress': '40', 'parentID': 1 },
             { 'TaskID': 3, 'TaskName': 'Child Task 2', 'StartDate': '02/23/2014', 'EndDate': '02/27/2014', 'Progress': '40', 'parentID': 1 },
             { 'TaskID': 4, 'TaskName': 'Child Task 3', 'StartDate': '02/23/2014', 'EndDate': '02/27/2014', 'Duration': 5, 'Progress': '40', 'parentID': 1 },
             { 'TaskID': 5, 'TaskName': 'Parent Task 2', 'StartDate': '03/14/2014', 'EndDate': '03/18/2014', 'Progress': '40' },
             { 'TaskID': 6, 'TaskName': 'Child Task 1', 'StartDate': '03/02/2014', 'EndDate': '03/06/2014', 'Progress': '40', 'parentID': 5 },
             { 'TaskID': 7, 'TaskName': 'Child Task 2', 'StartDate': '03/02/2014', 'EndDate': '03/06/2014', 'Progress': '40', 'parentID': 5 },
             { 'TaskID': 8, 'TaskName': 'Child Task 3', 'StartDate': '03/02/2014', 'EndDate': '03/06/2014', 'Progress': '40', 'parentID': 5 },
             { 'TaskID': 9, 'TaskName': 'Child Task 4', 'StartDate': '03/02/2014', 'EndDate': '03/06/2014', 'Progress': '40', 'parentID': 5 },
             { 'TaskID': 10, 'TaskName': 'Parent Task 3', 'StartDate': '03/09/2014', 'EndDate': '03/13/2014', 'Progress': '40' },
             { 'TaskID': 11, 'TaskName': 'Child Task 1', 'StartDate': '03/9/2014', 'EndDate': '03/13/2014', 'Progress': '40', 'parentID': 10  },
             { 'TaskID': 12, 'TaskName': 'Child Task 2', 'StartDate': '03/9/2014', 'EndDate': '03/13/2014', 'Progress': '40', 'parentID': 10 },
             { 'TaskID': 13, 'TaskName': 'Child Task 3', 'StartDate': '03/9/2014', 'EndDate': '03/13/2014', 'Progress': '40', 'parentID': 10 },
             { 'TaskID': 14, 'TaskName': 'Child Task 4', 'StartDate': '03/9/2014', 'EndDate': '03/13/2014', 'Progress': '40', 'parentID': 10 },
             { 'TaskID': 15, 'TaskName': 'Child Task 5', 'StartDate': '03/9/2014', 'EndDate': '03/13/2014', 'Progress': '40', 'parentID': 10 }

    ];
  }
}
