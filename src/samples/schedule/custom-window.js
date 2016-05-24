export class CustomAppointmentWindow {
    /* eslint-disable dot-notation */
    /* eslint-disable eqeqeq */
    onClick(event) {
      let args = event.detail;
      this._allDay = $(args.target.currentTarget).hasClass('e-alldaycells');
    }
    onAppointmentWindowOpen(event) {
      let args = event.detail;
      args.cancel = true;
      $('#StartTime').ejDateTimePicker({ value: args.startTime });
      $('#EndTime').ejDateTimePicker({ value: args.endTime });
      if (!ej.isNullOrUndefined(args.target)) {
        if ($(args.target.currentTarget).hasClass('e-alldaycells') || this._allDay) {
          $('#allday').prop('checked', true);
          this.alldayCheck();
        } else args.model.currentView === 'month' ? $('#allday').prop('checked', true) : $('#allday').prop('checked', false);
        $('#StartTime,#EndTime').ejDateTimePicker({ enabled: ($(args.target.currentTarget).hasClass('e-alldaycells') || $(args.target.currentTarget).hasClass('e-monthcells') || args.model.currentView === 'month') ? false : true });
      }
      if (!ej.isNullOrUndefined(args.appointment)) {
        $('#customId').val(args.appointment.Id);
        $('#subject').val(args.appointment.Subject);
        $('#customdescription').val(args.appointment.Description);
        $('#StartTime').ejDateTimePicker({ value: new Date(args.appointment.StartTime) });
        $('#EndTime').ejDateTimePicker({ value: new Date(args.appointment.EndTime) });
        $('#allday').prop('checked', args.appointment.AllDay);
        $('#recurrence').prop('checked', args.appointment.Recurrence);
        if (args.appointment.Recurrence) {
          $('#rType').val(args.appointment.RecurrenceRule.split(';')[0].split('=')[1].toLowerCase());
          $('tr.recurrence').css('display', 'table-row');
        }
      }
      $('#customWindow').ejDialog('open');
      if (this._allDay) this.alldayCheck();
    }

    save() {
      if ($.trim($('#subject').val()) == '') {
        $('#subject').addClass('error');
        return false;
      }
      let obj = {}; let temp = {}; let rType;
      let formelement = $('#customWindow').find('#custom').get(0);
      for (let index = 0; index < formelement.length; index++) {
        let columnName = formelement[index].name; let $element = $(formelement[index]);
        if (columnName != undefined) {
          if (columnName == '') columnName = formelement[index].id.replace(this._id, '');
          if (columnName != '' && obj[columnName] == null) { //eslint-disable-line no-eq-null
            let value = formelement[index].value;
            if (columnName == 'Id' && value != '') value = parseInt(value); //eslint-disable-line radix
            if ($element.hasClass('e-datetimepicker')) value = new Date(value);
            if (formelement[index].type == 'checkbox') value = formelement[index].checked;
            if (columnName == 'freq') {
              if (formelement[index].type == 'select-one') {
                rType = document.getElementById('rType');
                temp[columnName] = rType.options[rType.selectedIndex].value;
              }
            }
            obj[columnName] = value;
          }
        }
      }
      if (obj.Recurrence) {
        if (temp.freq.toUpperCase() == 'DAILY') {
          obj['RecurrenceRule'] = 'FREQ=DAILY;INTERVAL=1;COUNT=5';
        }else if (temp.freq.toUpperCase() == 'WEEKLY') {
          obj['RecurrenceRule'] = 'FREQ=WEEKLY;BYDAY=MO,WE,TH;INTERVAL=1;COUNT=10';
        }else if (temp.freq.toUpperCase() == 'MONTHLY') {
          obj['RecurrenceRule'] = 'FREQ=MONTHLY;BYMONTHDAY=' + obj.StartTime.getDate() + ';INTERVAL=1;COUNT=5';
        }else if (temp.freq.toUpperCase() == 'YEARLY') {
          obj['RecurrenceRule'] = 'FREQ=YEARLY;BYMONTHDAY=' + obj.StartTime.getDate() + ';BYMONTH=' + (obj.StartTime.getMonth() + 1) + ';INTERVAL=1;COUNT=3';
        }
      }else obj['RecurrenceRule'] = null;
      $('#customWindow').ejDialog('close');
      let object = $('#Schedule1').data('ejSchedule');
      object.saveAppointment(obj);
      this.clearFields();
    }

    cancel() {
      this.clearFields();
      $('#customWindow').ejDialog('close');
    }

    clearFields() {
      $('#customId').val('');
      $('#subject').val('');
      $('#customdescription').val('');
      $('#allday').prop('checked', false);
      $('#recurrence').prop('checked', false);
      $('tr.recurrence').css('display', 'none');
      $('#StartTime,#EndTime').ejDateTimePicker({ enabled: true });
    }
    recurCheck() {
      if ($('#recurrence').get(0).checked == true) $('tr.recurrence').css('display', 'table-row');
      else $('tr.recurrence').css('display', 'none');
    }
    alldayEnable() {
      if ($('#allday').prop('checked')) {
        let a = $('#StartTime').data('ejDateTimePicker').model.value;
        a.setHours(0, 0, 0);
        let b = $('#EndTime').data('ejDateTimePicker').model.value;
        b.setHours(23, 59, 0);
        $('#StartTime').ejDateTimePicker({ value: new Date(a), enabled: false });
        $('#EndTime').ejDateTimePicker({ value: new Date(b), enabled: false });
      } else {
        $('#StartTime').ejDateTimePicker({ enabled: true });
        $('#EndTime').ejDateTimePicker({ enabled: true });
      }
    }
    temp() {
      $('#subject').removeClass('error');
    }
    constructor() {
      this.recurrenceCheck = false;
      this.alldayCheck = false;
      this.AppointmentList = {
        dataSource: [
          {
            Id: 400,
            Subject: 'Brazil - Croatia',
            StartTime: '2014/4/2 09:00:00',
            EndTime: '2014/4/2 10:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false
          },
          {
            Id: 401,
            Subject: 'Mexico - Cameroon',
            StartTime: '2014/4/3 13:00:00',
            EndTime: '2014/4/3 14:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false
          },
          {
            Id: 402,
            Subject: 'Brazil - Mexico',
            StartTime: '2014/4/7 06:00:00',
            EndTime: '2014/4/7 07:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false
          },
          {
            Id: 403,
            Subject: 'Cameroon - Croatia',
            StartTime: '2014/4/5 04:00:00',
            EndTime: '2014/4/5 05:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false
          },
          {
            Id: 404,
            Subject: 'Cameroon - Brazil',
            StartTime: '2014/4/13 17:00:00',
            EndTime: '2014/4/13 18:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false
          },
          {
            Id: 405,
            Subject: 'Croatia - Mexico',
            StartTime: '2014/4/12 17:00:00',
            EndTime: '2014/4/12 18:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false
          },
          {
            Id: 406,
            Subject: 'Spain - Netherlands',
            StartTime: '2014/4/3 16:00:00',
            EndTime: '2014/4/6 17:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false
          },
          {
            Id: 407,
            Subject: 'Chile - Australia',
            StartTime: '2014/4/3 18:00:00',
            EndTime: '2014/4/3 19:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false
          },
          {
            Id: 408,
            Subject: 'Spain - Chile',
            StartTime: '2014/4/4 05:00:00',
            EndTime: '2014/4/4 06:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false
          },
          {
            Id: 409,
            Subject: 'Australia - Netherlands',
            StartTime: '2014/4/8 08:30:00',
            EndTime: '2014/4/8 09:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false
          },
          {
            Id: 410,
            Subject: 'Australia - Chile',
            StartTime: '2014/4/13 13:00:00',
            EndTime: '2014/4/13 14:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false
          },

          {
            Id: 411,
            Subject: 'Netherlands - Chile',
            StartTime: '2014/4/12 13:00:00',
            EndTime: '2014/4/12 14:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false
          },
          {
            Id: 412,
            Subject: 'America - Brazil',
            StartTime: '2014/4/9 05:00:00',
            EndTime: '2014/4/9 06:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false
          },
          {
            Id: 413,
            Subject: 'Russia - London',
            StartTime: '2014/4/6 07:00:00',
            EndTime: '2014/4/6 09:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            AllDay: false,
            Recurrence: false
          },
          {
            Id: 414,
            Subject: 'France - Rome',
            StartTime: '2014/4/10 07:00:00',
            EndTime: '2014/4/10 08:30:00',
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
    attached() {}
}
