/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (() => {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\n// const sayHello = (name) => console.log(`Hello, ${name}! How are you today?`);\n\n// sayHello('Tai');\n\n//Function to set up intersection observer to be apply to apply currently intersecting section styles to the appropriate link in the navBar.\nfunction setUpObserver() {\n  //Adding a style element to be apply to apply the pseudo-element style as well.\n  var styleElement = document.head.appendChild(document.createElement('style'));\n  styleElement.innerHTML = '.navBar a.active::after {transform: scaleX(1);transform-origin: left;}';\n\n  //Setting up the thresholds, we will be observing the viewport so we don't have to specify a root.\n  var options = {\n    threshold: 0.55\n  };\n  var changeActiveSec = function changeActiveSec(entries) {\n    entries.forEach(function (entry) {\n      if (entry.isIntersecting) {\n        var prevIntersect = document.querySelector('.active');\n        if (prevIntersect) {\n          prevIntersect.classList.remove('active');\n        }\n        ;\n        var id = entry.target.getAttribute('id');\n        var newActive = document.querySelector(\"[href=\\\"#\".concat(id, \"\\\"]\")).classList.add(\"active\");\n      }\n    });\n  };\n  var observer = new IntersectionObserver(changeActiveSec, options);\n\n  //Targetting only sections with an id attribute value\n  var sectionsWithId = _toConsumableArray(document.querySelectorAll('section')).filter(function (section) {\n    return section.id;\n  });\n  console.log(sectionsWithId);\n\n  //Observing all the sections with an ID, which are sections that are linked in the navBar :D\n  sectionsWithId.forEach(function (section) {\n    return observer.observe(section);\n  });\n}\ndocument.addEventListener('DOMContentLoaded', function () {\n  setUpObserver();\n});\n\n//# sourceURL=webpack://nailsalonmockup/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main.js"]();
/******/ 	
/******/ })()
;