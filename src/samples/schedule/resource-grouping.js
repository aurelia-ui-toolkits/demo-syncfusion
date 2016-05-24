export class ResourceGrouping {
    onChange(args) {
      if (args.detail.value === 'Horizontal') {
        $('#Schedule1').ejSchedule({ orientation: args.detail.value.toLowerCase() });
      } else {
        $('#Schedule1').ejSchedule({ orientation: args.detail.value.toLowerCase() });
      }
    }
    constructor() {
      this.orientation = ['Vertical', 'Horizontal'];
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
                        { text: 'ROOM1', id: '1', groupId: '1', color: '#cb6bb2' },
                        { text: 'ROOM2', id: '2', groupId: '1', color: '#56ca85' }
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
                        { text: 'Nancy', id: '1', groupId: '1', color: '#ffaa00' },
                        { text: 'Steven', id: '3', groupId: '2', color: '#f8a398' },
                        { text: 'Michael', id: '5', groupId: '1', color: '#7499e1' }
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
        startTimeZone: 'StartTimeZone',
        endTimeZone: 'EndTimeZone',
        description: 'Description',
        allDay: 'AllDay',
        recurrence: 'Recurrence',
        recurrenceRule: 'RecurrenceRule',
        resourceFields: 'roomId,ownerId'
      };
    }
}
