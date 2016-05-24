export class ExternalDragAndDrop {
    /* eslint-disable camelcase */
    /* eslint-disable no-nested-ternary */
    onDragStart(e) {
      if (e.detail.targetElementData.parentId === '') return false;
    }
    onDropped(event) {
      let e = event.detail;
      if ($(e.target).parents('.e-schedule').length !== 0) {
        let scheduleObj = $('#Schedule1').data('ejSchedule');
        let index = $($(e.target).context).hasClass('e-workcells') || $($(e.target).context).hasClass('e-alldaycells') ? $($(e.target).context).index() : $($(e.target).context).hasClass('e-alldaycells') ? $($(e.target).context).index() : 7 - ((parseInt($($(e.target).context).index() / 7) + 1) * 7 -  $($(e.target).context).index()) + ($($(e.target).context).parent().index() * 7); // eslint-disable-line radix
        if (scheduleObj.model.orientation === 'horizontal') {
          index = scheduleObj.model.showTimeScale ? scheduleObj.currentView() !== 'month' && !(scheduleObj._isCustomMonthView()) ? Math.floor(index / ((scheduleObj.model.endHour - scheduleObj.model.startHour) * 2)) : index : $(e.event.target).index();
        }
        let renderDate = (scheduleObj.model.orientation === 'horizontal' && scheduleObj.currentView() === 'month') ? scheduleObj.monthDays : scheduleObj.model.orientation === 'vertical' ? scheduleObj.dateRender : scheduleObj._dateRender;
        renderDate = scheduleObj.model.orientation === 'horizontal' && scheduleObj.currentView() === 'customview' && scheduleObj._dateRender.length <= 7 ? scheduleObj._dateRender : renderDate;
        let curDate = new Date(renderDate[index]);
        let cur_StartTime;
        let cur_EndTime;
        let _target = $($(e.target).context);
        if ($(_target).hasClass('e-workcells') && (scheduleObj.model.timeScale.enable) && scheduleObj.currentView() !== 'month' && !(scheduleObj._isCustomMonthView())) {
          let time = scheduleObj.model.orientation === 'vertical' ? scheduleObj.model.startHour + ($(e.event.target).parent().index() / 2) : scheduleObj.model.startHour + (($(e.event.target).index() - (((scheduleObj.model.endHour - scheduleObj.model.startHour) * 2) * index)) / 2);
          let timemin = time.toString().split('.');
          cur_StartTime = new Date(curDate).setHours(parseInt(timemin[0]), parseInt(timemin[1]) === 5 ? 30 : 0);  // eslint-disable-line radix
          let min = (parseInt(new Date(cur_StartTime).getHours()) === 23 && parseInt(new Date(cur_StartTime).getMinutes()) === 30) ? new Date(cur_StartTime).getMinutes() + 29 : new Date(cur_StartTime).getMinutes() + 30; // eslint-disable-line radix
          cur_EndTime = new Date(new Date(cur_StartTime).setMinutes(min));
        }else if ($(_target).hasClass('e-workcells') && scheduleObj.model.orientation === 'horizontal' && scheduleObj.currentView() === 'month') {
          cur_StartTime = new Date(new Date(curDate).setHours(0, 0));
          cur_EndTime = new Date(new Date(curDate).setHours(23, 59));
        }else {
          cur_StartTime = new Date(new Date(curDate).setHours(0, 0));
          cur_EndTime = new Date(new Date(curDate).setHours(23, 59));
          scheduleObj._appointmentAddWindow.find('.allday').ejCheckBox({ checked: true });
        }
        let StartTime = new Date(cur_StartTime);
        let endTime = cur_EndTime;
            // To find the resource details
        let resource = scheduleObj._getResourceValue($($(e.target).context));

            //custom appointmnt window

        $('#subject').val(e.droppedElementData.text);
        $('#customdescription').val(e.droppedElementData.text);
        $('#StartTime').ejDateTimePicker({ value: new Date(StartTime) });
        $('#EndTime').ejDateTimePicker({ value: new Date(endTime) });
        $('#resource').val(resource.text);
        $('#ownerId').val(resource.id);
        $('#customWindow').ejDialog('open');
      }
    }
    save() {
      let obj = {};
      let formelement = $('#customWindow').find('#custom').get(0);
      for (let index = 0; index < formelement.length; index++) {
        let columnName = formelement[index].name;
        let value;
        if (columnName !== undefined) {
          if (columnName === 'Subject') value = formelement[index].value;
          if (columnName === 'Desctiption') value = formelement[index].value;
          if (columnName === 'StartTime') value = new Date(formelement[index].value);
          if (columnName === 'EndTime') value = new Date(formelement[index].value);
          if (columnName === 'ownerId') value = parseInt(formelement[index].value).toString(); // eslint-disable-line radix
          if (columnName !== 'Resource') obj[columnName] = value;
        }
      }
      $('#customWindow').ejDialog('close');
      let object = $('#Schedule1').data('ejSchedule');
      object.saveAppointment(obj);
    }

    cancel() {
      $('#customWindow').ejDialog('close');
    }


    constructor() {
      this.Group = {
        resources: ['Owners']
      };
      this.Resources = [
        {
          field: 'ownerId',
          title: 'Owner',
          name: 'Owners',
          allowMultiple: true,
          resourceSettings: {
            dataSource: [
                        { text: 'Nancy', id: '1', groupId: '1', color: '#f8a398' },
                        { text: 'Steven', id: '3', groupId: '2', color: '#56ca85' },
                        { text: 'Michael', id: '5', groupId: '1', color: '#51a0ed' },
                        { text: 'Milan', id: '13', groupId: '3', color: '#99ff99' },
                        { text: 'Paul', id: '15', groupId: '3', color: '#cc99ff' }
            ],
            text: 'text',
            id: 'id',
            groupId: 'groupId',
            color: 'color'
          }
        }
      ];
      this.views = ['Day', 'Week', 'WorkWeek', 'Month'];
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
        resourceFields: 'ownerId'
      };
    }
    attached() {
      $('#StartTime').ejDateTimePicker({ width: '150px' });
      $('#EndTime').ejDateTimePicker({ width: '150px' });
      $('#customWindow').ejDialog({
        width: 600,
        height: 'auto',
        position: { X: 200, Y: 100 },
        showOnInit: false,
        enableModal: true,
        title: 'Create Appointment',
        enableResize: false,
        allowKeyboardNavigation: false,
        close: 'clearFields'
      });
    }
}
