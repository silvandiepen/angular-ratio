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

        var dwMin = 0,dwMax = 750;
        for (var i = 0; i < elements.length; i++) {

          var wMin = dwMin, wMax = dwMax,arw,arh;
          var classNames = elements[i].className;
    			var sizeElement = elements[i];
    			var classArray = classNames.split(' ');

    		  for (var a = 0; a < classArray.length; a++){
    			// split values
    				var className = classArray[a].split("-");

            if(className[0] == "ratio") {
              // set height
              if(isNaN(className[1])){
                if(className[1] === "alts"){
                  if(className[3].length > 0){
                    wMin = className[2];
                    wMax = className[3];
                  } else {
                    wMax = className[2];
                  }
                } else if(className[1] === "alt") {
                  arw = className[2];
                  arh = className[3];
                } else if(className[1] === "default") {
                  dwMin = className[2];
                  dwMax = className[3];
                }
              } else {
                sizeElement.style.height = (sizeElement.offsetWidth / (className[2]/className[1])) +"px";
              }
            }
          }
          if(window.innerWidth < wMax && window.innerWidth > wMin && arw > 0 && arh > 0){
            sizeElement.style.height = (sizeElement.offsetWidth / (arh/arw)) +"px";
          }
        }
      };

	    return ratio;

	}]);
})(window, window.angular);
