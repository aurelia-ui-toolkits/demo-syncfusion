export class API {
    constructor() {
      this.tabIndex = 0;
    }
    expandAll(args) {
      let treeview = $('#treeView').data('ejTreeView');
      if (treeview.model) {
        if (args.detail.isChecked) treeview.expandAll();
        else treeview.collapseAll();
      }
    }
    checkAll(args) {
      let treeview = $('#treeView').data('ejTreeView');
      if (treeview.model) {
        if (args.detail.isChecked) treeview.checkAll();
        else treeview.unCheckAll();
      }
    }
    nodeExpand() {
      let treeview = $('#treeView').data('ejTreeView');
      if (treeview.model) treeview.expandNode(treeview.getSelectedNode());
    }
    nodeCollpase() {
      let treeview = $('#treeView').data('ejTreeView');
      if (treeview.model) treeview.collapseNode(treeview.getSelectedNode());
    }
    nodeChecked() {
      let treeview = $('#treeView').data('ejTreeView');
      if (treeview.model) treeview.checkNode(treeview.getSelectedNode());
    }
    nodeUnchecked() {
      let treeview = $('#treeView').data('ejTreeView');
      if (treeview.model) treeview.uncheckNode(treeview.getSelectedNode());
    }
    nodeDisable(args) {
      let treeview = $('#treeView').data('ejTreeView');
      if (treeview.model) treeview.disableNode(treeview.getSelectedNode());
    }
    nodeEnable(args) {
      let treeview = $('#treeView').data('ejTreeView');
      if (treeview.model) {
        let node = $('#treeView').find('.e-node-disable');
        treeview.enableNode(node[0]);
      }
    }
    addNewNode(args) {
      let treeview = $('#treeView').data('ejTreeView');
      if (treeview.model) {
        treeview.addNode('Item' + this.tabIndex, treeview.getSelectedNode());
        this.tabIndex++;
      }
    }
    removeNode() {
      let treeview = $('#treeView').data('ejTreeView');
      if (treeview.model) treeview.removeNode(treeview.getSelectedNode());
    }
    onDestroy(args) {
      let treeview = $('#treeView').data('ejTreeView');
      if (args.detail.isChecked) {
        treeview.destroy();
        this.enableOrDisable(false);
      } else {
        $('#treeView').ejTreeView({
          showCheckbox: true,
          allowEdit: true,
          height: 400,
          width: 300
        });
        treeview = $('#treeView').data('ejTreeView');
        this.enableOrDisable(true);
      }
    }
    enableOrDisable(value) {
      let _array = ['expandAll', 'checkAll', 'expand', 'collapse', 'check', 'unCheck', 'disableNode', 'enableNode', 'newNode', 'removeNode'];
      for (let i = 0; i < _array.length; i++) {
        if (i === 0 || i === 1) this.enableOrDisableToggleButton(value, _array[i]);
        else this.enableOrDisableButton(value, _array[i]);
      }
    }
    enableOrDisableButton(value, btnId) {
      let btnObj = $('#' + btnId).data('ejButton');
      value ? btnObj.enable() : btnObj.disable();
    }
    enableOrDisableToggleButton(value, btnId) {
      let btnObj = $('#' + btnId).data('ejToggleButton');
      btnObj.option('toggleState', false);
      value ? btnObj.enable() : btnObj.disable();
    }
}
