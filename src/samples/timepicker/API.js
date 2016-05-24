export class API{   
    constructor() {   
        this.timeStatus = true;
        this.timeValue = "2:00 AM";
    }
     onCreate(e) {
         $(".e-togglebutton").mousedown(function (e) {
                e.stopPropagation();
            });
        }
    onClose() {
        var tgleBtn = $("#showHide").ejToggleButton("instance");
            tgleBtn.option('toggleState', false);
        }
    onOpen() {
        var tgleBtn = $("#showHide").ejToggleButton("instance");
            tgleBtn.option('toggleState', true);
        }
    onEnable(args){        
        if (args.detail.isChecked) {
           this.timeStatus = false;
           this.btnStatus = false;
        }
        else {
           this.timeStatus = true;
           this.btnStatus = true;
        }
    }
    getTime(){
        var timeObj = $("#timepick").ejTimePicker("instance");
        alert("Selected time is : " + timeObj.getValue());
    }
    updateTime(){
        var timeObj = $("#timepick").ejTimePicker("instance");
        timeObj.setCurrentTime();
    }
    onShow(args){
        var timeObj = $("#timepick").ejTimePicker("instance");
        args.detail.isChecked ? timeObj.show():timeObj.hide();        
    }
}

