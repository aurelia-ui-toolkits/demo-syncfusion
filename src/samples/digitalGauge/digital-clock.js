export class BasicUse {
 
  constructor() {
  this.width=525;
  this.height=305;
  this.items=[{
                    segmentSettings: {
                        width: 1,
                        spacing: 0,
                        color: "#8c8c8c"
                    },
                    characterSettings: {
                        opacity: 0.8,
                    },
                    value: "",
                    position: { x: 52, y: 52 }
                }];
  }
  $(document).ready(function () {
            window.setInterval("setClock()", 1);
        });

        setClock() {

            var currentTime = new Date();
            var hours = currentTime.getHours();
            var minutes = currentTime.getMinutes();
            var seconds = currentTime.getSeconds();
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            var orighour = hours;
            hours = ((hours + 11) % 12 + 1);
            var v = hours + ":" + minutes + ":" + seconds + " ";
            if (orighour > 11) {
                v += "PM";
            } else {
                v += "AM";
            }

            var digiclock = $("#DigitalClock").data("ejDigitalGauge");
            if (digiclock != undefined) {
                digiclock.setValue(0, v);
            }
        };}