define(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
	return function() {
	    console.log("Test output");
	    console.log("$: " + typeof $);
	    console.log("_: " + typeof _);
	    console.log("Backbone: " + typeof Backbone);
	};
});