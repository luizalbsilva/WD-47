$(document).ready(function() {
		Modernizr.load({
				  test: window.localStorage
				, yep : "tem-localstorage.js"
				, nope : "nao-tem-localstorage.js"
			})
	});