<br/>

### JSPM-install

1. Install the Syncfusion JavaScript Widgets by issuing the command:
`jspm install syncfusion-javascript=github:syncfusion/JavaScript-Widgets`


2. Install the aurelia-syncfusion-bridge and the css plugin
`jspm install npm:aurelia-syncfusion-bridge css`


3. Open `config.js` and add a couple of path mappings: 
    
    ```
    paths: {
      "*": "src/*",
      "github:*": "jspm_packages/github/*",
      "npm:*": "jspm_packages/npm/*",
      "syncfusion-javascript/*": "jspm_packages/github/syncfusion/JavaScript-Widgets@14.1.0.41/*"      <----      
    },
    "map": {
      "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.2",
      "jquery": "npm:jquery@2.2.3",                                                     <----      
      "jquery-easing": "npm:jquery.easing@1.3.2",                                       <----
      "jquery-validation": "npm:jquery-validation@1.15.0",                              <----
      "jquery-validation-unobtrusive": "npm:jquery-validation-unobtrusive@3.2.6",       <----
      "jsrender": "npm:jsrender@0.9.75",                                                <----
    }
    ```
   **Note:** Here we used the Syncfusion JavaScript Widgets source from `14.1.0.41`. You may have to update the version(`14.1.0.41`) of Syncfusion JavaScript Widgets source, when adding these mappings based on the source you are using. 
 
 
4. Register the `aurelia-syncfusion-bridge` plugin with Aurelia in your **main.js** or equivalent. The configuration function will be passed a builder object that you can use to configure which Syncfusion JavaScript controls you wish to use. You can use all the controls by calling the **useAll()** method.
    
    ```
    export function configure(aurelia) {
      aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-syncfusion-bridge', plugin => plugin.useAll());

      aurelia.start().then(a => a.setRoot());
    }
    ```
    
5. Now let's open up "app.html" and load Syncfusion JavaScript Widget's CSS files.
    
    ```
    <require from="syncfusion-javascript/Content/ej/web/bootstrap-theme/ej.web.all.min.css!"></require>
    ``` 
   **Note:** You may have to update the version of Syncfusion JavaScript Widgets source, when adding these mappings.
   <br/>
### You are done!
It is now possible to drop some custom-elements into your DOM. See the other pages on this website for detailed information on how to do this.
<br/><br/>