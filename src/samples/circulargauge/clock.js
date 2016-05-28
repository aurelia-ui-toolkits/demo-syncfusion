export class BasicUse {
  constructor() {
    this.scales = [{startAngle: 270, radius: 150, sweepAngle: 360, minimum: 0, maximum: 12, majorIntervalValue: 1, minorIntervalValue: 0.2, labels: [{distanceFromScale: 5, color: '#8c8c8c', includeFirstValue: false}], pointers: [{length: 70, width: 9, value: 3}, {length: 95, width: 9, value: 0}, {length: 95, width: 2, value: 1.5}], ticks: [{type: 'major', placement: 'near', height: 12, width: 5, color: '#8c8c8c'}, {type: 'minor', placement: 'near', height: 7, width: 0.7, color: '#8c8c8c'}]}];
  }
   attached() {
     setInterval(()=>{
       let estHours;
       let time = new Date();
       let utcHours = time.getUTCHours();
       let utcMinutes = time.getUTCMinutes();
       let utcSeconds = time.getUTCSeconds();
       let clockgauge;
       if (utcHours - 5 < 0) {
         estHours = (utcHours - 5 + 24);
       } else {
         estHours = (utcHours - 5);
       }
       if (estHours > 12) {
         estHours = estHours - 12;
       }
       utcSeconds = (utcSeconds / 60) * 12;
       utcMinutes = (utcMinutes / 60) * 12 + utcSeconds / 60;
       if (estHours === 12) {
         estHours = 0;
       }
       estHours = estHours + (utcMinutes / 12) + 1;
       clockgauge = $('#radialgaugeclock').data('ejCircularGauge');
       if (clockgauge !== undefined) {
         clockgauge.setPointerValue(0, 0, estHours);
         clockgauge.setPointerValue(0, 1, utcMinutes);
         clockgauge.setPointerValue(0, 2, utcSeconds);
       }
     }, 1);
   }
}
