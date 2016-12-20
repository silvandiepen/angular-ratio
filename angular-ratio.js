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
          var elements = document.querySelectorAll('[class*="ratio"]');
          for (var i = 0; i < elements.length; i++) {

            var classNames = elements[i].className;
	    			var sizeElement = elements[i];
	    			var classArray = classNames.split(' ');

	    		  for (var a = 0; a < classArray.length; a++){
	    			// split values
	    				var className = classArray[a].split("-");

	    				if(className[0] == "ratio") {

	    				var rh = className[2];
	    				var rw = className[1];

	    			// return width
	    				var w = sizeElement.offsetWidth;

	    			// return ratio height
	            var height = (w / (rh/rw));

	    			// set height
	    				sizeElement.style.height = height +"px";
	    			}
          }
        }
	    };

	    return ratio;

	}]);
})(window, window.angular);
