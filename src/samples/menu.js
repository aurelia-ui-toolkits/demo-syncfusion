import {inject, bindable} from 'aurelia-framework';
import json from './menu.json!';
@inject(Element)
export class Menu {
  @bindable router;
  constructor(element) {
    this.setMenuValues(json);
    this.element = element;
    this.parentVisible = true;
    this.childVisible = false;
  }
  setMenuValues(data) {
    this.dataSource = data;
    this.categories = Object.keys(data);
  }

  toolbarNavigation(args) {
    let id = args.target.id;
    if (this.categories.indexOf(id) > -1) {
      this.changeToggleState(this.previousCategoryButtonId, id);
      this.childVisible = true;
      this.currentCategory = id;
      this.subCategory = Object.keys(this.dataSource[id]);
      this.previousCategoryButtonId = id;
    } else if (this.currentCategory && this.dataSource[this.currentCategory][id]) {
      this.changeToggleState(this.previousControlButtonId, id);
      let moduleId = this.dataSource[this.currentCategory][id];
      if (moduleId) {
        this.router.navigateToRoute(moduleId);
      }
      this.previousControlButtonId = id;
    }
  }
  changeToggleState(prevId, curId) {
    if (prevId && prevId !== curId) {
      let instance = $(document.getElementById(prevId)).data('ejToggleButton');
      if (instance) {
        instance.option('toggleState', false);
      }
    }
  }

}
