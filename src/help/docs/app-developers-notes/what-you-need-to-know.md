
<br>

## 1. What you need to know
<br>
There are a few things you should know when working with the **aurelia-syncfusion-bridge**.
<br>
<br>
#### Conventions
Just like Aurelia, we use conventions. All our custom elements and custom attributes use the `ej-` and `e-on-` conventions.

For example, the [Syncfusion JavaScript widgets API documentation](http://help.syncfusion.com/js/api/ejbutton#members:enabled) of the Button control, mentions an `enabled` property.

This translates into this HTML tag:

`<input ej-button="e-enabled: true"/>`

Notice the `ej-` convention for the custom elements/attribute and `e-` convention for the property.
<br><br>

It is also possible to trigger Syncfusion JavaScript widget's events. We use the `e-on-` convention here.

To illustrate this, we'll take a look at the [click](http://help.syncfusion.com/js/api/ejbutton#events:click) event of the Button control. This translates into:
<br>

	  <input ej-button e-on-click.trigger="myFunction($event.detail)">
<br>

Notice the `e-on-` prefix. The $event's detail property contains the original event raised by the Syncfusion JavaScript widget. In order to pass this to the `myFunction` function directly, we can use `$event.detail`.
<br>
<br>
#### Binding
Using Aurelia's `.bind` syntax on a property allows it to binding to a variable.
<br><br>

A couple of examples:
	
	e-type.bind="{ name: 'a' }"
	e-title.bind="aPropertyOnMyViewModel"
	e-my-array-value.bind="['a', 'b']"
<br>
<br>

#### e-widget.two-way
An easier way would be to bind to the `k-widget`property:
	
    <input type="text" id="autocomplete" ej-autocomplete="e-selectValueByKey.two-way: initialKeyValue" />
<br>

You can then use the `initialKeyValue` variable to communicate with the original Syncfusion JavaScript widget.


### Current limitations
&nbsp;&nbsp;- `e-widget` binding only works with explicit two-way databinding on input controls: [tracked here](https://github.com/aurelia/templating/issues/253)
