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
  
Add classes to elements to resize, ratio-[height]-[width]


  ```html
  <div class="ratio-3-4"></div>
  ```
  
  
 Watch the magic... 
 
 
 
Create an exception by adding alternative ratio; ratio-alt-[height]-[width], this will automatically be applied to screens under 750 pixels wide.
 
  ```html
  <div class="ratio-alt-3-4"></div>
  ```
  
To alter the default screenwidth for this perticular element:
  
  ```html
  <div class="ratio-alts-640-1024"></div>
  ```
  
To alter the default screenwidth for all elements. Use this on the first to resize element on page:
  // Sidenote: This will only work within each container searched in. For exception searching to replace in "section" elements. The default has to get set within each section. When using no container (default: document), this will work from when the default has been set. 
  
  ```html
  <div class="ratio-default-640-1024"></div>
  ```
  