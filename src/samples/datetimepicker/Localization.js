export class Localization{       
    constructor() {  
        this.datetimeValue = "5/18/2016 2:00 AM";
        this.target = 'localelist';  
        this.localeValue ="en-US";    
    }
    get updateLocale() {
        return this.localeValue;
    }
    set updateLocale(value) {
        this.localeValue = value;
    }
}

