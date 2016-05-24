export class BasicUse {
  constructor() {
    this.scales = [{direction: 'clockwise', type: 'roundedrectangle', backgroundColor: 'transparent', width: 50, border: {color: '#8c8c8c', width: 2}, showIndicators: true, showBarPointers: false, length: 810, minimum: 10000, maximum: 25000000, minorIntervalValue: 178500, majorIntervalValue: 1785000, position: {x: 52, y: 50}, markerPointers: [{value: 7000000, distanceFromScale: 20, type: 'circle', length: 125, width: 100, placement: 'center', backgroundColor: '#FFFFFF', opacity: 0.8, border: {color: '#8c8c8c'}}], labels: [{font: {fontStyle: 'Normal', size: '16px', fontFamily: 'Arial'}, distanceFromScale: {x: 0, y: 30}, placement: 'far', angle: 90}], ticks: [{type: 'majorinterval', width: 0.3, height: 30, color: '#8c8c8c', placement: 'far'}, {type: 'minorinterval', width: 0.3, height: 15, color: '#8c8c8c', placement: 'far'}], indicators: [{font: {size: '15px', fontFamily: 'Arial', fontStyle: 'bold'}, type: 'text', textLocation: {x: 6, y: 53}, stateRanges: [{endValue: 25000000, startValue: 10000, text: '1 Mill', textColor: '#8c8c8c'}] }, {font: {size: '15px', fontFamily: 'Arial', fontStyle: 'Normal'}, type: 'rectangle', position: {x: 40, y: 115}, textLocation: {x: 52, y: 95}, height: 20, width: 20, stateRanges: [{endValue: 8000000, startValue: 10000, text: '9.8 % interest per Annum', textColor: '#8c8c8c', backgroundColor: 'Green', borderColor: '#8c8c8c'}, {endValue: 15000000, startValue: 8000000, text: '10.5 % interest per Annum', textColor: '#8c8c8c', backgroundColor: 'Yellow', borderColor: '#8c8c8c'}, {endValue: 25000000, startValue: 15000000, text: '12.2 % interest per Annum', textColor: '#8c8c8c', backgroundColor: 'Red', borderColor: '#8c8c8c'}] }]}];
  }

  DrawLabel(args) {
    args.style.textValue = Math.round(args.label.value) === 25000000 ? '$ 25 Mills' : Math.round(args.label.value) === 10000 ? '$ 10,000' : '';
  }
  DrawMarkerPointers(args) {
    let label;
    XPosition = args.position.startX;
    text = Math.round(args.pointerValue) === 1000000 ? '1 Mill' : Math.round(args.pointerValue) > 1000000 ? (Math.round(args.pointerValue) / 1000000).toFixed(3) === 1 ? '1 Mill' : (Math.round(args.pointerValue) / 1000000).toFixed(3) + ' Mills' : (Math.round(args.pointerValue) / 1000).toFixed(3).toString().replace('.', ',');
    label = 'Loan Amount = $ ' + text;
    $('#lbl').text(label);
  }
  DrawIndicators(args) {
    if (args.indicatorIndex  ===  0) {
      args.position.textLocation.x = XPosition;
      args.indicatorEl.stateRanges[0].text = text;
    }
  }
}
