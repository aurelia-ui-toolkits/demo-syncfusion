export class LoadOnDemand {
    constructor() {
      let dataManager = ej.DataManager({  //eslint-disable-line new-cap
        url: 'http://mvc.syncfusion.com/OdataServices/api/ScheduleData/',
        crossDomain: true
      });
      this.Views = ['Day', 'Week', 'WorkWeek', 'Month'];
      this.AppointmentList = {
        dataSource: dataManager,
        id: 'Id',
        subject: 'Subject',
        startTime: 'StartTime',
        endTime: 'EndTime',
        startTimeZone: 'StartTimeZone',
        endTimeZone: 'EndTimeZone',
        description: 'Description',
        allDay: 'AllDay',
        recurrence: 'Recurrence',
        recurrenceRule: 'RecurrenceRule'
      };
    }
}
