export class RemoteData {
    constructor() {
      this.OrdersList =  ej.DataManager({ // eslint-disable-line new-cap
        url: 'http://mvc.syncfusion.com/Services/Northwnd.svc/Orders/'
      });
    }
}

