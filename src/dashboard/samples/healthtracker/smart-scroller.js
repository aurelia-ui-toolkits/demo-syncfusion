import {inject, customAttribute, bindable} from 'aurelia-framework';
import './ej.smart.scroller';
@customAttribute('smart-scroller')
@inject(Element)
@bindable('reach')
export class SmartScroller {
  constructor(element) {
    this.element = element;
  }
  attached() {
    $(this.element).ejSmartScroller({
      reach: this.reach
    });
  }
}
