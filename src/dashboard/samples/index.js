import json from '../samples.json!';
export class Index {
    constructor() {
      this.jsonData = json;
      this.routerData = this.routerConfiguration(this.jsonData);
    }
    configureRouter(config, router) {
      config.map(this.routerData);
      this.router = router;
    }
    routerConfiguration(_json) {
      this.data = _json;
      this.routerData = [];
      this.count = Object.keys(this.data).length;
      this.obj = Object.keys(this.data);
      for (let i = 0; i < this.count; i++) {
        let _name = this.data[this.obj[i]].name;
        let _route = this.obj[i];
        let _title = this.data[this.obj[i]].name;
        let _moduleId = this.data[this.obj[i]].moduleId;
        this.routerData.push({ name: _name, route: _route, moduleId: _moduleId, title: _title });
      }
      return this.routerData;
    }

}
