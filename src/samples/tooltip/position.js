export class PositionTooltip {
  constructor() {
    this.tooltipTarget = '.CanSelect';
    this.tooltipPosition = {
      stem: {
        horizontal: 'left',
        vertical: 'center'
      },
      target: {
        horizontal: 'right',
        vertical: 'center'
      }
    };
  }
  onCreate() {
    this.target = $('#treeView').data('ejTooltip');
  }

  onOpen(event) {
    this.contentFormation(event);
  }

  contentFormation(event) {
    let args = event.detail;
    let emp = [
                { book: 'To Kill a Mockingbird', category: 'Fiction' },
                { book: 'Pride and Prejudice', category: 'Fiction' },
                { book: 'Harry Potter', category: 'Fiction' },
                { book: 'The Hobbit', category: 'Fiction' },
                { book: 'And Then There Where None', category: 'Mystery' },
                { book: 'Angles & Demons', category: 'Mystery' },
                { book: 'In Cold Blood', category: 'Mystery' },
                { book: 'The Name of the Rose', category: 'Mystery' }
    ];
    let template;
    for (let i = 0; i < 8; i++) {
      if ($(args.event.target).text().trim() === emp[i].book) {
        template = '<div class="main"> <img class="logo" src="images/tooltip/book.png" /> <div class="des"> <div class="artists"> Category:' + emp[i].category + '</div><div class="song">' + emp[i].book + '</div></div> </div>';
      } else if ($(args.event.target).text().trim() === 'Fiction Book Lists') {
        template = '<div class="main"> <img class="logo" src="images/tooltip/book.png" /> <div class="des"> <div class="artists"> Category&nbsp;:&nbsp; Fiction </div><div class="song"> Please choose your books</div></div> </div>';
      } else if ($(args.event.target).text().trim() === 'Mystery Book Lists') {
        template = '<div class="main"> <img class="logo" src="images/tooltip/book.png" /> <div class="des"> <div class="artists"> Category&nbsp;:&nbsp; Mystery </div><div class="song"> Please choose your books</div></div> </div>';
      }
    }
    this.target.setModel({ content: template });
  }

  associateChange(event) {
    let args = event.detail;
    this.associate = args.value;
    if (this.associate === 'window') {
      $('#targetHorizontal').ejDropDownList({ value: 'right-bottom' });
    }
    this.change();
  }

  targetHorizontalChange(event) {
    this.change();
  }

  targetVerticalChange(event) {
    this.change();
  }

  stemHorizontalChange(event) {
    this.change();
  }

  stemVerticalChange(event) {
    this.change();
  }

  change() {
    this.tHorizontal = $('#targetHorizontal').ejDropDownList('getSelectedValue');
    this.tVertical = this.tHorizontal.substr(this.tHorizontal.indexOf('-') + 1);
    this.tHorizontal = this.tHorizontal.substr(0, this.tHorizontal.indexOf('-'));
    this.sHorizontal = $('#stemHorizontal').ejDropDownList('getSelectedValue');
    this.sVertical = this.sHorizontal.substr(this.sHorizontal.indexOf('-') + 1);
    this.sHorizontal = this.sHorizontal.substr(0, this.sHorizontal.indexOf('-'));
    this.xNum = $('#xAxis').data('ejNumericTextbox');
    this.yNum = $('#yAxis').data('ejNumericTextbox');
    let xAxis = parseInt($('#xAxis').ejNumericTextbox('getValue'), 10);
    let yAxis = parseInt($('#yAxis').ejNumericTextbox('getValue'), 10);
    if (this.associate === 'axis') {
      $('#axisValue').show();
      $('.targetValue').hide();
      $('.stemValue').hide();
      xAxis = xAxis > 0 ? xAxis : 100;
      yAxis = yAxis > 0 ? yAxis : 100;
    } else if (this.associate === 'window') {
      $('.stemValue').hide();
      $('#axisValue').hide();
      $('.targetValue').show();
    } else if (this.associate === 'mouseenter' || this.associate === 'mousefollow') {
      $('.targetValue').hide();
      $('#axisValue').hide();
      $('.stemValue').show();
    } else {
      $('#axisValue').hide();
      $('.targetValue').show();
      $('.stemValue').show();
    }
    this.tHorizontal = this.associate === 'axis' ? xAxis : this.tHorizontal;
    this.tVertical = this.associate === 'axis' ? yAxis : this.tVertical;
    let position = {
      stem: {
        horizontal: this.sHorizontal,
        vertical: this.sVertical
      },
      target: {
        horizontal: this.tHorizontal,
        vertical: this.tVertical
      }
    };


    this.target.option('position', position);
    this.target.option('associate', this.associate);
  }
}
