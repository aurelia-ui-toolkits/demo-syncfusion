export class AjaxContentToolTip {
  constructor() {
    this.targetContent = '.e-info';
    this.position = {
      target: { horizontal: 'right', vertical: 'bottom'},
      stem: {horizontal: 'left', vertical: 'top'}
    };
  }
  create() {
    this.target = $('.ajax-content-frame').data('ejTooltip');
  }
  onOpen(event) {
    let proxy = event.detail;
    let content;
    $.ajax({
      dataType: 'json',
      url: 'src/samples/tooltip/tooltipData.json',
      success: function(result) {
        let emp = [
        { photo: 'images/grid/Employees/2.png' },
        { photo: 'images/grid/Employees/4.png' },
        { photo: 'images/grid/Employees/8.png' },
        { photo: 'images/grid/Employees/3.png' },
        { photo: 'images/grid/Employees/1.png' },
        { photo: 'images/grid/Employees/6.png' }
        ];
        for (let i = 0; i < result.length; i++) {
          if (result[i].LastName === $(proxy.event.target).attr('data-content')) {
            content = '<div class="main"> <img src=' + emp[i].photo + ' class="logo"/><div class="des"><table> <tr> <th> ' + result[i].TitleOfCourtesy + ' ' + result[i].LastName + '</th> </tr> <tr> <td> Title </td> <td>&nbsp;&nbsp;: ' + result[i].Title + '</td> </tr> <tr><td> Address</td><td>&nbsp;&nbsp;: ' + result[i].Address + '</td> </tr><tr> <td> City </td> <td>&nbsp;&nbsp;: ' + result[i].City + '</td> </tr> <tr> <td> PostalCode </td> <td>&nbsp;&nbsp;: ' + result[i].PostalCode + '</td> </tr> </table></div></div>';
          }
        }
        $('.ajax-content-frame').data('ejTooltip').setModel({ content: content });
      }
    });
    this.target.show(event.detail.event.target);
    event.detail.cancel = true;
  }
}
