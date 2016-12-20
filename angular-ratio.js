/*!
 * angular-ratio.js v0.0.1 - A standalone AngularJS implementation to resize elements into certain ratios
 * Copyright (c) 2016 Sil van Diepen - http://github.com/silvandiepen/angular-ratio
 * License: MIT
*/

(function(window, angular, undefined) {
	 angular.module("ratio", [])
	    .service('ratio', [function () {

	    var ratio = function ratio(container) {
	    	// get ratio elements
	    		$( container ).find( '[class*="ratio"]' ).each(function() {

	    		// get classes
	    			var classNames = $(this).attr('class');
	    			var sizeElement = $(this);
	    			var classArray = classNames.split(' ');

	    		// for each classname
	    			$.each( classArray, function(i, value) {

	    			// split values
	    				var className = value.split("-");

	    				if(className[0] == "ratio") {

	    				var rh = className[2];
	    				var rw = className[1];

	    			// return width
	    				var w = sizeElement.outerWidth();

	    			// return ratio height
	            var height = (w / (rh/rw));

	    			// set height
	    				$(sizeElement).css("height", height +"px");
	    			}

	    		});
	    	});
	    };

	    return ratio;

	}]);
})(window, window.angular);
