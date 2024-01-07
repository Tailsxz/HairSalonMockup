/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// const sayHello = (name) => console.log(`Hello, ${name}! How are you today?`);

// sayHello('Tai');

//Function to set up intersection observer to be apply to apply currently intersecting section styles to the appropriate link in the navBar.
function setUpObserver() {
  //Adding a style element to be apply to apply the pseudo-element style as well.
  var styleElement = document.head.appendChild(document.createElement('style'));
  styleElement.innerHTML = '.navBar a.active::after {transform: scaleX(1);transform-origin: left;}';

  //Setting up the thresholds, we will be observing the viewport so we don't have to specify a root.
  var options = {
    threshold: 0.65
  };
  var changeActiveSec = function changeActiveSec(entries) {
    entries.forEach(function (entry) {
      // const prevIntersect = document.querySelector('.active');
      // //removes active class if the current section that was previously intersecting is no longer intersecting.
      // if (!entry.isIntersecting && prevIntersect) {
      //   prevIntersect.classList.remove('active');
      // }
      // if (entry.isIntersecting) {

      //   //Only removing class if there exists a current navBar link with the class active, there exists no link with the active class on initial load
      //   if (prevIntersect) {
      //     prevIntersect.classList.remove('active');
      //   };

      //refactored!! All we need to do is set the boolean for the toggle as the entry.isIntersecting expression! Now if it is intersecting it will add the class and if not it removes it. All with a single expression addition to the toggle!
      var id = entry.target.getAttribute('id');
      var newActive = document.querySelector("[href=\"#".concat(id, "\"]")).classList.toggle("active", entry.isIntersecting);
      // }
    });
  };
  var observer = new IntersectionObserver(changeActiveSec, options);

  //Targetting only sections with an id attribute value
  var sectionsWithId = _toConsumableArray(document.querySelectorAll('section')).filter(function (section) {
    return section.id;
  });
  console.log(sectionsWithId);

  //Observing all the sections with an ID, which are sections that are linked in the navBar :D
  sectionsWithId.forEach(function (section) {
    return observer.observe(section);
  });
}

//Setting up the observer after the document has been fully parsed and any deferred scripts have been executed
document.addEventListener('DOMContentLoaded', function () {
  setUpObserver();
});
/******/ })()
;