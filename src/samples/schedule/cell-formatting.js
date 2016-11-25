export class QueryCellInfo {
    onCreate(args) {
      let items = [
            { text: 'Public Event', value: 'Public Event' },
            { text: 'Holiday', value: 'Holiday' },
            { text: 'Maintenance', value: 'Maintenance' },
            { text: 'Commercial Event', value: 'Commercial Event' },
            { text: 'Family Event', value: 'Family Event' }];
      $('#EventType').ejDropDownList({
        dataSource: items,
        height: 30,
        width: 300,
        popupHeight: 200,
        popupWidth: 300
      });
      $("<tr><td class='e-leftfields e-textlabel'>Event Type:</td><td class='e-rightfields' colspan='3'></td></tr>").insertAfter('.Schedule1parrow');
      $('.Schedule1parrow').next().find('.e-rightfields').append($('#EventType_wrapper'));
    }
    onAppointmentWindowOpen(args) {
      if (!ej.isNullOrUndefined(args.detail.appointment) && !ej.isNullOrUndefined(args.detail.appointment.EventType)) {
        $('#EventType').ejDropDownList('option', 'value', args.detail.appointment.EventType);
      }
    }

    check(event) {
      let args = event.detail;
      switch (args.requestType) {
      case 'workcells':
        if (args.cell.resources.text === '101 Hall') {
          args.element.css('background-color', '#ffe9cc');
        }else if (args.cell.resources.text === '102 Hall') {
          args.element.css('background-color', '#ebf1c4');
        }else if (args.cell.resources.text === '103 Hall') {
          args.element.css('background-color', '#dcf1f8');
        }
        break;
      case 'monthcells':
        if (args.cell.resources.text === '101 Hall') {
          args.element.css('background-color', '#ffe9cc');
        }else if (args.cell.resources.text === '102 Hall') {
          args.element.css('background-color', '#ebf1c4');
        }else if (args.cell.resources.text === '103 Hall') {
          args.element.css('background-color', '#dcf1f8');
        }
        break;
      case 'alldaycells':
        if (args.cell.resources.text === '101 Hall') {
          args.element.css('background-color', '#ffe9cc');
        }else if (args.cell.resources.text === '102 Hall') {
          args.element.css('background-color', '#ebf1c4');
        }else if (args.cell.resources.text === '103 Hall') {
          args.element.css('background-color', '#dcf1f8');
        }
        break;
      case 'headercells':
        args.element.css('color', '#333');
        if (!ej.isNullOrUndefined(args.resource) && args.resource.text === '101 Hall') {
          args.element.css('background-color', '#ffe9cc');
        }else if (!ej.isNullOrUndefined(args.resource) && args.resource.text === '102 Hall') {
          args.element.css('background-color', '#ebf1c4');
        }else if (!ej.isNullOrUndefined(args.resource) && args.resource.text === '103 Hall') {
          args.element.css('background-color', '#dcf1f8');
        }
        break;
      case 'appointment':
        args.element.find('.e-apptext ').css({ 'font-weight': 'bold' });
        if (args.appointment.EventType === 'Holiday' || args.appointment.EventType === 'Maintenance') {
          args.element.css('background-color', '#a4a3a4');
          args.element.css('border-color', '#a4a3a4');
        }else if (args.appointment.EventType === 'Public Event' || args.appointment.EventType === '' || ej.isNullOrUndefined(args.appointment.EventType)) {
          args.element.css('background-color', '#faa41a');
          args.element.css('border-color', '#faa41a');
        }else if (args.appointment.EventType === 'Commercial Event') {
          args.element.css('background-color', '#1892d1');
          args.element.css('border-color', '#1892d1');
        }else if (args.appointment.EventType === 'Family Event') {
          args.element.css('background-color', '#0b8140');
          args.element.css('border-color', '#0b8140');
        }
        if ((!args.appointment.AllDay) && (((args.appointment.EndTime - args.appointment.StartTime) / 3600000) < 24)) {
          if (args.model.currentView() === 'day') {
            let eventName = (args.appointment.EventType === '' || ej.isNullOrUndefined(args.appointment.EventType)) ? 'Public Event' : args.appointment.EventType;
            let diffMs = Math.abs(args.appointment.EndTime - args.appointment.StartTime);
            let diffMins = Math.round(diffMs / 60000);
            if (diffMins > 30) {
              if (diffMins > 60) {
                args.element.find('.e-appointinnertext').prepend("<div style='color:black;margin-top:10px;height:20px;width:150px;background-color:white'><span style='margin:10px 0px 0px 10px'>" + eventName + '</span></div>');
              }
              args.element.find('.e-apptime ').html(args.appointment.Description);
            }
            args.element.find('.e-apptext ').css({ 'font-size': '14px' });
            let imgHeight;
            if ((args.element.height() - 20) > 150) imgHeight = 150;
            else if (args.element.height() <= 20) imgHeight = 20;
            else imgHeight = args.element.height() - 20;
            let imgName = (!ej.isNullOrUndefined(args.appointment.EventType)) ? args.appointment.EventType : eventName;
            let marginTopVal = (imgHeight === 20) ? '0px' : '10px';
            if (imgName === 'Holiday') {
              args.element.css({
                'background-image': 'url(images/Schedule/Holidays.png)',
                'background-repeat': 'repeat',
                'background-size': '80px auto'
              });
              if (imgHeight === 20) {
                args.element.css('background-image', 'url(images/Schedule/Holidays.png)');
              }
              args.element.find('.e-apptext ').html('');
            }else {
              args.element.prepend("<img type='image/svg+xml' style='opacity:0.3;margin-top:" + marginTopVal + ';margin-right:10px;float:right;height:' + imgHeight + 'px;width:' + imgHeight + "px;' id='E' src='images/Schedule/" + imgName + ".png'/>");
            }
          }else if (args.model.currentView() === 'week' || args.model.currentView() === 'workweek') {
            args.element.find('.e-apptime ').html(args.appointment.Description);
            let imgName = (!ej.isNullOrUndefined(args.appointment.EventType)) ? args.appointment.EventType : 'Public Event';
            if (args.appointment.Subject !== 'Holiday') {
              let imgHeight = ((args.element.width() * $('#Schedule1').find('.e-workcells').width()) / 100) - 10;
              args.element.append("<img type='image/svg+xml' style='position:absolute;opacity:0.3;left:50%;bottom:0;margin-bottom:5px;margin-left:-" + Math.round(imgHeight / 2) + 'px;height:' + imgHeight + 'px;width:' + imgHeight + "px;' id='E' src='images/Schedule/" + imgName + ".png'/>");
            } else {
              args.element.css({
                'background-image': 'url(images/Schedule/Holidays.png)',
                'background-repeat': 'repeat-y',
                'background-size': '80px auto'
              });
              args.element.find('.e-appointinnertext').prepend("<div style='color:black;margin-top:10px;height:20px;width:45px;background-color:white'><span style='margin:2px 0px 0px 2px'>Holiday</span></div>");
              args.element.find('.e-apptext ').html('');
            }
          }
        }
        break;
      case 'resourceheadercells':
        if (!ej.isNullOrUndefined(args.resource) && args.resource.text === '101 Hall') {
          args.element.css('background-color', '#ffe9cc');
          args.element.css('color', '#333');
        }else if (!ej.isNullOrUndefined(args.resource) && args.resource.text === '102 Hall') {
          args.element.css('background-color', '#ebf1c4');
          args.element.css('color', '#333');
        }else if (!ej.isNullOrUndefined(args.resource) && args.resource.text === '103 Hall') {
          args.element.css('background-color', '#dcf1f8');
          args.element.css('color', '#333');
        }
        break;
      default:
        break;
      }
    }
    constructor() {
      this.Views = ['day', 'week', 'workweek', 'month'];
      this.WorkHours = { start: 12 };
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
                        { text: 'Floor 1', id: 1, groupId: 10, color: '#cb6bb2' },
                        { text: 'Floor 2', id: 2, groupId: 20, color: '#56ca85' }],
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
                        { text: '101 Hall', id: 1, groupId: 1, color: '#ffaa00' },
                        { text: '103 Hall', id: 3, groupId: 2, color: '#7499e1' },
                        { text: '102 Hall', id: 2, groupId: 1, color: '#f8a398' }
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
            Id: 1,
            Subject: 'Maintenance',
            StartTime: '2014/4/30 02:30:00',
            EndTime: '2014/4/30 04:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false,
            EventType: 'Maintenance', roomId: 1, ownerId: 1
          },
          {
            Id: 2,
            Subject: 'Technology Book Stall',
            StartTime: '2014/5/5 12:30:00',
            EndTime: '2014/5/5 16:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false,
            EventType: 'Public Event', roomId: 1, ownerId: 1
          },
          {
            Id: 3,
            Subject: 'Technology Book Stall',
            StartTime: '2014/5/15 12:30:00',
            EndTime: '2014/5/15 16:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false,
            EventType: 'Public Event', roomId: 1, ownerId: 1
          },
          {
            Id: 4,
            Subject: 'Technology Book Stall',
            StartTime: '2014/5/10 12:30:00',
            EndTime: '2014/5/10 16:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false,
            EventType: 'Public Event', roomId: 1, ownerId: 2
          },
          {
            Id: 5,
            Subject: 'Annual Conference',
            StartTime: '2014/5/5 17:30:00',
            EndTime: '2014/5/5 21:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false,
            EventType: 'Commercial Event', roomId: 1, ownerId: 1
          },
          {
            Id: 6,
            Subject: 'Annual Conference',
            StartTime: '2014/5/15 17:30:00',
            EndTime: '2014/5/15 21:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false,
            EventType: 'Commercial Event', roomId: 1, ownerId: 1
          }, {
            Id: 7,
            Subject: 'Annual Conference',
            StartTime: '2014/5/10 17:30:00',
            EndTime: '2014/5/10 21:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false,
            EventType: 'Commercial Event', roomId: 1, ownerId: 2
          }, {
            Id: 8,
            Subject: 'IMI Meeting',
            StartTime: '2014/5/5 15:30:00',
            EndTime: '2014/5/5 18:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: 'International Management Institute',
            AllDay: false,
            Recurrence: false,
            EventType: 'Commercial Event', roomId: 2, ownerId: 3
          }, {
            Id: 9,
            Subject: 'George Birthday Celebration',
            StartTime: '2014/5/5 16:00:00',
            EndTime: '2014/5/5 19:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '4th Year Celebration',
            AllDay: false,
            Recurrence: false,
            EventType: 'Family Event', roomId: 1, ownerId: 2
          }, {
            Id: 10,
            Subject: 'John Wedding Aniversary',
            StartTime: '2014/5/2 17:00:00',
            EndTime: '2014/5/2 20:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '1st Year Celebration',
            AllDay: false,
            Recurrence: false,
            EventType: 'Family Event', roomId: 2, ownerId: 3
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
