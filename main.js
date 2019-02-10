/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/js/index.js":
/*!****************************!*\
  !*** ./client/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_audio_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/audio-player */ \"./client/js/lib/audio-player.js\");\n/* harmony import */ var _lib_scroll_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/scroll-bar */ \"./client/js/lib/scroll-bar.js\");\n/* harmony import */ var _lib_tracks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/tracks */ \"./client/js/lib/tracks.js\");\n\n\n\n\nwindow.onload = () => {\n    new _lib_audio_player__WEBPACK_IMPORTED_MODULE_0__[\"Audio\"](document.querySelector('.mosaic-player'), _lib_tracks__WEBPACK_IMPORTED_MODULE_2__[\"tracks\"]);\n    Object(_lib_scroll_bar__WEBPACK_IMPORTED_MODULE_1__[\"scrollBarInitializer\"])(\n        document.querySelector('.mosaic-scroll-bar'),\n        document.querySelector('.mosaic-scroll-bar-scroller')\n    );\n};\n\n\n//# sourceURL=webpack:///./client/js/index.js?");

/***/ }),

/***/ "./client/js/lib/audio-player.js":
/*!***************************************!*\
  !*** ./client/js/lib/audio-player.js ***!
  \***************************************/
/*! exports provided: Audio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Audio\", function() { return Audio; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./client/js/lib/utils.js\");\n/* harmony import */ var _dom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-utils */ \"./client/js/lib/dom-utils.js\");\n\n\n\n\n\nclass Audio {\n    constructor(node, tracks) {\n        this.node = node;\n        this.tracks = tracks;\n        this.current = this.node.querySelector('source');\n        this.description = this.node.querySelector('.mosaic-description');\n        this.duration = this.node.querySelector('.mosaic-time-holder');\n        this.hover = this.node.querySelector('.mosaic-seek-bar');\n        this.nextButton = this.node.querySelector('.mosaic-next');\n        this.playButton = this.node.querySelector('.mosaic-play');\n        this.playhead = this.node.querySelector('.mosaic-play-bar');\n        this.prevButton = this.node.querySelector('.mosaic-previous');\n        this.scrubber = false;\n        this.source = this.node.querySelector('audio');\n        this.sub = 'px';\n        this.timeline = this.node.querySelector('.mosaic-progress');\n        this.timelineWidth = this.timeline.offsetWidth - this.playhead.offsetWidth;\n        this.title = this.node.querySelector('.mosaic-title');\n\n        this.nextButton.addEventListener('click', this.next.bind(this));\n        this.playButton.addEventListener('click', this.play.bind(this));\n        this.playhead.addEventListener('mousedown', this.mouseDown.bind(this));\n        this.prevButton.addEventListener('click', this.previous.bind(this));\n        this.source.addEventListener('durationchange', this.returnDuration.bind(this));\n        this.source.addEventListener('timeupdate', this.updateTime.bind(this));\n        this.source.addEventListener('timeupdate', this.handlePlayhead.bind(this));\n        this.timeline.addEventListener('mousedown', this.mouseDown.bind(this));\n        this.timeline.addEventListener('mouseover', this.handleHover.bind(this));\n\n        this.source.load();\n\n        window.addEventListener('mouseup', this.mouseUp.bind(this));\n        window.addEventListener('resize', this.handleResize.bind(this));\n    }\n\n    addHover(e) {\n        let positionOffset = Object(_dom_utils__WEBPACK_IMPORTED_MODULE_1__[\"handleOffsetParent\"])(this.timeline);\n        let newMargLeft = e.pageX - positionOffset;\n\n        if (newMargLeft >= 0 && newMargLeft <= this.timelineWidth) {\n            this.hover.style.width = `${newMargLeft}px`;\n        }\n\n        if (newMargLeft < 0) {\n            this.hover.style.width = '0px';\n        }\n\n        if (newMargLeft > this.timelineWidth) {\n            this.hover.style.width = `${this.timelineWidth}px`;\n        }\n    }\n\n    handleClick(e) {\n        let positionOffset = Object(_dom_utils__WEBPACK_IMPORTED_MODULE_1__[\"handleOffsetParent\"])(this.timeline);\n\n        return (e.pageX - positionOffset) / this.timelineWidth;\n    }\n\n    handleHover() {\n        this.timeline.addEventListener('mousemove', this.addHover.bind(this), false);\n        this.timeline.addEventListener('mouseout', this.removeHover.bind(this), false);\n    }\n\n    handlePlayhead() {\n        let playPercent = this.timelineWidth * (this.source.currentTime / this.source.duration);\n        this.playhead.style.paddingLeft = `${playPercent}px`;\n    }\n\n    handleResize() {\n        let padding = this.playhead.style.paddingLeft;\n        let p;\n\n        !padding ? p = 0 : p = parseInt(padding.substring(0, padding.length - 2), 10);\n        this.timelineWidth = (this.timeline.offsetWidth - this.playhead.offsetWidth) + p;\n        this.handlePlayhead();\n    }\n\n    mouseDown() {\n        this.scrubber = true;\n        this.source.removeEventListener('timeupdate', this.handlePlayhead.bind(this), false);\n    }\n\n    mouseUp(e) {\n        if (!this.scrubber) {\n            return;\n        }\n\n        this.movePlayhead(e);\n        window.removeEventListener('mousemove', this.movePlayhead.bind(this), true);\n        this.source.currentTime = this.source.duration * this.handleClick(e);\n        this.source.addEventListener('timeupdate', this.handlePlayhead.bind(this), false);\n        this.scrubber = false;\n    }\n    movePlayhead(e) {\n        let positionOffset = Object(_dom_utils__WEBPACK_IMPORTED_MODULE_1__[\"handleOffsetParent\"])(this.timeline);\n        let newMargLeft = e.pageX - positionOffset;\n\n        if (newMargLeft >= 0 && newMargLeft <= this.timelineWidth) {\n            this.playhead.style.paddingLeft = `${newMargLeft}px`;\n        }\n\n        if (newMargLeft < 0) {\n            this.playhead.style.paddingLeft = '0px';\n        }\n\n        if (newMargLeft > this.timelineWidth) {\n            this.playhead.style.paddingLeft = `${this.timelineWidth}px`;\n        }\n    }\n\n    next() {\n        let count = this.current.getAttribute('src')[6];\n        let wasPaused = false;\n\n        if (count === this.tracks.length) {\n            this.current.setAttribute('src', `audio/${this.tracks[0].src}.mp3`);\n            this.title.innerHTML = this.tracks[0].title;\n            this.description.innerHTML = this.tracks[0].description;\n        } else {\n            this.current.setAttribute('src', `audio/${this.tracks[count].src}.mp3`);\n            this.title.innerHTML = this.tracks[count].title;\n            this.description.innerHTML = this.tracks[count].description;\n        }\n\n        if (this.source.paused) {\n            wasPaused = true;\n        }\n\n        this.source.load();\n\n        if (!wasPaused) {\n            this.source.play();\n        }\n\n        this.playhead.style.paddingLeft = '0px';\n    }\n\n    play() {\n        if (this.source.paused) {\n            this.source.play();\n            this.timeline.classList.toggle('active');\n            this.nextButton.classList.toggle('active');\n            this.prevButton.classList.toggle('active');\n            this.playButton.classList.toggle('active');\n            this.playButton.children[0].classList = '';\n            this.playButton.children[0].classList = 'fa fa-pause';\n        } else {\n            this.source.pause();\n            this.timeline.classList.toggle('active');\n            this.nextButton.classList.toggle('active');\n            this.prevButton.classList.toggle('active');\n            this.playButton.classList.toggle('active');\n            this.playButton.children[0].classList = '';\n            this.playButton.children[0].classList = 'fa fa-play';\n        }\n    }\n\n    previous() {\n        let count = this.current.getAttribute('src')[6];\n        let wasPaused = false;\n\n        if (count === 1) {\n            this.current.setAttribute(\n                'src',\n                `audio/${this.tracks[this.tracks.length - 1].src}.mp3`\n            );\n            this.title.innerHTML = this.tracks[this.tracks.length - 1].title;\n            this.description.innerHTML = this.tracks[this.tracks.length - 1].description;\n        } else {\n            this.current.setAttribute(\n                'src',\n                `audio/${this.tracks[count - 2].src}.mp3`\n            );\n            this.title.innerHTML = this.tracks[count - 2].title;\n            this.description.innerHTML = this.tracks[count - 2].description;\n        }\n\n        if (this.source.paused) {\n            wasPaused = true;\n        }\n\n        this.source.load();\n\n        if (!wasPaused) {\n            this.source.play();\n        }\n\n        this.playhead.style.paddingLeft = '0px';\n    }\n\n    removeHover() {\n        this.hover.style.width = '0px';\n    }\n\n    returnDuration() {\n        this.duration.innerHTML = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"formatPlaybackTime\"])(this.source.duration);\n        this.updateTime();\n    }\n\n    updateTime() {\n        this.duration.innerHTML =\n            `${Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"formatPlaybackTime\"])(this.source.currentTime)} / ${Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"formatPlaybackTime\"])(this.source.duration)}`; // eslint-disable-line max-len\n\n        if (this.source.currentTime === this.source.duration) {\n            this.next();\n            this.play();\n            this.timeline.classList.toggle('active');\n            this.nextButton.classList.toggle('active');\n            this.prevButton.classList.toggle('active');\n            this.playButton.classList.toggle('active');\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./client/js/lib/audio-player.js?");

/***/ }),

/***/ "./client/js/lib/dom-utils.js":
/*!************************************!*\
  !*** ./client/js/lib/dom-utils.js ***!
  \************************************/
/*! exports provided: distanceFromPageTop, documentHeight, elementOffsetHeight, handleOffsetParent, visibleDocumentHeightPercentage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"distanceFromPageTop\", function() { return distanceFromPageTop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"documentHeight\", function() { return documentHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elementOffsetHeight\", function() { return elementOffsetHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleOffsetParent\", function() { return handleOffsetParent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"visibleDocumentHeightPercentage\", function() { return visibleDocumentHeightPercentage; });\nconst distanceFromPageTop = () => window.pageYOffset;\n\nconst documentHeight = () => {\n    const body = document.querySelector('body');\n    const html = document.querySelector('html');\n\n    return Math.max(\n        body.offsetHeight,\n        body.scrollHeight,\n        html.clientHeight,\n        html.offsetHeight,\n        html.scrollHeight\n    );\n};\n\nconst elementOffsetHeight = element => element.offsetHeight;\n\nconst handleOffsetParent = node => {\n    let n = node;\n    let o = 0;\n\n    while (n.offsetParent !== null) {\n        o = o + n.offsetLeft;\n        n = n.offsetParent;\n    }\n\n    return o;\n};\n\nconst viewportHeight = () => Math.max(\n    document.documentElement.clientHeight,\n    window.innerHeight || 0\n);\n\nconst visibleDocumentHeightPercentage = () => {\n    return viewportHeight() / documentHeight();\n};\n\n\n//# sourceURL=webpack:///./client/js/lib/dom-utils.js?");

/***/ }),

/***/ "./client/js/lib/scroll-bar.js":
/*!*************************************!*\
  !*** ./client/js/lib/scroll-bar.js ***!
  \*************************************/
/*! exports provided: scrollBarInitializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollBarInitializer\", function() { return scrollBarInitializer; });\n/* harmony import */ var _dom_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils */ \"./client/js/lib/dom-utils.js\");\n\n\nconst scrollBarState = {};\n\nconst percentageOfPageToScrollBarPixels = currentHeight => {\n    const percentageOfPageScrolled = currentHeight / scrollBarState.documentHeight;\n\n    return scrollBarState.scrollBarHeight * percentageOfPageScrolled;\n};\n\nconst calculateScrollerMargin = () => {\n    return percentageOfPageToScrollBarPixels(Object(_dom_utils__WEBPACK_IMPORTED_MODULE_0__[\"distanceFromPageTop\"])());\n};\n\nconst calculateScrollerHeight = () => {\n    return scrollBarState.scrollBarHeight * Object(_dom_utils__WEBPACK_IMPORTED_MODULE_0__[\"visibleDocumentHeightPercentage\"])();\n};\n\nconst setScrollerHeight = (scroller, calculatedHeight) => {\n    scroller.style.height = calculatedHeight + 'px';\n};\n\nconst setScrollerMarginTop = (scroller, calculatedMarginTop) => {\n    scroller.style.marginTop = calculatedMarginTop + 'px';\n};\n\nconst setNewScrollerStyles = scroller => {\n    setScrollerHeight(scroller, calculateScrollerHeight());\n    setScrollerMarginTop(scroller, calculateScrollerMargin());\n};\n\nconst scrollBarInitializer = (scrollBarNode, scrollerNode) => {\n    scrollBarState.documentHeight = Object(_dom_utils__WEBPACK_IMPORTED_MODULE_0__[\"documentHeight\"])();\n    scrollBarState.scrollBarHeight = Object(_dom_utils__WEBPACK_IMPORTED_MODULE_0__[\"elementOffsetHeight\"])(scrollBarNode);\n\n    setNewScrollerStyles(scrollerNode);\n\n    window.addEventListener('resize', () => {\n        scrollBarState.documentHeight = Object(_dom_utils__WEBPACK_IMPORTED_MODULE_0__[\"documentHeight\"])();\n\n        setNewScrollerStyles(scrollerNode);\n    });\n\n    window.addEventListener('scroll', () => {\n        setScrollerMarginTop(scrollerNode, calculateScrollerMargin());\n    });\n};\n\n\n//# sourceURL=webpack:///./client/js/lib/scroll-bar.js?");

/***/ }),

/***/ "./client/js/lib/tracks.js":
/*!*********************************!*\
  !*** ./client/js/lib/tracks.js ***!
  \*********************************/
/*! exports provided: tracks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tracks\", function() { return tracks; });\n/* eslint-disable max-len */\nconst tracks = [\n    {\n        src: '1',\n        title: '\"Through the Sunken Glades\"',\n        description: 'Inspired by games like <em class=\"logo\">Ori and the Blind Forest</em> and <em class=\"logo\">Seasons After Fall</em>.  I wanted to bring to life all of the woodland creatures, plants, and little spirits, so I used exotic winds and percussion from both <a class=\"content--link\" href=\"http://embertone.com/\" target=\"_blank\" title=\"Embertone\">Embertone</a> and <a class=\"content--link\" href=\"https://soundiron.com/\" target=\"_blank\" title=\"Soundiron\">Soundiron</a> to paint the proper picture.  Strings, dulcimer, harp, and various synths/sound design as well.'\n    },\n    {\n        src: '2',\n        title: '\"The Ruined City of Quil\"',\n        description: 'The ruins of an ancient temple.  Endless corridors, colossal antichambers, and history long lost.  This piece accompanies <em class=\"logo\">Son of Nor\\'s</em> protagonist as they journey through the ruined temple of Taro, in the ancient city of Quil.  This was created mostly with strings from LA Scoring Strings, and live xiao.  I felt the long reverbs and lonely flute estbalished the feeling of being alone in such a long forgotten place quite perfectly.'\n    },\n    {\n        src: '3',\n        title: '\"Mable: The Journey\"',\n        description: 'As an exercise to learn dynamic music layering in Wwise, I created this piece to accompany gameplay in <em class=\"logo\">Mable: The Journey by Triple Vision Games</em>.  Its upbeat and exciting style was inspired by a fusion of Madeon and Disasterpeace.  In the end, I think it does a great job of adding to the fantasy atmosphere in a fast-paced retro world.'\n    },\n    {\n        src: '4',\n        title: '\"Breeze\"',\n        description: 'Relaxing wind across Scottish cliffside plateaus, and the faint sound of chimes in the distance.  <em class=\"logo\">Breeze</em> accompanies the player in their quest to herd sheep with a trusting (and unintentionally goofy) border collie in <em class=\"logo\">Bleat!</em>.  Live guitar, <a class=\"content--link\" href=\"https://soniccharge.com/synplant\" target=\"_blank\" title=\"Synplant\">Synplant</a>, upright bass, instruments from the <a class=\"content--link\" href=\"http://www.fbpsound.com/The-Toyshop-Sample-Library\" target=\"_blank\" title=\"Toyshop Sample Library\">Toyshop Library</a>, and various synths.'\n    },\n    {\n        src: '5',\n        title: '\"Giraffe Beats\"',\n        description: 'Created for Nico Prinz\\'s <em class=\"logo\">Oh My Giraffe</em>, an endless runner in Africa\\'s savanna.  Because of the simple and colorful art style, I decided that a very MIDI/dry sampled approached would work best for the music.  I ended up using quite a bit of African percussion, some sampled and some live, as well as a dry Pan flute for the melody.'\n    },\n    {\n        src: '6',\n        title: '\"Winter\"',\n        description: 'Created as a music redesign for <em class=\"logo\">Northguard\\'s</em> winter environment.  I wanted to create a sense of cold and loneliness, and I think the solemn progression along with the deep reverbs and bass does this quite well.  The flutes, especially the Irish penny-whistle, and the fluttering strings really lend themselves well to the frigid atmosphere and the search for warmth.'\n    }\n];\n\n\n//# sourceURL=webpack:///./client/js/lib/tracks.js?");

/***/ }),

/***/ "./client/js/lib/utils.js":
/*!********************************!*\
  !*** ./client/js/lib/utils.js ***!
  \********************************/
/*! exports provided: formatPlaybackTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatPlaybackTime\", function() { return formatPlaybackTime; });\nconst formatPlaybackTime = timeInSeconds => {\n    let sec_num = parseInt(timeInSeconds, 10);\n    let hours = Math.floor(sec_num / 3600);\n    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);\n    let seconds = sec_num - (hours * 3600) - (minutes * 60);\n\n    if (hours < 10 && hours > 0) {\n        hours = '0' + hours + ':';\n    } else {\n        hours = '';\n    }\n\n    if (minutes < 10) {\n        minutes = '0' + minutes;\n    }\n\n    if (seconds < 10) {\n        seconds = '0' + seconds;\n    }\n\n    return hours + minutes + ':' + seconds;\n};\n\n\n//# sourceURL=webpack:///./client/js/lib/utils.js?");

/***/ })

/******/ });