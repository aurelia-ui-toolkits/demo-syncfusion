export class Api {
    /* eslint-disable no-alert */
    /* eslint-disable radix */
    orientation1(args) {
      if (args.detail.value === 'Horizontal') {
        $('#Schedule1').ejSchedule({ orientation: args.detail.value.toLowerCase() });
      }
      else $('#Schedule1').ejSchedule({ orientation: args.detail.value.toLowerCase() });
    }
    readOnlyMode(args) {
      if (args.detail.isChecked) {
        $('#Schedule1').ejSchedule({ readOnly: true });
      }
      else $('#Schedule1').ejSchedule({ readOnly: false });
    }
    allDayRow(args) {
      if (args.detail.isChecked) {
        $('#Schedule1').ejSchedule({ showAllDayRow: true });
      }
      else $('#Schedule1').ejSchedule({ showAllDayRow: false });
    }
    appointmentPriority(args) {
      if (args.detail.isChecked) {
        $('#Schedule1').ejSchedule({ prioritySettings: { enable: true } });
      }
      else $('#Schedule1').ejSchedule({ prioritySettings: { enable: false } });
    }
    appointmentCategorize(args) {
      if (args.detail.isChecked) $('#Schedule1').ejSchedule({ categorizeSettings: { enable: true } });
      else $('#Schedule1').ejSchedule({ categorizeSettings: { enable: false } });
    }
    contextmenu(args) {
      if (args.detail.isChecked) $('#Schedule1').ejSchedule({ contextMenuSettings: { enable: true } });
      else $('#Schedule1').ejSchedule({ contextMenuSettings: { enable: false } });
    }
    onAutoChange(args) {
      if (args.detail.isChecked) {
        $('#Schedule1').ejSchedule('option', 'showOverflowButton', true);
      }
      else $('#Schedule1').ejSchedule('option', 'showOverflowButton', false);
    }
    onTooltipChange(event) {
      if (event.detail.isChecked) {
        $('#Schedule1').ejSchedule('option', 'tooltipSettings.enable', true);
      }
      else $('#Schedule1').ejSchedule('option', 'tooltipSettings.enable', false);
    }
    onTooltipTemp(event) {
      if (event.detail.isChecked) {
        $('#Schedule1').ejSchedule('option', 'tooltipSettings.templateId', '#tooltipTemp');
      }
      else $('#Schedule1').ejSchedule('option', 'tooltipSettings.templateId', null);
    }
    changeTime() {
      if (parseInt($('#stime').val()) < parseInt($('#etime').val())) {
        $('#Schedule1').ejSchedule({
          startHour: parseInt($('#stime').val()),
          endHour: parseInt($('#etime').val())
        });
      }
      else alert('Start hour should be less than end hour');
    }
    onChange(args) {
      $('#Schedule1').ejSchedule({ firstDayOfWeek: args.detail.selectedValue });
    }
    constructor() {
      this.checked1 = true;
      this.readOnly = false;
      this.allDay = true;
      this.showMonthDate = true;
      this.priority = true;
      this.categorize = true;
      this.contextMenuEnable = true;
      this.start = 0;
      this.tooltip = false;
      this.tooltipTemp = false;
      this.Priority = { enable: true };
      this.CategorizeSettings = {
        enable: true,
        allowMultiple: true,
        dataSource: [
                { text: 'Blue Category', id: '1', color: '#43b496', fontColor: '#ffffff' },
                { text: 'Green Category', id: '2', color: '#7f993e', fontColor: '#ffffff' },
                { text: 'Orange Category', id: '3', color: '#cc8638', fontColor: '#ffffff' },
                { text: 'Purple Category', id: '4', color: '#ab54a0', fontColor: '#ffffff' },
                { text: 'Red Category', id: '5', color: '#dd654e', fontColor: '#ffffff' },
                { text: 'Yellow Category', id: '6', color: '#d0af2b', fontColor: '#ffffff' }

        ],
        text: 'text', id: 'id', color: 'color', fontColor: 'fontColor'
      };
      this.contextMenu = {
        enable: true,
        menuItems: {
          appointment: [
                    { id: 'open', text: 'Open Appointment' },
                    { id: 'delete', text: 'Delete Appointment' },
                    { id: 'customMenu3', text: 'Menu Item 3' },
                    { id: 'customMenu4', text: 'Menu Item 4' },
                    { id: 'categorize', text: 'Categorize' }
          ],
          cells: [
                    { id: 'new', text: 'New Appointment' },
                    { id: 'recurrence', text: 'New Recurring Appointment' },
                    { id: 'today', text: 'Today' },
                    { id: 'gotodate', text: 'Go to date' },
                    { id: 'settings', text: 'Settings' },
                    { id: 'view', text: 'View', parentId: 'settings' },
                    { id: 'timemode', text: 'TimeMode', parentId: 'settings' },
                    { id: 'view_Day', text: 'Day', parentId: 'view' },
                    { id: 'view_Week', text: 'Week', parentId: 'view' },
                    { id: 'view_Workweek', text: 'Workweek', parentId: 'view' },
                    { id: 'view_Month', text: 'Month', parentId: 'view' },
                    { id: 'timemode_Hour12', text: '12 Hours', parentId: 'timemode' },
                    { id: 'timemode_Hour24', text: '24 Hours', parentId: 'timemode' },
                    { id: 'workhours', text: 'Work Hours', parentId: 'settings' },
                    { id: 'customMenu1', text: 'Menu Item 1' },
                    { id: 'customMenu2', text: 'Menu Item 2' }
          ]
        }
      };
      this.DropDownData = [
            { id: '1', text: 'Sunday', value: 'Sunday' },
            { id: '2', text: 'Monday', value: 'Monday' },
            { id: '3', text: 'Tuesday', value: 'Tuesday' },
            { id: '4', text: 'Wednesday', value: 'Wednesday' },
            { id: '5', text: 'Thursday', value: 'Thursday' },
            { id: '6', text: 'Friday', value: 'Friday' },
            { id: '7', text: 'Saturday', value: 'Saturday' }
      ];
      this.fields = { id: 'id', text: 'text', value: 'value' };
      this.orientation = ['Vertical', 'Horizontal'];
      this.autofit = true;
      this.AppointmentList = {
        dataSource: [
          {
            Id: 800,
            Subject: 'Elementary italian I',
            StartTime: '2014/4/4 04:00:00',
            EndTime: '2014/4/4 05:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            Priority: 'medium',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH;INTERVAL=1;COUNT=12',
            Categorize: '3,6'
          }, {
            Id: 801,
            Subject: 'Earth: Our Habitable Planet(lecture)',
            StartTime: '2014/4/5 06:30:00',
            EndTime: '2014/4/5 07:30:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            Priority: 'high',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,TH;INTERVAL=1;COUNT=6',
            Categorize: '1,2'
          }, {
            Id: 802,
            Subject: 'Earth: Our Habitable Planet(lecture)',
            StartTime: '2014/4/2 12:20:00',
            EndTime: '2014/4/2 14:15:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            Priority: 'low',
            AllDay: false,
            Recurrence: false,
            Categorize: '3'
          }, {
            Id: 803,
            Subject: 'Yoga',
            StartTime: '2014/4/2 12:20:00',
            EndTime: '2014/4/2 14:15:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            Priority: 'high',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=WEEKLY;BYDAY=FR;INTERVAL=1;COUNT=3',
            Categorize: '6'
          }, {
            Id: 804,
            Subject: 'Intro to Computers(lab)',
            StartTime: '2014/4/2 14:30:00',
            EndTime: '2014/4/2 15:45:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            Priority: 'low',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE;INTERVAL=1;COUNT=6',
            Categorize: '4'
          }, {
            Id: 805,
            Subject: 'Intro to Computers(lecture)',
            StartTime: '2014/4/2 15:35:00',
            EndTime: '2014/4/2 16:25:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            Priority: 'none',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,TH;INTERVAL=1;COUNT=6',
            Categorize: '2,5'
          }, {
            Id: 806,
            Subject: 'Basic Carrier Development',
            StartTime: '2014/4/2 16:00:00',
            EndTime: '2014/4/2 17:15:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            Priority: 'medium',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,WE;INTERVAL=1;COUNT=6',
            Categorize: '1'
          }, {
            Id: 807,
            Subject: 'InterPersonal Comm.',
            StartTime: '2014/4/2 17:45:00',
            EndTime: '2014/4/2 19:00:00',
            StartTimeZone: 'UTC +05:30',
            EndTimeZone: 'UTC +05:30',
            Description: '',
            Priority: 'low',
            AllDay: false,
            Recurrence: true,
            RecurrenceRule: 'FREQ=WEEKLY;BYDAY=TU,TH;INTERVAL=1;COUNT=6',
            Categorize: '4,5'
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
        priority: 'Priority',
        categorize: 'Categorize'
      };
    }
}
