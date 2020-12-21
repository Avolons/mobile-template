## vw兼容方案

1. 引入js文件

<script src="//g.alicdn.com/fdilab/lib3rd/viewport-units-buggyfill/0.6.2/??viewport-units-buggyfill.hacks.min.js,viewport-units-buggyfill.min.js"></script>


2. 在HTML文件中调用viewport-units-buggyfill

window.onload = function () { 
  window.viewportUnitsBuggyfill.init({
     hacks: window.viewportUnitsBuggyfillHacks
  }); 
} 


ps: 使用vw的polyfill解决方案会在用到的vw的地方添加content，会影响到img和伪元素，需要全局添加


`img { content: normal !important; }