(()=>{function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}document.addEventListener("DOMContentLoaded",(function(){!function(){document.head.appendChild(document.createElement("style")).innerHTML=".navBar a.active::after {transform: scaleX(1);transform-origin: left;}";var e,r=new IntersectionObserver((function(t){t.forEach((function(t){var e=t.target.getAttribute("id");document.querySelector('[href="#'.concat(e,'"]')).classList.toggle("active",t.intersectionRatio>.55||t.isIntersecting&&"lookbook"===e)}))}),{threshold:[.35,.65]}),n=(e=document.querySelectorAll("section"),function(e){if(Array.isArray(e))return t(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter((function(t){return t.id}));console.log(n),n.forEach((function(t){return r.observe(t)}))}()}))})();