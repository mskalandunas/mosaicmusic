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

/***/ "./client/js/components/audio/AudioPlayer.js":
/*!***************************************************!*\
  !*** ./client/js/components/audio/AudioPlayer.js ***!
  \***************************************************/
/*! exports provided: NEXT_BUTTON, PAUSE, PLAY_BUTTON, PLAY, PLAYBAR, PREVIOUS_BUTTON, PROGRESS_BAR, TRACK_ACTIONS, AudioPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NEXT_BUTTON\", function() { return NEXT_BUTTON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PAUSE\", function() { return PAUSE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLAY_BUTTON\", function() { return PLAY_BUTTON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLAY\", function() { return PLAY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLAYBAR\", function() { return PLAYBAR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PREVIOUS_BUTTON\", function() { return PREVIOUS_BUTTON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PROGRESS_BAR\", function() { return PROGRESS_BAR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TRACK_ACTIONS\", function() { return TRACK_ACTIONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AudioPlayer\", function() { return AudioPlayer; });\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils */ \"./client/js/lib/utils/index.js\");\n/* harmony import */ var _lib_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/State */ \"./client/js/lib/State.js\");\n\n\n\nconst AUDIO_PLAYER_CLASSNAMES = {\n    NEXT_BUTTON: 'mosaic-next',\n    PAUSE: 'fa-pause',\n    PLAY_BUTTON: 'mosaic-play',\n    PLAY: 'fa-play',\n    PLAYBAR: 'mosaic-play-bar',\n    PREVIOUS_BUTTON: 'mosaic-previous',\n    PROGRESS_BAR: 'mosaic-progress'\n};\n\nconst {\n    NEXT_BUTTON,\n    PAUSE,\n    PLAY_BUTTON,\n    PLAY,\n    PLAYBAR,\n    PREVIOUS_BUTTON,\n    PROGRESS_BAR\n} = AUDIO_PLAYER_CLASSNAMES;\n\nconst TRACK_ACTIONS = {\n    [NEXT_BUTTON]: 'NEXT',\n    [PREVIOUS_BUTTON]: 'PREVIOUS'\n};\n\nclass AudioPlayer extends _lib_State__WEBPACK_IMPORTED_MODULE_1__[\"State\"] {\n    constructor({ currentTime = 0, node, trackList }) {\n        super();\n        this.node = node;\n        this.trackList = trackList;\n\n        this.audio = this.node.querySelector('audio');\n        this.audioSource = this.node.querySelector('source');\n        this.currentTimeNode = this.node.querySelector('.mosaic-current-time');\n        this.durationNode = this.node.querySelector('.mosaic-duration');\n        this.playButtonIcon = this.node.querySelector('.mosaic-play i');\n        this.playhead = this.node.querySelector('.mosaic-play-bar');\n        this.seekBar = this.node.querySelector('.mosaic-seek-bar');\n        this.timeline = this.node.querySelector('.mosaic-progress');\n        this.title = this.node.querySelector('.mosaic-title');\n\n        this.state = {\n            currentTime,\n            currentTrack: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_0__[\"findCurrentTrackFromNode\"])(this.audioSource, this.trackList),\n            duration: this.audio.duration,\n            paused: true,\n            timelineWidth: this.timeline.offsetWidth - this.playhead.offsetWidth\n        };\n\n        this.eventDelegator = this.eventDelegator.bind(this);\n\n        this.audio.addEventListener('durationchange', this.eventDelegator);\n        this.audio.addEventListener('timeupdate', this.eventDelegator);\n        this.node.addEventListener('click', this.eventDelegator);\n        this.timeline.addEventListener('mouseover', this.eventDelegator);\n        window.addEventListener('resize', this.eventDelegator);\n\n        this.audio.load();\n    }\n\n    addHover(e) {\n        const positionOffset = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_0__[\"handleOffsetParent\"])(this.timeline);\n        const paddingRight = e.pageX - positionOffset;\n\n        this.seekBar.style.paddingRight = paddingRight + 'px';\n    }\n\n    addMouseoverEventListeners() {\n        this.timeline.addEventListener('mousemove', this.addHover.bind(this), false);\n        this.timeline.addEventListener('mouseout', this.removeHover.bind(this), false);\n    }\n\n    changeAudioSource(track) {\n        this.audioSource.setAttribute('src', track);\n    }\n\n    changeTrackTitle(title) {\n        this.title.textContent = title;\n    }\n\n    eventDelegator(e) {\n        const { target, target: { className }, type } = e;\n\n        switch(type) {\n            case 'click':\n                switch(className) {\n                    case NEXT_BUTTON:\n                    case PREVIOUS_BUTTON:\n                        this.trackChange(TRACK_ACTIONS[e.target.className]);\n                        this.updateTrackDOM();\n                        return;\n                    case PLAY_BUTTON:\n                        this.playbackHandler();\n                        this.iconToggle();\n                        return;\n                    case PLAYBAR:\n                    case PROGRESS_BAR:\n                        this.setAudioCurrentTime(\n                            this.playbarOffsetLeftPercentage(e) * this.state.duration\n                        );\n                        return;\n                }\n                return;\n            case 'durationchange':\n                this.updateDuration(target.duration);\n                this.updateTime(this.durationNode, target.duration);\n                return;\n            case 'mouseover':\n                this.addMouseoverEventListeners();\n                return;\n            case 'resize':\n                this.resizeProgressBar();\n                return;\n            case 'timeupdate':\n                this.handleTimeUpdate(target.currentTime, this.currentTimeNode);\n                return;\n            default:\n                return;\n        }\n    }\n\n    handleTimeUpdate(currentTime, timeNode) {\n        this.updateCurrentTime(currentTime);\n        this.updateTime(timeNode, currentTime);\n        this.movePlayhead();\n\n        if (this.state.currentTime === this.state.duration) {\n            this.iconToggle();\n            this.trackChange(TRACK_ACTIONS[NEXT_BUTTON]);\n            this.updateTrackDOM();\n\n            if (this.state.paused === false) {\n                this.play();\n            }\n        }\n    }\n\n    iconToggle() {\n        if (this.state.paused) {\n            this.playButtonIcon.classList.remove(PAUSE);\n            this.playButtonIcon.classList.add(PLAY);\n        }\n\n        else {\n            this.playButtonIcon.classList.remove(PLAY);\n            this.playButtonIcon.classList.add(PAUSE);\n        }\n    }\n\n    movePlayhead() {\n        const percentageOfTrackPlayed = this.state.currentTime / this.state.duration;\n\n        this.playhead.style.paddingRight = (\n            percentageOfTrackPlayed * this.state.timelineWidth\n        ) + 'px';\n    }\n\n    pause() {\n        this.audio.pause();\n    }\n\n    play() {\n        this.audio.play();\n    }\n\n    playbackHandler() {\n        if (this.state.paused) {\n            this.play();\n        }\n\n        else {\n            this.pause();\n        }\n\n        this.setState({ paused: !this.state.paused });\n    }\n\n    playbarOffsetLeftPercentage(e) {\n        const positionOffset = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_0__[\"handleOffsetParent\"])(this.timeline);\n\n        return (e.pageX - positionOffset) / this.state.timelineWidth;\n    }\n\n    removeHover() {\n        this.seekBar.style.paddingRight = '0px';\n    }\n\n    resizeProgressBar() {\n        const padding = this.playhead.style.paddingRight\n            ? parseInt(\n                this.playhead.style.paddingRight.substring(\n                    0,\n                    this.playhead.style.paddingRight.length - 2\n                ), 10\n            ) : 0;\n\n        this.state.timelineWidth = (\n            this.timeline.offsetWidth - this.playhead.offsetWidth\n        ) + padding;\n        this.movePlayhead();\n    }\n\n    setAudioCurrentTime(currentTime) {\n        this.audio.currentTime = currentTime;\n    }\n\n    trackChange(action) {\n        const nextTrackIndex = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_0__[\"findIndexOfNextTrack\"])(\n            action,\n            this.state.currentTrack,\n            this.trackList\n        );\n\n        this.updateCurrentTrack(this.trackList[nextTrackIndex]);\n    }\n\n    updateCurrentTime(currentTime) {\n        this.setState({ currentTime });\n    }\n\n    updateCurrentTrack(currentTrack) {\n        this.setState({ currentTrack });\n    }\n\n    updateDuration(duration) {\n        this.setState({ duration });\n    }\n\n    updateTime(node, time) {\n        if (typeof time === 'number') {\n            node.innerHTML = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_0__[\"formatPlaybackTime\"])(time);\n        }\n    }\n\n    updateTrackDOM() {\n        this.changeAudioSource(this.state.currentTrack.src);\n        this.changeTrackTitle(this.state.currentTrack.title);\n        this.audio.load();\n\n        if (!this.state.paused) {\n            this.play();\n        }\n    }\n}\n\n//# sourceURL=webpack:///./client/js/components/audio/AudioPlayer.js?");

/***/ }),

/***/ "./client/js/components/scrollbar/Scrollbar.js":
/*!*****************************************************!*\
  !*** ./client/js/components/scrollbar/Scrollbar.js ***!
  \*****************************************************/
/*! exports provided: Scrollbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Scrollbar\", function() { return Scrollbar; });\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils */ \"./client/js/lib/utils/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./client/js/components/scrollbar/utils.js\");\n/* harmony import */ var _lib_State__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/State */ \"./client/js/lib/State.js\");\n\n\n\n\nclass Scrollbar extends _lib_State__WEBPACK_IMPORTED_MODULE_2__[\"State\"] {\n    constructor(scrollbarNode) {\n        super();\n        this.scrollbarNode = scrollbarNode;\n        this.scrollerNode = this.scrollbarNode.querySelector('.mosaic-scroll-bar-scroller');\n        this.state = {\n            documentHeight: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_0__[\"documentHeight\"])(),\n            mouseDown: false,\n            scrollbarHeight: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_0__[\"elementOffsetHeight\"])(scrollbarNode)\n        };\n\n        this.addEventListeners = this.addEventListeners.bind(this);\n        this.dragScroller = this.dragScroller.bind(this);\n        this.endScrollerDrag = this.endScrollerDrag.bind(this);\n        this.scrollToNewPosition = this.scrollToNewPosition.bind(this);\n\n        Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"setNewScrollerStyles\"])(this.scrollerNode, this.state);\n\n        this.addEventListeners();\n    }\n\n    addEventListeners() {\n        this.scrollbarNode.addEventListener('click', this.scrollToNewPosition);\n        this.scrollbarNode.addEventListener('mousedown', e => {\n            e.preventDefault();\n            this.setState({ mouseDown: true });\n\n            this.scrollbarNode.addEventListener('mousemove', this.dragScroller);\n        });\n\n        window.addEventListener('resize', () => {\n            if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"scrollBarIsVisible\"])() && !this.scrollbarHeight) {\n                this.setState({\n                    documentHeight: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_0__[\"documentHeight\"])(),\n                    scrollBarHeight: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_0__[\"elementOffsetHeight\"])(this.scrollbarNode)\n                });\n\n                Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"setNewScrollerStyles\"])(this.scrollerNode, this.state);\n            }\n        });\n\n        window.addEventListener('scroll', () => {\n            Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"setScrollerMarginTop\"])(this.scrollerNode, Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"calculateScrollerMargin\"])(this.state));\n        });\n    }\n\n    dragScroller(e) {\n        if (this.state.mouseDown) {\n            this.scrollToNewPosition(e);\n        }\n\n        window.addEventListener('mouseup', this.endScrollerDrag);\n    }\n\n    endScrollerDrag() {\n        this.setState({ mouseDown: false });\n\n        window.removeEventListener('mousemove', this.endScrollerDrag);\n    }\n\n    scrollToNewPosition({ offsetY }) {\n        Object(_lib_utils__WEBPACK_IMPORTED_MODULE_0__[\"scrollToY\"])(Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"calculateNewPosition\"])(this.state, offsetY));\n    }\n}\n\n//# sourceURL=webpack:///./client/js/components/scrollbar/Scrollbar.js?");

/***/ }),

/***/ "./client/js/components/scrollbar/utils.js":
/*!*************************************************!*\
  !*** ./client/js/components/scrollbar/utils.js ***!
  \*************************************************/
/*! exports provided: calculateNewPosition, calculateScrollerMargin, scrollBarIsVisible, setScrollerMarginTop, setNewScrollerStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateNewPosition\", function() { return calculateNewPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateScrollerMargin\", function() { return calculateScrollerMargin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollBarIsVisible\", function() { return scrollBarIsVisible; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setScrollerMarginTop\", function() { return setScrollerMarginTop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setNewScrollerStyles\", function() { return setNewScrollerStyles; });\n/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/constants */ \"./client/js/lib/constants.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/utils */ \"./client/js/lib/utils/index.js\");\n\n\n\nconst { SCROLLBAR_HIDDEN_HEIGHT, SCROLLBAR_HIDDEN_WIDTH } = _lib_constants__WEBPACK_IMPORTED_MODULE_0__[\"CONSTANTS\"];\n\nconst calculateNewPosition = ({ documentHeight, scrollbarHeight }, offsetY) => {\n    const clickedScrollPercentage = offsetY / scrollbarHeight;\n\n    return clickedScrollPercentage * documentHeight;\n};\n\nconst calculateScrollerMargin = context => {\n    return percentageOfPageToScrollBarPixels(context, Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__[\"distanceFromPageTop\"])());\n};\n\nconst calculateScrollerHeight = ({ scrollbarHeight }) => {\n    return scrollbarHeight * Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__[\"visibleDocumentHeightPercentage\"])();\n};\n\nconst percentageOfPageToScrollBarPixels = ({ documentHeight, scrollbarHeight }, currentHeight) => {\n    const percentageOfPageScrolled = currentHeight / documentHeight;\n\n    return scrollbarHeight * percentageOfPageScrolled;\n};\n\nconst scrollBarIsVisible = () => {\n    return Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__[\"viewportHeight\"])() > SCROLLBAR_HIDDEN_HEIGHT && Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__[\"viewportWidth\"])() > SCROLLBAR_HIDDEN_WIDTH;\n};\n\nconst setScrollerHeight = (scroller, calculatedHeight) => {\n    scroller.style.height = calculatedHeight + 'px';\n};\n\nconst setScrollerMarginTop = (scroller, calculatedMarginTop) => {\n    scroller.style.marginTop = calculatedMarginTop + 'px';\n};\n\nconst setNewScrollerStyles = (scroller, context) => {\n    setScrollerHeight(scroller, calculateScrollerHeight(context));\n    setScrollerMarginTop(scroller, calculateScrollerMargin(context));\n};\n\n//# sourceURL=webpack:///./client/js/components/scrollbar/utils.js?");

/***/ }),

/***/ "./client/js/index.js":
/*!****************************!*\
  !*** ./client/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_audio_AudioPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/audio/AudioPlayer */ \"./client/js/components/audio/AudioPlayer.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/utils */ \"./client/js/lib/utils/index.js\");\n/* harmony import */ var _components_scrollbar_Scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/scrollbar/Scrollbar */ \"./client/js/components/scrollbar/Scrollbar.js\");\n/* harmony import */ var _lib_trackList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/trackList */ \"./client/js/lib/trackList.js\");\n\n\n\n\n\nconst initializeApplication = () => {\n    new _components_audio_AudioPlayer__WEBPACK_IMPORTED_MODULE_0__[\"AudioPlayer\"]({\n        currentTime: 0,\n        node: document.querySelector('.mosaic-player'),\n        trackList: _lib_trackList__WEBPACK_IMPORTED_MODULE_3__[\"trackList\"]\n    });\n    new _components_scrollbar_Scrollbar__WEBPACK_IMPORTED_MODULE_2__[\"Scrollbar\"](document.querySelector('.mosaic-scroll-bar'));\n\n    Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__[\"clickScroller\"])(document.getElementById('mosaic-footer-logo'), 0);\n};\n\nwindow.addEventListener('load', initializeApplication);\n\n//# sourceURL=webpack:///./client/js/index.js?");

/***/ }),

/***/ "./client/js/lib/State.js":
/*!********************************!*\
  !*** ./client/js/lib/State.js ***!
  \********************************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"State\", function() { return State; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./client/js/lib/utils/index.js\");\n\n\nclass State {\n    constructor(state = {}) {\n        this.state = state;\n        this.setState = this.setState.bind(this);\n    }\n\n    setState(newState = {}) {\n        if (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"isObject\"])(newState)) {\n            this.state = {\n                ...this.state,\n                ...newState\n            };\n        }\n    }\n}\n\n//# sourceURL=webpack:///./client/js/lib/State.js?");

/***/ }),

/***/ "./client/js/lib/constants.js":
/*!************************************!*\
  !*** ./client/js/lib/constants.js ***!
  \************************************/
/*! exports provided: CONSTANTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CONSTANTS\", function() { return CONSTANTS; });\nconst CONSTANTS = {\n    SCROLLBAR_HIDDEN_HEIGHT: 320,\n    SCROLLBAR_HIDDEN_WIDTH: 1130\n};\n\n//# sourceURL=webpack:///./client/js/lib/constants.js?");

/***/ }),

/***/ "./client/js/lib/trackList.js":
/*!************************************!*\
  !*** ./client/js/lib/trackList.js ***!
  \************************************/
/*! exports provided: trackList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trackList\", function() { return trackList; });\nconst trackList = [\n    {\n        src: './audio/1.mp3',\n        title: '\"Through the Sunken Glades\"'\n    },\n    {\n        src: './audio/2.mp3',\n        title: '\"The Ruined City of Quil\"'\n    },\n    {\n        src: './audio/3.mp3',\n        title: '\"Mable: The Journey\"'\n    },\n    {\n        src: './audio/4.mp3',\n        title: '\"Breeze\"'\n    },\n    {\n        src: './audio/5.mp3',\n        title: '\"Giraffe Beats\"'\n    },\n    {\n        src: './audio/6.mp3',\n        title: '\"Winter\"'\n    }\n];\n\n\n//# sourceURL=webpack:///./client/js/lib/trackList.js?");

/***/ }),

/***/ "./client/js/lib/utils/dom-utils.js":
/*!******************************************!*\
  !*** ./client/js/lib/utils/dom-utils.js ***!
  \******************************************/
/*! exports provided: distanceFromPageTop, documentHeight, elementOffsetHeight, findCurrentTrackFromNode, handleOffsetParent, viewportHeight, viewportWidth, visibleDocumentHeightPercentage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"distanceFromPageTop\", function() { return distanceFromPageTop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"documentHeight\", function() { return documentHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elementOffsetHeight\", function() { return elementOffsetHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findCurrentTrackFromNode\", function() { return findCurrentTrackFromNode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleOffsetParent\", function() { return handleOffsetParent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"viewportHeight\", function() { return viewportHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"viewportWidth\", function() { return viewportWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"visibleDocumentHeightPercentage\", function() { return visibleDocumentHeightPercentage; });\nconst distanceFromPageTop = () => window.pageYOffset;\n\nconst documentHeight = () => {\n    const body = document.querySelector('body');\n    const html = document.querySelector('html');\n\n    return Math.max(\n        body.offsetHeight,\n        body.scrollHeight,\n        html.clientHeight,\n        html.offsetHeight,\n        html.scrollHeight\n    );\n};\n\nconst elementOffsetHeight = element => element.offsetHeight;\n\nconst findCurrentTrackFromNode = (audioNode, trackList) => {\n    const source = audioNode.getAttribute('src');\n\n    return trackList.find(({ src }) => src === source);\n};\n\nconst handleOffsetParent = node => {\n    let n = node;\n    let o = 0;\n\n    while (n.offsetParent !== null) {\n        o = o + n.offsetLeft;\n        n = n.offsetParent;\n    }\n\n    return o;\n};\n\nconst viewportHeight = () => Math.max(\n    document.documentElement.clientHeight,\n    window.innerHeight || 0\n);\n\nconst viewportWidth = () => Math.max(\n    document.documentElement.clientWidth,\n    window.innerWidth || 0\n);\n\nconst visibleDocumentHeightPercentage = () => {\n    return viewportHeight() / documentHeight();\n};\n\n//# sourceURL=webpack:///./client/js/lib/utils/dom-utils.js?");

/***/ }),

/***/ "./client/js/lib/utils/index.js":
/*!**************************************!*\
  !*** ./client/js/lib/utils/index.js ***!
  \**************************************/
/*! exports provided: clickScroller, distanceFromPageTop, documentHeight, elementOffsetHeight, findCurrentTrackFromNode, findIndexOfNextTrack, formatPlaybackTime, handleOffsetParent, isObject, scrollToY, viewportHeight, viewportWidth, visibleDocumentHeightPercentage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-utils */ \"./client/js/lib/utils/dom-utils.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"distanceFromPageTop\", function() { return _dom_utils__WEBPACK_IMPORTED_MODULE_0__[\"distanceFromPageTop\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"documentHeight\", function() { return _dom_utils__WEBPACK_IMPORTED_MODULE_0__[\"documentHeight\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"elementOffsetHeight\", function() { return _dom_utils__WEBPACK_IMPORTED_MODULE_0__[\"elementOffsetHeight\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findCurrentTrackFromNode\", function() { return _dom_utils__WEBPACK_IMPORTED_MODULE_0__[\"findCurrentTrackFromNode\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"handleOffsetParent\", function() { return _dom_utils__WEBPACK_IMPORTED_MODULE_0__[\"handleOffsetParent\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"viewportHeight\", function() { return _dom_utils__WEBPACK_IMPORTED_MODULE_0__[\"viewportHeight\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"viewportWidth\", function() { return _dom_utils__WEBPACK_IMPORTED_MODULE_0__[\"viewportWidth\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"visibleDocumentHeightPercentage\", function() { return _dom_utils__WEBPACK_IMPORTED_MODULE_0__[\"visibleDocumentHeightPercentage\"]; });\n\n/* harmony import */ var _scroll_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll-utils */ \"./client/js/lib/utils/scroll-utils.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"clickScroller\", function() { return _scroll_utils__WEBPACK_IMPORTED_MODULE_1__[\"clickScroller\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scrollToY\", function() { return _scroll_utils__WEBPACK_IMPORTED_MODULE_1__[\"scrollToY\"]; });\n\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./client/js/lib/utils/utils.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"findIndexOfNextTrack\", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__[\"findIndexOfNextTrack\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"formatPlaybackTime\", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__[\"formatPlaybackTime\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__[\"isObject\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./client/js/lib/utils/index.js?");

/***/ }),

/***/ "./client/js/lib/utils/scroll-utils.js":
/*!*********************************************!*\
  !*** ./client/js/lib/utils/scroll-utils.js ***!
  \*********************************************/
/*! exports provided: clickScroller, scrollToY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clickScroller\", function() { return clickScroller; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollToY\", function() { return scrollToY; });\nconst clickScroller = (node, targetPixelYValue = 0) => {\n    node.addEventListener('click', () => scrollToY(targetPixelYValue));\n};\n\nconst scrollToY = (targetPixelYValue = 0, speed = 200, easing = 'easeOutSine') => {\n    const scrollY = window.scrollY;\n    const time = Math.max(0.1, Math.min(Math.abs(scrollY - targetPixelYValue) / speed, 0.8));\n\n    let currentTime = 0;\n\n    const easingEquations = {\n        easeOutSine: pos => Math.sin(pos * (Math.PI / 2)),\n        easeInOutSine: pos => -0.5 * (Math.cos(Math.PI * pos) - 1),\n        easeInOutQuint: pos => (pos /= 0.5) < 1\n            ? 0.5 * Math.pow(pos, 5)\n            : 0.5 * (Math.pow((pos - 2), 5) + 2)\n    };\n\n    const animationLoop = () => {\n        currentTime += 1 / 60;\n\n        const p = currentTime / time;\n        const t = easingEquations[easing](p);\n\n        if (p < 1) {\n            window.requestAnimationFrame(animationLoop);\n            window.scrollTo(0, scrollY + ((targetPixelYValue - scrollY) * t));\n        }\n\n        else {\n            window.scrollTo(0, targetPixelYValue);\n        }\n    };\n\n    animationLoop();\n};\n\n//# sourceURL=webpack:///./client/js/lib/utils/scroll-utils.js?");

/***/ }),

/***/ "./client/js/lib/utils/utils.js":
/*!**************************************!*\
  !*** ./client/js/lib/utils/utils.js ***!
  \**************************************/
/*! exports provided: findIndexOfNextTrack, formatPlaybackTime, isObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findIndexOfNextTrack\", function() { return findIndexOfNextTrack; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatPlaybackTime\", function() { return formatPlaybackTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\n/* harmony import */ var _components_audio_AudioPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/audio/AudioPlayer */ \"./client/js/components/audio/AudioPlayer.js\");\n\n\nconst findIndexOfNextTrack = (action, currentTrack, trackList) => {\n    const indexOfCurrentTrack = trackList.map(track => track.src).indexOf(currentTrack.src);\n    const highTrackIndex = trackList.length - 1;\n\n    switch(action) {\n        case _components_audio_AudioPlayer__WEBPACK_IMPORTED_MODULE_0__[\"TRACK_ACTIONS\"][_components_audio_AudioPlayer__WEBPACK_IMPORTED_MODULE_0__[\"NEXT_BUTTON\"]]:\n            if (indexOfCurrentTrack < highTrackIndex) {\n                return indexOfCurrentTrack + 1;\n            }\n\n            return 0;\n        case _components_audio_AudioPlayer__WEBPACK_IMPORTED_MODULE_0__[\"TRACK_ACTIONS\"][_components_audio_AudioPlayer__WEBPACK_IMPORTED_MODULE_0__[\"PREVIOUS_BUTTON\"]]:\n            if (indexOfCurrentTrack > 0) {\n                return indexOfCurrentTrack - 1;\n            }\n\n            return highTrackIndex;\n    }\n};\n\nconst formatPlaybackTime = timeInSeconds => {\n    let intTimeInSeconds = parseInt(timeInSeconds, 10);\n    let hours = Math.floor(intTimeInSeconds / 3600);\n    let minutes = Math.floor((intTimeInSeconds - (hours * 3600)) / 60);\n    let seconds = intTimeInSeconds - (hours * 3600) - (minutes * 60);\n\n    if (hours < 10 && hours > 0) {\n        hours = '0' + hours + ':';\n    } else {\n        hours = '';\n    }\n\n    if (minutes < 10) {\n        minutes = '0' + minutes;\n    }\n\n    if (seconds < 10) {\n        seconds = '0' + seconds;\n    }\n\n    return hours + minutes + ':' + seconds;\n};\n\nconst isObject = object =>\n    object === Object(object)\n        && typeof object === 'object'\n        && !Array.isArray(object);\n\n//# sourceURL=webpack:///./client/js/lib/utils/utils.js?");

/***/ })

/******/ });