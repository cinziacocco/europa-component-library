/* @ecl/eu-preset-website - 1.0.0 Built on 2018-04-27T15:25:47.033Z */
var ECL=function(e){"use strict";var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return[].slice.call(t.querySelectorAll(e))},n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o="Expected a function",r=NaN,a="[object Symbol]",l=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,d=parseInt,f="object"==i(n)&&n&&n.Object===Object&&n,v="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,m=f||v||Function("return this")(),p=Object.prototype.toString,g=Math.max,y=Math.min,h=function(){return m.Date.now()};function b(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function E(e){return"symbol"==(void 0===e?"undefined":i(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":i(e))}(e)&&p.call(e)==a}function S(e){if("number"==typeof e)return e;if(E(e))return r;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=s.test(e);return n||u.test(e)?d(e.slice(2),n?2:8):c.test(e)?r:+e}var _=function(e,t,n){var i,r,a,l,c,s,u=0,d=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function m(t){var n=i,o=r;return i=r=void 0,u=t,l=e.apply(o,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||f&&e-u>=a}function E(){var e=h();if(p(e))return _(e);c=setTimeout(E,function(e){var n=t-(e-s);return f?y(n,a-(e-u)):n}(e))}function _(e){return c=void 0,v&&i?m(e):(i=r=void 0,l)}function k(){var e=h(),n=p(e);if(i=arguments,r=this,s=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(E,t),d?m(e):l}(s);if(f)return c=setTimeout(E,t),m(s)}return void 0===c&&(c=setTimeout(E,t)),l}return t=S(t)||0,b(n)&&(d=!!n.leading,a=(f="maxWait"in n)?g(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),k.cancel=function(){void 0!==c&&clearTimeout(c),u=0,i=s=r=c=void 0},k.flush=function(){return void 0===c?l:_(h())},k};var k=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.context,o=void 0===i?document:i,r=n.forceClose,a=void 0!==r&&r,l=n.closeSiblings,c=void 0!==l&&l,s=n.siblingsSelector,u=void 0===s?"[aria-controls][aria-expanded]":s;if(t){var d=document.getElementById(t.getAttribute("aria-controls"));if(d){var f=!0===a||"true"===t.getAttribute("aria-expanded");if(t.setAttribute("aria-expanded",!f),d.setAttribute("aria-hidden",f),!f&&t.hasAttribute("data-label-expanded")?t.innerHTML=t.getAttribute("data-label-expanded"):f&&t.hasAttribute("data-label-collapsed")&&(t.innerHTML=t.getAttribute("data-label-collapsed")),!0===c)Array.prototype.slice.call(o.querySelectorAll(u)).filter(function(e){return e!==t}).forEach(function(t){e(t,{context:o,forceClose:!0})})}}};function C(e,t){var n=void 0!==t?t:{};this.version="3.2.3",this.userAgent=window.navigator.userAgent||"no `userAgent` provided by the browser",this.props={customStickyChangeNumber:n.customStickyChangeNumber||null,noStyles:n.noStyles||!1,stickyBitStickyOffset:n.stickyBitStickyOffset||0,parentClass:n.parentClass||"js-stickybit-parent",scrollEl:document.querySelector(n.scrollEl)||window,stickyClass:n.stickyClass||"js-is-sticky",stuckClass:n.stuckClass||"js-is-stuck",stickyChangeClass:n.stickyChangeClass||"js-is-sticky--change",useStickyClasses:n.useStickyClasses||!1,verticalPosition:n.verticalPosition||"top"};var i=this.props;i.positionVal=this.definePosition()||"fixed";var o=i.verticalPosition,r=i.noStyles,a=i.positionVal;this.els="string"==typeof e?document.querySelectorAll(e):e,"length"in this.els||(this.els=[this.els]),this.instances=[];for(var l=0;l<this.els.length;l+=1){var c=this.els[l],s=c.style;if(s[o]="top"!==o||r?"":i.stickyBitStickyOffset+"px",s.position="fixed"!==a?a:"","fixed"===a||i.useStickyClasses){var u=this.addInstance(c,i);this.instances.push(u)}}return this}function A(e,t){return new C(e,t)}C.prototype.definePosition=function(){for(var e=["","-o-","-webkit-","-moz-","-ms-"],t=document.head.style,n=0;n<e.length;n+=1)t.position=e[n]+"sticky";var i=t.position?t.position:"fixed";return t.position="",i},C.prototype.addInstance=function(e,t){var n=this,i={el:e,parent:e.parentNode,props:t};this.isWin=this.props.scrollEl===window;var o=this.isWin?window:this.getClosestParent(i.el,i.props.scrollEl);return this.computeScrollOffsets(i),i.parent.className+=" "+t.parentClass,i.state="default",i.stateContainer=function(){return n.manageState(i)},o.addEventListener("scroll",i.stateContainer),i},C.prototype.getClosestParent=function(e,t){var n=t,i=e;if(i.parentElement===n)return n;for(;i.parentElement!==n;)i=i.parentElement;return n},C.prototype.computeScrollOffsets=function(e){var t=e,n=t.props,i=t.el,o=t.parent,r=!this.isWin&&"fixed"===n.positionVal,a="bottom"!==n.verticalPosition,l=r?n.scrollEl.getBoundingClientRect().top:0,c=r?o.getBoundingClientRect().top-l:o.getBoundingClientRect().top,s=null!==n.customStickyChangeNumber?n.customStickyChangeNumber:i.offsetHeight;return t.offset=l+n.stickyBitStickyOffset,t.stickyStart=a?c-t.offset:0,t.stickyChange=t.stickyStart+s,t.stickyStop=a?c+o.offsetHeight-(t.el.offsetHeight+t.offset):c+o.offsetHeight,t},C.prototype.toggleClasses=function(e,t,n){var i=e,o=i.className.split(" ");n&&-1===o.indexOf(n)&&o.push(n);var r=o.indexOf(t);-1!==r&&o.splice(r,1),i.className=o.join(" ")},C.prototype.manageState=function(e){var t=e,n=t.el,i=t.props,o=t.state,r=t.stickyStart,a=t.stickyChange,l=t.stickyStop,c=n.style,s=i.noStyles,u=i.positionVal,d=i.scrollEl,f=i.stickyClass,v=i.stickyChangeClass,m=i.stuckClass,p=i.verticalPosition,g=function(e){e()},y=this.isWin&&(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame)||g,h=this.toggleClasses,b=this.isWin?window.scrollY||window.pageYOffset:d.scrollTop,E=b<=r&&"sticky"===o,S=b>=l&&"sticky"===o;b>r&&b<l&&("default"===o||"stuck"===o)?(t.state="sticky",y(function(){h(n,m,f),c.position=u,s||(c.bottom="",c[p]=i.stickyBitStickyOffset+"px")})):E?(t.state="default",y(function(){h(n,f),"fixed"===u&&(c.position="")})):S&&(t.state="stuck",y(function(){h(n,f,m),"fixed"!==u||s||(c.top="",c.bottom="0",c.position="absolute")}));var _=b>=a&&b<=l;return b<a||b>l?y(function(){h(n,v)}):_&&y(function(){h(n,"stub",v)}),t},C.prototype.removeInstance=function(e){var t=e.el,n=e.props,i=this.toggleClasses;t.style.position="",t.style[n.verticalPosition]="",i(t,n.stickyClass),i(t,n.stuckClass),i(t.parentNode,n.parentClass)},C.prototype.cleanup=function(){for(var e=0;e<this.instances.length;e+=1){var t=this.instances[e];t.props.scrollEl.removeEventListener("scroll",t.stateContainer),this.removeInstance(t)}this.manageState=!1,this.instances=[]};var w,L=(function(e,t){var i,o;i=void 0!==n?n:n.window||n.global,o=function(e){var t,n,i,o,r,a,l={},c="querySelector"in document&&"addEventListener"in e&&"classList"in document.createElement("_"),s=[],u={selector:"[data-gumshoe] a",selectorHeader:"[data-gumshoe-header]",container:e,offset:0,activeClass:"active",scrollDelay:!1,callback:function(){}},d=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(n,e[i],i,e);else for(var o=0,r=e.length;o<r;o++)t.call(n,e[o],o,e)},f=function(e){var n=0;if(e.offsetParent)do{n+=e.offsetTop,e=e.offsetParent}while(e);else n=e.offsetTop;return(n=n-r-t.offset)>=0?n:0};l.setDistances=function(){var e;i=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),r=o?(e=o,Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)+f(o)):0,d(s,function(e){e.distance=f(e.target)}),s.sort(function(e,t){return e.distance>t.distance?-1:e.distance<t.distance?1:0})};var v=function(){a&&(a.nav.classList.remove(t.activeClass),a.parent&&a.parent.classList.remove(t.activeClass))},m=function(e){v(),e.nav.classList.add(t.activeClass),e.parent&&e.parent.classList.add(t.activeClass),t.callback(e),a={nav:e.nav,parent:e.parent}};l.getCurrentNav=function(){var n=e.pageYOffset;if(e.innerHeight+n>=i&&function(t){var n=t.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.bottom<=(e.innerHeight||document.documentElement.clientHeight)&&n.right<=(e.innerWidth||document.documentElement.clientWidth)}(s[0].target))return m(s[0]),s[0];for(var o=0,r=s.length;o<r;o++){var a=s[o];if(a.distance<=n)return m(a),a}v(),t.callback()};l.destroy=function(){t&&(t.container.removeEventListener("resize",g,!1),t.container.removeEventListener("scroll",g,!1),s=[],t=null,n=null,i=null,o=null,r=null,a=null,null)};var p=function(e){window.clearTimeout(n),n=setTimeout(function(){l.setDistances(),l.getCurrentNav()},66)},g=function(e){n||(n=setTimeout(function(){n=null,"scroll"===e.type&&l.getCurrentNav(),"resize"===e.type&&(l.setDistances(),l.getCurrentNav())},66))};return l.init=function(e){c&&(l.destroy(),t=function e(){var t={},n=!1,i=0,o=arguments.length;for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(n=arguments[0],i++);i<o;i++)!function(i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n&&"[object Object]"===Object.prototype.toString.call(i[o])?t[o]=e(!0,t[o],i[o]):t[o]=i[o])}(arguments[i]);return t}(u,e||{}),o=document.querySelector(t.selectorHeader),function(){var e=document.querySelectorAll(t.selector);d(e,function(e){if(e.hash){var t=document.querySelector(e.hash);t&&s.push({nav:e,target:t,parent:"li"===e.parentNode.tagName.toLowerCase()?e.parentNode:null,distance:0})}})}(),0!==s.length&&(d(s,function(e){e.nav.classList.contains(t.activeClass)&&(a={nav:e.nav,parent:e.parent})}),l.setDistances(),l.getCurrentNav(),t.container.addEventListener("resize",g,!1),t.scrollDelay?t.container.addEventListener("scroll",p,!1):t.container.addEventListener("scroll",g,!1)))},l},e.exports=o(i)}(w={exports:{}},w.exports),w.exports),x=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.context,o=void 0===i?document:i,r=n.forceClose,a=void 0!==r&&r,l=n.closeSiblings,c=void 0!==l&&l,s=n.siblingsSelector,u=void 0===s?"[aria-controls][aria-expanded]":s;if(t){var d=document.getElementById(t.getAttribute("aria-controls"));if(d){var f=!0===a||"true"===t.getAttribute("aria-expanded");if(t.setAttribute("aria-expanded",!f),d.setAttribute("aria-hidden",f),!f&&t.hasAttribute("data-label-expanded")?t.innerHTML=t.getAttribute("data-label-expanded"):f&&t.hasAttribute("data-label-collapsed")&&(t.innerHTML=t.getAttribute("data-label-collapsed")),!0===c)Array.prototype.slice.call(o.querySelectorAll(u)).filter(function(e){return e!==t}).forEach(function(t){e(t,{context:o,forceClose:!0})})}}},q=function(e,t){return function(n){if(e&&e.hasAttribute("aria-haspopup")){var i=e.getAttribute("aria-haspopup");""!==i&&"true"!==i||(n.preventDefault(),x(e,{context:t,closeSiblings:!0}))}}};return e.accordions=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.selector,i=void 0===n?".ecl-accordion":n,o=e.headerSelector,r=void 0===o?".ecl-accordion__header":o;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var a=t(i);function l(e){"true"!==e.getAttribute("aria-expanded")?function(e){var t=document.getElementById(e.getAttribute("aria-controls"));e.setAttribute("tabindex",0),e.setAttribute("aria-expanded","true"),t.setAttribute("aria-hidden","false")}(e):function(e){var t=document.getElementById(e.getAttribute("aria-controls"));e.setAttribute("aria-expanded","false"),t.setAttribute("aria-hidden","true")}(e)}function c(e,t){e[t].focus()}function s(e){l(e.currentTarget)}function u(e){var n=e.currentTarget,i=e.metaKey||e.altKey,o=n.parentNode.parentNode,a=t(r,o),s=[].indexOf.call(a,n);if(!i)switch(e.keyCode){case 13:case 32:l(n),e.preventDefault();break;case 37:case 38:c(a,0===s?a.length-1:s-1),e.preventDefault();break;case 39:case 40:c(a,s<a.length-1?s+1:0),e.preventDefault()}}function d(){a.length&&a.forEach(function(e){!function(e){t(r,e).forEach(function(e){e.addEventListener("click",s),e.addEventListener("keydown",u)})}(e)})}return d(),{init:d,destroy:function(){a.forEach(function(e){!function(e){t(r,e).forEach(function(e){e.removeEventListener("click",s),e.removeEventListener("keydown",u)})}(e)})}}},e.carousels=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).selectorId,n=void 0===e?"ecl-carousel":e;if(!("querySelector"in document&&"addEventListener"in window))return null;var i=0,o=document.getElementById(n),r=t(".ecl-carousel__item",o),a=o.querySelector(".ecl-carousel__list");function l(e){r[i].classList.remove("ecl-carousel__item--showing"),i=(e+r.length)%r.length,r[i].classList.add("ecl-carousel__item--showing")}function c(){var e=o.querySelector(".ecl-carousel__item").offsetWidth,t="translate3d("+-i*e+"px, 0, 0)";a.style.MozTransform=t,a.style.msTransform=t,a.style.OTransform=t,a.style.WebkitTransform=t,a.style.transform=t}function s(){o.querySelector(".ecl-carousel__meta-slide").textContent=i+1+" / "+r.length}function u(){var e=t("[data-image]");e&&e.forEach(function(e){return e.style.display="none"}),o.querySelector('[data-image="'+i+'"]').style.display="block"}function d(){l(i-1),c(),s(),u()}function f(){l(i+1),c(),s(),u()}var v=function(){return _(function(){c()},100,{maxWait:300})()};function m(){var e,t;(e=document.createElement("ul")).className="ecl-carousel__controls ecl-list--unstyled",e.innerHTML='\n      <li>\n        <button type="button" class="ecl-icon ecl-icon--left ecl-carousel__button ecl-carousel__button--previous">\n          <span class="ecl-u-sr-only">Previous</span></button>\n      </li>\n      <li>\n        <button type="button" class="ecl-icon ecl-icon--right ecl-carousel__button ecl-carousel__button--next">\n          <span class="ecl-u-sr-only">Next</span>\n        </button>\n      </li>\n    ',e.querySelector(".ecl-carousel__button--previous",".ecl-carousel__controls").addEventListener("click",d),e.querySelector(".ecl-carousel__button--next",".ecl-carousel__controls").addEventListener("click",f),o.querySelector(".ecl-carousel__list-wrapper").appendChild(e),(t=document.createElement("div")).setAttribute("aria-live","polite"),t.setAttribute("aria-atomic","true"),t.classList.add("ecl-carousel__meta-slide"),o.querySelector(".ecl-carousel__live-region").appendChild(t),l(0),s(),u(),window.addEventListener("resize",v)}return m(),{init:m,destroy:function(){var e,t;e=o.querySelector(".ecl-carousel__controls"),o.querySelector(".ecl-carousel__list-wrapper").removeChild(e),t=o.querySelector(".ecl-carousel__meta-slide"),o.querySelector(".ecl-carousel__live-region").removeChild(t),window.removeEventListener("resize",v)}}},e.contextualNavs=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.selector,i=void 0===n?".ecl-context-nav":n,o=e.buttonSelector,r=void 0===o?".ecl-context-nav__more":o,a=e.hiddenElementsSelector,l=void 0===a?".ecl-context-nav__item--over-limit":a,c=e.classToRemove,s=void 0===c?"ecl-context-nav__item--over-limit":c,u=e.context,d=void 0===u?document:u;t(i,d).forEach(function(e){var n=d.querySelector(r);n&&n.addEventListener("click",function(){return function(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=i.classToRemove,r=void 0===o?"ecl-context-nav__item--over-limit":o,a=i.hiddenElementsSelector,l=void 0===a?".ecl-context-nav__item--over-limit":a,c=i.context,s=void 0===c?document:c;e&&(t(l,s).forEach(function(e){e.classList.remove(r)}),n.parentNode.removeChild(n))}(e,n,{classToRemove:s,hiddenElementsSelector:l})})})},e.dropdown=function(e){var t=Array.prototype.slice.call(document.querySelectorAll(e));document.addEventListener("click",function(n){t.forEach(function(t){var i,o;if(i=t,o=n.target,!(i===o||16&i.compareDocumentPosition(o))){var r=document.querySelector(e+" > [aria-expanded=true]"),a=document.querySelector(e+" > [aria-hidden=false]");a&&(r.setAttribute("aria-expanded",!1),a.setAttribute("aria-hidden",!0))}})})},e.dialogs=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.triggerElementsSelector,i=void 0===n?"[data-ecl-dialog]":n,o=e.dialogWindowId,r=void 0===o?"ecl-dialog":o,a=e.dialogOverlayId,l=void 0===a?"ecl-overlay":a;if(!("querySelector"in document&&"addEventListener"in window))return null;var c=t(i),s=document.getElementById(r),u=document.getElementById(l);if(!u){var d=document.createElement("div");d.setAttribute("id","ecl-overlay"),d.setAttribute("class","ecl-dialog__overlay"),d.setAttribute("aria-hidden","true"),document.body.appendChild(d),u=d}var f=[].slice.call(t('\n        a[href],\n        area[href],\n        input:not([disabled]),\n        select:not([disabled]),\n        textarea:not([disabled]),\n        button:not([disabled]),\n        [tabindex="0"]\n      ',s)),v=null,m=f[0],p=f[f.length-1];function g(e){e.preventDefault(),s.setAttribute("aria-hidden",!0),u.setAttribute("aria-hidden",!0),v&&v.focus(),document.querySelector("body").classList.remove("ecl-u-disablescroll")}function y(e){switch(e.keyCode){case 9:if(1===f.length){e.preventDefault();break}e.shiftKey?document.activeElement===m&&(e.preventDefault(),p.focus()):document.activeElement===p&&(e.preventDefault(),m.focus());break;case 27:g()}}function h(e){e.preventDefault(),s.setAttribute("aria-hidden",!1),u.setAttribute("aria-hidden",!1),v=document.activeElement,m.focus(),u.addEventListener("click",g),s.addEventListener("keydown",y),document.querySelector("body").classList.add("ecl-u-disablescroll")}function b(){c.length&&(c.forEach(function(e){return e.addEventListener("click",h)}),t(".ecl-message__dismiss").forEach(function(e){e.addEventListener("click",g)}))}return b(),{init:b,destroy:function(){c.forEach(function(e){return e.removeEventListener("click",h)}),t(".ecl-message__dismiss").forEach(function(e){e.removeEventListener("click",g)})}}},e.toggleExpandable=k,e.initExpandables=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;e&&Array.prototype.slice.call(t.querySelectorAll(e)).forEach(function(e){return e.addEventListener("click",function(n){k(e,{context:t}),n.preventDefault()})})},e.fileUploads=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.selector,i=void 0===n?".ecl-file-upload":n,o=e.inputSelector,r=void 0===o?".ecl-file-upload__input":o,a=e.valueSelector,l=void 0===a?".ecl-file-upload__value":a,c=e.browseSelector,s=void 0===c?".ecl-file-upload__browse":c;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var u=t(i);function d(e){"files"in e.target&&t(l,e.target.parentNode).forEach(function(t){!function(e,t){if(0!==t.length){for(var n="",i=0;i<t.length;i+=1){var o=t[i];"name"in o&&(i>0&&(n+=", "),n+=o.name)}e.innerHTML=n}}(t,e.target.files)})}function f(e){var n=e.metaKey||e.altKey;t(r,e.target.parentNode).forEach(function(t){if(!n)switch(e.keyCode){case 13:case 32:e.preventDefault(),t.click()}})}function v(){u.length&&u.forEach(function(e){!function(e){t(r,e).forEach(function(e){e.addEventListener("change",d)}),t(s,e).forEach(function(e){e.addEventListener("keydown",f)})}(e)})}return v(),{init:v,destroy:function(){u.forEach(function(e){!function(e){t(r,e).forEach(function(e){e.removeEventListener("change",d)}),t(s,e).forEach(function(e){e.removeEventListener("keydown",f)})}(e)})}}},e.eclLangSelectPages=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.selector,i=void 0===n?".ecl-lang-select-page":n,o=e.toggleClass,r=void 0===o?"ecl-lang-select-page--dropdown":o,a=e.listSelector,l=void 0===a?".ecl-lang-select-page__list":a,c=e.dropdownSelector,s=void 0===c?".ecl-lang-select-page__dropdown":c,u=e.dropdownOnChange,d=void 0===u?void 0:u;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var f=t(i);function v(e){if(!e)return null;var n=t(l,e)[0];return e.classList.contains(r)?t(s,e)[0].offsetLeft+n.offsetWidth<e.offsetWidth&&e.classList.remove(r):n&&n.offsetLeft+n.offsetWidth>e.offsetWidth&&e.classList.add(r),!0}return f.forEach(function(e){if(v(e),d){var n=t(s,e)[0];n&&n.addEventListener("change",d)}}),void window.addEventListener("resize",_(function(){f.forEach(v)},100,{maxWait:300}))},e.initMessages=function(){Array.prototype.slice.call(document.getElementsByClassName("ecl-message__dismiss")).forEach(function(e){return e.addEventListener("click",function(){return function(e){e&&null!==e.parentNode&&e.parentNode.removeChild(e)}(e.parentElement)})})},e.navigationInpages=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.stickySelector,n=void 0===t?".ecl-inpage-navigation":t,i=e.stickyOffset,o=void 0===i?0:i,r=e.spySelector,a=void 0===r?".ecl-inpage-navigation__link":r,l=e.spyClass,c=void 0===l?"ecl-inpage-navigation__link--is-active":l,s=e.spyTrigger,u=void 0===s?".ecl-inpage-navigation__trigger":s,d=e.spyOffset,f=void 0===d?20:d,v=e.toggleSelector,m=void 0===v?".ecl-inpage-navigation__trigger":v,p=e.linksSelector,g=void 0===p?".ecl-inpage-navigation__link":p;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var y=void 0;function h(){var e=document.querySelector(n),t=e.querySelector(m),i=e.querySelectorAll(g);y=A(n,{stickyBitStickyOffset:o,useStickyClasses:!0,parentClass:"ecl-inpage-navigation__parent",stickyClass:"ecl-inpage-navigation--sticky",stuckClass:"ecl-inpage-navigation--stuck",stickyChangeClass:"ecl-inpage-navigation--changed"}),L.init({selector:a,activeClass:c,offset:f,callback:function(e){e&&(document.querySelector(u).innerHTML=e.nav.innerHTML)}}),t.addEventListener("click",function(n){x(t,{context:e}),n.preventDefault()}),i.forEach(function(n){return n.addEventListener("click",function(){x(t,{context:e,forceClose:!0})})})}return h(),{init:h,destroy:function(){L.destroy(),y&&y.cleanup()}}},e.megamenu=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.selector,i=void 0===n?".ecl-navigation-menu":n,o=e.toggleSelector,r=void 0===o?".ecl-navigation-menu__toggle":o,a=e.listSelector,l=void 0===a?".ecl-navigation-menu__root":a,c=e.linkSelector,s=void 0===c?".ecl-navigation-menu__link":c;t(i).forEach(function(e){var n=e.querySelector(r);n&&n.addEventListener("click",function(){return x(n,{context:e})});var i=e.querySelector(l);t(s,i).forEach(function(e){e.addEventListener("click",q(e,i)),e.addEventListener("keydown",function(e,t){return function(n){var i=e.parentElement,o=i.previousElementSibling||i.parentElement.lastElementChild,r=i.nextElementSibling||i.parentElement.firstElementChild;if(!n.metaKey&&!n.altKey)switch(n.keyCode){case 13:case 32:q(n.currentTarget,t)(n);break;case 37:case 38:n.preventDefault(),o.querySelector("a").focus();break;case 39:case 40:n.preventDefault(),r.querySelector("a").focus()}}}(e,i))})})},e.navigationSide=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.stickySelector,n=void 0===t?".ecl-side-navigation__toggle":t,i=e.activeSelector,o=void 0===i?".ecl-side-navigation__link--active":i;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;function r(){var e;A(n,{useStickyClasses:!0}),(e=document.getElementsByClassName(n.substring(1))[0])&&e.addEventListener("click",function(e){"false"===e.target.getAttribute("aria-expanded")&&e.target.scrollIntoView()}),function(){var e=document.getElementsByClassName(o.substring(1))[0];if(e)for(var t=e;t;){if((t=t.parentNode).matches(".ecl-side-navigation__group")){var n=t.previousElementSibling;n.matches(".ecl-side-navigation__link")&&n.setAttribute("aria-expanded","true")}if(t.matches(".ecl-side-navigation"))break}}()}return r(),{init:r}},e.eclTables=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)||document.getElementsByClassName("ecl-table--responsive");[].forEach.call(e,function(e){for(var t=[],n="",i=0,o=[],r=e.querySelectorAll("tbody tr"),a=e.querySelectorAll("thead tr th"),l=e.querySelectorAll("thead tr")[0].querySelectorAll("th").length-1,c=e.querySelectorAll("tbody tr")[0].querySelectorAll("td").length,s=-1,u=0;u<a.length;u+=1)a[u].getAttribute("colspan")&&(s=u),t[u]=[],t[u]=a[u].textContent;if(-1!==s){n=t.splice(s,1),i=s,o=e.querySelectorAll("th[colspan]")[0].getAttribute("colspan");for(var d=0;d<o;d+=1)t.splice(i+d,0,t[l+d]),t.splice(l+1+d,1)}[].forEach.call(r,function(e){for(var i=0;i<c;i+=1)if(""===t[i]||" "===t[i]?e.querySelectorAll("td")[i].setAttribute("class","ecl-table__heading"):e.querySelectorAll("td")[i].setAttribute("data-th",t[i]),-1!==s){var r=e.querySelectorAll("td")[s];r.setAttribute("class","ecl-table__group-label"),r.setAttribute("data-th-group",n);for(var a=1;a<o;a+=1)e.querySelectorAll("td")[s+a].setAttribute("class","ecl-table__group_element")}})})},e.tabs=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.selector,i=void 0===n?".ecl-tabs":n,o=e.tablistSelector,r=void 0===o?".ecl-tabs__tablist":o,a=e.tabpanelSelector,l=void 0===a?".ecl-tabs__tabpanel":a,c=e.tabelementsSelector,s=void 0===c?r+" li":c;if(!("querySelector"in document&&"addEventListener"in window&&document.documentElement.classList))return null;var u=t(i);function d(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=t(r+" li",e.parentElement.parentElement),o=t(l,e.parentElement.parentElement);i.forEach(function(e){e.setAttribute("tabindex",-1),e.removeAttribute("aria-selected")}),o.forEach(function(e){e.setAttribute("aria-hidden","true")}),e.setAttribute("tabindex",0),e.setAttribute("aria-selected","true"),n&&e.focus(),document.getElementById(e.getAttribute("aria-controls")).removeAttribute("aria-hidden")}function f(e){d(e.currentTarget),e.preventDefault()}function v(e){var t=e.currentTarget,n=t.previousElementSibling||t.parentElement.lastElementChild,i=t.nextElementSibling||t.parentElement.firstElementChild;if(!e.metaKey&&!e.altKey)switch(e.keyCode){case 37:case 38:d(n),e.preventDefault();break;case 39:case 40:d(i),e.preventDefault()}}function m(e){t(s,e).forEach(function(e){e.addEventListener("click",f),e.addEventListener("keydown",v)})}function p(e){t(s,e).forEach(function(e){e.removeEventListener("click",f),e.removeEventListener("keydown",v)})}function g(){u.forEach(m)}return g(),{init:g,destroy:function(){u.forEach(p)}}},e.timelines=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.selector,n=void 0===t?".ecl-timeline":t,i=e.buttonSelector,o=void 0===i?".ecl-timeline__button":i,r=e.hiddenElementsSelector,a=void 0===r?".ecl-timeline__item--over-limit":r,l=e.classToRemove,c=void 0===l?"ecl-timeline__item--over-limit":l,s=e.context,u=void 0===s?document:s;Array.prototype.slice.call(u.querySelectorAll(n)).forEach(function(e){var t=u.querySelector(o);t&&t.addEventListener("click",function(){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.classToRemove,o=void 0===i?"ecl-timeline__item--over-limit":i,r=n.hiddenElementsSelector,a=void 0===r?".ecl-timeline__item--over-limit":r;e&&(Array.prototype.slice.call(e.querySelectorAll(a)).forEach(function(e){e.classList.remove(o)}),t.parentNode.removeChild(t))}(e,t,{classToRemove:c,hiddenElementsSelector:a})})})},e}({});
