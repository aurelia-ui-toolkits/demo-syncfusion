export class ViewCustomization {
    onChange(args) {
      $('#Schedule1').ejSchedule({ views: [args.detail.value], currentView: args.detail.value.toLowerCase() });
    }

    changeDate(args) {
      let startDate = $('#customstartdate').ejDatePicker('option', 'value');
      startDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
      let endDate = $('#customenddate').ejDatePicker('option', 'value');
      endDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
      if (startDate <= endDate) {
        $('#ddlView').ejDropDownList({
          select: 'onChange', selectedItemIndex: 5
        });
        $('#Schedule1').ejSchedule({
          currentDate: new Date(startDate),
          renderDates: {
            start: new Date(startDate),
            end: new Date(endDate)
          }
        });
      }else alert('Start date must be lesser than end date'); //eslint-disable-line no-alert
    }
    constructor() {
      this.Views = ['CustomView'];
      this.Start = new Date(2014, 4, 7);
      this.End = new Date(2014, 5, 10);
      this.dropDownData = ['Agenda', 'Month', 'Day', 'Week', 'WorkWeek', 'CustomView'];
      this.RenderDates = {
        start: '2014/4/7',
        end: '2014/4/25'
      };
      this.AppointmentList = {
        dataSource: [
          {
            Id: 600,
            Subject: 'Ladies Mogals Qualification',
            StartTime: '2014/4/2 18:00:00',
            EndTime: '2014/4/2 20:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,TH;INTERVAL=2;COUNT=6'
          }, {
            Id: 601,
            Subject: "Men's Mogals Qualification",
            StartTime: '2014/4/2 14:00:00',
            EndTime: '2014/4/2 16:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,TH;INTERVAL=1;COUNT=12'
          }, {
            Id: 602,
            Subject: "Men's 500m race",
            StartTime: '2014/4/3 17:00:00',
            EndTime: '2014/4/3 18:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5'
          }, {
            Id: 603,
            Subject: 'Opening ceremony',
            StartTime: '2014/4/1 09:00:00',
            EndTime: '2014/4/1 12:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false
          }, {
            Id: 604,
            Subject: 'Finals',
            StartTime: '2014/4/4 10:00:00',
            EndTime: '2014/4/4 17:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false
          }, {
            Id: 605,
            Subject: 'Final presentation',
            StartTime: '2014/4/4 18:00:00',
            EndTime: '2014/4/4 19:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false
          }],
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
