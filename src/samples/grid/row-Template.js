import "./templatelocaldata.js"
export class rowTemplate {
  constructor() {
	this.EmployeesList = ej.DataManager(window.employeeData).executeLocal(ej.Query().take(8));
    this.page = { pageSize: 4};
  }
}