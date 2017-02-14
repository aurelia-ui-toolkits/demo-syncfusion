<br>

### Vendors

1. Create a `vendors` folder in the root (at the same level as src or dist) 
2. Download Synfusion Essential Studio for JavaScript from [here](https://www.syncfusion.com/downloads/javascript).
3. Extract the `scripts` and `css` folders as `scripts/ej` and `css` into the `vendors` folder.
4. Open `config.js` and add a couple of path mappings:

   ```   
    "paths": {
      "*": "src/*",
      "github:*": "jspm_packages/github/*",
      "npm:*": "jspm_packages/npm/*",
      "syncfusion-javascript/*": "src/root/vendors/*"                            <----       
    },
    "map": {
      "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.2",
      "jquery": "npm:jquery@2.2.3",                                               <----
      "jquery-easing": "npm:jquery.easing@1.3.2",                                 <----
      "jquery-validation": "npm:jquery-validation@1.15.0",                        <----
      "jquery-validation-unobtrusive": "npm:jquery-validation-unobtrusive@3.2.6", <----
      "jsrender": "npm:jsrender@0.9.75",                                          <----
    }  
    ```
<br/>
5. Install the aurelia-syncfusion-bridge and the css plugin
`jspm install npm:aurelia-syncfusion-bridge css`

6. Register the `aurelia-syncfusion-bridge` plugin with Aurelia in your **main.js** or equivalent. The configuration function will be passed a builder object that you can use to configure which Syncfusion JavaScript controls you wish to use. You can use all the controls by calling the **useAll()** method.
  
  ```
    export function configure(aurelia) {
      aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-syncfusion-bridge', plugin => plugin.useAll());

      aurelia.start().then(a => a.setRoot());
    }
    ``` 
7. Now let's open up "app.html" and load Syncfusion JavaScript Widget's CSS files.
    
    ```
    <require from="syncfusion-javascript/css/web/bootstrap-theme/ej.web.all.min.css!"></require>
    ``` 
<br/>
### You are done!
It is now possible to drop some custom-elements into your DOM. See the other pages on this website for detailed information on how to do this.
