# Tooltip

MooTools-based UI tooltip functionality.


## Usage

Using extremely basic HTML:

````HTML
<div class="js-tooltip">
	<a class="tooltip__indicator" href="#">?</a>
	<p class="tooltip__body"> &hellip; </p>
</div>
````

Now implement the loop for each `Tooltip` call:

````JavaScript
$$('.js-tooltip').each(function(el) {

	new Tooltip(el);

});
````

This will now look for any markup in the HTML with a `.js-tooltip` selector and initialize `Tooltip`.


## Default options

By default, we are setting the active and hidden class selectors. Essentially, adding `.hide` to our tooltip body/content will inherit styling, such as `.hide { display: none; }`. Instead of using javascript to add inline style declarations, we're injecting class sectors to define the styling. 

| Option  			| Type   	| Default Value		| Description		|
|---	    		|---	    |---	 			|---    			|
| hiddenClass  		| String  	| 'hide'			| Adds a class selector to all current hidden content. 		|
| indicatorSelector | String  	| '.tooltip__indicator'	| Default class selector for the indicator. |
| bodySelector	 	| String  	| '.tooltip__body'	| Default class selector for the tooltip content. |

Apply options by passing in a second array of arguments:

````JavaScript
$$('.js-tooltip').each(function(el) {

	new Tooltip(el, { 
		hiddenClass: 'hide',
		indicatorSelector: '.tooltip__indicator',
		bodySelector: '.tooltip__body'
	});

});
````
