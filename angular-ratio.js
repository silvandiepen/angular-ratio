/*!
 * angular-ratio.js v0.0.1 - A standalone AngularJS implementation to resize elements into certain ratios
 * Copyright (c) 2016 Sil van Diepen - http://github.com/silvandiepen/angular-ratio
 * License: MIT
*/

(function(window, angular, undefined) {
	 angular.module("ratio", [])
	    .service('ratio', [function () {

	    var ratio = function ratio(container) {
        container = container || document;
        if(container !== document){
          tempContainer = document.querySelectorAll(container);
          if(tempContainer.length > 1){
            for (var i = 0; i < tempContainer.length; i++) {
              setRatio(tempContainer[i]);
            }
          } else { setRatio(tempContainer[0]); }
        } else { setRatio(container); }
	    };

      var setRatio = function setRatio(container){
        // get ratio elements
        var elements = container.querySelectorAll('[class*="ratio"]');
        for (var i = 0; i < elements.length; i++) {

          var classNames = elements[i].className;
    			var sizeElement = elements[i];
    			var classArray = classNames.split(' ');

    		  for (var a = 0; a < classArray.length; a++){
    			// split values
    				var className = classArray[a].split("-");

    				if(className[0] == "ratio") {
              // set height
	    				sizeElement.style.height = (sizeElement.offsetWidth / className[2]/className[1]) +"px";
	    			}
          }
        }
      };

	    return ratio;

	}]);
})(window, window.angular);
