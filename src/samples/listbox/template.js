export class BasicUse {
  constructor() {
     // declaration
    this.width = '240px';
    this.template = '<div><img class="eimg" src="images/Employees/${eimg}.png" alt="employee"/>' +
                         '<div class="ename"> ${text} </div><div class="desig"> ${desig} </div><div class="cont"> ${country} </div></div>';
    this.empList = [
              { text: 'Erik Linden', eimg: '3', desig: 'Representative', country: 'England' }, { text: 'John Linden', eimg: '6', desig: 'Representative', country: 'Norway' },
              { text: 'Louis', eimg: '7', desig: 'Representative', country: 'Australia' }, { text: 'Lawrence', eimg: '5', desig: 'Representative', country: 'India' }
    ];
  }
}
