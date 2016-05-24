export class RemoteData {
    constructor() {
      let dataManager = ej.DataManager({ //eslint-disable-line new-cap
        url: 'http://mvc.syncfusion.com/OdataServices/Northwnd.svc',
        crossDomain: true
      });
      let query = ej.Query().from('Events').take(10); //eslint-disable-line new-cap
      this.AppointmentList = {
        dataSource: dataManager,
        query: query,
        id: 'Id',
        subject: 'Subject',
        startTime: 'StartTime',
        description: 'Description',
        endTime: 'EndTime',
        allDay: 'AllDay',
        recurrence: 'Recurrence',
        recurrenceRule: 'RecurrenceRule'
      };
    }
}
