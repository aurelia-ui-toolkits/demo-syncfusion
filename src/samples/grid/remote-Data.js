import "./jsondata.min.js"
export class RemoteData {
  constructor() {
	this.OrdersList =  ej.DataManager({
                url: "http://mvc.syncfusion.com/Services/Northwnd.svc/Orders/"
            });
    }
}
