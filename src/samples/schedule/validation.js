import 'jquery-validation';
export class validationrule {
    constructor() {
      this.Categorize = {
        enable: true,
        allowMultiple: false,
        dataSource: [
                { text: 'Blue Category', id: 1, color: '#43b496', fontColor: '#ffffff' },
                { text: 'Green Category', id: 2, color: '#7f993e', fontColor: '#ffffff' },
                { text: 'Orange Category', id: 3, color: '#cc8638', fontColor: '#ffffff' },
                { text: 'Purple Category', id: 4, color: '#ab54a0', fontColor: '#ffffff' },
                { text: 'Red Category', id: 5, color: '#dd654e', fontColor: '#ffffff' },
                { text: 'Yellow Category', id: 6, color: '#d0af2b', fontColor: '#ffffff' }
        ],
        text: 'text',
        id: 'id',
        color: 'color',
        fontColor: 'fontColor'
      };
      this.AppointmentList = {
        dataSource: [
          {
            Id: 100,
            Subject: 'Bering Sea Gold',
            StartTime: '2014/4/5 10:00:00',
            EndTime: '2014/4/5 11:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false,
            Categorize: '1,3'
          },
          {
            Id: 102,
            Subject: 'What Happened Next?',
            StartTime: '2014/4/4 01:00:00',
            EndTime: '2014/4/4 01:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false,
            Categorize: '3,6'
          }, {
            Id: 104,
            Subject: 'Daily Planet',
            StartTime: '2014/4/3 01:00:00',
            EndTime: '2014/4/3 02:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false,
            Categorize: '1,3,6'
          }, {
            Id: 105,
            Subject: 'Alaska: The Last Frontier',
            StartTime: '2014/4/3 04:00:00',
            EndTime: '2014/4/3 05:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false,
            Categorize: '2,3,4,5'
          }, {
            Id: 106,
            Subject: 'Deadest Catch',
            StartTime: '2014/4/3 16:00:00',
            EndTime: '2014/4/3 17:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false,
            Categorize: '2,4,6,1'
          }, {
            Id: 107,
            Subject: 'MayDay',
            StartTime: '2014/3/30 06:30:00',
            EndTime: '2014/3/30 07:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false,
            Categorize: '5,3'
          }, {
            Id: 108,
            Subject: "How It's Made",
            StartTime: '2014/4/1 06:30:00',
            EndTime: '2014/4/1 07:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TU;INTERVAL=1;COUNT=15',
            Categorize: '2,3,6'
          }, {
            Id: 110,
            Subject: 'MoonShiners',
            StartTime: '2014/4/2 02:00:00',
            EndTime: '2014/4/2 02:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5',
            Categorize: '6,2,5'
          }, {
            Id: 111,
            Subject: 'Close Encounters',
            StartTime: '2014/3/30 14:00:00',
            EndTime: '2014/3/30 15:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TH;INTERVAL=1;COUNT=5',
            Categorize: '3,4,5'
          }, {
            Id: 112,
            Subject: 'Close Encounters',
            StartTime: '2014/3/30 03:00:00',
            EndTime: '2014/3/30 03:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=WEEKLY;BYDAY=WE;INTERVAL=1;COUNT=3',
            Categorize: '5,2,1'
          }, {
            Id: 113,
            Subject: 'HighWay Thru Hell',
            StartTime: '2014/4/1 03:00:00',
            EndTime: '2014/4/1 07:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false,
            Categorize: '5,6,3'
          }, {
            Id: 114,
            Subject: 'Moon Shiners',
            StartTime: '2014/4/2 04:20:00',
            EndTime: '2014/4/2 05:50:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false,
            Categorize: '1,2,3,4,5,6'
          }, {
            Id: 115,
            Subject: 'Cash Cab',
            StartTime: '2014/3/30 15:00:00',
            EndTime: '2014/3/30 16:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;COUNT=5',
            Categorize: '1,3'

          }],
        id: 'Id',
        subject: { field: 'Subject', validationRules: { required: true } },
        location: { field: 'Location', validationRules: { required: true, customRule: '/^[a-zA-Z0-9- ]*$/' } },
        startTime: { field: 'StartTime', validationRules: { required: true } },
        endTime: { field: 'EndTime', validationRules: { required: true } },
        startTimeZone: 'StartTimeZone',
        endTimeZone: 'EndTimeZone',
        description: { field: 'Description', validationRules: { required: true, minlength: 5, maxlength: 500 } },
        allDay: 'AllDay',
        recurrence: 'Recurrence',
        recurrenceRule: 'RecurrenceRule',
        categorize: { field: 'Categorize', validationRules: { required: true, messages: { required: 'Categories are required.' } } }
      };
    }
    attached() {
      $.validator.addMethod('customRule', function(value, element, options) {
        let ptn = /^[a-zA-Z0-9- ]*$/;
        return ptn.test(value);
      }, 'Special character(s) not allowed in Location field');
    }
}
