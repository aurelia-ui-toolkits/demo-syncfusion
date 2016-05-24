export class BasicUse {
 var currentValue = 0;
        var isSetValue = true;
        var timer2;
        function setMeter() {
            if (isSetValue) {
                if (currentValue < 75) {
                    currentValue = currentValue + 1;
                }
                if (currentValue >= 75) {
                    isSetValue = false;
                    window.clearInterval(timer1);
                    timer2 = window.setInterval("decreaseMeter()", 70);
                }
                var speed = $("#SpeedGauge").data("ejCircularGauge");
                if (speed != undefined) {
                    speed.setPointerValue(0, 0, currentValue);
                    speed.setCustomLabelValue(0, 0, currentValue.toFixed(0));
                }
            }
        }

        function decreaseMeter() {
            if (!isSetValue) {
                window.clearInterval(timer1);
                if (currentValue > 0) {
                    currentValue = currentValue - 1;

                }
                if (currentValue <= 0) {
                    isSetValue = true;
                    window.clearInterval(timer2);
                    timer1 = window.setInterval("setMeter()", 70);
                }
                var speed = $("#SpeedGauge").data("ejCircularGauge");
                if (speed != undefined) {
                    speed.setPointerValue(0, 0, currentValue);
                    speed.setCustomLabelValue(0, 0, currentValue.toFixed(0));
                }
            }
        }
        var timer1;
        $(document).ready(function () {
            timer1 = window.setInterval("setMeter()", 70);
        });
  constructor() {
  this.scales=[{
                    radius: 140,
                    showScaleBar: true, size: 0.3, showRanges: true, minorIntervalValue: 5,
                    pointers: [{
                        showBackNeedle: true,
                        length: 90,
                        width: 8,
                        pointerCap: { radius: 12 }
                    }],
                    ranges: [{
                        distanceFromScale: -30,
                        startValue: 0,
                        endValue: 50
                    },
                    {
                        distanceFromScale: -30,
                        startValue: 50,
                        endValue: 80,
                        backgroundColor: "#fc0606",
                        border: { color: "#fc0606" }
                    },
                    {
                        distanceFromScale: -30,
                        startValue: 80,
                        endValue: 100,
                        backgroundColor: "#f5b43f",
                        border: { color: "#f5b43f" }
                    }],
                    ticks: [{
                        type: "major",
                        width: 1, color: "#8c8c8c"
                    }, {
                        type: "minor",
                        height: 7,
                        width: 1, color: "#8c8c8c"
                    }],
                    labels: [{
                        font: { size: "11px", fontFamily: "Segoe UI", fontStyle: "Bold" }, color: "#8c8c8c"
                    }],
                    customLabels: [{
                        value: "0",
                        position: { x: 250, y: 270 },
                        font: { size: "15px", fontFamily: "Segoe UI", fontStyle: "Bold" }, color: "#666666"
                    }, {
                        value: "KM / H",
                        position: { x: 250, y: 290 },
                        font: { size: "12px", fontFamily: "Segoe UI", fontStyle: "Normal" }, color: "#666666"
                    }]
                }];
  }}