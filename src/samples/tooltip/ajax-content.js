export class AjaxContentToolTip {
  constructor() {
    this.target = '.e-info';
    this.position = {
      target: { horizontal: 'right', vertical: 'bottom'},
      stem: {horizontal: 'left', vertical: 'top'}
    };
  }
  create() {
    this.target = $('.frame').data('ejTooltip');
  }
  onOpen(event) {
    let proxy = event.detail;
    let content;
    $.ajax({
      dataType: 'json',
      url: 'src/samples/tooltip/tooltipData.js',
      success: function(result) {
        let emp = [
        { photo: 'http://js.syncfusion.com/demos/web/content/images/grid/Employees/2.png' },
        { photo: 'http://js.syncfusion.com/demos/web/content/images/grid/Employees/4.png' },
        { photo: 'http://js.syncfusion.com/demos/web/content/images/grid/Employees/8.png' },
        { photo: 'http://js.syncfusion.com/demos/web/content/images/grid/Employees/3.png' },
        {photo: 'http://js.syncfusion.com/demos/web/content/images/grid/Employees/1.png' },
        { photo: 'http://js.syncfusion.com/demos/web/content/images/grid/Employees/6.png' }
        ];

        for (let i = 0; i < result.length; i++) {
          if (result[i].LastName === proxy.content) {
            content = '<div class="main"> <img src=' + emp[i].photo + ' class="logo"/><div class="des"><table> <tr> <th> ' + result[i].TitleOfCourtesy + ' ' + result[i].LastName + '</th> </tr> <tr> <td> Title </td> <td>&nbsp;&nbsp;: ' + result[i].Title + '</td> </tr> <tr><td> Address</td><td>&nbsp;&nbsp;: ' + result[i].Address + '</td> </tr><tr> <td> City </td> <td>&nbsp;&nbsp;: ' + result[i].City + '</td> </tr> <tr> <td> PostalCode </td> <td>&nbsp;&nbsp;: ' + result[i].PostalCode + '</td> </tr> </table></div></div>';
          }
        }
        $('.frame').ejTooltip({ content: content });
      }
    });
  }
}
