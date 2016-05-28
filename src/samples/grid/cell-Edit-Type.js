import '../scripts/jsondata.js';
export class CellEditType {
    constructor() {
      this.CustomerList = window.gridData;
      this.edit = { allowEditing: true, allowAdding: true, allowDeleting: true };
      this.toolbar = { showToolbar: true, toolbarItems: [ej.Grid.ToolBarItems.Add, ej.Grid.ToolBarItems.Edit, ej.Grid.ToolBarItems.Delete, ej.Grid.ToolBarItems.Update, ej.Grid.ToolBarItems.Cancel] };
      this.validorder = { required: true, number: true };
      this.validationcustomer = { required: true, minlength: 3 };
      this.validationdate =  { date: true };
      this.valid = { number: true };
      this.validationfreight = { range: [0, 1000] };
      this.editparams = { decimalPlaces: 2 };
      this.formatfreight = '{0:c2}';
      this.formatdate = '{0:MM/dd/yyyy hh:mm:ss}';
      this.dropdown = ej.Grid.EditingType.Dropdown;
      this.datetimepicker = ej.Grid.EditingType.DateTimePicker;
      this.numeric = ej.Grid.EditingType.Numeric;
      this.editboolean = ej.Grid.EditingType.Boolean;
    }
}
