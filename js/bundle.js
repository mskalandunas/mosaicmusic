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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	const _util_      = __webpack_require__(2);
	const tracks      = __webpack_require__(3);
	const album       = tracks.length;
	const node        = document.querySelector('.mosaic-player');
	const current     = node.children[0].children[0].children[0].children[0];
	const description = node.children[2];
	const duration    = node.children[0].children[0].children[3];
	const hover       = node.children[0].children[0].children[2].children[0];
	const nextButton  = node.children[0].children[0].children[1].children[2];
	const playButton  = node.children[0].children[0].children[1].children[1];
	const playhead    = node.children[0].children[0].children[2].children[0].children[0];
	const prevButton  = node.children[0].children[0].children[1].children[0];
	const source      = node.children[0].children[0].children[0];
	const sub         = 'px';
	const timeline    = node.children[0].children[0].children[2];
	const title       = node.children[1];
	let scrubber      = false;
	var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

	function addHover(e) {
	  let positionOffset = _util_.handleOffsetParent(timeline);
	  let newMargLeft = e.pageX - positionOffset;

	  if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
	    hover.style.width = `${newMargLeft}px`;
	  };

	  if (newMargLeft < 0) {
	    hover.style.width = '0px';
	  };

	  if (newMargLeft > timelineWidth) {
	    hover.style.width = `${timelineWidth}px`;
	  };
	};

	function handleClick(e) {
	  let positionOffset = _util_.handleOffsetParent(timeline);
	  return (e.pageX - positionOffset) / timelineWidth;
	};

	function handleHover() {
	  timeline.addEventListener('mousemove', addHover, false);
	  timeline.addEventListener('mouseout', removeHover, false);
	};

	function handlePlayhead() {
	  let playPercent = timelineWidth * (source.currentTime / source.duration);
	  playhead.style.paddingLeft = `${playPercent}px`;
	};

	function handleResize() {
	  let padding = playhead.style.paddingLeft;
	  let p;

	  !padding ? p = 0 : p = parseInt(padding.substring(0, padding.length - 2));
	  timelineWidth = (timeline.offsetWidth - playhead.offsetWidth) + p;
	  handlePlayhead();
	};

	function mouseDown() {
	  scrubber = true;
	  source.removeEventListener('timeupdate', handlePlayhead, false);
	};

	function mouseUp(e) {
	  if (!scrubber) {
	    return;
	  };

	  movePlayhead(e);
	  window.removeEventListener('mousemove', movePlayhead, true);
	  source.currentTime = source.duration * handleClick(e);
	  source.addEventListener('timeupdate', handlePlayhead, false);
	  scrubber = false;
	};

	function movePlayhead(e) {
	  let positionOffset = _util_.handleOffsetParent(timeline);
	  let newMargLeft = e.pageX - positionOffset;

	  if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
	    playhead.style.paddingLeft = `${newMargLeft}px`;
	  };

	  if (newMargLeft < 0) {
	    playhead.style.paddingLeft = '0px';
	  };

	  if (newMargLeft > timelineWidth) {
	    playhead.style.paddingLeft = `${timelineWidth}px`;
	  };
	};

	function next() {
	  let count     = current.getAttribute('src')[6];
	  let wasPaused = false;

	  if (count == album) {
	    current.setAttribute('src', `audio/${tracks[0].src}.mp3`);
	    title.innerHTML = tracks[0].title;
	    description.innerHTML = tracks[0].description;
	  } else {
	    current.setAttribute('src', `audio/${tracks[count].src}.mp3`);
	    title.innerHTML = tracks[count].title;
	    description.innerHTML = tracks[count].description;
	  };

	  if (source.paused) {
	    wasPaused = true;
	  };

	  source.load();

	  if (!wasPaused) {
	    source.play();
	  };

	  playhead.style.paddingLeft = '0px';
	};

	function play() {
	  if (source.paused) {
	    source.play();
	    timeline.classList.toggle('active');
	    nextButton.classList.toggle('active');
	    prevButton.classList.toggle('active');
	    playButton.classList.toggle('active');
	    playButton.children[0].classList = '';
	    playButton.children[0].classList = 'fa fa-pause';
	  } else {
	    source.pause();
	    timeline.classList.toggle('active');
	    nextButton.classList.toggle('active');
	    prevButton.classList.toggle('active');
	    playButton.classList.toggle('active');
	    playButton.children[0].classList = '';
	    playButton.children[0].classList = 'fa fa-play';
	  };
	};

	function previous() {
	  let count     = current.getAttribute('src')[6];
	  let wasPaused = false;

	  if (count == 1) {
	    current.setAttribute('src', `audio/${tracks[album - 1].src}.mp3`);
	    title.innerHTML = tracks[album - 1].title;
	    description.innerHTML = tracks[album - 1].description;
	  } else {
	    current.setAttribute('src', `audio/${tracks[count - 2].src}.mp3`);
	    title.innerHTML = tracks[count - 2].title;
	    description.innerHTML = tracks[count - 2].description;
	  };

	  if (source.paused) {
	    wasPaused = true;
	  };

	  source.load();

	  if (!wasPaused) {
	    source.play();
	  };

	  playhead.style.paddingLeft = '0px';
	};

	function removeHover() {
	  hover.style.width = '0px';
	};

	function returnDuration() {
	  duration.innerHTML = _util_.handleTime(source.duration);
	  updateTime();
	};

	function updateTime() {
	  duration.innerHTML = `${_util_.handleTime(source.currentTime)} / ${_util_.handleTime(source.duration)}`;

	  if (source.currentTime === source.duration) {;
	    next();
	    play();
	    timeline.classList.toggle('active');
	    nextButton.classList.toggle('active');
	    prevButton.classList.toggle('active');
	    playButton.classList.toggle('active');
	  };
	};

	nextButton.addEventListener('click', next);
	playButton.addEventListener('click', play);
	playhead.addEventListener('mousedown', mouseDown);
	prevButton.addEventListener('click', previous);
	source.addEventListener('durationchange', returnDuration);
	source.addEventListener('timeupdate', updateTime);
	source.addEventListener('timeupdate', handlePlayhead);
	timeline.addEventListener('mousedown', mouseDown);
	timeline.addEventListener('mouseover', handleHover);
	window.addEventListener('mouseup', mouseUp);
	window.addEventListener('resize', handleResize);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	const _util_ = {
	  handleTime:(duration) => {
	    let sec_num = parseInt(duration, 10);
	    let hours   = Math.floor(sec_num / 3600);
	    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
	    let seconds = sec_num - (hours * 3600) - (minutes * 60);

	    if (hours < 10 && hours > 0) {
	      hours = '0' + hours + ':';
	    } else {
	      hours = '';
	    };

	    if (minutes < 10) {
	      minutes = '0' + minutes;
	    };

	    if (seconds < 10) {
	      seconds = '0' + seconds;
	    };

	    return hours + minutes + ':' + seconds;
	  },

	  handleOffsetParent:(node) => {
	    let n = node;
	    let o = 0;

	    while (n.offsetParent !== null) {
	      o = o + n.offsetLeft;
	      n = n.offsetParent;
	    };

	    return o;
	  }
	};

	module.exports = _util_;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	const tracks = [
	  {
	    'src'         : '1',
	    'title'       : '"Through the Sunken Glades"',
	    'description' : 'Inspired by games like <em class="logo">Ori and the Blind Forest</em> and <em class="logo">Seasons After Fall</em>.  I wanted to bring to life all of the woodland creatures, plants, and little spirits, so I used exotic winds and percussion from both <a class="content--link" href="http://embertone.com/" target="_blank" title="Embertone">Embertone</a> and <a class="content--link" href="https://soundiron.com/" target="_blank" title="Soundiron">Soundiron</a> to paint the proper picture.  Strings, dulcimer, harp, and various synths/sound design as well.'
	  },
	  {
	    'src'         : '2',
	    'title'       : '"The Ruined City of Quil"',
	    'description' : 'The ruins of an ancient temple.  Endless corridors, colossal antichambers, and history long lost.  This piece accompanies <em class="logo">Son of Nor\'s</em> protagonist as they journey through the ruined temple of Taro, in the ancient city of Quil.  This was created mostly with strings from LA Scoring Strings, and live xiao.  I felt the long reverbs and lonely flute estbalished the feeling of being alone in such a long forgotten place quite perfectly.'
	  },
	  {
	    'src'         : '3',
	    'title'       : '"Mable: The Journey"',
	    'description' : 'As an exercise to learn dynamic music layering in Wwise, I created this piece to accompany gameplay in <em class="logo">Mable: The Journey by Triple Vision Games</em>.  Its upbeat and exciting style was inspired by a fusion of Madeon and Disasterpeace.  In the end, I think it does a great job of adding to the fantasy atmosphere in a fast-paced retro world.'
	  },
	  {
	    'src'         : '4',
	    'title'       : '"Breeze"',
	    'description' : 'Relaxing wind across Scottish cliffside plateaus, and the faint sound of chimes in the distance.  <em class="logo">Breeze</em> accompanies the player in their quest to herd sheep with a trusting (and unintentionally goofy) border collie in <em class="logo">Bleat!</em>.  Live guitar, <a class="content--link" href="https://soniccharge.com/synplant" target="_blank" title="Synplant">Synplant</a>, upright bass, instruments from the <a class="content--link" href="http://www.fbpsound.com/The-Toyshop-Sample-Library" target="_blank" title="Toyshop Sample Library">Toyshop Library</a>, and various synths.'
	  },
	  {
	    'src'         : '5',
	    'title'       : '"Giraffe Beats"',
	    'description' : 'Created for Nico Prinz\'s <em class="logo">Oh My Giraffe</em>, an endless runner in Africa\'s savanna.  Because of the simple and colorful art style, I decided that a very MIDI/dry sampled approached would work best for the music.  I ended up using quite a bit of African percussion, some sampled and some live, as well as a dry Pan flute for the melody.'
	  },
	  {
	    'src'         : '6',
	    'title'       : '"Winter"',
	    'description' : 'Created as a music redesign for <em class="logo">Northguard\'s</em> winter environment.  I wanted to create a sense of cold and loneliness, and I think the solemn progression along with the deep reverbs and bass does this quite well.  The flutes, especially the Irish penny-whistle, and the fluttering strings really lend themselves well to the frigid atmosphere and the search for warmth.'
	  }
	];

	module.exports = tracks;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	const email = document.querySelector('.email');

	email.addEventListener('click', () => {
	  const select = window.getSelection();
	  let   range  = document.createRange();

	  range.selectNodeContents(email);
	  select.addRange(range);
	  email.classList.add('active');
	});

	email.addEventListener('mouseout', () => {
	  if (email.className.includes('active')) {
	    email.classList.remove('active');
	  };
	});


/***/ })
/******/ ]);