<br>

### 2. Loading a subset of Syncfusion JavaScript widgets
<br>

This section contains additional information which we hope will be of value to Aurelia application developers using Syncfusion bridge.
<br><br>

You may often want to load only a subset of the components that Syncfusion bridge provides. Instead of the requirement to load them all at the bootstrap time - controlled by the following code in `main.js` class:

```
...
.plugin('aurelia-syncfusion-bridge', plugin => plugin.useAll())
...
```
<br><br>

If instead, you wish to use only a subset of Syncfusion JavaScript components - say, ejButton and ejGrid, you should express that by using the following pattern;

```
...
.plugin('aurelia-syncfusion-bridge', plugin => plugin.ejButton().ejGrid())
...
```
<br><br>

#### Special functions

`.ejTemplate()` - will load the `<ej-template>` custom element necessary for custom templates in a Syncfusion JavaScript widget.
<br><br>
