var pageComponent=webpackJsonppageComponent([14],{134:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=o(0),a=n(i),l=o(1),u=n(l);o(3),o(4),o(5),o(6),o(7),o(8),o(9),o(10);var p=o(135),s=n(p),f=function(e){function t(){return r(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),t}(a.default);u.default.register(f,s.default),t.default=f},135:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.kSKyt=void 0;var i,a=o(0),l=n(a),u=o(1),p=n(u);goog.loadModule(function(e){function t(e,t,n){var i=function(){r("article",null,null,"id","how-to-migrate"),r("h3"),d("How to migrate:"),c("h3"),r("h4"),d("Direct replacements"),c("h4"),r("table"),r("thead"),r("tr"),r("th"),d("lodash"),c("th"),r("th"),d("replacement"),c("th"),c("tr"),c("thead"),r("tbody"),r("tr"),r("td"),r("code"),d("_.bind"),c("code"),c("td"),r("td"),d("to native "),r("code"),d(".bind"),c("code"),d("."),c("td"),c("tr"),r("tr"),r("td"),r("code"),d("_.bindKey"),c("code"),c("td"),r("td"),d("there's no direct replacement."),c("td"),c("tr"),r("tr"),r("td"),r("code"),d("_.escape"),c("code"),c("td"),r("td"),d("there's no direct replacement."),c("td"),c("tr"),r("tr"),r("td"),r("code"),d("_.groupBy"),c("code"),c("td"),r("td"),d("there's no direct replacement."),c("td"),c("tr"),r("tr"),r("td"),r("code"),d("_.isEqual"),c("code"),c("td"),r("td"),d("there's no direct replacement."),c("td"),c("tr"),r("tr"),r("td"),r("code"),d("_.map"),c("code"),c("td"),r("td"),d("to native "),r("code"),d("Array.map"),c("code"),d("."),c("td"),c("tr"),r("tr"),r("td"),r("code"),d("_.reduce"),c("code"),c("td"),r("td"),d("to native "),r("code"),d("Array.reduce"),c("code"),d("."),c("td"),c("tr"),r("tr"),r("td"),r("code"),d("_.unescape"),c("code"),c("td"),r("td"),d("there's no direct replacement."),c("td"),c("tr"),r("tr"),r("td"),r("code"),d("_.sub"),c("code"),c("td"),r("td"),d("there's no direct replacement."),c("td"),c("tr"),r("tr"),r("td"),r("code"),d("_.without"),c("code"),c("td"),r("td"),d("there's no direct replacement."),c("td"),c("tr"),c("tbody"),c("table"),r("h4"),d("Code replacements"),c("h4"),r("ul"),r("li"),r("p"),r("code"),d("_.debounce"),c("code"),d(" to "),r("code"),d("metal-debounce"),c("code"),d("."),c("p"),a({code:'<aui:script require="metal-debounce/src/debounce">\n  let debounce = metalDebounceSrcDebounce.default;\n  debounce(fn, time);\n</aui:script>',mode:"htmlmixed"},null,n),c("li"),r("li"),r("p"),r("code"),d("_.forEach"),c("code"),d(" to "),r("code"),d(".forEach"),c("code"),d(" or "),r("code"),d("for in"),c("code"),c("p"),a({code:"[1,2,3].forEach((item) => {\n  console.log(item);\n});\n\nlet obj = {a:1, b:2, c:3};\nfor(key in obj) {\n  console.log(item);\n}",mode:"javascript"},null,n),c("li"),r("li"),r("p"),r("code"),d("_.isFunction"),c("code"),d(" to"),c("p"),a({code:'  function isFunction(fn) {\n    return (!!fn && ("object" == typeof fn || "function" == typeof fn)) && toString.call(fn) == \'[object Function]\'\n  }',mode:"javascript"},null,n),c("li"),c("ul"),c("article"),r("input",null,null,"type","hidden","value",e.page.title),c("input"),r("input",null,null,"type","hidden","value",e.site.title),c("input")};l(o.$$assignDefaults({content:i},e),null,n)}goog.module("kSKyt.incrementaldom");var o=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var n=goog.require("incrementaldom"),r=n.elementOpen,c=n.elementClose,d=(n.elementVoid,n.elementOpenStart,n.elementOpenEnd,n.text),a=(n.attr,p.default.getTemplate("ElectricCode.incrementaldom","render")),l=p.default.getTemplate("guide.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="kSKyt.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=i=e,e});var s=function(e){function t(){return r(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return d(t,e),t}(l.default);p.default.register(s,i),t.kSKyt=s,t.templates=i,t.default=i}},[134]);