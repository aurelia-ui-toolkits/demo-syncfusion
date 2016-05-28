import '../scripts/templatelocaldata.js';
export class RowTemplate {
    constructor() {
      this.EmployeesList = ej.DataManager(window.employeeData).executeLocal(ej.Query().take(8)); // eslint-disable-line new-cap
      this.page = { pageSize: 4 };
    }
}
