import {bindable} from 'aurelia-framework';

export class NavBar {
  @bindable router = null;

  higlightMenuItem(args) {
    args.detail.element.classList.add('e-active');
  }
}
