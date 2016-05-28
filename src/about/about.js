import '../samples/scripts/jsondata.js';
export class About {
  constructor() {
    this.EmployeesList = ej.DataManager(window.employeeView).executeLocal(ej.Query().take(8)); // eslint-disable-line new-cap
    this.page = { pageSize: 4 };
  }
}
