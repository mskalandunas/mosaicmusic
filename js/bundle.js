/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(4);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	$(function() {
	  $('a.page-scroll').bind('click', function(event) {
	    var $anchor = $(this);
	    $('html, body').stop().animate({
	      scrollTop: $($anchor.attr('href')).offset().top
	    }, 1750, 'easeInOutSine');
	    event.preventDefault();
	  });
	});


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! UIkit 2.22.0 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
	!function(t){if("function"=="function"&&__webpack_require__(3)&&!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){var i=window.UIkit||t(window,window.jQuery,window.document);return i.load=function(t,e,n,o){var s,a=t.split(","),r=[],l=(o.config&&o.config.uikit&&o.config.uikit.base?o.config.uikit.base:"").replace(/\/+$/g,"");if(!l)throw new Error("Please define base path to UIkit in the requirejs config.");for(s=0;s<a.length;s+=1){var c=a[s].replace(/\./g,"/");r.push(l+"/components/"+c)}e(r,function(){n(i)})},i}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)),!window.jQuery)throw new Error("UIkit requires jQuery");window&&window.jQuery&&t(window,window.jQuery,window.document)}(function(t,i,e){"use strict";var n={},o=t.UIkit?Object.create(t.UIkit):void 0;if(n.version="2.22.0",n.noConflict=function(){return o&&(t.UIkit=o,i.UIkit=o,i.fn.uk=o.fn),n},n.prefix=function(t){return t},n.$=i,n.$doc=n.$(document),n.$win=n.$(window),n.$html=n.$("html"),n.support={},n.support.transition=function(){var t=function(){var t,i=e.body||e.documentElement,n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in n)if(void 0!==i.style[t])return n[t]}();return t&&{end:t}}(),n.support.animation=function(){var t=function(){var t,i=e.body||e.documentElement,n={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(t in n)if(void 0!==i.style[t])return n[t]}();return t&&{end:t}}(),function(){var i=0;t.requestAnimationFrame=t.requestAnimationFrame||t.webkitRequestAnimationFrame||function(e){var n=(new Date).getTime(),o=Math.max(0,16-(n-i)),s=t.setTimeout(function(){e(n+o)},o);return i=n+o,s},t.cancelAnimationFrame||(t.cancelAnimationFrame=function(t){clearTimeout(t)})}(),n.support.touch="ontouchstart"in document||t.DocumentTouch&&document instanceof t.DocumentTouch||t.navigator.msPointerEnabled&&t.navigator.msMaxTouchPoints>0||t.navigator.pointerEnabled&&t.navigator.maxTouchPoints>0||!1,n.support.mutationobserver=t.MutationObserver||t.WebKitMutationObserver||null,n.Utils={},n.Utils.isFullscreen=function(){return document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.fullscreenElement||!1},n.Utils.str2json=function(t,i){try{return i?JSON.parse(t.replace(/([\$\w]+)\s*:/g,function(t,i){return'"'+i+'":'}).replace(/'([^']+)'/g,function(t,i){return'"'+i+'"'})):new Function("","var json = "+t+"; return JSON.parse(JSON.stringify(json));")()}catch(e){return!1}},n.Utils.debounce=function(t,i,e){var n;return function(){var o=this,s=arguments,a=function(){n=null,e||t.apply(o,s)},r=e&&!n;clearTimeout(n),n=setTimeout(a,i),r&&t.apply(o,s)}},n.Utils.removeCssRules=function(t){var i,e,n,o,s,a,r,l,c,u;t&&setTimeout(function(){try{for(u=document.styleSheets,o=0,r=u.length;r>o;o++){for(n=u[o],e=[],n.cssRules=n.cssRules,i=s=0,l=n.cssRules.length;l>s;i=++s)n.cssRules[i].type===CSSRule.STYLE_RULE&&t.test(n.cssRules[i].selectorText)&&e.unshift(i);for(a=0,c=e.length;c>a;a++)n.deleteRule(e[a])}}catch(d){}},0)},n.Utils.isInView=function(t,e){var o=i(t);if(!o.is(":visible"))return!1;var s=n.$win.scrollLeft(),a=n.$win.scrollTop(),r=o.offset(),l=r.left,c=r.top;return e=i.extend({topoffset:0,leftoffset:0},e),c+o.height()>=a&&c-e.topoffset<=a+n.$win.height()&&l+o.width()>=s&&l-e.leftoffset<=s+n.$win.width()?!0:!1},n.Utils.checkDisplay=function(t,e){var o=n.$("[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]",t||document);return t&&!o.length&&(o=i(t)),o.trigger("display.uk.check"),e&&("string"!=typeof e&&(e='[class*="uk-animation-"]'),o.find(e).each(function(){var t=n.$(this),i=t.attr("class"),e=i.match(/uk\-animation\-(.+)/);t.removeClass(e[0]).width(),t.addClass(e[0])})),o},n.Utils.options=function(t){if(i.isPlainObject(t))return t;var e=t?t.indexOf("{"):-1,o={};if(-1!=e)try{o=n.Utils.str2json(t.substr(e))}catch(s){}return o},n.Utils.animate=function(t,e){var o=i.Deferred();return t=n.$(t),e=e,t.css("display","none").addClass(e).one(n.support.animation.end,function(){t.removeClass(e),o.resolve()}).width(),t.css("display",""),o.promise()},n.Utils.uid=function(t){return(t||"id")+(new Date).getTime()+"RAND"+Math.ceil(1e5*Math.random())},n.Utils.template=function(t,i){for(var e,n,o,s,a=t.replace(/\n/g,"\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g,"{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g),r=0,l=[],c=0;r<a.length;){if(e=a[r],e.match(/\{\{\s*(.+?)\s*\}\}/))switch(r+=1,e=a[r],n=e[0],o=e.substring(e.match(/^(\^|\#|\!|\~|\:)/)?1:0),n){case"~":l.push("for(var $i=0;$i<"+o+".length;$i++) { var $item = "+o+"[$i];"),c++;break;case":":l.push("for(var $key in "+o+") { var $val = "+o+"[$key];"),c++;break;case"#":l.push("if("+o+") {"),c++;break;case"^":l.push("if(!"+o+") {"),c++;break;case"/":l.push("}"),c--;break;case"!":l.push("__ret.push("+o+");");break;default:l.push("__ret.push(escape("+o+"));")}else l.push("__ret.push('"+e.replace(/\'/g,"\\'")+"');");r+=1}return s=new Function("$data",["var __ret = [];","try {","with($data){",c?'__ret = ["Not all blocks are closed correctly."]':l.join(""),"};","}catch(e){__ret = [e.message];}",'return __ret.join("").replace(/\\n\\n/g, "\\n");',"function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n")),i?s(i):s},n.Utils.events={},n.Utils.events.click=n.support.touch?"tap":"click",t.UIkit=n,n.fn=function(t,e){var o=arguments,s=t.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),a=s[1],r=s[2];return n[a]?this.each(function(){var t=i(this),s=t.data(a);s||t.data(a,s=n[a](this,r?void 0:e)),r&&s[r].apply(s,Array.prototype.slice.call(o,1))}):(i.error("UIkit component ["+a+"] does not exist."),this)},i.UIkit=n,i.fn.uk=n.fn,n.langdirection="rtl"==n.$html.attr("dir")?"right":"left",n.components={},n.component=function(t,e){var o=function(e,s){var a=this;return this.UIkit=n,this.element=e?n.$(e):null,this.options=i.extend(!0,{},this.defaults,s),this.plugins={},this.element&&this.element.data(t,this),this.init(),(this.options.plugins.length?this.options.plugins:Object.keys(o.plugins)).forEach(function(t){o.plugins[t].init&&(o.plugins[t].init(a),a.plugins[t]=!0)}),this.trigger("init.uk.component",[t,this]),this};return o.plugins={},i.extend(!0,o.prototype,{defaults:{plugins:[]},boot:function(){},init:function(){},on:function(t,i,e){return n.$(this.element||this).on(t,i,e)},one:function(t,i,e){return n.$(this.element||this).one(t,i,e)},off:function(t){return n.$(this.element||this).off(t)},trigger:function(t,i){return n.$(this.element||this).trigger(t,i)},find:function(t){return n.$(this.element?this.element:[]).find(t)},proxy:function(t,i){var e=this;i.split(" ").forEach(function(i){e[i]||(e[i]=function(){return t[i].apply(t,arguments)})})},mixin:function(t,i){var e=this;i.split(" ").forEach(function(i){e[i]||(e[i]=t[i].bind(e))})},option:function(){return 1==arguments.length?this.options[arguments[0]]||void 0:(2==arguments.length&&(this.options[arguments[0]]=arguments[1]),void 0)}},e),this.components[t]=o,this[t]=function(){var e,o;if(arguments.length)switch(arguments.length){case 1:"string"==typeof arguments[0]||arguments[0].nodeType||arguments[0]instanceof jQuery?e=i(arguments[0]):o=arguments[0];break;case 2:e=i(arguments[0]),o=arguments[1]}return e&&e.data(t)?e.data(t):new n.components[t](e,o)},n.domready&&n.component.boot(t),o},n.plugin=function(t,i,e){this.components[t].plugins[i]=e},n.component.boot=function(t){n.components[t].prototype&&n.components[t].prototype.boot&&!n.components[t].booted&&(n.components[t].prototype.boot.apply(n,[]),n.components[t].booted=!0)},n.component.bootComponents=function(){for(var t in n.components)n.component.boot(t)},n.domObservers=[],n.domready=!1,n.ready=function(t){n.domObservers.push(t),n.domready&&t(document)},n.on=function(t,i,e){return t&&t.indexOf("ready.uk.dom")>-1&&n.domready&&i.apply(n.$doc),n.$doc.on(t,i,e)},n.one=function(t,i,e){return t&&t.indexOf("ready.uk.dom")>-1&&n.domready?(i.apply(n.$doc),n.$doc):n.$doc.one(t,i,e)},n.trigger=function(t,i){return n.$doc.trigger(t,i)},n.domObserve=function(t,i){n.support.mutationobserver&&(i=i||function(){},n.$(t).each(function(){var t=this,e=n.$(t);if(!e.data("observer"))try{var o=new n.support.mutationobserver(n.Utils.debounce(function(){i.apply(t,[]),e.trigger("changed.uk.dom")},50));o.observe(t,{childList:!0,subtree:!0}),e.data("observer",o)}catch(s){}}))},n.init=function(t){t=t||document,n.domObservers.forEach(function(i){i(t)})},n.on("domready.uk.dom",function(){n.init(),n.domready&&n.Utils.checkDisplay()}),i(function(){n.$body=n.$("body"),n.ready(function(){n.domObserve("[data-uk-observe]")}),n.on("changed.uk.dom",function(t){n.init(t.target),n.Utils.checkDisplay(t.target)}),n.trigger("beforeready.uk.dom"),n.component.bootComponents(),setInterval(function(){var t,i={x:window.pageXOffset,y:window.pageYOffset},e=function(){(i.x!=window.pageXOffset||i.y!=window.pageYOffset)&&(t={x:0,y:0},window.pageXOffset!=i.x&&(t.x=window.pageXOffset>i.x?1:-1),window.pageYOffset!=i.y&&(t.y=window.pageYOffset>i.y?1:-1),i={dir:t,x:window.pageXOffset,y:window.pageYOffset},n.$doc.trigger("scrolling.uk.document",[i]))};return n.support.touch&&n.$html.on("touchmove touchend MSPointerMove MSPointerUp pointermove pointerup",e),(i.x||i.y)&&e(),e}(),15),n.trigger("domready.uk.dom"),n.support.touch&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)&&n.$win.on("load orientationchange resize",n.Utils.debounce(function(){var t=function(){return i(".uk-height-viewport").css("height",window.innerHeight),t};return t()}(),100)),n.trigger("afterready.uk.dom"),n.domready=!0}),n.$html.addClass(n.support.touch?"uk-touch":"uk-notouch"),n.support.touch){var s,a=!1,r="uk-hover",l=".uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover";n.$html.on("mouseenter touchstart MSPointerDown pointerdown",l,function(){a&&i("."+r).removeClass(r),a=i(this).addClass(r)}).on("mouseleave touchend MSPointerUp pointerup",function(t){s=i(t.target).parents(l),a&&a.not(s).removeClass(r)})}return n}),function(t){function i(t,i,e,n){return Math.abs(t-i)>=Math.abs(e-n)?t-i>0?"Left":"Right":e-n>0?"Up":"Down"}function e(){c=null,d.last&&(d.el.trigger("longTap"),d={})}function n(){c&&clearTimeout(c),c=null}function o(){a&&clearTimeout(a),r&&clearTimeout(r),l&&clearTimeout(l),c&&clearTimeout(c),a=r=l=c=null,d={}}function s(t){return t.pointerType==t.MSPOINTER_TYPE_TOUCH&&t.isPrimary}if(!t.fn.swipeLeft){var a,r,l,c,u,d={},h=750;t(function(){var f,p,m,g=0,v=0;"MSGesture"in window&&(u=new MSGesture,u.target=document.body),t(document).on("MSGestureEnd gestureend",function(t){var i=t.originalEvent.velocityX>1?"Right":t.originalEvent.velocityX<-1?"Left":t.originalEvent.velocityY>1?"Down":t.originalEvent.velocityY<-1?"Up":null;i&&(d.el.trigger("swipe"),d.el.trigger("swipe"+i))}).on("touchstart MSPointerDown pointerdown",function(i){("MSPointerDown"!=i.type||s(i.originalEvent))&&(m="MSPointerDown"==i.type||"pointerdown"==i.type?i:i.originalEvent.touches[0],f=Date.now(),p=f-(d.last||f),d.el=t("tagName"in m.target?m.target:m.target.parentNode),a&&clearTimeout(a),d.x1=m.pageX,d.y1=m.pageY,p>0&&250>=p&&(d.isDoubleTap=!0),d.last=f,c=setTimeout(e,h),!u||"MSPointerDown"!=i.type&&"pointerdown"!=i.type&&"touchstart"!=i.type||u.addPointer(i.originalEvent.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){("MSPointerMove"!=t.type||s(t.originalEvent))&&(m="MSPointerMove"==t.type||"pointermove"==t.type?t:t.originalEvent.touches[0],n(),d.x2=m.pageX,d.y2=m.pageY,g+=Math.abs(d.x1-d.x2),v+=Math.abs(d.y1-d.y2))}).on("touchend MSPointerUp pointerup",function(e){("MSPointerUp"!=e.type||s(e.originalEvent))&&(n(),d.x2&&Math.abs(d.x1-d.x2)>30||d.y2&&Math.abs(d.y1-d.y2)>30?l=setTimeout(function(){d.el.trigger("swipe"),d.el.trigger("swipe"+i(d.x1,d.x2,d.y1,d.y2)),d={}},0):"last"in d&&(isNaN(g)||30>g&&30>v?r=setTimeout(function(){var i=t.Event("tap");i.cancelTouch=o,d.el.trigger(i),d.isDoubleTap?(d.el.trigger("doubleTap"),d={}):a=setTimeout(function(){a=null,d.el.trigger("singleTap"),d={}},250)},0):d={},g=v=0))}).on("touchcancel MSPointerCancel",o),t(window).on("scroll",o)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(i){t.fn[i]=function(e){return t(this).on(i,e)}})}}(jQuery),function(t){"use strict";var i=[];t.component("stackMargin",{defaults:{cls:"uk-margin-small-top"},boot:function(){t.ready(function(i){t.$("[data-uk-margin]",i).each(function(){var i,e=t.$(this);e.data("stackMargin")||(i=t.stackMargin(e,t.Utils.options(e.attr("data-uk-margin"))))})})},init:function(){var e=this;this.columns=[],t.$win.on("resize orientationchange",function(){var i=function(){e.process()};return t.$(function(){i(),t.$win.on("load",i)}),t.Utils.debounce(i,20)}()),t.$html.on("changed.uk.dom",function(){e.process()}),this.on("display.uk.check",function(){this.element.is(":visible")&&this.process()}.bind(this)),i.push(this)},process:function(){return this.columns=this.element.children(),t.Utils.stackMargin(this.columns,this.options),this},revert:function(){return this.columns.removeClass(this.options.cls),this}}),function(){var i=[],e=function(t){if(t.is(":visible")){var i=t.parent().width(),e=t.data("width"),n=i/e,o=Math.floor(n*t.data("height"));t.css({height:e>i?o:t.data("height")})}};t.component("responsiveElement",{defaults:{},boot:function(){t.ready(function(i){t.$("iframe.uk-responsive-width, [data-uk-responsive]",i).each(function(){var i,e=t.$(this);e.data("responsiveIframe")||(i=t.responsiveElement(e,{}))})})},init:function(){var t=this.element;t.attr("width")&&t.attr("height")&&(t.data({width:t.attr("width"),height:t.attr("height")}).on("display.uk.check",function(){e(t)}),e(t),i.push(t))}}),t.$win.on("resize load",t.Utils.debounce(function(){i.forEach(function(t){e(t)})},15))}(),t.Utils.stackMargin=function(i,e){e=t.$.extend({cls:"uk-margin-small-top"},e),e.cls=e.cls,i=t.$(i).removeClass(e.cls);var n=!1,o=i.filter(":visible:first"),s=o.length?o.position().top+o.outerHeight()-1:!1;s!==!1&&i.each(function(){var i=t.$(this);i.is(":visible")&&(n?i.addClass(e.cls):i.position().top>=s&&(n=i.addClass(e.cls)))})},t.Utils.matchHeights=function(i,e){i=t.$(i).css("min-height",""),e=t.$.extend({row:!0},e);var n=function(i){if(!(i.length<2)){var e=0;i.each(function(){e=Math.max(e,t.$(this).outerHeight())}).each(function(){var i=t.$(this),n=e-("border-box"==i.css("box-sizing")?0:i.outerHeight()-i.height());i.css("min-height",n+"px")})}};e.row?(i.first().width(),setTimeout(function(){var e=!1,o=[];i.each(function(){var i=t.$(this),s=i.offset().top;s!=e&&o.length&&(n(t.$(o)),o=[],s=i.offset().top),o.push(i),e=s}),o.length&&n(t.$(o))},0)):n(i)}}(UIkit),function(t){"use strict";function i(i,e){e=t.$.extend({duration:1e3,transition:"easeOutExpo",offset:0,complete:function(){}},e);var n=i.offset().top-e.offset,o=t.$doc.height(),s=window.innerHeight;n+s>o&&(n=o-s),t.$("html,body").stop().animate({scrollTop:n},e.duration,e.transition).promise().done(e.complete)}t.component("smoothScroll",{boot:function(){t.$html.on("click.smooth-scroll.uikit","[data-uk-smooth-scroll]",function(){var i=t.$(this);if(!i.data("smoothScroll")){{t.smoothScroll(i,t.Utils.options(i.attr("data-uk-smooth-scroll")))}i.trigger("click")}return!1})},init:function(){var e=this;this.on("click",function(n){n.preventDefault(),i(t.$(this.hash).length?t.$(this.hash):t.$("body"),e.options)})}}),t.Utils.scrollToElement=i,t.$.easing.easeOutExpo||(t.$.easing.easeOutExpo=function(t,i,e,n,o){return i==o?e+n:n*(-Math.pow(2,-10*i/o)+1)+e})}(UIkit),function(t){"use strict";var i=t.$win,e=t.$doc,n=[],o=function(){for(var t=0;t<n.length;t++)window.requestAnimationFrame.apply(window,[n[t].check])};t.component("scrollspy",{defaults:{target:!1,cls:"uk-scrollspy-inview",initcls:"uk-scrollspy-init-inview",topoffset:0,leftoffset:0,repeat:!1,delay:0},boot:function(){e.on("scrolling.uk.document",o),i.on("load resize orientationchange",t.Utils.debounce(o,50)),t.ready(function(i){t.$("[data-uk-scrollspy]",i).each(function(){var i=t.$(this);if(!i.data("scrollspy")){t.scrollspy(i,t.Utils.options(i.attr("data-uk-scrollspy")))}})})},init:function(){var i,e=this,o=this.options.cls.split(/,/),s=function(){var n=e.options.target?e.element.find(e.options.target):e.element,s=1===n.length?1:0,a=0;n.each(function(){var n=t.$(this),r=n.data("inviewstate"),l=t.Utils.isInView(n,e.options),c=n.data("ukScrollspyCls")||o[a].trim();!l||r||n.data("scrollspy-idle")||(i||(n.addClass(e.options.initcls),e.offset=n.offset(),i=!0,n.trigger("init.uk.scrollspy")),n.data("scrollspy-idle",setTimeout(function(){n.addClass("uk-scrollspy-inview").toggleClass(c).width(),n.trigger("inview.uk.scrollspy"),n.data("scrollspy-idle",!1),n.data("inviewstate",!0)},e.options.delay*s)),s++),!l&&r&&e.options.repeat&&(n.data("scrollspy-idle")&&clearTimeout(n.data("scrollspy-idle")),n.removeClass("uk-scrollspy-inview").toggleClass(c),n.data("inviewstate",!1),n.trigger("outview.uk.scrollspy")),a=o[a+1]?a+1:0})};s(),this.check=s,n.push(this)}});var s=[],a=function(){for(var t=0;t<s.length;t++)window.requestAnimationFrame.apply(window,[s[t].check])};t.component("scrollspynav",{defaults:{cls:"uk-active",closest:!1,topoffset:0,leftoffset:0,smoothscroll:!1},boot:function(){e.on("scrolling.uk.document",a),i.on("resize orientationchange",t.Utils.debounce(a,50)),t.ready(function(i){t.$("[data-uk-scrollspy-nav]",i).each(function(){var i=t.$(this);if(!i.data("scrollspynav")){t.scrollspynav(i,t.Utils.options(i.attr("data-uk-scrollspy-nav")))}})})},init:function(){var e,n=[],o=this.find("a[href^='#']").each(function(){n.push(t.$(this).attr("href"))}),a=t.$(n.join(",")),r=this.options.cls,l=this.options.closest||this.options.closest,c=this,u=function(){e=[];for(var n=0;n<a.length;n++)t.Utils.isInView(a.eq(n),c.options)&&e.push(a.eq(n));if(e.length){var s,u=i.scrollTop(),d=function(){for(var t=0;t<e.length;t++)if(e[t].offset().top>=u)return e[t]}();if(!d)return;c.options.closest?(o.closest(l).removeClass(r),s=o.filter("a[href='#"+d.attr("id")+"']").closest(l).addClass(r)):s=o.removeClass(r).filter("a[href='#"+d.attr("id")+"']").addClass(r),c.element.trigger("inview.uk.scrollspynav",[d,s])}};this.options.smoothscroll&&t.smoothScroll&&o.each(function(){t.smoothScroll(this,c.options.smoothscroll)}),u(),this.element.data("scrollspynav",this),this.check=u,s.push(this)}})}(UIkit),function(t){"use strict";var i=[];t.component("toggle",{defaults:{target:!1,cls:"uk-hidden",animation:!1,duration:200},boot:function(){t.ready(function(e){t.$("[data-uk-toggle]",e).each(function(){var i=t.$(this);if(!i.data("toggle")){t.toggle(i,t.Utils.options(i.attr("data-uk-toggle")))}}),setTimeout(function(){i.forEach(function(t){t.getToggles()})},0)})},init:function(){var t=this;this.aria=-1!==this.options.cls.indexOf("uk-hidden"),this.getToggles(),this.on("click",function(i){t.element.is('a[href="#"]')&&i.preventDefault(),t.toggle()}),i.push(this)},toggle:function(){if(this.totoggle.length){if(this.options.animation&&t.support.animation){var i=this,e=this.options.animation.split(",");1==e.length&&(e[1]=e[0]),e[0]=e[0].trim(),e[1]=e[1].trim(),this.totoggle.css("animation-duration",this.options.duration+"ms"),this.totoggle.each(function(){var n=t.$(this);n.hasClass(i.options.cls)?(n.toggleClass(i.options.cls),t.Utils.animate(n,e[0]).then(function(){n.css("animation-duration",""),t.Utils.checkDisplay(n)})):t.Utils.animate(this,e[1]+" uk-animation-reverse").then(function(){n.toggleClass(i.options.cls).css("animation-duration",""),t.Utils.checkDisplay(n)})})}else this.totoggle.toggleClass(this.options.cls),t.Utils.checkDisplay(this.totoggle);this.updateAria()}},getToggles:function(){this.totoggle=this.options.target?t.$(this.options.target):[],this.updateAria()},updateAria:function(){this.aria&&this.totoggle.length&&this.totoggle.each(function(){t.$(this).attr("aria-hidden",t.$(this).hasClass("uk-hidden"))})}})}(UIkit),function(t){"use strict";t.component("alert",{defaults:{fade:!0,duration:200,trigger:".uk-alert-close"},boot:function(){t.$html.on("click.alert.uikit","[data-uk-alert]",function(i){var e=t.$(this);if(!e.data("alert")){var n=t.alert(e,t.Utils.options(e.attr("data-uk-alert")));t.$(i.target).is(n.options.trigger)&&(i.preventDefault(),n.close())}})},init:function(){var t=this;this.on("click",this.options.trigger,function(i){i.preventDefault(),t.close()})},close:function(){var t=this.trigger("close.uk.alert"),i=function(){this.trigger("closed.uk.alert").remove()}.bind(this);this.options.fade?t.css("overflow","hidden").css("max-height",t.height()).animate({height:0,opacity:0,"padding-top":0,"padding-bottom":0,"margin-top":0,"margin-bottom":0},this.options.duration,i):i()}})}(UIkit),function(t){"use strict";t.component("buttonRadio",{defaults:{activeClass:"uk-active",target:".uk-button"},boot:function(){t.$html.on("click.buttonradio.uikit","[data-uk-button-radio]",function(i){var e=t.$(this);if(!e.data("buttonRadio")){var n=t.buttonRadio(e,t.Utils.options(e.attr("data-uk-button-radio"))),o=t.$(i.target);o.is(n.options.target)&&o.trigger("click")}})},init:function(){var i=this;this.find(i.options.target).attr("aria-checked","false").filter("."+i.options.activeClass).attr("aria-checked","true"),this.on("click",this.options.target,function(e){var n=t.$(this);n.is('a[href="#"]')&&e.preventDefault(),i.find(i.options.target).not(n).removeClass(i.options.activeClass).blur(),n.addClass(i.options.activeClass),i.find(i.options.target).not(n).attr("aria-checked","false"),n.attr("aria-checked","true"),i.trigger("change.uk.button",[n])})},getSelected:function(){return this.find("."+this.options.activeClass)}}),t.component("buttonCheckbox",{defaults:{activeClass:"uk-active",target:".uk-button"},boot:function(){t.$html.on("click.buttoncheckbox.uikit","[data-uk-button-checkbox]",function(i){var e=t.$(this);if(!e.data("buttonCheckbox")){var n=t.buttonCheckbox(e,t.Utils.options(e.attr("data-uk-button-checkbox"))),o=t.$(i.target);o.is(n.options.target)&&o.trigger("click")}})},init:function(){var i=this;this.find(i.options.target).attr("aria-checked","false").filter("."+i.options.activeClass).attr("aria-checked","true"),this.on("click",this.options.target,function(e){var n=t.$(this);n.is('a[href="#"]')&&e.preventDefault(),n.toggleClass(i.options.activeClass).blur(),n.attr("aria-checked",n.hasClass(i.options.activeClass)),i.trigger("change.uk.button",[n])})},getSelected:function(){return this.find("."+this.options.activeClass)}}),t.component("button",{defaults:{},boot:function(){t.$html.on("click.button.uikit","[data-uk-button]",function(){var i=t.$(this);if(!i.data("button")){{t.button(i,t.Utils.options(i.attr("data-uk-button")))}i.trigger("click")}})},init:function(){var t=this;this.element.attr("aria-pressed",this.element.hasClass("uk-active")),this.on("click",function(i){t.element.is('a[href="#"]')&&i.preventDefault(),t.toggle(),t.trigger("change.uk.button",[t.element.blur().hasClass("uk-active")])})},toggle:function(){this.element.toggleClass("uk-active"),this.element.attr("aria-pressed",this.element.hasClass("uk-active"))}})}(UIkit),function(t){"use strict";function i(i,e,n,o){if(i=t.$(i),e=t.$(e),n=n||window.innerWidth,o=o||i.offset(),e.length){var s=e.outerWidth();if(i.css("min-width",s),"right"==t.langdirection){var a=n-(e.offset().left+s),r=n-(i.offset().left+i.outerWidth());i.css("margin-right",a-r)}else i.css("margin-left",e.offset().left-o.left)}}var e,n=!1;t.component("dropdown",{defaults:{mode:"hover",remaintime:800,justify:!1,boundary:t.$win,delay:0,hoverDelayIdle:250},remainIdle:!1,boot:function(){var i=t.support.touch?"click":"mouseenter";t.$html.on(i+".dropdown.uikit","[data-uk-dropdown]",function(e){var n=t.$(this);if(!n.data("dropdown")){var o=t.dropdown(n,t.Utils.options(n.attr("data-uk-dropdown")));("click"==i||"mouseenter"==i&&"hover"==o.options.mode)&&o.element.trigger(i),o.element.find(".uk-dropdown").length&&e.preventDefault()}})},init:function(){var i=this;this.dropdown=this.find(".uk-dropdown"),this.centered=this.dropdown.hasClass("uk-dropdown-center"),this.justified=this.options.justify?t.$(this.options.justify):!1,this.boundary=t.$(this.options.boundary),this.flipped=this.dropdown.hasClass("uk-dropdown-flip"),this.boundary.length||(this.boundary=t.$win),this.element.attr("aria-haspopup","true"),this.element.attr("aria-expanded",this.element.hasClass("uk-open")),"click"==this.options.mode||t.support.touch?this.on("click.uikit.dropdown",function(e){var n=t.$(e.target);n.parents(".uk-dropdown").length||((n.is("a[href='#']")||n.parent().is("a[href='#']")||i.dropdown.length&&!i.dropdown.is(":visible"))&&e.preventDefault(),n.blur()),i.element.hasClass("uk-open")?(!i.dropdown.find(e.target).length||n.is(".uk-dropdown-close")||n.parents(".uk-dropdown-close").length)&&i.hide():i.show()}):this.on("mouseenter",function(){i.trigger("pointerenter.uk.dropdown",[i]),i.remainIdle&&clearTimeout(i.remainIdle),e&&clearTimeout(e),n&&n==i||(e=n&&n!=i?setTimeout(function(){e=setTimeout(i.show.bind(i),i.options.delay)},i.options.hoverDelayIdle):setTimeout(i.show.bind(i),i.options.delay))}).on("mouseleave",function(){e&&clearTimeout(e),i.remainIdle=setTimeout(function(){n&&n==i&&i.hide()},i.options.remaintime),i.trigger("pointerleave.uk.dropdown",[i])}).on("click",function(e){var o=t.$(e.target);i.remainIdle&&clearTimeout(i.remainIdle),n&&n==i||((o.is("a[href='#']")||o.parent().is("a[href='#']"))&&e.preventDefault(),i.show())})},show:function(){t.$html.off("click.outer.dropdown"),n&&n!=this&&n.hide(!0),e&&clearTimeout(e),this.trigger("beforeshow.uk.dropdown",[this]),this.checkDimensions(),this.element.addClass("uk-open"),this.element.attr("aria-expanded","true"),this.trigger("show.uk.dropdown",[this]),t.Utils.checkDisplay(this.dropdown,!0),n=this,this.registerOuterClick()},hide:function(t){this.trigger("beforehide.uk.dropdown",[this,t]),this.element.removeClass("uk-open"),this.remainIdle&&clearTimeout(this.remainIdle),this.remainIdle=!1,this.element.attr("aria-expanded","false"),this.trigger("hide.uk.dropdown",[this,t]),n==this&&(n=!1)},registerOuterClick:function(){var i=this;t.$html.off("click.outer.dropdown"),setTimeout(function(){t.$html.on("click.outer.dropdown",function(o){e&&clearTimeout(e);t.$(o.target);n!=i||i.element.find(o.target).length||(i.hide(!0),t.$html.off("click.outer.dropdown"))})},10)},checkDimensions:function(){if(this.dropdown.length){this.justified&&this.justified.length&&this.dropdown.css("min-width","");var e=this,n=this.dropdown.css("margin-"+t.langdirection,""),o=n.show().offset(),s=n.outerWidth(),a=this.boundary.width(),r=this.boundary.offset()?this.boundary.offset().left:0;this.centered&&(n.css("margin-"+t.langdirection,-1*(parseFloat(s)/2-n.parent().width()/2)),o=n.offset(),(s+o.left>a||o.left<0)&&(n.css("margin-"+t.langdirection,""),o=n.offset())),this.justified&&this.justified.length&&(i(n,this.justified,a,o),o=n.offset()),s+(o.left-r)>a&&(n.addClass("uk-dropdown-flip"),o=n.offset()),o.left-r<0&&(n.addClass("uk-dropdown-stack"),n.hasClass("uk-dropdown-flip")&&(this.flipped||(n.removeClass("uk-dropdown-flip"),o=n.offset(),n.addClass("uk-dropdown-flip")),setTimeout(function(){(n.offset().left-r<0||!e.flipped&&n.outerWidth()+(o.left-r)<a)&&n.removeClass("uk-dropdown-flip")},0)),this.trigger("stack.uk.dropdown",[this])),n.css("display","")}}}),t.component("dropdownOverlay",{defaults:{justify:!1,cls:"",duration:200},boot:function(){t.ready(function(i){t.$("[data-uk-dropdown-overlay]",i).each(function(){var i=t.$(this);i.data("dropdownOverlay")||t.dropdownOverlay(i,t.Utils.options(i.attr("data-uk-dropdown-overlay")))})})},init:function(){var e=this;this.justified=this.options.justify?t.$(this.options.justify):!1,this.overlay=this.element.find("uk-dropdown-overlay"),this.overlay.length||(this.overlay=t.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element)),this.overlay.addClass(this.options.cls),this.on({"beforeshow.uk.dropdown":function(t,n){e.dropdown=n,e.justified&&e.justified.length&&i(e.overlay.css({display:"block","margin-left":"","margin-right":""}),e.justified,e.justified.outerWidth())},"show.uk.dropdown":function(){var i=e.dropdown.dropdown.outerHeight(!0);e.dropdown.element.removeClass("uk-open"),e.overlay.stop().css("display","block").animate({height:i},e.options.duration,function(){e.dropdown.dropdown.css("visibility",""),e.dropdown.element.addClass("uk-open"),t.Utils.checkDisplay(e.dropdown.dropdown,!0)}),e.pointerleave=!1},"hide.uk.dropdown":function(){e.overlay.stop().animate({height:0},e.options.duration)},"pointerenter.uk.dropdown":function(){clearTimeout(e.remainIdle)},"pointerleave.uk.dropdown":function(){e.pointerleave=!0}}),this.overlay.on({mouseenter:function(){e.remainIdle&&(clearTimeout(e.dropdown.remainIdle),clearTimeout(e.remainIdle))},mouseleave:function(){e.pointerleave&&n&&(e.remainIdle=setTimeout(function(){n&&n.hide()},n.options.remaintime))}})}})}(UIkit),function(t){"use strict";var i=[];t.component("gridMatchHeight",{defaults:{target:!1,row:!0,ignorestacked:!1},boot:function(){t.ready(function(i){t.$("[data-uk-grid-match]",i).each(function(){var i,e=t.$(this);e.data("gridMatchHeight")||(i=t.gridMatchHeight(e,t.Utils.options(e.attr("data-uk-grid-match"))))})})},init:function(){var e=this;this.columns=this.element.children(),this.elements=this.options.target?this.find(this.options.target):this.columns,this.columns.length&&(t.$win.on("load resize orientationchange",function(){var i=function(){e.match()};return t.$(function(){i()}),t.Utils.debounce(i,50)}()),t.$html.on("changed.uk.dom",function(){e.columns=e.element.children(),e.elements=e.options.target?e.find(e.options.target):e.columns,e.match()}),this.on("display.uk.check",function(){this.element.is(":visible")&&this.match()}.bind(this)),i.push(this))},match:function(){var i=this.columns.filter(":visible:first");if(i.length){var e=Math.ceil(100*parseFloat(i.css("width"))/parseFloat(i.parent().css("width")))>=100;return e&&!this.options.ignorestacked?this.revert():t.Utils.matchHeights(this.elements,this.options),this}},revert:function(){return this.elements.css("min-height",""),this}}),t.component("gridMargin",{defaults:{cls:"uk-grid-margin"},boot:function(){t.ready(function(i){t.$("[data-uk-grid-margin]",i).each(function(){var i,e=t.$(this);e.data("gridMargin")||(i=t.gridMargin(e,t.Utils.options(e.attr("data-uk-grid-margin"))))})})},init:function(){t.stackMargin(this.element,this.options)}})}(UIkit),function(t){"use strict";function i(i,e){return e?("object"==typeof i?(i=i instanceof jQuery?i:t.$(i),i.parent().length&&(e.persist=i,e.persist.data("modalPersistParent",i.parent()))):i="string"==typeof i||"number"==typeof i?t.$("<div></div>").html(i):t.$("<div></div>").html("UIkit.modal Error: Unsupported data type: "+typeof i),i.appendTo(e.element.find(".uk-modal-dialog")),e):void 0}var e,n=!1,o=0,s=t.$html;t.component("modal",{defaults:{keyboard:!0,bgclose:!0,minScrollHeight:150,center:!1,modal:!0},scrollable:!1,transition:!1,init:function(){if(e||(e=t.$("body")),this.element.length){var i=this;this.paddingdir="padding-"+("left"==t.langdirection?"right":"left"),this.dialog=this.find(".uk-modal-dialog"),this.active=!1,this.element.attr("aria-hidden",this.element.hasClass("uk-open")),this.on("click",".uk-modal-close",function(t){t.preventDefault(),i.hide()}).on("click",function(e){var n=t.$(e.target);n[0]==i.element[0]&&i.options.bgclose&&i.hide()})}},toggle:function(){return this[this.isActive()?"hide":"show"]()},show:function(){if(this.element.length){if(!this.isActive())return this.options.modal&&n&&n.hide(!0),this.element.removeClass("uk-open").show(),this.resize(),this.options.modal&&(n=this),this.active=!0,o++,this.element.addClass("uk-open"),s.addClass("uk-modal-page").height(),this.element.attr("aria-hidden","false"),this.element.trigger("show.uk.modal"),t.Utils.checkDisplay(this.dialog,!0),this}},hide:function(i){if(!i&&t.support.transition){var e=this;this.one(t.support.transition.end,function(){e._hide()}).removeClass("uk-open")
	}else this._hide();return this},resize:function(){var t=e.width();if(this.scrollbarwidth=window.innerWidth-t,e.css(this.paddingdir,this.scrollbarwidth),this.element.css("overflow-y",this.scrollbarwidth?"scroll":"auto"),!this.updateScrollable()&&this.options.center){var i=this.dialog.outerHeight(),n=parseInt(this.dialog.css("margin-top"),10)+parseInt(this.dialog.css("margin-bottom"),10);i+n<window.innerHeight?this.dialog.css({top:window.innerHeight/2-i/2-n}):this.dialog.css({top:""})}},updateScrollable:function(){var t=this.dialog.find(".uk-overflow-container:visible:first");if(t.length){t.css("height",0);var i=Math.abs(parseInt(this.dialog.css("margin-top"),10)),e=this.dialog.outerHeight(),n=window.innerHeight,o=n-2*(20>i?20:i)-e;return t.css("height",o<this.options.minScrollHeight?"":o),!0}return!1},_hide:function(){this.active=!1,o--,this.element.hide().removeClass("uk-open"),this.element.attr("aria-hidden","true"),o||(s.removeClass("uk-modal-page"),e.css(this.paddingdir,"")),n===this&&(n=!1),this.trigger("hide.uk.modal")},isActive:function(){return this.active}}),t.component("modalTrigger",{boot:function(){t.$html.on("click.modal.uikit","[data-uk-modal]",function(i){var e=t.$(this);if(e.is("a")&&i.preventDefault(),!e.data("modalTrigger")){var n=t.modalTrigger(e,t.Utils.options(e.attr("data-uk-modal")));n.show()}}),t.$html.on("keydown.modal.uikit",function(t){n&&27===t.keyCode&&n.options.keyboard&&(t.preventDefault(),n.hide())}),t.$win.on("resize orientationchange",t.Utils.debounce(function(){n&&n.resize()},150))},init:function(){var i=this;this.options=t.$.extend({target:i.element.is("a")?i.element.attr("href"):!1},this.options),this.modal=t.modal(this.options.target,this.options),this.on("click",function(t){t.preventDefault(),i.show()}),this.proxy(this.modal,"show hide isActive")}}),t.modal.dialog=function(e,n){var o=t.modal(t.$(t.modal.dialog.template).appendTo("body"),n);return o.on("hide.uk.modal",function(){o.persist&&(o.persist.appendTo(o.persist.data("modalPersistParent")),o.persist=!1),o.element.remove()}),i(e,o),o},t.modal.dialog.template='<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>',t.modal.alert=function(i,e){e=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},e);var n=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i)+"</div>",'<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">'+e.labels.Ok+"</button></div>"].join(""),e);return n.on("show.uk.modal",function(){setTimeout(function(){n.element.find("button:first").focus()},50)}),n.show()},t.modal.confirm=function(i,e,n){e=t.$.isFunction(e)?e:function(){},n=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},n);var o=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i)+"</div>",'<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">'+n.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-confirm">'+n.labels.Ok+"</button></div>"].join(""),n);return o.element.find(".js-modal-confirm").on("click",function(){e(),o.hide()}),o.on("show.uk.modal",function(){setTimeout(function(){o.element.find(".js-modal-confirm").focus()},50)}),o.show()},t.modal.prompt=function(i,e,n,o){n=t.$.isFunction(n)?n:function(){},o=t.$.extend(!0,{bgclose:!1,keyboard:!1,modal:!1,labels:t.modal.labels},o);var s=t.modal.dialog([i?'<div class="uk-modal-content uk-form">'+String(i)+"</div>":"",'<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>','<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">'+o.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-ok">'+o.labels.Ok+"</button></div>"].join(""),o),a=s.element.find("input[type='text']").val(e||"").on("keyup",function(t){13==t.keyCode&&s.element.find(".js-modal-ok").trigger("click")});return s.element.find(".js-modal-ok").on("click",function(){n(a.val())!==!1&&s.hide()}),s.on("show.uk.modal",function(){setTimeout(function(){a.focus()},50)}),s.show()},t.modal.blockUI=function(i,e){var n=t.modal.dialog(['<div class="uk-margin uk-modal-content">'+String(i||'<div class="uk-text-center">...</div>')+"</div>"].join(""),t.$.extend({bgclose:!1,keyboard:!1,modal:!1},e));return n.content=n.element.find(".uk-modal-content:first"),n.show()},t.modal.labels={Ok:"Ok",Cancel:"Cancel"}}(UIkit),function(t){"use strict";function i(i){var e=t.$(i),n="auto";if(e.is(":visible"))n=e.outerHeight();else{var o={position:e.css("position"),visibility:e.css("visibility"),display:e.css("display")};n=e.css({position:"absolute",visibility:"hidden",display:"block"}).outerHeight(),e.css(o)}return n}t.component("nav",{defaults:{toggle:">li.uk-parent > a[href='#']",lists:">li.uk-parent > ul",multiple:!1},boot:function(){t.ready(function(i){t.$("[data-uk-nav]",i).each(function(){var i=t.$(this);if(!i.data("nav")){t.nav(i,t.Utils.options(i.attr("data-uk-nav")))}})})},init:function(){var i=this;this.on("click.uikit.nav",this.options.toggle,function(e){e.preventDefault();var n=t.$(this);i.open(n.parent()[0]==i.element[0]?n:n.parent("li"))}),this.find(this.options.lists).each(function(){var e=t.$(this),n=e.parent(),o=n.hasClass("uk-active");e.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'),n.data("list-container",e.parent()[o?"removeClass":"addClass"]("uk-hidden")),n.attr("aria-expanded",n.hasClass("uk-open")),o&&i.open(n,!0)})},open:function(e,n){var o=this,s=this.element,a=t.$(e),r=a.data("list-container");this.options.multiple||s.children(".uk-open").not(e).each(function(){var i=t.$(this);i.data("list-container")&&i.data("list-container").stop().animate({height:0},function(){t.$(this).parent().removeClass("uk-open").end().addClass("uk-hidden")})}),a.toggleClass("uk-open"),a.attr("aria-expanded",a.hasClass("uk-open")),r&&(a.hasClass("uk-open")&&r.removeClass("uk-hidden"),n?(r.stop().height(a.hasClass("uk-open")?"auto":0),a.hasClass("uk-open")||r.addClass("uk-hidden"),this.trigger("display.uk.check")):r.stop().animate({height:a.hasClass("uk-open")?i(r.find("ul:first")):0},function(){a.hasClass("uk-open")?r.css("height",""):r.addClass("uk-hidden"),o.trigger("display.uk.check")}))}})}(UIkit),function(t){"use strict";var i={x:window.scrollX,y:window.scrollY},e=(t.$win,t.$doc,t.$html),n={show:function(n){if(n=t.$(n),n.length){var o=t.$("body"),s=n.find(".uk-offcanvas-bar:first"),a="right"==t.langdirection,r=s.hasClass("uk-offcanvas-bar-flip")?-1:1,l=r*(a?-1:1),c=window.innerWidth-o.width();i={x:window.pageXOffset,y:window.pageYOffset},n.addClass("uk-active"),o.css({width:window.innerWidth-c,height:window.innerHeight}).addClass("uk-offcanvas-page"),o.css(a?"margin-right":"margin-left",(a?-1:1)*s.outerWidth()*l).width(),e.css("margin-top",-1*i.y),s.addClass("uk-offcanvas-bar-show"),this._initElement(n),s.trigger("show.uk.offcanvas",[n,s]),n.attr("aria-hidden","false")}},hide:function(n){var o=t.$("body"),s=t.$(".uk-offcanvas.uk-active"),a="right"==t.langdirection,r=s.find(".uk-offcanvas-bar:first"),l=function(){o.removeClass("uk-offcanvas-page").css({width:"",height:"","margin-left":"","margin-right":""}),s.removeClass("uk-active"),r.removeClass("uk-offcanvas-bar-show"),e.css("margin-top",""),window.scrollTo(i.x,i.y),r.trigger("hide.uk.offcanvas",[s,r]),s.attr("aria-hidden","true")};s.length&&(t.support.transition&&!n?(o.one(t.support.transition.end,function(){l()}).css(a?"margin-right":"margin-left",""),setTimeout(function(){r.removeClass("uk-offcanvas-bar-show")},0)):l())},_initElement:function(i){i.data("OffcanvasInit")||(i.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas",function(i){var e=t.$(i.target);if(!i.type.match(/swipe/)&&!e.hasClass("uk-offcanvas-close")){if(e.hasClass("uk-offcanvas-bar"))return;if(e.parents(".uk-offcanvas-bar:first").length)return}i.stopImmediatePropagation(),n.hide()}),i.on("click","a[href^='#']",function(){var i=t.$(this),e=i.attr("href");"#"!=e&&(t.$doc.one("hide.uk.offcanvas",function(){var n;try{n=t.$(e)}catch(o){n=""}n.length||(n=t.$('[name="'+e.replace("#","")+'"]')),n.length&&i.attr("data-uk-smooth-scroll")&&t.Utils.scrollToElement?t.Utils.scrollToElement(n,t.Utils.options(i.attr("data-uk-smooth-scroll")||"{}")):window.location.href=e}),n.hide())}),i.data("OffcanvasInit",!0))}};t.component("offcanvasTrigger",{boot:function(){e.on("click.offcanvas.uikit","[data-uk-offcanvas]",function(i){i.preventDefault();var e=t.$(this);if(!e.data("offcanvasTrigger")){{t.offcanvasTrigger(e,t.Utils.options(e.attr("data-uk-offcanvas")))}e.trigger("click")}}),e.on("keydown.uk.offcanvas",function(t){27===t.keyCode&&n.hide()})},init:function(){var i=this;this.options=t.$.extend({target:i.element.is("a")?i.element.attr("href"):!1},this.options),this.on("click",function(t){t.preventDefault(),n.show(i.options.target)})}}),t.offcanvas=n}(UIkit),function(t){"use strict";function i(i,e,n){var o,s=t.$.Deferred(),a=i,r=i;return n[0]===e[0]?(s.resolve(),s.promise()):("object"==typeof i&&(a=i[0],r=i[1]||i[0]),o=function(){e&&e.hide().removeClass("uk-active "+r+" uk-animation-reverse"),n.addClass(a).one(t.support.animation.end,function(){n.removeClass(""+a).css({opacity:"",display:""}),s.resolve(),e&&e.css({opacity:"",display:""})}.bind(this)).show()},n.css("animation-duration",this.options.duration+"ms"),e&&e.length?(e.css("animation-duration",this.options.duration+"ms"),e.css("display","none").addClass(r+" uk-animation-reverse").one(t.support.animation.end,function(){o()}.bind(this)).css("display","")):(n.addClass("uk-active"),o()),s.promise())}var e;t.component("switcher",{defaults:{connect:!1,toggle:">*",active:0,animation:!1,duration:200,swiping:!0},animating:!1,boot:function(){t.ready(function(i){t.$("[data-uk-switcher]",i).each(function(){var i=t.$(this);if(!i.data("switcher")){t.switcher(i,t.Utils.options(i.attr("data-uk-switcher")))}})})},init:function(){var i=this;if(this.on("click.uikit.switcher",this.options.toggle,function(t){t.preventDefault(),i.show(this)}),this.options.connect){this.connect=t.$(this.options.connect),this.connect.find(".uk-active").removeClass(".uk-active"),this.connect.length&&(this.connect.children().attr("aria-hidden","true"),this.connect.on("click","[data-uk-switcher-item]",function(e){e.preventDefault();var n=t.$(this).attr("data-uk-switcher-item");if(i.index!=n)switch(n){case"next":case"previous":i.show(i.index+("next"==n?1:-1));break;default:i.show(parseInt(n,10))}}),this.options.swiping&&this.connect.on("swipeRight swipeLeft",function(t){t.preventDefault(),window.getSelection().toString()||i.show(i.index+("swipeLeft"==t.type?1:-1))}));var e=this.find(this.options.toggle),n=e.filter(".uk-active");if(n.length)this.show(n,!1);else{if(this.options.active===!1)return;n=e.eq(this.options.active),this.show(n.length?n:e.eq(0),!1)}e.not(n).attr("aria-expanded","false"),n.attr("aria-expanded","true"),this.on("changed.uk.dom",function(){i.connect=t.$(i.options.connect)})}},show:function(n,o){if(!this.animating){if(isNaN(n))n=t.$(n);else{var s=this.find(this.options.toggle);n=0>n?s.length-1:n,n=s.eq(s[n]?n:0)}var a=this,s=this.find(this.options.toggle),r=t.$(n),l=e[this.options.animation]||function(t,n){if(!a.options.animation)return e.none.apply(a);var o=a.options.animation.split(",");return 1==o.length&&(o[1]=o[0]),o[0]=o[0].trim(),o[1]=o[1].trim(),i.apply(a,[o,t,n])};o!==!1&&t.support.animation||(l=e.none),r.hasClass("uk-disabled")||(s.attr("aria-expanded","false"),r.attr("aria-expanded","true"),s.filter(".uk-active").removeClass("uk-active"),r.addClass("uk-active"),this.options.connect&&this.connect.length&&(this.index=this.find(this.options.toggle).index(r),-1==this.index&&(this.index=0),this.connect.each(function(){var i=t.$(this),e=t.$(i.children()),n=t.$(e.filter(".uk-active")),o=t.$(e.eq(a.index));a.animating=!0,l.apply(a,[n,o]).then(function(){n.removeClass("uk-active"),o.addClass("uk-active"),n.attr("aria-hidden","true"),o.attr("aria-hidden","false"),t.Utils.checkDisplay(o,!0),a.animating=!1})})),this.trigger("show.uk.switcher",[r]))}}}),e={none:function(){var i=t.$.Deferred();return i.resolve(),i.promise()},fade:function(t,e){return i.apply(this,["uk-animation-fade",t,e])},"slide-bottom":function(t,e){return i.apply(this,["uk-animation-slide-bottom",t,e])},"slide-top":function(t,e){return i.apply(this,["uk-animation-slide-top",t,e])},"slide-vertical":function(t,e){var n=["uk-animation-slide-top","uk-animation-slide-bottom"];return t&&t.index()>e.index()&&n.reverse(),i.apply(this,[n,t,e])},"slide-left":function(t,e){return i.apply(this,["uk-animation-slide-left",t,e])},"slide-right":function(t,e){return i.apply(this,["uk-animation-slide-right",t,e])},"slide-horizontal":function(t,e){var n=["uk-animation-slide-right","uk-animation-slide-left"];return t&&t.index()>e.index()&&n.reverse(),i.apply(this,[n,t,e])},scale:function(t,e){return i.apply(this,["uk-animation-scale-up",t,e])}},t.switcher.animations=e}(UIkit),function(t){"use strict";t.component("tab",{defaults:{target:">li:not(.uk-tab-responsive, .uk-disabled)",connect:!1,active:0,animation:!1,duration:200},boot:function(){t.ready(function(i){t.$("[data-uk-tab]",i).each(function(){var i=t.$(this);if(!i.data("tab")){t.tab(i,t.Utils.options(i.attr("data-uk-tab")))}})})},init:function(){var i=this;this.current=!1,this.on("click.uikit.tab",this.options.target,function(e){if(e.preventDefault(),!i.switcher||!i.switcher.animating){var n=i.find(i.options.target).not(this);n.removeClass("uk-active").blur(),i.trigger("change.uk.tab",[t.$(this).addClass("uk-active"),i.current]),i.current=t.$(this),i.options.connect||(n.attr("aria-expanded","false"),t.$(this).attr("aria-expanded","true"))}}),this.options.connect&&(this.connect=t.$(this.options.connect)),this.responsivetab=t.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'),this.responsivetab.dropdown=this.responsivetab.find(".uk-dropdown"),this.responsivetab.lst=this.responsivetab.dropdown.find("ul"),this.responsivetab.caption=this.responsivetab.find("a:first"),this.element.hasClass("uk-tab-bottom")&&this.responsivetab.dropdown.addClass("uk-dropdown-up"),this.responsivetab.lst.on("click.uikit.tab","a",function(e){e.preventDefault(),e.stopPropagation();var n=t.$(this);i.element.children("li:not(.uk-tab-responsive)").eq(n.data("index")).trigger("click")}),this.on("show.uk.switcher change.uk.tab",function(t,e){i.responsivetab.caption.html(e.text())}),this.element.append(this.responsivetab),this.options.connect&&(this.switcher=t.switcher(this.element,{toggle:">li:not(.uk-tab-responsive)",connect:this.options.connect,active:this.options.active,animation:this.options.animation,duration:this.options.duration})),t.dropdown(this.responsivetab,{mode:"click"}),i.trigger("change.uk.tab",[this.element.find(this.options.target).not(".uk-tab-responsive").filter(".uk-active")]),this.check(),t.$win.on("resize orientationchange",t.Utils.debounce(function(){i.element.is(":visible")&&i.check()},100)),this.on("display.uk.check",function(){i.element.is(":visible")&&i.check()})},check:function(){var i=this.element.children("li:not(.uk-tab-responsive)").removeClass("uk-hidden");if(!i.length)return this.responsivetab.addClass("uk-hidden"),void 0;var e,n,o,s=i.eq(0).offset().top+Math.ceil(i.eq(0).height()/2),a=!1;if(this.responsivetab.lst.empty(),i.each(function(){t.$(this).offset().top>s&&(a=!0)}),a)for(var r=0;r<i.length;r++)e=t.$(i.eq(r)),n=e.find("a"),"none"==e.css("float")||e.attr("uk-dropdown")||(e.hasClass("uk-disabled")||(o=e[0].outerHTML.replace("<a ",'<a data-index="'+r+'" '),this.responsivetab.lst.append(o)),e.addClass("uk-hidden"));this.responsivetab[this.responsivetab.lst.children("li").length?"removeClass":"addClass"]("uk-hidden")}})}(UIkit),function(t){"use strict";t.component("cover",{defaults:{automute:!0},boot:function(){t.ready(function(i){t.$("[data-uk-cover]",i).each(function(){var i=t.$(this);if(!i.data("cover")){t.cover(i,t.Utils.options(i.attr("data-uk-cover")))}})})},init:function(){if(this.parent=this.element.parent(),t.$win.on("load resize orientationchange",t.Utils.debounce(function(){this.check()}.bind(this),100)),this.on("display.uk.check",function(){this.element.is(":visible")&&this.check()}.bind(this)),this.check(),this.element.is("iframe")&&this.options.automute){var i=this.element.attr("src");this.element.attr("src","").on("load",function(){this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}',"*")}).attr("src",[i,i.indexOf("?")>-1?"&":"?","enablejsapi=1&api=1"].join(""))}},check:function(){this.element.css({width:"",height:""}),this.dimension={w:this.element.width(),h:this.element.height()},this.element.attr("width")&&!isNaN(this.element.attr("width"))&&(this.dimension.w=this.element.attr("width")),this.element.attr("height")&&!isNaN(this.element.attr("height"))&&(this.dimension.h=this.element.attr("height")),this.ratio=this.dimension.w/this.dimension.h;var t,i,e=this.parent.width(),n=this.parent.height();e/this.ratio<n?(t=Math.ceil(n*this.ratio),i=n):(t=e,i=Math.ceil(e/this.ratio)),this.element.css({width:t,height:i})}})}(UIkit);


/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! UIkit 2.22.0 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
	!function(t){var i;window.UIkit&&(i=t(UIkit)),"function"=="function"&&__webpack_require__(3)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return i||t(UIkit)}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}(function(t){"use strict";function i(){var i=arguments.length?arguments:o;if(i.length&&!(e.scrollTop()<0))for(var s,a,r,p,h=e.scrollTop(),c=n.height(),l=e.height(),u=c-l,d=h>u?u-h:0,m=0;m<i.length;m++)if(p=i[m],p.element.is(":visible")&&!p.animate){if(p.check()){if(p.top<0?s=0:(r=p.element.outerHeight(),s=c-r-p.top-p.options.bottom-h-d,s=0>s?s+p.top:p.top),p.boundary&&p.boundary.length){var f=p.boundary.offset().top;a=p.boundtoparent?c-(f+p.boundary.outerHeight())+parseInt(p.boundary.css("padding-bottom")):c-f-parseInt(p.boundary.css("margin-top")),s=h+r>c-a-(p.top<0?0:p.top)?c-a-(h+r):s}if(p.currentTop!=s){if(p.element.css({position:"fixed",top:s,width:"undefined"!=typeof p.getWidthFrom?t.$(p.getWidthFrom).width():p.element.width(),left:p.wrapper.offset().left}),!p.init&&(p.element.addClass(p.options.clsinit),location.hash&&h>0&&p.options.target)){var g=t.$(location.hash);g.length&&setTimeout(function(t,i){return function(){i.element.width();var e=t.offset(),n=e.top+t.outerHeight(),o=i.element.offset(),s=i.element.outerHeight(),a=o.top+s;o.top<n&&e.top<a&&(h=e.top-s-i.options.target,window.scrollTo(0,h))}}(g,p),0)}p.element.addClass(p.options.clsactive).removeClass(p.options.clsinactive),p.element.css("margin",""),p.options.animation&&p.init&&!t.Utils.isInView(p.wrapper)&&p.element.addClass(p.options.animation),p.currentTop=s}}else null!==p.currentTop&&p.reset();p.init=!0}}var e=t.$win,n=t.$doc,o=[],s=1;return t.component("sticky",{defaults:{top:0,bottom:0,animation:"",clsinit:"uk-sticky-init",clsactive:"uk-active",clsinactive:"",getWidthFrom:"",showup:!1,boundary:!1,media:!1,target:!1,disabled:!1},boot:function(){t.$doc.on("scrolling.uk.document",function(t,e){s=e.dir.y,i()}),t.$win.on("resize orientationchange",t.Utils.debounce(function(){if(o.length){for(var t=0;t<o.length;t++)o[t].reset(!0),o[t].self.computeWrapper();i()}},100)),t.ready(function(e){setTimeout(function(){t.$("[data-uk-sticky]",e).each(function(){var i=t.$(this);i.data("sticky")||t.sticky(i,t.Utils.options(i.attr("data-uk-sticky")))}),i()},0)})},init:function(){var i,a=t.$('<div class="uk-sticky-placeholder"></div>'),r=this.options.boundary;this.wrapper=this.element.css("margin",0).wrap(a).parent(),this.computeWrapper(),r&&(r===!0?(r=this.wrapper.parent(),i=!0):"string"==typeof r&&(r=t.$(r))),this.sticky={self:this,options:this.options,element:this.element,currentTop:null,wrapper:this.wrapper,init:!1,getWidthFrom:this.options.getWidthFrom||this.wrapper,boundary:r,boundtoparent:i,top:0,calcTop:function(){var i=this.options.top;if(this.options.top&&"string"==typeof this.options.top)if(this.options.top.match(/^(-|)(\d+)vh$/))i=window.innerHeight*parseInt(this.options.top,10)/100;else{var e=t.$(this.options.top).first();e.length&&e.is(":visible")&&(i=-1*(e.offset().top+e.outerHeight()-this.wrapper.offset().top))}this.top=i},reset:function(i){this.calcTop();var e=function(){this.element.css({position:"",top:"",width:"",left:"",margin:"0"}),this.element.removeClass([this.options.animation,"uk-animation-reverse",this.options.clsactive].join(" ")),this.element.addClass(this.options.clsinactive),this.currentTop=null,this.animate=!1}.bind(this);!i&&this.options.animation&&t.support.animation&&!t.Utils.isInView(this.wrapper)?(this.animate=!0,this.element.removeClass(this.options.animation).one(t.support.animation.end,function(){e()}).width(),this.element.addClass(this.options.animation+" uk-animation-reverse")):e()},check:function(){if(this.options.disabled)return!1;if(this.options.media)switch(typeof this.options.media){case"number":if(window.innerWidth<this.options.media)return!1;break;case"string":if(window.matchMedia&&!window.matchMedia(this.options.media).matches)return!1}var i=e.scrollTop(),o=n.height(),a=o-window.innerHeight,r=i>a?a-i:0,p=this.wrapper.offset().top,h=p-this.top-r,c=i>=h;return c&&this.options.showup&&(1==s&&(c=!1),-1==s&&!this.element.hasClass(this.options.clsactive)&&t.Utils.isInView(this.wrapper)&&(c=!1)),c}},this.sticky.calcTop(),o.push(this.sticky)},update:function(){i(this.sticky)},enable:function(){this.options.disabled=!1,this.update()},disable:function(t){this.options.disabled=!0,this.sticky.reset(t)},computeWrapper:function(){this.wrapper.css({height:-1==["absolute","fixed"].indexOf(this.element.css("position"))?this.element.outerHeight():"","float":"none"!=this.element.css("float")?this.element.css("float"):"",margin:this.element.css("margin")})}}),t.sticky});


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! UIkit 2.24.3 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
	(function(core) {

	    if (true) { // AMD

	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function(){

	            var uikit = window.UIkit || core(window, window.jQuery, window.document);

	            uikit.load = function(res, req, onload, config) {

	                var resources = res.split(','), load = [], i, base = (config.config && config.config.uikit && config.config.uikit.base ? config.config.uikit.base : "").replace(/\/+$/g, "");

	                if (!base) {
	                    throw new Error( "Please define base path to UIkit in the requirejs config." );
	                }

	                for (i = 0; i < resources.length; i += 1) {
	                    var resource = resources[i].replace(/\./g, '/');
	                    load.push(base+'/components/'+resource);
	                }

	                req(load, function() {
	                    onload(uikit);
	                });
	            };

	            return uikit;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }

	    if (!window.jQuery) {
	        throw new Error( "UIkit requires jQuery" );
	    }

	    if (window && window.jQuery) {
	        core(window, window.jQuery, window.document);
	    }


	})(function(global, $, doc) {

	    "use strict";

	    var UI = {}, _UI = global.UIkit ? Object.create(global.UIkit) : undefined;

	    UI.version = '2.24.3';

	    UI.noConflict = function() {
	        // restore UIkit version
	        if (_UI) {
	            global.UIkit = _UI;
	            $.UIkit      = _UI;
	            $.fn.uk      = _UI.fn;
	        }

	        return UI;
	    };

	    UI.prefix = function(str) {
	        return str;
	    };

	    // cache jQuery
	    UI.$ = $;

	    UI.$doc  = UI.$(document);
	    UI.$win  = UI.$(window);
	    UI.$html = UI.$('html');

	    UI.support = {};
	    UI.support.transition = (function() {

	        var transitionEnd = (function() {

	            var element = doc.body || doc.documentElement,
	                transEndEventNames = {
	                    WebkitTransition : 'webkitTransitionEnd',
	                    MozTransition    : 'transitionend',
	                    OTransition      : 'oTransitionEnd otransitionend',
	                    transition       : 'transitionend'
	                }, name;

	            for (name in transEndEventNames) {
	                if (element.style[name] !== undefined) return transEndEventNames[name];
	            }
	        }());

	        return transitionEnd && { end: transitionEnd };
	    })();

	    UI.support.animation = (function() {

	        var animationEnd = (function() {

	            var element = doc.body || doc.documentElement,
	                animEndEventNames = {
	                    WebkitAnimation : 'webkitAnimationEnd',
	                    MozAnimation    : 'animationend',
	                    OAnimation      : 'oAnimationEnd oanimationend',
	                    animation       : 'animationend'
	                }, name;

	            for (name in animEndEventNames) {
	                if (element.style[name] !== undefined) return animEndEventNames[name];
	            }
	        }());

	        return animationEnd && { end: animationEnd };
	    })();

	    // requestAnimationFrame polyfill
	    //https://github.com/darius/requestAnimationFrame
	    (function() {

	        Date.now = Date.now || function() { return new Date().getTime(); };

	        var vendors = ['webkit', 'moz'];
	        for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
	            var vp = vendors[i];
	            window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
	            window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']
	                                       || window[vp+'CancelRequestAnimationFrame']);
	        }
	        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
	            || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
	            var lastTime = 0;
	            window.requestAnimationFrame = function(callback) {
	                var now = Date.now();
	                var nextTime = Math.max(lastTime + 16, now);
	                return setTimeout(function() { callback(lastTime = nextTime); },
	                                  nextTime - now);
	            };
	            window.cancelAnimationFrame = clearTimeout;
	        }
	    }());

	    UI.support.touch = (
	        ('ontouchstart' in document) ||
	        (global.DocumentTouch && document instanceof global.DocumentTouch)  ||
	        (global.navigator.msPointerEnabled && global.navigator.msMaxTouchPoints > 0) || //IE 10
	        (global.navigator.pointerEnabled && global.navigator.maxTouchPoints > 0) || //IE >=11
	        false
	    );

	    UI.support.mutationobserver = (global.MutationObserver || global.WebKitMutationObserver || null);

	    UI.Utils = {};

	    UI.Utils.isFullscreen = function() {
	        return document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement || false;
	    };

	    UI.Utils.str2json = function(str, notevil) {
	        try {
	            if (notevil) {
	                return JSON.parse(str
	                    // wrap keys without quote with valid double quote
	                    .replace(/([\$\w]+)\s*:/g, function(_, $1){return '"'+$1+'":';})
	                    // replacing single quote wrapped ones to double quote
	                    .replace(/'([^']+)'/g, function(_, $1){return '"'+$1+'"';})
	                );
	            } else {
	                return (new Function("", "var json = " + str + "; return JSON.parse(JSON.stringify(json));"))();
	            }
	        } catch(e) { return false; }
	    };

	    UI.Utils.debounce = function(func, wait, immediate) {
	        var timeout;
	        return function() {
	            var context = this, args = arguments;
	            var later = function() {
	                timeout = null;
	                if (!immediate) func.apply(context, args);
	            };
	            var callNow = immediate && !timeout;
	            clearTimeout(timeout);
	            timeout = setTimeout(later, wait);
	            if (callNow) func.apply(context, args);
	        };
	    };

	    UI.Utils.removeCssRules = function(selectorRegEx) {
	        var idx, idxs, stylesheet, _i, _j, _k, _len, _len1, _len2, _ref;

	        if(!selectorRegEx) return;

	        setTimeout(function(){
	            try {
	              _ref = document.styleSheets;
	              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	                stylesheet = _ref[_i];
	                idxs = [];
	                stylesheet.cssRules = stylesheet.cssRules;
	                for (idx = _j = 0, _len1 = stylesheet.cssRules.length; _j < _len1; idx = ++_j) {
	                  if (stylesheet.cssRules[idx].type === CSSRule.STYLE_RULE && selectorRegEx.test(stylesheet.cssRules[idx].selectorText)) {
	                    idxs.unshift(idx);
	                  }
	                }
	                for (_k = 0, _len2 = idxs.length; _k < _len2; _k++) {
	                  stylesheet.deleteRule(idxs[_k]);
	                }
	              }
	            } catch (_error) {}
	        }, 0);
	    };

	    UI.Utils.isInView = function(element, options) {

	        var $element = $(element);

	        if (!$element.is(':visible')) {
	            return false;
	        }

	        var window_left = UI.$win.scrollLeft(), window_top = UI.$win.scrollTop(), offset = $element.offset(), left = offset.left, top = offset.top;

	        options = $.extend({topoffset:0, leftoffset:0}, options);

	        if (top + $element.height() >= window_top && top - options.topoffset <= window_top + UI.$win.height() &&
	            left + $element.width() >= window_left && left - options.leftoffset <= window_left + UI.$win.width()) {
	          return true;
	        } else {
	          return false;
	        }
	    };

	    UI.Utils.checkDisplay = function(context, initanimation) {

	        var elements = UI.$('[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]', context || document), animated;

	        if (context && !elements.length) {
	            elements = $(context);
	        }

	        elements.trigger('display.uk.check');

	        // fix firefox / IE animations
	        if (initanimation) {

	            if (typeof(initanimation)!='string') {
	                initanimation = '[class*="uk-animation-"]';
	            }

	            elements.find(initanimation).each(function(){

	                var ele  = UI.$(this),
	                    cls  = ele.attr('class'),
	                    anim = cls.match(/uk\-animation\-(.+)/);

	                ele.removeClass(anim[0]).width();

	                ele.addClass(anim[0]);
	            });
	        }

	        return elements;
	    };

	    UI.Utils.options = function(string) {

	        if ($.type(string)!='string') return string;

	        if (string.indexOf(':') != -1 && string.trim().substr(-1) != '}') {
	            string = '{'+string+'}';
	        }

	        var start = (string ? string.indexOf("{") : -1), options = {};

	        if (start != -1) {
	            try {
	                options = UI.Utils.str2json(string.substr(start));
	            } catch (e) {}
	        }

	        return options;
	    };

	    UI.Utils.animate = function(element, cls) {

	        var d = $.Deferred();

	        element = UI.$(element);
	        cls     = cls;

	        element.css('display', 'none').addClass(cls).one(UI.support.animation.end, function() {
	            element.removeClass(cls);
	            d.resolve();
	        }).width();

	        element.css('display', '');

	        return d.promise();
	    };

	    UI.Utils.uid = function(prefix) {
	        return (prefix || 'id') + (new Date().getTime())+"RAND"+(Math.ceil(Math.random() * 100000));
	    };

	    UI.Utils.template = function(str, data) {

	        var tokens = str.replace(/\n/g, '\\n').replace(/\{\{\{\s*(.+?)\s*\}\}\}/g, "{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g),
	            i=0, toc, cmd, prop, val, fn, output = [], openblocks = 0;

	        while(i < tokens.length) {

	            toc = tokens[i];

	            if(toc.match(/\{\{\s*(.+?)\s*\}\}/)) {
	                i = i + 1;
	                toc  = tokens[i];
	                cmd  = toc[0];
	                prop = toc.substring(toc.match(/^(\^|\#|\!|\~|\:)/) ? 1:0);

	                switch(cmd) {
	                    case '~':
	                        output.push("for(var $i=0;$i<"+prop+".length;$i++) { var $item = "+prop+"[$i];");
	                        openblocks++;
	                        break;
	                    case ':':
	                        output.push("for(var $key in "+prop+") { var $val = "+prop+"[$key];");
	                        openblocks++;
	                        break;
	                    case '#':
	                        output.push("if("+prop+") {");
	                        openblocks++;
	                        break;
	                    case '^':
	                        output.push("if(!"+prop+") {");
	                        openblocks++;
	                        break;
	                    case '/':
	                        output.push("}");
	                        openblocks--;
	                        break;
	                    case '!':
	                        output.push("__ret.push("+prop+");");
	                        break;
	                    default:
	                        output.push("__ret.push(escape("+prop+"));");
	                        break;
	                }
	            } else {
	                output.push("__ret.push('"+toc.replace(/\'/g, "\\'")+"');");
	            }
	            i = i + 1;
	        }

	        fn  = new Function('$data', [
	            'var __ret = [];',
	            'try {',
	            'with($data){', (!openblocks ? output.join('') : '__ret = ["Not all blocks are closed correctly."]'), '};',
	            '}catch(e){__ret = [e.message];}',
	            'return __ret.join("").replace(/\\n\\n/g, "\\n");',
	            "function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"
	        ].join("\n"));

	        return data ? fn(data) : fn;
	    };

	    UI.Utils.events       = {};
	    UI.Utils.events.click = UI.support.touch ? 'tap' : 'click';

	    global.UIkit = UI;

	    // deprecated

	    UI.fn = function(command, options) {

	        var args = arguments, cmd = command.match(/^([a-z\-]+)(?:\.([a-z]+))?/i), component = cmd[1], method = cmd[2];

	        if (!UI[component]) {
	            $.error("UIkit component [" + component + "] does not exist.");
	            return this;
	        }

	        return this.each(function() {
	            var $this = $(this), data = $this.data(component);
	            if (!data) $this.data(component, (data = UI[component](this, method ? undefined : options)));
	            if (method) data[method].apply(data, Array.prototype.slice.call(args, 1));
	        });
	    };

	    $.UIkit          = UI;
	    $.fn.uk          = UI.fn;

	    UI.langdirection = UI.$html.attr("dir") == "rtl" ? "right" : "left";

	    UI.components    = {};

	    UI.component = function(name, def) {

	        var fn = function(element, options) {

	            var $this = this;

	            this.UIkit   = UI;
	            this.element = element ? UI.$(element) : null;
	            this.options = $.extend(true, {}, this.defaults, options);
	            this.plugins = {};

	            if (this.element) {
	                this.element.data(name, this);
	            }

	            this.init();

	            (this.options.plugins.length ? this.options.plugins : Object.keys(fn.plugins)).forEach(function(plugin) {

	                if (fn.plugins[plugin].init) {
	                    fn.plugins[plugin].init($this);
	                    $this.plugins[plugin] = true;
	                }

	            });

	            this.trigger('init.uk.component', [name, this]);

	            return this;
	        };

	        fn.plugins = {};

	        $.extend(true, fn.prototype, {

	            defaults : {plugins: []},

	            boot: function(){},
	            init: function(){},

	            on: function(a1,a2,a3){
	                return UI.$(this.element || this).on(a1,a2,a3);
	            },

	            one: function(a1,a2,a3){
	                return UI.$(this.element || this).one(a1,a2,a3);
	            },

	            off: function(evt){
	                return UI.$(this.element || this).off(evt);
	            },

	            trigger: function(evt, params) {
	                return UI.$(this.element || this).trigger(evt, params);
	            },

	            find: function(selector) {
	                return UI.$(this.element ? this.element: []).find(selector);
	            },

	            proxy: function(obj, methods) {

	                var $this = this;

	                methods.split(' ').forEach(function(method) {
	                    if (!$this[method]) $this[method] = function() { return obj[method].apply(obj, arguments); };
	                });
	            },

	            mixin: function(obj, methods) {

	                var $this = this;

	                methods.split(' ').forEach(function(method) {
	                    if (!$this[method]) $this[method] = obj[method].bind($this);
	                });
	            },

	            option: function() {

	                if (arguments.length == 1) {
	                    return this.options[arguments[0]] || undefined;
	                } else if (arguments.length == 2) {
	                    this.options[arguments[0]] = arguments[1];
	                }
	            }

	        }, def);

	        this.components[name] = fn;

	        this[name] = function() {

	            var element, options;

	            if (arguments.length) {

	                switch(arguments.length) {
	                    case 1:

	                        if (typeof arguments[0] === "string" || arguments[0].nodeType || arguments[0] instanceof jQuery) {
	                            element = $(arguments[0]);
	                        } else {
	                            options = arguments[0];
	                        }

	                        break;
	                    case 2:

	                        element = $(arguments[0]);
	                        options = arguments[1];
	                        break;
	                }
	            }

	            if (element && element.data(name)) {
	                return element.data(name);
	            }

	            return (new UI.components[name](element, options));
	        };

	        if (UI.domready) {
	            UI.component.boot(name);
	        }

	        return fn;
	    };

	    UI.plugin = function(component, name, def) {
	        this.components[component].plugins[name] = def;
	    };

	    UI.component.boot = function(name) {

	        if (UI.components[name].prototype && UI.components[name].prototype.boot && !UI.components[name].booted) {
	            UI.components[name].prototype.boot.apply(UI, []);
	            UI.components[name].booted = true;
	        }
	    };

	    UI.component.bootComponents = function() {

	        for (var component in UI.components) {
	            UI.component.boot(component);
	        }
	    };


	    // DOM mutation save ready helper function

	    UI.domObservers = [];
	    UI.domready     = false;

	    UI.ready = function(fn) {

	        UI.domObservers.push(fn);

	        if (UI.domready) {
	            fn(document);
	        }
	    };

	    UI.on = function(a1,a2,a3){

	        if (a1 && a1.indexOf('ready.uk.dom') > -1 && UI.domready) {
	            a2.apply(UI.$doc);
	        }

	        return UI.$doc.on(a1,a2,a3);
	    };

	    UI.one = function(a1,a2,a3){

	        if (a1 && a1.indexOf('ready.uk.dom') > -1 && UI.domready) {
	            a2.apply(UI.$doc);
	            return UI.$doc;
	        }

	        return UI.$doc.one(a1,a2,a3);
	    };

	    UI.trigger = function(evt, params) {
	        return UI.$doc.trigger(evt, params);
	    };

	    UI.domObserve = function(selector, fn) {

	        if(!UI.support.mutationobserver) return;

	        fn = fn || function() {};

	        UI.$(selector).each(function() {

	            var element  = this,
	                $element = UI.$(element);

	            if ($element.data('observer')) {
	                return;
	            }

	            try {

	                var observer = new UI.support.mutationobserver(UI.Utils.debounce(function(mutations) {
	                    fn.apply(element, []);
	                    $element.trigger('changed.uk.dom');
	                }, 50));

	                // pass in the target node, as well as the observer options
	                observer.observe(element, { childList: true, subtree: true });

	                $element.data('observer', observer);

	            } catch(e) {}
	        });
	    };

	    UI.init = function(root) {

	        root = root || document;

	        UI.domObservers.forEach(function(fn){
	            fn(root);
	        });
	    };

	    UI.on('domready.uk.dom', function(){

	        UI.init();

	        if (UI.domready) UI.Utils.checkDisplay();
	    });

	    document.addEventListener('DOMContentLoaded', function(){

	        var domReady = function() {

	            UI.$body = UI.$('body');

	            UI.ready(function(context){
	                UI.domObserve('[data-uk-observe]');
	            });

	            UI.on('changed.uk.dom', function(e) {
	                UI.init(e.target);
	                UI.Utils.checkDisplay(e.target);
	            });

	            UI.trigger('beforeready.uk.dom');

	            UI.component.bootComponents();

	            // custom scroll observer
	            requestAnimationFrame((function(){

	                var memory = {x: window.pageXOffset, y:window.pageYOffset}, dir;

	                var fn = function(){

	                    if (memory.x != window.pageXOffset || memory.y != window.pageYOffset) {

	                        dir = {x: 0 , y: 0};

	                        if (window.pageXOffset != memory.x) dir.x = window.pageXOffset > memory.x ? 1:-1;
	                        if (window.pageYOffset != memory.y) dir.y = window.pageYOffset > memory.y ? 1:-1;

	                        memory = {
	                            "dir": dir, "x": window.pageXOffset, "y": window.pageYOffset
	                        };

	                        UI.$doc.trigger('scrolling.uk.document', [memory]);
	                    }

	                    requestAnimationFrame(fn);
	                };

	                if (UI.support.touch) {
	                    UI.$html.on('touchmove touchend MSPointerMove MSPointerUp pointermove pointerup', fn);
	                }

	                if (memory.x || memory.y) fn();

	                return fn;

	            })());

	            // run component init functions on dom
	            UI.trigger('domready.uk.dom');

	            if (UI.support.touch) {

	                // remove css hover rules for touch devices
	                // UI.Utils.removeCssRules(/\.uk-(?!navbar).*:hover/);

	                // viewport unit fix for uk-height-viewport - should be fixed in iOS 8
	                if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {

	                    UI.$win.on('load orientationchange resize', UI.Utils.debounce((function(){

	                        var fn = function() {
	                            $('.uk-height-viewport').css('height', window.innerHeight);
	                            return fn;
	                        };

	                        return fn();

	                    })(), 100));
	                }
	            }

	            UI.trigger('afterready.uk.dom');

	            // mark that domready is left behind
	            UI.domready = true;
	        };

	        if (document.readyState == 'complete' || document.readyState == 'interactive') {
	            setTimeout(domReady);
	        }

	        return domReady;

	    }());

	    // add touch identifier class
	    UI.$html.addClass(UI.support.touch ? "uk-touch" : "uk-notouch");

	    // add uk-hover class on tap to support overlays on touch devices
	    if (UI.support.touch) {

	        var hoverset = false,
	            exclude,
	            hovercls = 'uk-hover',
	            selector = '.uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover';

	        UI.$html.on('mouseenter touchstart MSPointerDown pointerdown', selector, function() {

	            if (hoverset) $('.'+hovercls).removeClass(hovercls);

	            hoverset = $(this).addClass(hovercls);

	        }).on('mouseleave touchend MSPointerUp pointerup', function(e) {

	            exclude = $(e.target).parents(selector);

	            if (hoverset) {
	                hoverset.not(exclude).removeClass(hovercls);
	            }
	        });
	    }

	    return UI;
	});

	//  Based on Zeptos touch.js
	//  https://raw.github.com/madrobby/zepto/master/src/touch.js
	//  Zepto.js may be freely distributed under the MIT license.

	;(function($){

	  if ($.fn.swipeLeft) {
	    return;
	  }


	  var touch = {}, touchTimeout, tapTimeout, swipeTimeout, longTapTimeout, longTapDelay = 750, gesture;

	  function swipeDirection(x1, x2, y1, y2) {
	    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down');
	  }

	  function longTap() {
	    longTapTimeout = null;
	    if (touch.last) {
	      if ( touch.el !== undefined ) touch.el.trigger('longTap');
	      touch = {};
	    }
	  }

	  function cancelLongTap() {
	    if (longTapTimeout) clearTimeout(longTapTimeout);
	    longTapTimeout = null;
	  }

	  function cancelAll() {
	    if (touchTimeout)   clearTimeout(touchTimeout);
	    if (tapTimeout)     clearTimeout(tapTimeout);
	    if (swipeTimeout)   clearTimeout(swipeTimeout);
	    if (longTapTimeout) clearTimeout(longTapTimeout);
	    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null;
	    touch = {};
	  }

	  function isPrimaryTouch(event){
	    return event.pointerType == event.MSPOINTER_TYPE_TOUCH && event.isPrimary;
	  }

	  $(function(){
	    var now, delta, deltaX = 0, deltaY = 0, firstTouch;

	    if ('MSGesture' in window) {
	      gesture = new MSGesture();
	      gesture.target = document.body;
	    }

	    $(document)
	      .on('MSGestureEnd gestureend', function(e){

	        var swipeDirectionFromVelocity = e.originalEvent.velocityX > 1 ? 'Right' : e.originalEvent.velocityX < -1 ? 'Left' : e.originalEvent.velocityY > 1 ? 'Down' : e.originalEvent.velocityY < -1 ? 'Up' : null;

	        if (swipeDirectionFromVelocity && touch.el !== undefined) {
	          touch.el.trigger('swipe');
	          touch.el.trigger('swipe'+ swipeDirectionFromVelocity);
	        }
	      })
	      // MSPointerDown: for IE10
	      // pointerdown: for IE11
	      .on('touchstart MSPointerDown pointerdown', function(e){

	        if(e.type == 'MSPointerDown' && !isPrimaryTouch(e.originalEvent)) return;

	        firstTouch = (e.type == 'MSPointerDown' || e.type == 'pointerdown') ? e : e.originalEvent.touches[0];

	        now      = Date.now();
	        delta    = now - (touch.last || now);
	        touch.el = $('tagName' in firstTouch.target ? firstTouch.target : firstTouch.target.parentNode);

	        if(touchTimeout) clearTimeout(touchTimeout);

	        touch.x1 = firstTouch.pageX;
	        touch.y1 = firstTouch.pageY;

	        if (delta > 0 && delta <= 250) touch.isDoubleTap = true;

	        touch.last = now;
	        longTapTimeout = setTimeout(longTap, longTapDelay);

	        // adds the current touch contact for IE gesture recognition
	        if (gesture && ( e.type == 'MSPointerDown' || e.type == 'pointerdown' || e.type == 'touchstart' ) ) {
	          gesture.addPointer(e.originalEvent.pointerId);
	        }

	      })
	      // MSPointerMove: for IE10
	      // pointermove: for IE11
	      .on('touchmove MSPointerMove pointermove', function(e){

	        if (e.type == 'MSPointerMove' && !isPrimaryTouch(e.originalEvent)) return;

	        firstTouch = (e.type == 'MSPointerMove' || e.type == 'pointermove') ? e : e.originalEvent.touches[0];

	        cancelLongTap();
	        touch.x2 = firstTouch.pageX;
	        touch.y2 = firstTouch.pageY;

	        deltaX += Math.abs(touch.x1 - touch.x2);
	        deltaY += Math.abs(touch.y1 - touch.y2);
	      })
	      // MSPointerUp: for IE10
	      // pointerup: for IE11
	      .on('touchend MSPointerUp pointerup', function(e){

	        if (e.type == 'MSPointerUp' && !isPrimaryTouch(e.originalEvent)) return;

	        cancelLongTap();

	        // swipe
	        if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) || (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30)){

	          swipeTimeout = setTimeout(function() {
	            if ( touch.el !== undefined ) {
	              touch.el.trigger('swipe');
	              touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)));
	            }
	            touch = {};
	          }, 0);

	        // normal tap
	        } else if ('last' in touch) {

	          // don't fire tap when delta position changed by more than 30 pixels,
	          // for instance when moving to a point and back to origin
	          if (isNaN(deltaX) || (deltaX < 30 && deltaY < 30)) {
	            // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
	            // ('tap' fires before 'scroll')
	            tapTimeout = setTimeout(function() {

	              // trigger universal 'tap' with the option to cancelTouch()
	              // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
	              var event = $.Event('tap');
	              event.cancelTouch = cancelAll;
	              if ( touch.el !== undefined ) touch.el.trigger(event);

	              // trigger double tap immediately
	              if (touch.isDoubleTap) {
	                if ( touch.el !== undefined ) touch.el.trigger('doubleTap');
	                touch = {};
	              }

	              // trigger single tap after 250ms of inactivity
	              else {
	                touchTimeout = setTimeout(function(){
	                  touchTimeout = null;
	                  if ( touch.el !== undefined ) touch.el.trigger('singleTap');
	                  touch = {};
	                }, 250);
	              }
	            }, 0);
	          } else {
	            touch = {};
	          }
	          deltaX = deltaY = 0;
	        }
	      })
	      // when the browser window loses focus,
	      // for example when a modal dialog is shown,
	      // cancel all ongoing events
	      .on('touchcancel MSPointerCancel', cancelAll);

	    // scrolling the window indicates intention of the user
	    // to scroll, not tap or swipe, so cancel all ongoing events
	    $(window).on('scroll', cancelAll);
	  });

	  ['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(eventName){
	    $.fn[eventName] = function(callback){ return $(this).on(eventName, callback); };
	  });
	})(jQuery);

	(function(UI) {

	    "use strict";

	    var stacks = [];

	    UI.component('stackMargin', {

	        defaults: {
	            cls: 'uk-margin-small-top',
	            rowfirst: false
	        },

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$("[data-uk-margin]", context).each(function() {

	                    var ele = UI.$(this), obj;

	                    if (!ele.data("stackMargin")) {
	                        obj = UI.stackMargin(ele, UI.Utils.options(ele.attr("data-uk-margin")));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.columns = [];

	            UI.$win.on('resize orientationchange', (function() {

	                var fn = function() {
	                    $this.process();
	                };

	                UI.$(function() {
	                    fn();
	                    UI.$win.on("load", fn);
	                });

	                return UI.Utils.debounce(fn, 20);
	            })());

	            UI.$html.on("changed.uk.dom", function(e) {
	                $this.process();
	            });

	            this.on("display.uk.check", function(e) {
	                if (this.element.is(":visible")) this.process();
	            }.bind(this));

	            stacks.push(this);
	        },

	        process: function() {

	            var $this = this;

	            this.columns = this.element.children();

	            UI.Utils.stackMargin(this.columns, this.options);

	            if (!this.options.rowfirst) {
	                return this;
	            }

	            // Mark first column elements
	            var pos_cache = this.columns.removeClass(this.options.rowfirst).filter(':visible').first().position();

	            if (pos_cache) {
	                this.columns.each(function() {
	                    UI.$(this)[UI.$(this).position().left == pos_cache.left ? 'addClass':'removeClass']($this.options.rowfirst);
	                });
	            }

	            return this;
	        },

	        revert: function() {
	            this.columns.removeClass(this.options.cls);
	            return this;
	        }
	    });


	    // responsive element e.g. iframes

	    (function(){

	        var elements = [], check = function(ele) {

	            if (!ele.is(':visible')) return;

	            var width  = ele.parent().width(),
	                iwidth = ele.data('width'),
	                ratio  = (width / iwidth),
	                height = Math.floor(ratio * ele.data('height'));

	            ele.css({'height': (width < iwidth) ? height : ele.data('height')});
	        };

	        UI.component('responsiveElement', {

	            defaults: {},

	            boot: function() {

	                // init code
	                UI.ready(function(context) {

	                    UI.$("iframe.uk-responsive-width, [data-uk-responsive]", context).each(function() {

	                        var ele = UI.$(this), obj;

	                        if (!ele.data("responsiveIframe")) {
	                            obj = UI.responsiveElement(ele, {});
	                        }
	                    });
	                });
	            },

	            init: function() {

	                var ele = this.element;

	                if (ele.attr('width') && ele.attr('height')) {

	                    ele.data({

	                        'width' : ele.attr('width'),
	                        'height': ele.attr('height')

	                    }).on('display.uk.check', function(){
	                        check(ele);
	                    });

	                    check(ele);

	                    elements.push(ele);
	                }
	            }
	        });

	        UI.$win.on('resize load', UI.Utils.debounce(function(){

	            elements.forEach(function(ele){
	                check(ele);
	            });

	        }, 15));

	    })();



	    // helper

	    UI.Utils.stackMargin = function(elements, options) {

	        options = UI.$.extend({
	            'cls': 'uk-margin-small-top'
	        }, options);

	        options.cls = options.cls;

	        elements = UI.$(elements).removeClass(options.cls);

	        var skip         = false,
	            firstvisible = elements.filter(":visible:first"),
	            offset       = firstvisible.length ? (firstvisible.position().top + firstvisible.outerHeight()) - 1 : false; // (-1): weird firefox bug when parent container is display:flex

	        if (offset === false || elements.length == 1) return;

	        elements.each(function() {

	            var column = UI.$(this);

	            if (column.is(":visible")) {

	                if (skip) {
	                    column.addClass(options.cls);
	                } else {

	                    if (column.position().top >= offset) {
	                        skip = column.addClass(options.cls);
	                    }
	                }
	            }
	        });
	    };

	    UI.Utils.matchHeights = function(elements, options) {

	        elements = UI.$(elements).css('min-height', '');
	        options  = UI.$.extend({ row : true }, options);

	        var matchHeights = function(group){

	            if (group.length < 2) return;

	            var max = 0;

	            group.each(function() {
	                max = Math.max(max, UI.$(this).outerHeight());
	            }).each(function() {

	                var element = UI.$(this),
	                    height  = max - (element.css('box-sizing') == 'border-box' ? 0 : (element.outerHeight() - element.height()));

	                element.css('min-height', height + 'px');
	            });
	        };

	        if (options.row) {

	            elements.first().width(); // force redraw

	            setTimeout(function(){

	                var lastoffset = false, group = [];

	                elements.each(function() {

	                    var ele = UI.$(this), offset = ele.offset().top;

	                    if (offset != lastoffset && group.length) {

	                        matchHeights(UI.$(group));
	                        group  = [];
	                        offset = ele.offset().top;
	                    }

	                    group.push(ele);
	                    lastoffset = offset;
	                });

	                if (group.length) {
	                    matchHeights(UI.$(group));
	                }

	            }, 0);

	        } else {
	            matchHeights(elements);
	        }
	    };

	    (function(cacheSvgs){

	        UI.Utils.inlineSvg = function(selector, root) {

	            var images = UI.$(selector || 'img[src$=".svg"]', root || document).each(function(){

	                var img = UI.$(this),
	                    src = img.attr('src');

	                if (!cacheSvgs[src]) {

	                    var d = UI.$.Deferred();

	                    UI.$.get(src, {nc: Math.random()}, function(data){
	                        d.resolve(UI.$(data).find('svg'));
	                    });

	                    cacheSvgs[src] = d.promise();
	                }

	                cacheSvgs[src].then(function(svg) {

	                    var $svg = UI.$(svg).clone();

	                    if (img.attr('id')) $svg.attr('id', img.attr('id'));
	                    if (img.attr('class')) $svg.attr('class', img.attr('class'));
	                    if (img.attr('style')) $svg.attr('style', img.attr('style'));

	                    if (img.attr('width')) {
	                        $svg.attr('width', img.attr('width'));
	                        if (!img.attr('height'))  $svg.removeAttr('height');
	                    }

	                    if (img.attr('height')){
	                        $svg.attr('height', img.attr('height'));
	                        if (!img.attr('width')) $svg.removeAttr('width');
	                    }

	                    img.replaceWith($svg);
	                });
	            });
	        };

	        // init code
	        UI.ready(function(context) {
	            UI.Utils.inlineSvg('[data-uk-svg]', context);
	        });

	    })({});

	})(UIkit);

	(function(UI) {

	    "use strict";

	    UI.component('smoothScroll', {

	        boot: function() {

	            // init code
	            UI.$html.on("click.smooth-scroll.uikit", "[data-uk-smooth-scroll]", function(e) {
	                var ele = UI.$(this);

	                if (!ele.data("smoothScroll")) {
	                    var obj = UI.smoothScroll(ele, UI.Utils.options(ele.attr("data-uk-smooth-scroll")));
	                    ele.trigger("click");
	                }

	                return false;
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.on("click", function(e) {
	                e.preventDefault();
	                scrollToElement(UI.$(this.hash).length ? UI.$(this.hash) : UI.$("body"), $this.options);
	            });
	        }
	    });

	    function scrollToElement(ele, options) {

	        options = UI.$.extend({
	            duration: 1000,
	            transition: 'easeOutExpo',
	            offset: 0,
	            complete: function(){}
	        }, options);

	        // get / set parameters
	        var target    = ele.offset().top - options.offset,
	            docheight = UI.$doc.height(),
	            winheight = window.innerHeight;

	        if ((target + winheight) > docheight) {
	            target = docheight - winheight;
	        }

	        // animate to target, fire callback when done
	        UI.$("html,body").stop().animate({scrollTop: target}, options.duration, options.transition).promise().done(options.complete);
	    }

	    UI.Utils.scrollToElement = scrollToElement;

	    if (!UI.$.easing.easeOutExpo) {
	        UI.$.easing.easeOutExpo = function(x, t, b, c, d) { return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b; };
	    }

	})(UIkit);

	(function(UI) {

	    "use strict";

	    var $win           = UI.$win,
	        $doc           = UI.$doc,
	        scrollspies    = [],
	        checkScrollSpy = function() {
	            for(var i=0; i < scrollspies.length; i++) {
	                window.requestAnimationFrame.apply(window, [scrollspies[i].check]);
	            }
	        };

	    UI.component('scrollspy', {

	        defaults: {
	            "target"     : false,
	            "cls"        : "uk-scrollspy-inview",
	            "initcls"    : "uk-scrollspy-init-inview",
	            "topoffset"  : 0,
	            "leftoffset" : 0,
	            "repeat"     : false,
	            "delay"      : 0
	        },

	        boot: function() {

	            // listen to scroll and resize
	            $doc.on("scrolling.uk.document", checkScrollSpy);
	            $win.on("load resize orientationchange", UI.Utils.debounce(checkScrollSpy, 50));

	            // init code
	            UI.ready(function(context) {

	                UI.$("[data-uk-scrollspy]", context).each(function() {

	                    var element = UI.$(this);

	                    if (!element.data("scrollspy")) {
	                        var obj = UI.scrollspy(element, UI.Utils.options(element.attr("data-uk-scrollspy")));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this, inviewstate, initinview, togglecls = this.options.cls.split(/,/), fn = function(){

	                var elements     = $this.options.target ? $this.element.find($this.options.target) : $this.element,
	                    delayIdx     = elements.length === 1 ? 1 : 0,
	                    toggleclsIdx = 0;

	                elements.each(function(idx){

	                    var element     = UI.$(this),
	                        inviewstate = element.data('inviewstate'),
	                        inview      = UI.Utils.isInView(element, $this.options),
	                        toggle      = element.data('ukScrollspyCls') || togglecls[toggleclsIdx].trim();

	                    if (inview && !inviewstate && !element.data('scrollspy-idle')) {

	                        if (!initinview) {
	                            element.addClass($this.options.initcls);
	                            $this.offset = element.offset();
	                            initinview = true;

	                            element.trigger("init.uk.scrollspy");
	                        }

	                        element.data('scrollspy-idle', setTimeout(function(){

	                            element.addClass("uk-scrollspy-inview").toggleClass(toggle).width();
	                            element.trigger("inview.uk.scrollspy");

	                            element.data('scrollspy-idle', false);
	                            element.data('inviewstate', true);

	                        }, $this.options.delay * delayIdx));

	                        delayIdx++;
	                    }

	                    if (!inview && inviewstate && $this.options.repeat) {

	                        if (element.data('scrollspy-idle')) {
	                            clearTimeout(element.data('scrollspy-idle'));
	                        }

	                        element.removeClass("uk-scrollspy-inview").toggleClass(toggle);
	                        element.data('inviewstate', false);

	                        element.trigger("outview.uk.scrollspy");
	                    }

	                    toggleclsIdx = togglecls[toggleclsIdx + 1] ? (toggleclsIdx + 1) : 0;

	                });
	            };

	            fn();

	            this.check = fn;

	            scrollspies.push(this);
	        }
	    });


	    var scrollspynavs = [],
	        checkScrollSpyNavs = function() {
	            for(var i=0; i < scrollspynavs.length; i++) {
	                window.requestAnimationFrame.apply(window, [scrollspynavs[i].check]);
	            }
	        };

	    UI.component('scrollspynav', {

	        defaults: {
	            "cls"          : 'uk-active',
	            "closest"      : false,
	            "topoffset"    : 0,
	            "leftoffset"   : 0,
	            "smoothscroll" : false
	        },

	        boot: function() {

	            // listen to scroll and resize
	            $doc.on("scrolling.uk.document", checkScrollSpyNavs);
	            $win.on("resize orientationchange", UI.Utils.debounce(checkScrollSpyNavs, 50));

	            // init code
	            UI.ready(function(context) {

	                UI.$("[data-uk-scrollspy-nav]", context).each(function() {

	                    var element = UI.$(this);

	                    if (!element.data("scrollspynav")) {
	                        var obj = UI.scrollspynav(element, UI.Utils.options(element.attr("data-uk-scrollspy-nav")));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var ids     = [],
	                links   = this.find("a[href^='#']").each(function(){ if(this.getAttribute("href").trim()!=='#') ids.push(this.getAttribute("href")); }),
	                targets = UI.$(ids.join(",")),

	                clsActive  = this.options.cls,
	                clsClosest = this.options.closest || this.options.closest;

	            var $this = this, inviews, fn = function(){

	                inviews = [];

	                for (var i=0 ; i < targets.length ; i++) {
	                    if (UI.Utils.isInView(targets.eq(i), $this.options)) {
	                        inviews.push(targets.eq(i));
	                    }
	                }

	                if (inviews.length) {

	                    var navitems,
	                        scrollTop = $win.scrollTop(),
	                        target = (function(){
	                            for(var i=0; i< inviews.length;i++){
	                                if(inviews[i].offset().top >= scrollTop){
	                                    return inviews[i];
	                                }
	                            }
	                        })();

	                    if (!target) return;

	                    if ($this.options.closest) {
	                        links.blur().closest(clsClosest).removeClass(clsActive);
	                        navitems = links.filter("a[href='#"+target.attr("id")+"']").closest(clsClosest).addClass(clsActive);
	                    } else {
	                        navitems = links.removeClass(clsActive).filter("a[href='#"+target.attr("id")+"']").addClass(clsActive);
	                    }

	                    $this.element.trigger("inview.uk.scrollspynav", [target, navitems]);
	                }
	            };

	            if (this.options.smoothscroll && UI.smoothScroll) {
	                links.each(function(){
	                    UI.smoothScroll(this, $this.options.smoothscroll);
	                });
	            }

	            fn();

	            this.element.data("scrollspynav", this);

	            this.check = fn;
	            scrollspynavs.push(this);

	        }
	    });

	})(UIkit);

	(function(UI){

	    "use strict";

	    var toggles = [];

	    UI.component('toggle', {

	        defaults: {
	            target    : false,
	            cls       : 'uk-hidden',
	            animation : false,
	            duration  : 200
	        },

	        boot: function(){

	            // init code
	            UI.ready(function(context) {

	                UI.$("[data-uk-toggle]", context).each(function() {
	                    var ele = UI.$(this);

	                    if (!ele.data("toggle")) {
	                        var obj = UI.toggle(ele, UI.Utils.options(ele.attr("data-uk-toggle")));
	                    }
	                });

	                setTimeout(function(){

	                    toggles.forEach(function(toggle){
	                        toggle.getToggles();
	                    });

	                }, 0);
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.aria = (this.options.cls.indexOf('uk-hidden') !== -1);

	            this.getToggles();

	            this.on("click", function(e) {
	                if ($this.element.is('a[href="#"]')) e.preventDefault();
	                $this.toggle();
	            });

	            toggles.push(this);
	        },

	        toggle: function() {

	            if(!this.totoggle.length) return;

	            if (this.options.animation && UI.support.animation) {

	                var $this = this, animations = this.options.animation.split(',');

	                if (animations.length == 1) {
	                    animations[1] = animations[0];
	                }

	                animations[0] = animations[0].trim();
	                animations[1] = animations[1].trim();

	                this.totoggle.css('animation-duration', this.options.duration+'ms');

	                this.totoggle.each(function(){

	                    var ele = UI.$(this);

	                    if (ele.hasClass($this.options.cls)) {

	                        ele.toggleClass($this.options.cls);

	                        UI.Utils.animate(ele, animations[0]).then(function(){
	                            ele.css('animation-duration', '');
	                            UI.Utils.checkDisplay(ele);
	                        });

	                    } else {

	                        UI.Utils.animate(this, animations[1]+' uk-animation-reverse').then(function(){
	                            ele.toggleClass($this.options.cls).css('animation-duration', '');
	                            UI.Utils.checkDisplay(ele);
	                        });

	                    }

	                });

	            } else {
	                this.totoggle.toggleClass(this.options.cls);
	                UI.Utils.checkDisplay(this.totoggle);
	            }

	            this.updateAria();

	        },

	        getToggles: function() {
	            this.totoggle = this.options.target ? UI.$(this.options.target):[];
	            this.updateAria();
	        },

	        updateAria: function() {
	            if (this.aria && this.totoggle.length) {
	                this.totoggle.each(function(){
	                    UI.$(this).attr('aria-hidden', UI.$(this).hasClass('uk-hidden'));
	                });
	            }
	        }
	    });

	})(UIkit);

	(function(UI) {

	    "use strict";

	    UI.component('alert', {

	        defaults: {
	            "fade": true,
	            "duration": 200,
	            "trigger": ".uk-alert-close"
	        },

	        boot: function() {

	            // init code
	            UI.$html.on("click.alert.uikit", "[data-uk-alert]", function(e) {

	                var ele = UI.$(this);

	                if (!ele.data("alert")) {

	                    var alert = UI.alert(ele, UI.Utils.options(ele.attr("data-uk-alert")));

	                    if (UI.$(e.target).is(alert.options.trigger)) {
	                        e.preventDefault();
	                        alert.close();
	                    }
	                }
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.on("click", this.options.trigger, function(e) {
	                e.preventDefault();
	                $this.close();
	            });
	        },

	        close: function() {

	            var element       = this.trigger("close.uk.alert"),
	                removeElement = function () {
	                    this.trigger("closed.uk.alert").remove();
	                }.bind(this);

	            if (this.options.fade) {
	                element.css("overflow", "hidden").css("max-height", element.height()).animate({
	                    "height"         : 0,
	                    "opacity"        : 0,
	                    "padding-top"    : 0,
	                    "padding-bottom" : 0,
	                    "margin-top"     : 0,
	                    "margin-bottom"  : 0
	                }, this.options.duration, removeElement);
	            } else {
	                removeElement();
	            }
	        }

	    });

	})(UIkit);

	(function(UI) {

	    "use strict";

	    UI.component('buttonRadio', {

	        defaults: {
	            "activeClass": 'uk-active',
	            "target": ".uk-button"
	        },

	        boot: function() {

	            // init code
	            UI.$html.on("click.buttonradio.uikit", "[data-uk-button-radio]", function(e) {

	                var ele = UI.$(this);

	                if (!ele.data("buttonRadio")) {

	                    var obj    = UI.buttonRadio(ele, UI.Utils.options(ele.attr("data-uk-button-radio"))),
	                        target = UI.$(e.target);

	                    if (target.is(obj.options.target)) {
	                        target.trigger("click");
	                    }
	                }
	            });
	        },

	        init: function() {

	            var $this = this;

	            // Init ARIA
	            this.find($this.options.target).attr('aria-checked', 'false').filter('.' + $this.options.activeClass).attr('aria-checked', 'true');

	            this.on("click", this.options.target, function(e) {

	                var ele = UI.$(this);

	                if (ele.is('a[href="#"]')) e.preventDefault();

	                $this.find($this.options.target).not(ele).removeClass($this.options.activeClass).blur();
	                ele.addClass($this.options.activeClass);

	                // Update ARIA
	                $this.find($this.options.target).not(ele).attr('aria-checked', 'false');
	                ele.attr('aria-checked', 'true');

	                $this.trigger("change.uk.button", [ele]);
	            });

	        },

	        getSelected: function() {
	            return this.find('.' + this.options.activeClass);
	        }
	    });

	    UI.component('buttonCheckbox', {

	        defaults: {
	            "activeClass": 'uk-active',
	            "target": ".uk-button"
	        },

	        boot: function() {

	            UI.$html.on("click.buttoncheckbox.uikit", "[data-uk-button-checkbox]", function(e) {
	                var ele = UI.$(this);

	                if (!ele.data("buttonCheckbox")) {

	                    var obj    = UI.buttonCheckbox(ele, UI.Utils.options(ele.attr("data-uk-button-checkbox"))),
	                        target = UI.$(e.target);

	                    if (target.is(obj.options.target)) {
	                        target.trigger("click");
	                    }
	                }
	            });
	        },

	        init: function() {

	            var $this = this;

	            // Init ARIA
	            this.find($this.options.target).attr('aria-checked', 'false').filter('.' + $this.options.activeClass).attr('aria-checked', 'true');

	            this.on("click", this.options.target, function(e) {
	                var ele = UI.$(this);

	                if (ele.is('a[href="#"]')) e.preventDefault();

	                ele.toggleClass($this.options.activeClass).blur();

	                // Update ARIA
	                ele.attr('aria-checked', ele.hasClass($this.options.activeClass));

	                $this.trigger("change.uk.button", [ele]);
	            });

	        },

	        getSelected: function() {
	            return this.find('.' + this.options.activeClass);
	        }
	    });


	    UI.component('button', {

	        defaults: {},

	        boot: function() {

	            UI.$html.on("click.button.uikit", "[data-uk-button]", function(e) {
	                var ele = UI.$(this);

	                if (!ele.data("button")) {

	                    var obj = UI.button(ele, UI.Utils.options(ele.attr("data-uk-button")));
	                    ele.trigger("click");
	                }
	            });
	        },

	        init: function() {

	            var $this = this;

	            // Init ARIA
	            this.element.attr('aria-pressed', this.element.hasClass("uk-active"));

	            this.on("click", function(e) {

	                if ($this.element.is('a[href="#"]')) e.preventDefault();

	                $this.toggle();
	                $this.trigger("change.uk.button", [$this.element.blur().hasClass("uk-active")]);
	            });

	        },

	        toggle: function() {
	            this.element.toggleClass("uk-active");

	            // Update ARIA
	            this.element.attr('aria-pressed', this.element.hasClass("uk-active"));
	        }
	    });

	})(UIkit);


	(function(UI) {

	    "use strict";

	    var active = false, hoverIdle, flips = {
	        'x': {
	            "bottom-left"   : 'bottom-right',
	            "bottom-right"  : 'bottom-left',
	            "bottom-center" : 'bottom-right',
	            "top-left"      : 'top-right',
	            "top-right"     : 'top-left',
	            "top-center"    : 'top-right',
	            "left-top"      : 'right',
	            "left-bottom"   : 'right-bottom',
	            "left-center"   : 'right-center',
	            "right-top"     : 'left',
	            "right-bottom"  : 'left-bottom',
	            "right-center"  : 'left-center'
	        },
	        'y': {
	            "bottom-left"   : 'top-left',
	            "bottom-right"  : 'top-right',
	            "bottom-center" : 'top-center',
	            "top-left"      : 'bottom-left',
	            "top-right"     : 'bottom-right',
	            "top-center"    : 'bottom-center',
	            "left-top"      : 'top-left',
	            "left-bottom"   : 'left-bottom',
	            "left-center"   : 'top-left',
	            "right-top"     : 'top-left',
	            "right-bottom"  : 'bottom-left',
	            "right-center"  : 'top-left'
	        },
	        'xy': {

	        }
	    };

	    UI.component('dropdown', {

	        defaults: {
	           'mode'            : 'hover',
	           'pos'             : 'bottom-left',
	           'offset'          : 0,
	           'remaintime'      : 800,
	           'justify'         : false,
	           'boundary'        : UI.$win,
	           'delay'           : 0,
	           'dropdownSelector': '.uk-dropdown,.uk-dropdown-blank',
	           'hoverDelayIdle'  : 250,
	           'preventflip'     : false
	        },

	        remainIdle: false,

	        boot: function() {

	            var triggerevent = UI.support.touch ? "click" : "mouseenter";

	            // init code
	            UI.$html.on(triggerevent+".dropdown.uikit", "[data-uk-dropdown]", function(e) {

	                var ele = UI.$(this);

	                if (!ele.data("dropdown")) {

	                    var dropdown = UI.dropdown(ele, UI.Utils.options(ele.attr("data-uk-dropdown")));

	                    if (triggerevent=="click" || (triggerevent=="mouseenter" && dropdown.options.mode=="hover")) {
	                        dropdown.element.trigger(triggerevent);
	                    }

	                    if (dropdown.element.find(dropdown.options.dropdownSelector).length) {
	                        e.preventDefault();
	                    }
	                }
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.dropdown     = this.find(this.options.dropdownSelector);
	            this.offsetParent = this.dropdown.parents().filter(function() {
	                return UI.$.inArray(UI.$(this).css('position'), ['relative', 'fixed', 'absolute']) !== -1;
	            }).slice(0,1);

	            this.centered  = this.dropdown.hasClass('uk-dropdown-center');
	            this.justified = this.options.justify ? UI.$(this.options.justify) : false;

	            this.boundary  = UI.$(this.options.boundary);

	            if (!this.boundary.length) {
	                this.boundary = UI.$win;
	            }

	            // legacy DEPRECATED!
	            if (this.dropdown.hasClass('uk-dropdown-up')) {
	                this.options.pos = 'top-left';
	            }
	            if (this.dropdown.hasClass('uk-dropdown-flip')) {
	                this.options.pos = this.options.pos.replace('left','right');
	            }
	            if (this.dropdown.hasClass('uk-dropdown-center')) {
	                this.options.pos = this.options.pos.replace(/(left|right)/,'center');
	            }
	            //-- end legacy

	            // Init ARIA
	            this.element.attr('aria-haspopup', 'true');
	            this.element.attr('aria-expanded', this.element.hasClass("uk-open"));

	            if (this.options.mode == "click" || UI.support.touch) {

	                this.on("click.uikit.dropdown", function(e) {

	                    var $target = UI.$(e.target);

	                    if (!$target.parents($this.options.dropdownSelector).length) {

	                        if ($target.is("a[href='#']") || $target.parent().is("a[href='#']") || ($this.dropdown.length && !$this.dropdown.is(":visible")) ){
	                            e.preventDefault();
	                        }

	                        $target.blur();
	                    }

	                    if (!$this.element.hasClass('uk-open')) {

	                        $this.show();

	                    } else {

	                        if (!$this.dropdown.find(e.target).length || $target.is(".uk-dropdown-close") || $target.parents(".uk-dropdown-close").length) {
	                            $this.hide();
	                        }
	                    }
	                });

	            } else {

	                this.on("mouseenter", function(e) {

	                    $this.trigger('pointerenter.uk.dropdown', [$this]);

	                    if ($this.remainIdle) {
	                        clearTimeout($this.remainIdle);
	                    }

	                    if (hoverIdle) {
	                        clearTimeout(hoverIdle);
	                    }

	                    if (active && active == $this) {
	                        return;
	                    }

	                    // pseudo manuAim
	                    if (active && active != $this) {

	                        hoverIdle = setTimeout(function() {
	                            hoverIdle = setTimeout($this.show.bind($this), $this.options.delay);
	                        }, $this.options.hoverDelayIdle);

	                    } else {

	                        hoverIdle = setTimeout($this.show.bind($this), $this.options.delay);
	                    }

	                }).on("mouseleave", function() {

	                    if (hoverIdle) {
	                        clearTimeout(hoverIdle);
	                    }

	                    $this.remainIdle = setTimeout(function() {
	                        if (active && active == $this) $this.hide();
	                    }, $this.options.remaintime);

	                    $this.trigger('pointerleave.uk.dropdown', [$this]);

	                }).on("click", function(e){

	                    var $target = UI.$(e.target);

	                    if ($this.remainIdle) {
	                        clearTimeout($this.remainIdle);
	                    }

	                    if (active && active == $this) {
	                        if (!$this.dropdown.find(e.target).length || $target.is(".uk-dropdown-close") || $target.parents(".uk-dropdown-close").length) {
	                            $this.hide();
	                        }
	                        return;
	                    }

	                    if ($target.is("a[href='#']") || $target.parent().is("a[href='#']")){
	                        e.preventDefault();
	                    }

	                    $this.show();
	                });
	            }
	        },

	        show: function(){

	            UI.$html.off("click.outer.dropdown");

	            if (active && active != this) {
	                active.hide(true);
	            }

	            if (hoverIdle) {
	                clearTimeout(hoverIdle);
	            }

	            this.trigger('beforeshow.uk.dropdown', [this]);

	            this.checkDimensions();
	            this.element.addClass('uk-open');

	            // Update ARIA
	            this.element.attr('aria-expanded', 'true');

	            this.trigger('show.uk.dropdown', [this]);

	            UI.Utils.checkDisplay(this.dropdown, true);
	            active = this;

	            this.registerOuterClick();
	        },

	        hide: function(force) {

	            this.trigger('beforehide.uk.dropdown', [this, force]);

	            this.element.removeClass('uk-open');

	            if (this.remainIdle) {
	                clearTimeout(this.remainIdle);
	            }

	            this.remainIdle = false;

	            // Update ARIA
	            this.element.attr('aria-expanded', 'false');

	            this.trigger('hide.uk.dropdown', [this, force]);

	            if (active == this) active = false;
	        },

	        registerOuterClick: function(){

	            var $this = this;

	            UI.$html.off("click.outer.dropdown");

	            setTimeout(function() {

	                UI.$html.on("click.outer.dropdown", function(e) {

	                    if (hoverIdle) {
	                        clearTimeout(hoverIdle);
	                    }

	                    var $target = UI.$(e.target);

	                    if (active == $this && !$this.element.find(e.target).length) {
	                        $this.hide(true);
	                        UI.$html.off("click.outer.dropdown");
	                    }
	                });
	            }, 10);
	        },

	        checkDimensions: function() {

	            if (!this.dropdown.length) return;

	            // reset
	            this.dropdown.removeClass('uk-dropdown-top uk-dropdown-bottom uk-dropdown-left uk-dropdown-right uk-dropdown-stack').css({
	                'top-left':'',
	                'left':'',
	                'margin-left' :'',
	                'margin-right':''
	            });

	            if (this.justified && this.justified.length) {
	                this.dropdown.css("min-width", "");
	            }

	            var $this          = this,
	                pos            = UI.$.extend({}, this.offsetParent.offset(), {width: this.offsetParent[0].offsetWidth, height: this.offsetParent[0].offsetHeight}),
	                posoffset      = this.options.offset,
	                dropdown       = this.dropdown,
	                offset         = dropdown.show().offset() || {left: 0, top: 0},
	                width          = dropdown.outerWidth(),
	                height         = dropdown.outerHeight(),
	                boundarywidth  = this.boundary.width(),
	                boundaryoffset = this.boundary[0] !== window && this.boundary.offset() ? this.boundary.offset(): {top:0, left:0},
	                dpos           = this.options.pos;

	            var variants =  {
	                    "bottom-left"   : {top: 0 + pos.height + posoffset, left: 0},
	                    "bottom-right"  : {top: 0 + pos.height + posoffset, left: 0 + pos.width - width},
	                    "bottom-center" : {top: 0 + pos.height + posoffset, left: 0 + pos.width / 2 - width / 2},
	                    "top-left"      : {top: 0 - height - posoffset, left: 0},
	                    "top-right"     : {top: 0 - height - posoffset, left: 0 + pos.width - width},
	                    "top-center"    : {top: 0 - height - posoffset, left: 0 + pos.width / 2 - width / 2},
	                    "left-top"      : {top: 0, left: 0 - width - posoffset},
	                    "left-bottom"   : {top: 0 + pos.height - height, left: 0 - width - posoffset},
	                    "left-center"   : {top: 0 + pos.height / 2 - height / 2, left: 0 - width - posoffset},
	                    "right-top"     : {top: 0, left: 0 + pos.width + posoffset},
	                    "right-bottom"  : {top: 0 + pos.height - height, left: 0 + pos.width + posoffset},
	                    "right-center"  : {top: 0 + pos.height / 2 - height / 2, left: 0 + pos.width + posoffset}
	                },
	                css = {},
	                pp;

	            pp = dpos.split('-');
	            css = variants[dpos] ? variants[dpos] : variants['bottom-left'];

	            // justify dropdown
	            if (this.justified && this.justified.length) {
	                justify(dropdown.css({left:0}), this.justified, boundarywidth);
	            } else {

	                if (this.options.preventflip !== true) {

	                    var fdpos;

	                    switch(this.checkBoundary(pos.left + css.left, pos.top + css.top, width, height, boundarywidth)) {
	                        case "x":
	                            if(this.options.preventflip !=='x') fdpos = flips['x'][dpos] || 'right-top';
	                            break;
	                        case "y":
	                            if(this.options.preventflip !=='y') fdpos = flips['y'][dpos] || 'top-left';
	                            break;
	                        case "xy":
	                            if(!this.options.preventflip) fdpos = flips['xy'][dpos] || 'right-bottom';
	                            break;
	                    }

	                    if (fdpos) {

	                        pp  = fdpos.split('-');
	                        css = variants[fdpos] ? variants[fdpos] : variants['bottom-left'];

	                        // check flipped
	                        if (this.checkBoundary(pos.left + css.left, pos.top + css.top, width, height, boundarywidth)) {
	                            pp  = dpos.split('-');
	                            css = variants[dpos] ? variants[dpos] : variants['bottom-left'];
	                        }
	                    }
	                }
	            }

	            if (width > boundarywidth) {
	                dropdown.addClass("uk-dropdown-stack");
	                this.trigger('stack.uk.dropdown', [this]);
	            }

	            dropdown.css(css).css("display", "").addClass('uk-dropdown-'+pp[0]);
	        },

	        checkBoundary: function(left, top, width, height, boundarywidth) {

	            var axis = "";

	            if (left < 0 || ((left - UI.$win.scrollLeft())+width) > boundarywidth) {
	               axis += "x";
	            }

	            if ((top - UI.$win.scrollTop()) < 0 || ((top - UI.$win.scrollTop())+height) > window.innerHeight) {
	               axis += "y";
	            }

	            return axis;
	        }
	    });


	    UI.component('dropdownOverlay', {

	        defaults: {
	           'justify' : false,
	           'cls'     : '',
	           'duration': 200
	        },

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$("[data-uk-dropdown-overlay]", context).each(function() {
	                    var ele = UI.$(this);

	                    if (!ele.data("dropdownOverlay")) {
	                        UI.dropdownOverlay(ele, UI.Utils.options(ele.attr("data-uk-dropdown-overlay")));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.justified = this.options.justify ? UI.$(this.options.justify) : false;
	            this.overlay   = this.element.find('uk-dropdown-overlay');

	            if (!this.overlay.length) {
	                this.overlay = UI.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element);
	            }

	            this.overlay.addClass(this.options.cls);

	            this.on({

	                'beforeshow.uk.dropdown': function(e, dropdown) {
	                    $this.dropdown = dropdown;

	                    if ($this.justified && $this.justified.length) {
	                        justify($this.overlay.css({'display':'block', 'margin-left':'','margin-right':''}), $this.justified, $this.justified.outerWidth());
	                    }
	                },

	                'show.uk.dropdown': function(e, dropdown) {

	                    var h = $this.dropdown.dropdown.outerHeight(true);

	                    $this.dropdown.element.removeClass('uk-open');

	                    $this.overlay.stop().css('display', 'block').animate({height: h}, $this.options.duration, function() {

	                       $this.dropdown.dropdown.css('visibility', '');
	                       $this.dropdown.element.addClass('uk-open');

	                       UI.Utils.checkDisplay($this.dropdown.dropdown, true);
	                    });

	                    $this.pointerleave = false;
	                },

	                'hide.uk.dropdown': function() {
	                    $this.overlay.stop().animate({height: 0}, $this.options.duration);
	                },

	                'pointerenter.uk.dropdown': function(e, dropdown) {
	                    clearTimeout($this.remainIdle);
	                },

	                'pointerleave.uk.dropdown': function(e, dropdown) {
	                    $this.pointerleave = true;
	                }
	            });


	            this.overlay.on({

	                'mouseenter': function() {
	                    if ($this.remainIdle) {
	                        clearTimeout($this.dropdown.remainIdle);
	                        clearTimeout($this.remainIdle);
	                    }
	                },

	                'mouseleave': function(){

	                    if ($this.pointerleave && active) {

	                        $this.remainIdle = setTimeout(function() {
	                           if(active) active.hide();
	                        }, active.options.remaintime);
	                    }
	                }
	            })
	        }

	    });


	    function justify(ele, justifyTo, boundarywidth, offset) {

	        ele           = UI.$(ele);
	        justifyTo     = UI.$(justifyTo);
	        boundarywidth = boundarywidth || window.innerWidth;
	        offset        = offset || ele.offset();

	        if (justifyTo.length) {

	            var jwidth = justifyTo.outerWidth();

	            ele.css("min-width", jwidth);

	            if (UI.langdirection == 'right') {

	                var right1   = boundarywidth - (justifyTo.offset().left + jwidth),
	                    right2   = boundarywidth - (ele.offset().left + ele.outerWidth());

	                ele.css("margin-right", right1 - right2);

	            } else {
	                ele.css("margin-left", justifyTo.offset().left - offset.left);
	            }
	        }
	    }

	})(UIkit);

	(function(UI) {

	    "use strict";

	    var grids = [];

	    UI.component('gridMatchHeight', {

	        defaults: {
	            "target"        : false,
	            "row"           : true,
	            "ignorestacked" : false
	        },

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$("[data-uk-grid-match]", context).each(function() {
	                    var grid = UI.$(this), obj;

	                    if (!grid.data("gridMatchHeight")) {
	                        obj = UI.gridMatchHeight(grid, UI.Utils.options(grid.attr("data-uk-grid-match")));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.columns  = this.element.children();
	            this.elements = this.options.target ? this.find(this.options.target) : this.columns;

	            if (!this.columns.length) return;

	            UI.$win.on('load resize orientationchange', (function() {

	                var fn = function() {
	                    $this.match();
	                };

	                UI.$(function() { fn(); });

	                return UI.Utils.debounce(fn, 50);
	            })());

	            UI.$html.on("changed.uk.dom", function(e) {
	                $this.columns  = $this.element.children();
	                $this.elements = $this.options.target ? $this.find($this.options.target) : $this.columns;
	                $this.match();
	            });

	            this.on("display.uk.check", function(e) {
	                if(this.element.is(":visible")) this.match();
	            }.bind(this));

	            grids.push(this);
	        },

	        match: function() {

	            var firstvisible = this.columns.filter(":visible:first");

	            if (!firstvisible.length) return;

	            var stacked = Math.ceil(100 * parseFloat(firstvisible.css('width')) / parseFloat(firstvisible.parent().css('width'))) >= 100;

	            if (stacked && !this.options.ignorestacked) {
	                this.revert();
	            } else {
	                UI.Utils.matchHeights(this.elements, this.options);
	            }

	            return this;
	        },

	        revert: function() {
	            this.elements.css('min-height', '');
	            return this;
	        }
	    });

	    UI.component('gridMargin', {

	        defaults: {
	            cls      : 'uk-grid-margin',
	            rowfirst : 'uk-row-first'
	        },

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$("[data-uk-grid-margin]", context).each(function() {
	                    var grid = UI.$(this), obj;

	                    if (!grid.data("gridMargin")) {
	                        obj = UI.gridMargin(grid, UI.Utils.options(grid.attr("data-uk-grid-margin")));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var stackMargin = UI.stackMargin(this.element, this.options);
	        }
	    });

	})(UIkit);

	(function(UI) {

	    "use strict";

	    var active = false, activeCount = 0, $html = UI.$html, body;

	    UI.component('modal', {

	        defaults: {
	            keyboard: true,
	            bgclose: true,
	            minScrollHeight: 150,
	            center: false,
	            modal: true
	        },

	        scrollable: false,
	        transition: false,
	        hasTransitioned: true,

	        init: function() {

	            if (!body) body = UI.$('body');

	            if (!this.element.length) return;

	            var $this = this;

	            this.paddingdir = "padding-" + (UI.langdirection == 'left' ? "right":"left");
	            this.dialog     = this.find(".uk-modal-dialog");

	            this.active     = false;

	            // Update ARIA
	            this.element.attr('aria-hidden', this.element.hasClass("uk-open"));

	            this.on("click", ".uk-modal-close", function(e) {
	                e.preventDefault();
	                $this.hide();
	            }).on("click", function(e) {

	                var target = UI.$(e.target);

	                if (target[0] == $this.element[0] && $this.options.bgclose) {
	                    $this.hide();
	                }
	            });
	        },

	        toggle: function() {
	            return this[this.isActive() ? "hide" : "show"]();
	        },

	        show: function() {

	            if (!this.element.length) return;

	            var $this = this;

	            if (this.isActive()) return;

	            if (this.options.modal && active) {
	                active.hide(true);
	            }

	            this.element.removeClass("uk-open").show();
	            this.resize();

	            if (this.options.modal) {
	                active = this;
	            }

	            this.active = true;

	            activeCount++;

	            if (UI.support.transition) {
	                this.hasTransitioned = false;
	                this.element.one(UI.support.transition.end, function(){
	                    $this.hasTransitioned = true;
	                }).addClass("uk-open");
	            } else {
	                this.element.addClass("uk-open");
	            }

	            $html.addClass("uk-modal-page").height(); // force browser engine redraw

	            // Update ARIA
	            this.element.attr('aria-hidden', 'false');

	            this.element.trigger("show.uk.modal");

	            UI.Utils.checkDisplay(this.dialog, true);

	            return this;
	        },

	        hide: function(force) {

	            if (!force && UI.support.transition && this.hasTransitioned) {

	                var $this = this;

	                this.one(UI.support.transition.end, function() {
	                    $this._hide();
	                }).removeClass("uk-open");

	            } else {

	                this._hide();
	            }

	            return this;
	        },

	        resize: function() {

	            var bodywidth  = body.width();

	            this.scrollbarwidth = window.innerWidth - bodywidth;

	            body.css(this.paddingdir, this.scrollbarwidth);

	            this.element.css('overflow-y', this.scrollbarwidth ? 'scroll' : 'auto');

	            if (!this.updateScrollable() && this.options.center) {

	                var dh  = this.dialog.outerHeight(),
	                pad = parseInt(this.dialog.css('margin-top'), 10) + parseInt(this.dialog.css('margin-bottom'), 10);

	                if ((dh + pad) < window.innerHeight) {
	                    this.dialog.css({'top': (window.innerHeight/2 - dh/2) - pad });
	                } else {
	                    this.dialog.css({'top': ''});
	                }
	            }
	        },

	        updateScrollable: function() {

	            // has scrollable?
	            var scrollable = this.dialog.find('.uk-overflow-container:visible:first');

	            if (scrollable.length) {

	                scrollable.css('height', 0);

	                var offset = Math.abs(parseInt(this.dialog.css('margin-top'), 10)),
	                dh     = this.dialog.outerHeight(),
	                wh     = window.innerHeight,
	                h      = wh - 2*(offset < 20 ? 20:offset) - dh;

	                scrollable.css({
	                    'max-height': (h < this.options.minScrollHeight ? '':h),
	                    'height':''
	                });

	                return true;
	            }

	            return false;
	        },

	        _hide: function() {

	            this.active = false;
	            if (activeCount > 0) activeCount--;
	            else activeCount = 0;

	            this.element.hide().removeClass('uk-open');

	            // Update ARIA
	            this.element.attr('aria-hidden', 'true');

	            if (!activeCount) {
	                $html.removeClass('uk-modal-page');
	                body.css(this.paddingdir, "");
	            }

	            if(active===this) active = false;

	            this.trigger('hide.uk.modal');
	        },

	        isActive: function() {
	            return this.active;
	        }

	    });

	    UI.component('modalTrigger', {

	        boot: function() {

	            // init code
	            UI.$html.on("click.modal.uikit", "[data-uk-modal]", function(e) {

	                var ele = UI.$(this);

	                if (ele.is("a")) {
	                    e.preventDefault();
	                }

	                if (!ele.data("modalTrigger")) {
	                    var modal = UI.modalTrigger(ele, UI.Utils.options(ele.attr("data-uk-modal")));
	                    modal.show();
	                }

	            });

	            // close modal on esc button
	            UI.$html.on('keydown.modal.uikit', function (e) {

	                if (active && e.keyCode === 27 && active.options.keyboard) { // ESC
	                    e.preventDefault();
	                    active.hide();
	                }
	            });

	            UI.$win.on("resize orientationchange", UI.Utils.debounce(function(){
	                if (active) active.resize();
	            }, 150));
	        },

	        init: function() {

	            var $this = this;

	            this.options = UI.$.extend({
	                "target": $this.element.is("a") ? $this.element.attr("href") : false
	            }, this.options);

	            this.modal = UI.modal(this.options.target, this.options);

	            this.on("click", function(e) {
	                e.preventDefault();
	                $this.show();
	            });

	            //methods
	            this.proxy(this.modal, "show hide isActive");
	        }
	    });

	    UI.modal.dialog = function(content, options) {

	        var modal = UI.modal(UI.$(UI.modal.dialog.template).appendTo("body"), options);

	        modal.on("hide.uk.modal", function(){
	            if (modal.persist) {
	                modal.persist.appendTo(modal.persist.data("modalPersistParent"));
	                modal.persist = false;
	            }
	            modal.element.remove();
	        });

	        setContent(content, modal);

	        return modal;
	    };

	    UI.modal.dialog.template = '<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>';

	    UI.modal.alert = function(content, options) {

	        options = UI.$.extend(true, {bgclose:false, keyboard:false, modal:false, labels:UI.modal.labels}, options);

	        var modal = UI.modal.dialog(([
	            '<div class="uk-margin uk-modal-content">'+String(content)+'</div>',
	            '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">'+options.labels.Ok+'</button></div>'
	        ]).join(""), options);

	        modal.on('show.uk.modal', function(){
	            setTimeout(function(){
	                modal.element.find('button:first').focus();
	            }, 50);
	        });

	        return modal.show();
	    };

	    UI.modal.confirm = function(content, onconfirm, oncancel) {

	        var options = arguments.length > 1 && arguments[arguments.length-1] ? arguments[arguments.length-1] : {};

	        onconfirm = UI.$.isFunction(onconfirm) ? onconfirm : function(){};
	        oncancel  = UI.$.isFunction(oncancel) ? oncancel : function(){};
	        options   = UI.$.extend(true, {bgclose:false, keyboard:false, modal:false, labels:UI.modal.labels}, UI.$.isFunction(options) ? {}:options);

	        var modal = UI.modal.dialog(([
	            '<div class="uk-margin uk-modal-content">'+String(content)+'</div>',
	            '<div class="uk-modal-footer uk-text-right"><button class="uk-button js-modal-confirm-cancel">'+options.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-confirm">'+options.labels.Ok+'</button></div>'
	        ]).join(""), options);

	        modal.element.find(".js-modal-confirm, .js-modal-confirm-cancel").on("click", function(){
	            UI.$(this).is('.js-modal-confirm') ? onconfirm() : oncancel();
	            modal.hide();
	        });

	        modal.on('show.uk.modal', function(){
	            setTimeout(function(){
	                modal.element.find('.js-modal-confirm').focus();
	            }, 50);
	        });

	        return modal.show();
	    };

	    UI.modal.prompt = function(text, value, onsubmit, options) {

	        onsubmit = UI.$.isFunction(onsubmit) ? onsubmit : function(value){};
	        options  = UI.$.extend(true, {bgclose:false, keyboard:false, modal:false, labels:UI.modal.labels}, options);

	        var modal = UI.modal.dialog(([
	            text ? '<div class="uk-modal-content uk-form">'+String(text)+'</div>':'',
	            '<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>',
	            '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">'+options.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-ok">'+options.labels.Ok+'</button></div>'
	        ]).join(""), options),

	        input = modal.element.find("input[type='text']").val(value || '').on('keyup', function(e){
	            if (e.keyCode == 13) {
	                modal.element.find(".js-modal-ok").trigger('click');
	            }
	        });

	        modal.element.find(".js-modal-ok").on("click", function(){
	            if (onsubmit(input.val())!==false){
	                modal.hide();
	            }
	        });

	        modal.on('show.uk.modal', function(){
	            setTimeout(function(){
	                input.focus();
	            }, 50);
	        });

	        return modal.show();
	    };

	    UI.modal.blockUI = function(content, options) {

	        var modal = UI.modal.dialog(([
	            '<div class="uk-margin uk-modal-content">'+String(content || '<div class="uk-text-center">...</div>')+'</div>'
	        ]).join(""), UI.$.extend({bgclose:false, keyboard:false, modal:false}, options));

	        modal.content = modal.element.find('.uk-modal-content:first');

	        return modal.show();
	    };


	    UI.modal.labels = {
	        'Ok': 'Ok',
	        'Cancel': 'Cancel'
	    };


	    // helper functions
	    function setContent(content, modal){

	        if(!modal) return;

	        if (typeof content === 'object') {

	            // convert DOM object to a jQuery object
	            content = content instanceof jQuery ? content : UI.$(content);

	            if(content.parent().length) {
	                modal.persist = content;
	                modal.persist.data("modalPersistParent", content.parent());
	            }
	        }else if (typeof content === 'string' || typeof content === 'number') {
	                // just insert the data as innerHTML
	                content = UI.$('<div></div>').html(content);
	        }else {
	                // unsupported data type!
	                content = UI.$('<div></div>').html('UIkit.modal Error: Unsupported data type: ' + typeof content);
	        }

	        content.appendTo(modal.element.find('.uk-modal-dialog'));

	        return modal;
	    }

	})(UIkit);

	(function(UI) {

	    "use strict";

	    UI.component('nav', {

	        defaults: {
	            "toggle": ">li.uk-parent > a[href='#']",
	            "lists": ">li.uk-parent > ul",
	            "multiple": false
	        },

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$("[data-uk-nav]", context).each(function() {
	                    var nav = UI.$(this);

	                    if (!nav.data("nav")) {
	                        var obj = UI.nav(nav, UI.Utils.options(nav.attr("data-uk-nav")));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.on("click.uikit.nav", this.options.toggle, function(e) {
	                e.preventDefault();
	                var ele = UI.$(this);
	                $this.open(ele.parent()[0] == $this.element[0] ? ele : ele.parent("li"));
	            });

	            this.find(this.options.lists).each(function() {
	                var $ele   = UI.$(this),
	                    parent = $ele.parent(),
	                    active = parent.hasClass("uk-active");

	                $ele.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>');
	                parent.data("list-container", $ele.parent()[active ? 'removeClass':'addClass']('uk-hidden'));

	                // Init ARIA
	                parent.attr('aria-expanded', parent.hasClass("uk-open"));

	                if (active) $this.open(parent, true);
	            });

	        },

	        open: function(li, noanimation) {

	            var $this = this, element = this.element, $li = UI.$(li), $container = $li.data('list-container');

	            if (!this.options.multiple) {

	                element.children('.uk-open').not(li).each(function() {

	                    var ele = UI.$(this);

	                    if (ele.data('list-container')) {
	                        ele.data('list-container').stop().animate({height: 0}, function() {
	                            UI.$(this).parent().removeClass('uk-open').end().addClass('uk-hidden');
	                        });
	                    }
	                });
	            }

	            $li.toggleClass('uk-open');

	            // Update ARIA
	            $li.attr('aria-expanded', $li.hasClass('uk-open'));

	            if ($container) {

	                if ($li.hasClass('uk-open')) {
	                    $container.removeClass('uk-hidden');
	                }

	                if (noanimation) {

	                    $container.stop().height($li.hasClass('uk-open') ? 'auto' : 0);

	                    if (!$li.hasClass('uk-open')) {
	                        $container.addClass('uk-hidden');
	                    }

	                    this.trigger('display.uk.check');

	                } else {

	                    $container.stop().animate({
	                        height: ($li.hasClass('uk-open') ? getHeight($container.find('ul:first')) : 0)
	                    }, function() {

	                        if (!$li.hasClass('uk-open')) {
	                            $container.addClass('uk-hidden');
	                        } else {
	                            $container.css('height', '');
	                        }

	                        $this.trigger('display.uk.check');
	                    });
	                }
	            }
	        }
	    });


	    // helper

	    function getHeight(ele) {
	        var $ele = UI.$(ele), height = "auto";

	        if ($ele.is(":visible")) {
	            height = $ele.outerHeight();
	        } else {
	            var tmp = {
	                position: $ele.css("position"),
	                visibility: $ele.css("visibility"),
	                display: $ele.css("display")
	            };

	            height = $ele.css({position: 'absolute', visibility: 'hidden', display: 'block'}).outerHeight();

	            $ele.css(tmp); // reset element
	        }

	        return height;
	    }

	})(UIkit);

	(function(UI) {

	    "use strict";

	    var scrollpos = {x: window.scrollX, y: window.scrollY},
	        $win      = UI.$win,
	        $doc      = UI.$doc,
	        $html     = UI.$html,
	        Offcanvas = {

	        show: function(element) {

	            element = UI.$(element);

	            if (!element.length) return;

	            var $body     = UI.$('body'),
	                bar       = element.find(".uk-offcanvas-bar:first"),
	                rtl       = (UI.langdirection == "right"),
	                flip      = bar.hasClass("uk-offcanvas-bar-flip") ? -1:1,
	                dir       = flip * (rtl ? -1 : 1),

	                scrollbarwidth =  window.innerWidth - $body.width();

	            scrollpos = {x: window.pageXOffset, y: window.pageYOffset};

	            element.addClass("uk-active");

	            $body.css({"width": window.innerWidth - scrollbarwidth, "height": window.innerHeight}).addClass("uk-offcanvas-page");
	            $body.css((rtl ? "margin-right" : "margin-left"), (rtl ? -1 : 1) * (bar.outerWidth() * dir)).width(); // .width() - force redraw

	            $html.css('margin-top', scrollpos.y * -1);

	            bar.addClass("uk-offcanvas-bar-show");

	            this._initElement(element);

	            bar.trigger('show.uk.offcanvas', [element, bar]);

	            // Update ARIA
	            element.attr('aria-hidden', 'false');
	        },

	        hide: function(force) {

	            var $body = UI.$('body'),
	                panel = UI.$(".uk-offcanvas.uk-active"),
	                rtl   = (UI.langdirection == "right"),
	                bar   = panel.find(".uk-offcanvas-bar:first"),
	                finalize = function() {
	                    $body.removeClass("uk-offcanvas-page").css({"width": "", "height": "", "margin-left": "", "margin-right": ""});
	                    panel.removeClass("uk-active");

	                    bar.removeClass("uk-offcanvas-bar-show");
	                    $html.css('margin-top', '');
	                    window.scrollTo(scrollpos.x, scrollpos.y);
	                    bar.trigger('hide.uk.offcanvas', [panel, bar]);

	                    // Update ARIA
	                    panel.attr('aria-hidden', 'true');
	                };

	            if (!panel.length) return;

	            if (UI.support.transition && !force) {

	                $body.one(UI.support.transition.end, function() {
	                    finalize();
	                }).css((rtl ? "margin-right" : "margin-left"), "");

	                setTimeout(function(){
	                    bar.removeClass("uk-offcanvas-bar-show");
	                }, 0);

	            } else {
	                finalize();
	            }
	        },

	        _initElement: function(element) {

	            if (element.data("OffcanvasInit")) return;

	            element.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas", function(e) {

	                var target = UI.$(e.target);

	                if (!e.type.match(/swipe/)) {

	                    if (!target.hasClass("uk-offcanvas-close")) {
	                        if (target.hasClass("uk-offcanvas-bar")) return;
	                        if (target.parents(".uk-offcanvas-bar:first").length) return;
	                    }
	                }

	                e.stopImmediatePropagation();
	                Offcanvas.hide();
	            });

	            element.on("click", "a[href*='#']", function(e){

	                var link = UI.$(this),
	                    href = link.attr("href");

	                if (href == "#") {
	                    return;
	                }

	                UI.$doc.one('hide.uk.offcanvas', function() {

	                    var target;

	                    try {
	                        target = UI.$(link[0].hash);
	                    } catch (e){
	                        target = '';
	                    }

	                    if (!target.length) {
	                        target = UI.$('[name="'+link[0].hash.replace('#','')+'"]');
	                    }

	                    if (target.length && UI.Utils.scrollToElement) {
	                        UI.Utils.scrollToElement(target, UI.Utils.options(link.attr('data-uk-smooth-scroll') || '{}'));
	                    } else {
	                        window.location.href = href;
	                    }
	                });

	                Offcanvas.hide();
	            });

	            element.data("OffcanvasInit", true);
	        }
	    };

	    UI.component('offcanvasTrigger', {

	        boot: function() {

	            // init code
	            $html.on("click.offcanvas.uikit", "[data-uk-offcanvas]", function(e) {

	                e.preventDefault();

	                var ele = UI.$(this);

	                if (!ele.data("offcanvasTrigger")) {
	                    var obj = UI.offcanvasTrigger(ele, UI.Utils.options(ele.attr("data-uk-offcanvas")));
	                    ele.trigger("click");
	                }
	            });

	            $html.on('keydown.uk.offcanvas', function(e) {

	                if (e.keyCode === 27) { // ESC
	                    Offcanvas.hide();
	                }
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.options = UI.$.extend({
	                "target": $this.element.is("a") ? $this.element.attr("href") : false
	            }, this.options);

	            this.on("click", function(e) {
	                e.preventDefault();
	                Offcanvas.show($this.options.target);
	            });
	        }
	    });

	    UI.offcanvas = Offcanvas;

	})(UIkit);

	(function(UI) {

	    "use strict";

	    var Animations;

	    UI.component('switcher', {

	        defaults: {
	            connect   : false,
	            toggle    : ">*",
	            active    : 0,
	            animation : false,
	            duration  : 200,
	            swiping   : true
	        },

	        animating: false,

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$("[data-uk-switcher]", context).each(function() {
	                    var switcher = UI.$(this);

	                    if (!switcher.data("switcher")) {
	                        var obj = UI.switcher(switcher, UI.Utils.options(switcher.attr("data-uk-switcher")));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.on("click.uikit.switcher", this.options.toggle, function(e) {
	                e.preventDefault();
	                $this.show(this);
	            });

	            if (this.options.connect) {

	                this.connect = UI.$(this.options.connect);

	                this.connect.find(".uk-active").removeClass(".uk-active");

	                // delegate switch commands within container content
	                if (this.connect.length) {

	                    // Init ARIA for connect
	                    this.connect.children().attr('aria-hidden', 'true');

	                    this.connect.on("click", '[data-uk-switcher-item]', function(e) {

	                        e.preventDefault();

	                        var item = UI.$(this).attr('data-uk-switcher-item');

	                        if ($this.index == item) return;

	                        switch(item) {
	                            case 'next':
	                            case 'previous':
	                                $this.show($this.index + (item=='next' ? 1:-1));
	                                break;
	                            default:
	                                $this.show(parseInt(item, 10));
	                        }
	                    });

	                    if (this.options.swiping) {

	                        this.connect.on('swipeRight swipeLeft', function(e) {
	                            e.preventDefault();
	                            if(!window.getSelection().toString()) {
	                                $this.show($this.index + (e.type == 'swipeLeft' ? 1 : -1));
	                            }
	                        });
	                    }
	                }

	                var toggles = this.find(this.options.toggle),
	                    active  = toggles.filter(".uk-active");

	                if (active.length) {
	                    this.show(active, false);
	                } else {

	                    if (this.options.active===false) return;

	                    active = toggles.eq(this.options.active);
	                    this.show(active.length ? active : toggles.eq(0), false);
	                }

	                // Init ARIA for toggles
	                toggles.not(active).attr('aria-expanded', 'false');
	                active.attr('aria-expanded', 'true');

	                this.on('changed.uk.dom', function() {
	                    $this.connect = UI.$($this.options.connect);
	                });
	            }

	        },

	        show: function(tab, animate) {

	            if (this.animating) {
	                return;
	            }

	            if (isNaN(tab)) {
	                tab = UI.$(tab);
	            } else {

	                var toggles = this.find(this.options.toggle);

	                tab = tab < 0 ? toggles.length-1 : tab;
	                tab = toggles.eq(toggles[tab] ? tab : 0);
	            }

	            var $this     = this,
	                toggles   = this.find(this.options.toggle),
	                active    = UI.$(tab),
	                animation = Animations[this.options.animation] || function(current, next) {

	                    if (!$this.options.animation) {
	                        return Animations.none.apply($this);
	                    }

	                    var anim = $this.options.animation.split(',');

	                    if (anim.length == 1) {
	                        anim[1] = anim[0];
	                    }

	                    anim[0] = anim[0].trim();
	                    anim[1] = anim[1].trim();

	                    return coreAnimation.apply($this, [anim, current, next]);
	                };

	            if (animate===false || !UI.support.animation) {
	                animation = Animations.none;
	            }

	            if (active.hasClass("uk-disabled")) return;

	            // Update ARIA for Toggles
	            toggles.attr('aria-expanded', 'false');
	            active.attr('aria-expanded', 'true');

	            toggles.filter(".uk-active").removeClass("uk-active");
	            active.addClass("uk-active");

	            if (this.options.connect && this.connect.length) {

	                this.index = this.find(this.options.toggle).index(active);

	                if (this.index == -1 ) {
	                    this.index = 0;
	                }

	                this.connect.each(function() {

	                    var container = UI.$(this),
	                        children  = UI.$(container.children()),
	                        current   = UI.$(children.filter('.uk-active')),
	                        next      = UI.$(children.eq($this.index));

	                        $this.animating = true;

	                        animation.apply($this, [current, next]).then(function(){

	                            current.removeClass("uk-active");
	                            next.addClass("uk-active");

	                            // Update ARIA for connect
	                            current.attr('aria-hidden', 'true');
	                            next.attr('aria-hidden', 'false');

	                            UI.Utils.checkDisplay(next, true);

	                            $this.animating = false;

	                        });
	                });
	            }

	            this.trigger("show.uk.switcher", [active]);
	        }
	    });

	    Animations = {

	        'none': function() {
	            var d = UI.$.Deferred();
	            d.resolve();
	            return d.promise();
	        },

	        'fade': function(current, next) {
	            return coreAnimation.apply(this, ['uk-animation-fade', current, next]);
	        },

	        'slide-bottom': function(current, next) {
	            return coreAnimation.apply(this, ['uk-animation-slide-bottom', current, next]);
	        },

	        'slide-top': function(current, next) {
	            return coreAnimation.apply(this, ['uk-animation-slide-top', current, next]);
	        },

	        'slide-vertical': function(current, next, dir) {

	            var anim = ['uk-animation-slide-top', 'uk-animation-slide-bottom'];

	            if (current && current.index() > next.index()) {
	                anim.reverse();
	            }

	            return coreAnimation.apply(this, [anim, current, next]);
	        },

	        'slide-left': function(current, next) {
	            return coreAnimation.apply(this, ['uk-animation-slide-left', current, next]);
	        },

	        'slide-right': function(current, next) {
	            return coreAnimation.apply(this, ['uk-animation-slide-right', current, next]);
	        },

	        'slide-horizontal': function(current, next, dir) {

	            var anim = ['uk-animation-slide-right', 'uk-animation-slide-left'];

	            if (current && current.index() > next.index()) {
	                anim.reverse();
	            }

	            return coreAnimation.apply(this, [anim, current, next]);
	        },

	        'scale': function(current, next) {
	            return coreAnimation.apply(this, ['uk-animation-scale-up', current, next]);
	        }
	    };

	    UI.switcher.animations = Animations;


	    // helpers

	    function coreAnimation(cls, current, next) {

	        var d = UI.$.Deferred(), clsIn = cls, clsOut = cls, release;

	        if (next[0]===current[0]) {
	            d.resolve();
	            return d.promise();
	        }

	        if (typeof(cls) == 'object') {
	            clsIn  = cls[0];
	            clsOut = cls[1] || cls[0];
	        }

	        UI.$body.css('overflow-x', 'hidden'); // fix scroll jumping in iOS

	        release = function() {

	            if (current) current.hide().removeClass('uk-active '+clsOut+' uk-animation-reverse');

	            next.addClass(clsIn).one(UI.support.animation.end, function() {

	                next.removeClass(''+clsIn+'').css({opacity:'', display:''});

	                d.resolve();

	                UI.$body.css('overflow-x', '');

	                if (current) current.css({opacity:'', display:''});

	            }.bind(this)).show();
	        };

	        next.css('animation-duration', this.options.duration+'ms');

	        if (current && current.length) {

	            current.css('animation-duration', this.options.duration+'ms');

	            current.css('display', 'none').addClass(clsOut+' uk-animation-reverse').one(UI.support.animation.end, function() {
	                release();
	            }.bind(this)).css('display', '');

	        } else {
	            next.addClass('uk-active');
	            release();
	        }

	        return d.promise();
	    }

	})(UIkit);

	(function(UI) {

	    "use strict";

	    UI.component('tab', {

	        defaults: {
	            'target'    : '>li:not(.uk-tab-responsive, .uk-disabled)',
	            'connect'   : false,
	            'active'    : 0,
	            'animation' : false,
	            'duration'  : 200,
	            'swiping'   : true
	        },

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$("[data-uk-tab]", context).each(function() {

	                    var tab = UI.$(this);

	                    if (!tab.data("tab")) {
	                        var obj = UI.tab(tab, UI.Utils.options(tab.attr("data-uk-tab")));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.current = false;

	            this.on("click.uikit.tab", this.options.target, function(e) {

	                e.preventDefault();

	                if ($this.switcher && $this.switcher.animating) {
	                    return;
	                }

	                var current = $this.find($this.options.target).not(this);

	                current.removeClass("uk-active").blur();

	                $this.trigger("change.uk.tab", [UI.$(this).addClass("uk-active"), $this.current]);

	                $this.current = UI.$(this);

	                // Update ARIA
	                if (!$this.options.connect) {
	                    current.attr('aria-expanded', 'false');
	                    UI.$(this).attr('aria-expanded', 'true');
	                }
	            });

	            if (this.options.connect) {
	                this.connect = UI.$(this.options.connect);
	            }

	            // init responsive tab
	            this.responsivetab = UI.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>');

	            this.responsivetab.dropdown = this.responsivetab.find('.uk-dropdown');
	            this.responsivetab.lst      = this.responsivetab.dropdown.find('ul');
	            this.responsivetab.caption  = this.responsivetab.find('a:first');

	            if (this.element.hasClass("uk-tab-bottom")) this.responsivetab.dropdown.addClass("uk-dropdown-up");

	            // handle click
	            this.responsivetab.lst.on('click.uikit.tab', 'a', function(e) {

	                e.preventDefault();
	                e.stopPropagation();

	                var link = UI.$(this);

	                $this.element.children('li:not(.uk-tab-responsive)').eq(link.data('index')).trigger('click');
	            });

	            this.on('show.uk.switcher change.uk.tab', function(e, tab) {
	                $this.responsivetab.caption.html(tab.text());
	            });

	            this.element.append(this.responsivetab);

	            // init UIkit components
	            if (this.options.connect) {
	                this.switcher = UI.switcher(this.element, {
	                    'toggle'    : '>li:not(.uk-tab-responsive)',
	                    'connect'   : this.options.connect,
	                    'active'    : this.options.active,
	                    'animation' : this.options.animation,
	                    'duration'  : this.options.duration,
	                    'swiping'   : this.options.swiping
	                });
	            }

	            UI.dropdown(this.responsivetab, {"mode": "click"});

	            // init
	            $this.trigger("change.uk.tab", [this.element.find(this.options.target).not('.uk-tab-responsive').filter('.uk-active')]);

	            this.check();

	            UI.$win.on('resize orientationchange', UI.Utils.debounce(function(){
	                if ($this.element.is(":visible"))  $this.check();
	            }, 100));

	            this.on('display.uk.check', function(){
	                if ($this.element.is(":visible"))  $this.check();
	            });
	        },

	        check: function() {

	            var children = this.element.children('li:not(.uk-tab-responsive)').removeClass('uk-hidden');

	            if (!children.length) {
	                this.responsivetab.addClass('uk-hidden');
	                return;
	            }

	            var top          = (children.eq(0).offset().top + Math.ceil(children.eq(0).height()/2)),
	                doresponsive = false,
	                item, link, clone;

	            this.responsivetab.lst.empty();

	            children.each(function(){

	                if (UI.$(this).offset().top > top) {
	                    doresponsive = true;
	                }
	            });

	            if (doresponsive) {

	                for (var i = 0; i < children.length; i++) {

	                    item  = UI.$(children.eq(i));
	                    link  = item.find('a');

	                    if (item.css('float') != 'none' && !item.attr('uk-dropdown')) {

	                        if (!item.hasClass('uk-disabled')) {

	                            clone = item[0].outerHTML.replace('<a ', '<a data-index="'+i+'" ');

	                            this.responsivetab.lst.append(clone);
	                        }

	                        item.addClass('uk-hidden');
	                    }
	                }
	            }

	            this.responsivetab[this.responsivetab.lst.children('li').length ? 'removeClass':'addClass']('uk-hidden');
	        }
	    });

	})(UIkit);

	(function(UI){

	    "use strict";

	    UI.component('cover', {

	        defaults: {
	            automute : true
	        },

	        boot: function() {

	            // auto init
	            UI.ready(function(context) {

	                UI.$("[data-uk-cover]", context).each(function(){

	                    var ele = UI.$(this);

	                    if(!ele.data("cover")) {
	                        var plugin = UI.cover(ele, UI.Utils.options(ele.attr("data-uk-cover")));
	                    }
	                });
	            });
	        },

	        init: function() {

	            this.parent = this.element.parent();

	            UI.$win.on('load resize orientationchange', UI.Utils.debounce(function(){
	                this.check();
	            }.bind(this), 100));

	            this.on("display.uk.check", function(e) {
	                if(this.element.is(":visible")) this.check();
	            }.bind(this));

	            this.check();

	            if (this.element.is('iframe') && this.options.automute) {

	                var src = this.element.attr('src');

	                this.element.attr('src', '').on('load', function(){

	                    this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}', '*');

	                }).attr('src', [src, (src.indexOf('?') > -1 ? '&':'?'), 'enablejsapi=1&api=1'].join(''));
	            }
	        },

	        check: function() {

	            this.element.css({
	                'width'  : '',
	                'height' : ''
	            });

	            this.dimension = {w: this.element.width(), h: this.element.height()};

	            if (this.element.attr('width') && !isNaN(this.element.attr('width'))) {
	                this.dimension.w = this.element.attr('width');
	            }

	            if (this.element.attr('height') && !isNaN(this.element.attr('height'))) {
	                this.dimension.h = this.element.attr('height');
	            }

	            this.ratio     = this.dimension.w / this.dimension.h;

	            var w = this.parent.width(), h = this.parent.height(), width, height;

	            // if element height < parent height (gap underneath)
	            if ((w / this.ratio) < h) {

	                width  = Math.ceil(h * this.ratio);
	                height = h;

	            // element width < parent width (gap to right)
	            } else {

	                width  = w;
	                height = Math.ceil(w / this.ratio);
	            }

	            this.element.css({
	                'width'  : width,
	                'height' : height
	            });
	        }
	    });

	})(UIkit);


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! UIkit 2.22.0 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
	!function(i){var t;window.UIkit&&(t=i(UIkit)),"function"=="function"&&__webpack_require__(3)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return t||i(UIkit)}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}(function(i){"use strict";function t(t){return e?(e.lightbox=t,e):(e=i.$(['<div class="uk-modal">','<div class="uk-modal-dialog uk-modal-dialog-lightbox uk-slidenav-position" style="margin-left:auto;margin-right:auto;width:200px;height:200px;top:'+Math.abs(window.innerHeight/2-200)+'px;">','<a href="#" class="uk-modal-close uk-close uk-close-alt"></a>','<div class="uk-lightbox-content"></div>','<div class="uk-modal-spinner uk-hidden"></div>',"</div>","</div>"].join("")).appendTo("body"),e.dialog=e.find(".uk-modal-dialog:first"),e.content=e.find(".uk-lightbox-content:first"),e.loader=e.find(".uk-modal-spinner:first"),e.closer=e.find(".uk-close.uk-close-alt"),e.modal=i.modal(e,{modal:!1}),e.on("swipeRight swipeLeft",function(i){e.lightbox["swipeLeft"==i.type?"next":"previous"]()}).on("click","[data-lightbox-previous], [data-lightbox-next]",function(t){t.preventDefault(),e.lightbox[i.$(this).is("[data-lightbox-next]")?"next":"previous"]()}),e.on("hide.uk.modal",function(){e.content.html("")}),i.$win.on("load resize orientationchange",i.Utils.debounce(function(){e.is(":visible")&&!i.Utils.isFullscreen()&&e.lightbox.fitSize()}.bind(this),100)),e.lightbox=t,e)}var e,o={};return i.component("lightbox",{defaults:{group:!1,duration:400,keyboard:!0},index:0,items:!1,boot:function(){i.$html.on("click","[data-uk-lightbox]",function(t){t.preventDefault();var e=i.$(this);e.data("lightbox")||i.lightbox(e,i.Utils.options(e.attr("data-uk-lightbox"))),e.data("lightbox").show(e)}),i.$doc.on("keyup",function(i){if(e&&e.is(":visible")&&e.lightbox.options.keyboard)switch(i.preventDefault(),i.keyCode){case 37:e.lightbox.previous();break;case 39:e.lightbox.next()}})},init:function(){var t=[];if(this.index=0,this.siblings=[],this.element&&this.element.length){var e=this.options.group?i.$(['[data-uk-lightbox*="'+this.options.group+'"]',"[data-uk-lightbox*='"+this.options.group+"']"].join(",")):this.element;e.each(function(){var e=i.$(this);t.push({source:e.attr("href"),title:e.attr("title"),type:e.attr("data-lightbox-type")||"auto",link:e})}),this.index=e.index(this.element),this.siblings=t}else this.options.group&&this.options.group.length&&(this.siblings=this.options.group);this.trigger("lightbox-init",[this])},show:function(e){this.modal=t(this),this.modal.dialog.stop(),this.modal.content.stop();var o,n,s=this,h=i.$.Deferred();e=e||0,"object"==typeof e&&this.siblings.forEach(function(i,t){e[0]===i.link[0]&&(e=t)}),0>e?e=this.siblings.length-e:this.siblings[e]||(e=0),n=this.siblings[e],o={lightbox:s,source:n.source,type:n.type,index:e,promise:h,title:n.title,item:n,meta:{content:"",width:null,height:null}},this.index=e,this.modal.content.empty(),this.modal.is(":visible")||(this.modal.content.css({width:"",height:""}).empty(),this.modal.modal.show()),this.modal.loader.removeClass("uk-hidden"),h.promise().done(function(){s.data=o,s.fitSize(o)}).fail(function(){o.meta.content='<div class="uk-position-cover uk-flex uk-flex-middle uk-flex-center"><strong>Loading resource failed!</strong></div>',o.meta.width=400,o.meta.height=300,s.data=o,s.fitSize(o)}),s.trigger("showitem.uk.lightbox",[o])},fitSize:function(){var t=this,e=this.data,o=this.modal.dialog.outerWidth()-this.modal.dialog.width(),n=parseInt(this.modal.dialog.css("margin-top"),10),s=parseInt(this.modal.dialog.css("margin-bottom"),10),h=n+s,a=e.meta.content,d=t.options.duration;this.siblings.length>1&&(a=[a,'<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous uk-hidden-touch" data-lightbox-previous></a>','<a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next uk-hidden-touch" data-lightbox-next></a>'].join(""));var l,r,u=i.$("<div>&nbsp;</div>").css({opacity:0,position:"absolute",top:0,left:0,width:"100%","max-width":t.modal.dialog.css("max-width"),padding:t.modal.dialog.css("padding"),margin:t.modal.dialog.css("margin")}),c=e.meta.width,g=e.meta.height;u.appendTo("body").width(),l=u.width(),r=window.innerHeight-h,u.remove(),this.modal.dialog.find(".uk-modal-caption").remove(),e.title&&(this.modal.dialog.append('<div class="uk-modal-caption">'+e.title+"</div>"),r-=this.modal.dialog.find(".uk-modal-caption").outerHeight()),l<e.meta.width&&(g=Math.floor(g*(l/c)),c=l),g>r&&(g=Math.floor(r),c=Math.ceil(e.meta.width*(r/e.meta.height))),this.modal.content.css("opacity",0).width(c).html(a),"iframe"==e.type&&this.modal.content.find("iframe:first").height(g);var m=g+o,p=Math.floor(window.innerHeight/2-m/2)-h;0>p&&(p=0),this.modal.closer.addClass("uk-hidden"),t.modal.data("mwidth")==c&&t.modal.data("mheight")==g&&(d=0),this.modal.dialog.animate({width:c+o,height:g+o,top:p},d,"swing",function(){t.modal.loader.addClass("uk-hidden"),t.modal.content.css({width:""}).animate({opacity:1},function(){t.modal.closer.removeClass("uk-hidden")}),t.modal.data({mwidth:c,mheight:g})})},next:function(){this.show(this.siblings[this.index+1]?this.index+1:0)},previous:function(){this.show(this.siblings[this.index-1]?this.index-1:this.siblings.length-1)}}),i.plugin("lightbox","image",{init:function(i){i.on("showitem.uk.lightbox",function(i,t){if("image"==t.type||t.source&&t.source.match(/\.(jpg|jpeg|png|gif)$/i)){var e=function(i,e,o){t.meta={content:'<img class="uk-responsive-width" width="'+e+'" height="'+o+'" src ="'+i+'">',width:e,height:o},t.type="image",t.promise.resolve()};if(o[t.source])e(t.source,o[t.source].width,o[t.source].height);else{var n=new Image;n.onerror=function(){t.promise.reject("Loading image failed")},n.onload=function(){o[t.source]={width:n.width,height:n.height},e(t.source,o[t.source].width,o[t.source].height)},n.src=t.source}}})}}),i.plugin("lightbox","youtube",{init:function(i){var t=/(\/\/.*?youtube\.[a-z]+)\/watch\?v=([^&]+)&?(.*)/,e=/youtu\.be\/(.*)/;i.on("showitem.uk.lightbox",function(i,n){var s,h,a=function(i,t,e){n.meta={content:'<iframe src="//www.youtube.com/embed/'+i+'" width="'+t+'" height="'+e+'" style="max-width:100%;"></iframe>',width:t,height:e},n.type="iframe",n.promise.resolve()};if((h=n.source.match(t))&&(s=h[2]),(h=n.source.match(e))&&(s=h[1]),s){if(o[s])a(s,o[s].width,o[s].height);else{var d=new Image,l=!1;d.onerror=function(){o[s]={width:640,height:320},a(s,o[s].width,o[s].height)},d.onload=function(){120==d.width&&90==d.height?l?(o[s]={width:640,height:320},a(s,o[s].width,o[s].height)):(l=!0,d.src="//img.youtube.com/vi/"+s+"/0.jpg"):(o[s]={width:d.width,height:d.height},a(s,d.width,d.height))},d.src="//img.youtube.com/vi/"+s+"/maxresdefault.jpg"}i.stopImmediatePropagation()}})}}),i.plugin("lightbox","vimeo",{init:function(t){var e,n=/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/;t.on("showitem.uk.lightbox",function(t,s){var h,a=function(i,t,e){s.meta={content:'<iframe src="//player.vimeo.com/video/'+i+'" width="'+t+'" height="'+e+'" style="width:100%;box-sizing:border-box;"></iframe>',width:t,height:e},s.type="iframe",s.promise.resolve()};(e=s.source.match(n))&&(h=e[2],o[h]?a(h,o[h].width,o[h].height):i.$.ajax({type:"GET",url:"http://vimeo.com/api/oembed.json?url="+encodeURI(s.source),jsonp:"callback",dataType:"jsonp",success:function(i){o[h]={width:i.width,height:i.height},a(h,o[h].width,o[h].height)}}),t.stopImmediatePropagation())})}}),i.plugin("lightbox","video",{init:function(t){t.on("showitem.uk.lightbox",function(t,e){var n=function(i,t,o){e.meta={content:'<video class="uk-responsive-width" src="'+i+'" width="'+t+'" height="'+o+'" controls></video>',width:t,height:o},e.type="video",e.promise.resolve()};if("video"==e.type||e.source.match(/\.(mp4|webm|ogv)$/i))if(o[e.source])n(e.source,o[e.source].width,o[e.source].height);else var s=i.$('<video style="position:fixed;visibility:hidden;top:-10000px;"></video>').attr("src",e.source).appendTo("body"),h=setInterval(function(){s[0].videoWidth&&(clearInterval(h),o[e.source]={width:s[0].videoWidth,height:s[0].videoHeight},n(e.source,o[e.source].width,o[e.source].height),s.remove())},20)})}}),i.lightbox.create=function(t,e){if(t){var o,n=[];return t.forEach(function(t){n.push(i.$.extend({source:"",title:"",type:"auto",link:!1},"string"==typeof t?{source:t}:t))}),o=i.lightbox(i.$.extend({},e,{group:n}))}},i.lightbox});


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	(function($){
	  $(function(){
	    (function(main, meta, fn){
	      if (!main.length) return;
	      fn = function() {
	        main.css('min-height','');
	        meta = document.body.getBoundingClientRect();
	        if (meta.height < window.innerHeight) {
	          main.css('min-height', (main.outerHeight() + (window.innerHeight - meta.height))+'px');
	        }
	        return fn;
	      };
	      UIkit.$win.on('load resize', fn());
	    })($('#tm-main'));
	  });
	})(jQuery);


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*global jQuery */
	/*!
	* FitText.js 1.2
	*
	* Copyright 2011, Dave Rupert http://daverupert.com
	* Released under the WTFPL license
	* http://sam.zoy.org/wtfpl/
	*
	* Date: Thu May 05 14:23:00 2011 -0600
	*/

	(function( $ ){
	  $.fn.fitText = function( kompressor, options ) {
	    var compressor = kompressor || 1,
	      settings = $.extend({
	        'minFontSize' : Number.NEGATIVE_INFINITY,
	        'maxFontSize' : Number.POSITIVE_INFINITY
	      }, options);
	    return this.each(function(){
	      var $this = $(this);

	      var resizer = function () {
	        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
	      };

	      resizer();

	      $(window).on('resize.fittext orientationchange.fittext', resizer);
	    });
	  };
	})(jQuery);


/***/ }
/******/ ]);