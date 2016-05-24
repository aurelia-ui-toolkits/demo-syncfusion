export class Template {
    onChange(args) {
      if (args.detail.value === 'Horizontal') {
        $('#Schedule1').ejSchedule({ orientation: args.detail.value.toLowerCase(), cellWidth: '70px' });
        $('#allDay').ejCheckBox({ enabled: false });
      } else {
        $('#Schedule1').ejSchedule({ orientation: args.detail.value.toLowerCase(), cellWidth: '' });
        $('#allDay').ejCheckBox({ enabled: true });
      }
    }
    timeScale(args) {
      if (args.detail.isChecked) { $('#Schedule1').ejSchedule({ timeScale: {enable: false} }); $('#allDay').ejCheckBox({ enabled: false }); }
      else $('#Schedule1').ejSchedule({ timeScale: {enable: true} }); $('#allDay').ejCheckBox({ enabled: true });
    }
    allDayTemplate(args) {
      if (args.detail.isChecked) { $('#Schedule1').ejSchedule({ allDayCellsTemplateId: '#allDayTemplate' }); }
      else $('#Schedule1').ejSchedule({ allDayCellsTemplateId: null });
    }
    dateHeaderTemplate(args) {
      if (args.detail.isChecked) { $('#Schedule1').ejSchedule({ dateHeaderTemplateId: '#dateTemplate' }); }
      else $('#Schedule1').ejSchedule({ dateHeaderTemplateId: null });
    }
    workCellsTemplate(args) {
      if (args.detail.isChecked) { $('#Schedule1').ejSchedule({ workCellsTemplateId: '#workTemplate' }); }
      else $('#Schedule1').ejSchedule({ workCellsTemplateId: null });
    }

    constructor() {
      this.orientation = ['Vertical', 'Horizontal'];
      this.timeCheck = false;
      this.allDayCheck = false;
      this.dateHeaderCheck = false;
      this.workCellCheck = true;
      this.Views = ['Week', 'Month'];
      this.Group = {
        resources: ['Rooms', 'Owners']
      };
      this.Resources = [
        {
          field: 'roomId',
          title: 'Room',
          name: 'Rooms',
          allowMultiple: false,
          resourceSettings: {
            dataSource: [
                            { text: 'Star Hotel', id: '1', groupId: '1', color: '#cb6bb2' }
            ],
            text: 'text',
            id: 'id',
            groupId: 'groupId',
            color: 'color'
          }
        }, {
          field: 'ownerId',
          title: 'Owner',
          name: 'Owners',
          allowMultiple: true,
          resourceSettings: {
            dataSource: [
                          { text: 'Party Hall-A', id: '1', groupId: '1', color: '#ffaa00' },
                          { text: 'Party Hall-B', id: '3', groupId: '1', color: '#f8a398' }
            ],
            text: 'text',
            id: 'id',
            groupId: 'groupId',
            color: 'color'
          }
        }
      ];
      this.AppointmentList = {
        dataSource: [
          {
            Id: 100,
            Subject: 'Bering Sea Gold',
            StartTime: '2014/4/2 09:00:00',
            EndTime: '2014/4/2 10:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=DAILY;INTERVAL=2;COUNT=10',
            categoryId: 1, roomId: '2', ownerId: '3'
          }, {
            Id: 101,
            Subject: 'Hello Sea Gold',
            StartTime: '2014/4/2 04:00:00',
            EndTime: '2014/4/2 05:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false,
            categoryId: 1, roomId: '2', ownerId: '3'
          }, {
            Id: 105,
            Subject: 'Daily Planet',
            StartTime: '2014/4/5 05:00:00',
            EndTime: '2014/4/5 06:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=DAILY;INTERVAL=2;COUNT=10',
            categoryId: 1, roomId: '1', ownerId: '1'
          }, {
            Id: 106,
            Subject: 'Alaska: The Last Frontier',
            StartTime: '2014/4/3 05:00:00',
            EndTime: '2014/4/3 06:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=DAILY;INTERVAL=2;COUNT=10',
            categoryId: 1, roomId: '1', ownerId: '5'
          }, {
            Id: 109,
            Subject: 'MayDay',
            StartTime: '2014/3/30 06:30:00',
            EndTime: '2014/3/30 07:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false,
            categoryId: 1, roomId: '2', ownerId: '3'
          }],
        id: 'Id',
        subject: 'Subject',
        startTime: 'StartTime',
        endTime: 'EndTime',
        StartTimeZone: 'StartTimeZone',
        EndTimeZone: 'EndTimeZone',
        description: 'Description',
        allDay: 'AllDay',
        recurrence: 'Recurrence',
        recurrenceRule: 'RecurrenceRule',
        resourceFields: 'roomId,ownerId'
      };
    }
    attached() {
      function _getImages(date) {
        switch (new Date(date).getDay()) {
        case 0:
          return "<img src='images/schedule/cake.png'/>";
        case 1:
          return "<img src='images/schedule/basketball.png'/>";
        case 2:
          return "<img src='images/schedule/rugby.png'/>";
        case 3:
          return "<img src='images/schedule/guitar.png'/>";
        case 4:
          return "<img src='images/schedule/music.png'/>";
        case 5:
          return "<img src='images/schedule/doctor.png'/>";
        case 6:
          return "<img src='images/schedule/beach.png'/>";
        default:
          return null;
        }
      }
      $.views.helpers({ format: _getImages });

      function _dateFormat(date) {
        let dFormat = ej.globalize.format(new Date(date), 'dd/MM');
        return dFormat;
      }
      $.views.helpers({ dTemplate: _dateFormat });
    }
}
