<br/>

### Installation
You can install the JavaScript Widgets in two different ways as described below.
<br/><br/>


#### JSPM-install
JSPM allows you to download the Syncfusion JavaScript Widgets from [GitHub](https://github.com/syncfusion/JavaScript-Widgets) repository. When you download JavaScript Widgets via JSPM, it is downloaded in the `jspm_packages/github/syncfusion` folder.
<br/><br/>

#### Vendors
You can install Syncfusion JavaScript Widgets via the **Vendors** method. Essentially, this is a folder named `vendors` containing `scripts` and `css` folders from Essential Studio for JavaScript distribution, located at the `assets` folder of your installation. With a JSPM configuration option, you can tell the `aurelia-syncfusion-bridge` to access the Widgets source files from this `vendors` folder - as shown in [this configuration map entry]( https://github.com/aurelia-ui-toolkits/aurelia-syncfusion-bridge/blob/master/sample/config.js#L17).
 