export class APIDropDownList {
  booksSection = [
                { category: 'Art' }, { category: 'Architecture' }, { category: 'Biographies' }, { category: 'Business' }, { category: 'ComputerIT' },
                { category: 'Comics' }, { category: 'Cookery' }, { category: 'Environment' }, { category: 'Fiction' },
                { category: 'Health' }, { category: 'Humanities' }, { category: 'Language' }, { category: 'Literature' }, { category: 'Memoirs' },
                { category: 'Management' }, { category: 'Professional' }, { category: 'Reference' }, { category: 'Spirituality' },
                { category: 'Sports' }, { category: 'Sciences' }
  ];

  constructor() {
    this.dataSource = this.booksSection;
    this.fields = {text: 'category', value: 'category'};
    this.width = '107px';
  }
  create() {
    this.target = $('#bookSelect').data('ejDropDownList');
  }
  onActiveIndexChange(event) {
    let args = event.detail;
    this.target.option({ selectedIndex: parseInt(args.selectedValue, 10) });
    $('#optValueChange').ejDropDownList('clearText');
    $('#optTextChange').ejDropDownList('clearText');
  }
  onActiveValueChange(event) {
    let args = event.detail;
    this.target.selectItemByValue(args.selectedValue);
    $('#optIndexChange').ejDropDownList('clearText');
    $('#optTextChange').ejDropDownList('clearText');
  }
  onActiveTextChange(event) {
    let args = event.detail;
    this.target.selectItemByText(args.selectedValue);
    $('#optIndexChange').ejDropDownList('clearText');
    $('#optValueChange').ejDropDownList('clearText');
  }
  onEnableDisable(event) {
    (event.detail.isChecked) ?  this.target.disable() : this.target.enable();
  }
  filterChange(event) {
    (event.detail.isChecked) ? this.target.option({'enableFilterSearch': true}) : this.target.option({'enableFilterSearch': false});
  }
  casesensitiveChange(event) {
    (event.detail.isChecked) ? this.target.option({'caseSensitiveSearch': true}) : this.target.option({'caseSensitiveSearch': false});
  }
  valueText(event) {
    alert('Selected Item is ' + this.target.getValue()); // eslint-disable-line no-alert
  }
}
