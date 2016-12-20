angular-ratio
==============

 Bower

  ```bash
  bower install --save angular-ratio
  ```


# Usage

Include the script in your HTML

  ```html
  <script type="text/javascript" src="bower_components/angular-ratio/angular-ratio.js"></script>
  ```

Then include `angularRatio` in your module dependencies

  ```js
  angular.module('yourApp', ['angular-ratio']);
  ```
  
Use the ratio function in the controller add the container where ratio has to search, or keep empty to search in whole document

  ```js
  ratio([container]);
  ```
  
  
  
  
 Watch the magic... 