/* global $ */
export class API{  
    
    constructor() {   
        this.status =true;
        this.dateValue = "5/18/2016";                  
    }
    ontglbtnCreate(e) {
         $(".e-togglebutton").mousedown(function (e) {
                e.stopPropagation();
            });
        }
        
    onClose(e) {
        var tgleBtn = $("#show").ejToggleButton("instance");
            tgleBtn.option('toggleState', false);
        }
    onOpen(e) {
        var tgleBtn = $("#show").ejToggleButton("instance");
            tgleBtn.option('toggleState', true);
        }
    onEnable(args){        
        if (args.detail.isChecked) {
           this.status = false;
           this.btnStatus = false;
        }
        else {
           this.status = true;
           this.btnStatus = true;
        }
    }
    getValue(){
        var dateObj = $("#datepick").ejDatePicker("instance");
        alert("Selected Date is : " + dateObj.getValue());
    }
    onShow(args){
        var dateObj = $("#datepick").ejDatePicker("instance");
        if (args.detail.isChecked) 
           dateObj.show();       
        else 
           dateObj.hide();        
    }
}

