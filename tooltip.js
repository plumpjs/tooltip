/* exported Tooltip */

/**
 *    PlumpJS: Tooltip
 *    MooTools-based UI tooltip functionality.
z */

'use strict';

var Tooltip = new Class({

	Implements : Options,

	options: {
		hiddenClass: 'hide',
		indicatorSelector: '.tooltip__indicator',
		bodySelector: '.tooltip__body'
	},

	initialize: function(el, options) {

		this.el = $(el);
		this.setOptions(options);

		this.indicator  = this.el.getElement(this.options.indicatorSelector);
		this.body       = this.el.getElement(this.options.bodySelector);
		this.allContent = $(document).getElements(this.options.bodySelector);

		this.body.addClass(this.options.hiddenClass);

		this.indicator.addEvent('click', this.toggle.bind(this));
	},

	toggle: function(event) {

		event.stop();

		// Hide all then show the current tooltip content.
		this.allContent.addClass(this.options.hiddenClass);
		this.body.removeClass(this.options.hiddenClass);

		$(document).addEvent('click', function(e) {
			this.body.addClass(this.options.hiddenClass);

			// Let's not build up the click events on the document and remove
			// the event propagation as soon as the click event has taken place.
			$(document).removeEvent('click');
		}.bind(this));
	}
});
