import {customAttribute} from 'aurelia-framework';

@customAttribute('repeat-finished')
export class RepeatFinished {
  constructor() {
  }
  attached() {
    if (this.value) {
      let toolbarSubMenu = $('#control-toolbar').data('ejToolbar');
      if (toolbarSubMenu) {
        toolbarSubMenu.model.targetID = null;
        toolbarSubMenu.option('targetID', 'subCategoryToolbar');
      }
    }
  }
}
