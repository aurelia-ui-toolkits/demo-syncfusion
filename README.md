# aurelia-syncfusion-bridge demo site

[![Live demo](http://dabuttonfactory.com/button.png?t=Live+demo&f=Calibri-Bold&ts=24&tc=fff&tshs=1&tshc=000&hp=20&vp=8&c=5&bgt=gradient&bgc=3d85c6&ebgc=073763)](http://aurelia-ui-toolkits.github.io/demo-syncfusion/)
[![Plugin repository](http://dabuttonfactory.com/button.png?t=Plugin+repository&f=Calibri-Bold&ts=24&tc=fff&tshs=1&tshc=000&hp=20&vp=8&c=5&bgt=gradient&bgc=3d85c6&ebgc=073763)](https://github.com/aurelia-ui-toolkits/aurelia-syncfusion-bridge)

### How to run
1. `npm install`
2. `jspm install`
3. `gulp watch`

### pre-deploy checklist
1. update the [about page](https://github.com/aurelia-ui-toolkits/aurelia-syncfusion-bridge/blob/master/sample/src/about/about.html#L93-L203) with the current status of control development

### How to deploy from samples
1. remove the `src`, `styles`, `images` and `doc` folder from the `demo-syncfusion` repository
2. copy from the aurelia-syncfusion-plugin/sample folder, the `src`, `styles`, `images` and `doc` folder over to `demo-syncfusion`
3. update the plugin: `jspm install aurelia-syncfusion-bridge`
4. run `gulp watch` and verify that everything runs correctly, and that there are no errors in the console
5. `gulp deploy`
6. **push changes to the github repo**
