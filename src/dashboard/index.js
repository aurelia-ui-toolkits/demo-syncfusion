import json from './samples.json!';
export class Dashboard {
    constructor() {
      this.data = json;
      this.sampleDetails = [];
      this.count = Object.keys(this.data).length;
      this.objKey = Object.keys(this.data);
      for (let i = 0; i < this.count; i++) {
        let _URL = this.objKey[i];
        let _name = this.data[this.objKey[i]].name;
        let _imgURL = this.data[this.objKey[i]].imageURL;
        let _qrURL = this.data[this.objKey[i]].qrURL;
        let _desc = this.data[this.objKey[i]].description;
        this.sampleDetails.push({ name: _name, URL: _URL, imageURL: _imgURL, qrURL: _qrURL, description: _desc });
      }
    }
}
