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
/***/ function(module, exports) {

	'use strict';

	var canvas = document.getElementById('game');
	var context = canvas.getContext('2d');

	function Fish(options) {
	  options = options || {};
	  this.x = options.x;
	  this.y = options.y;
	  this.width = options.width || 10;
	  this.height = options.height || 10;
	  this.velocity = options.velocity || 1;
	}

	Fish.prototype.draw = function () {
	  context.fillRect(this.x, this.y, this.width, this.height);
	  return this;
	};

	Fish.prototype.move = function () {
	  this.x += this.velocity;
	  return this;
	};

	Fish.prototype.reverseDirection = function () {
	  if (this.x > canvas.width || this.x <= 0) {
	    this.velocity = -1 * this.velocity;
	    return this;
	  }
	};

	var fish1 = new Fish({ x: 0, y: 200 });
	var fish2 = new Fish({ x: 100, y: 400 });
	var fish3 = new Fish({ x: 350, y: 500 });
	var fish4 = new Fish({ x: 550, y: 550, width: 50, height: 20, velocity: 0.5 });

	var fishies = [fish1, fish2, fish3, fish4];

	function Boat(options) {
	  options = options || {};
	  this.x = options.x;
	  this.y = options.y;
	  this.width = options.width || 10;
	  this.height = options.height || 10;
	  this.velocity = options.velocity || 5;
	}

	Boat.prototype.draw = function () {
	  context.fillRect(this.x, this.y, this.width, this.height);
	  return this;
	};

	Boat.prototype.moveBoat = function () {
	  canvas.addEventListener('keydown', function (event) {
	    if (event.which === 37) {
	      console.log('left key stroke');
	      Boat.prototype.moveBoatLeft();
	    } else if (event.which === 39) {
	      Boat.prototype.moveBoatRight;
	    }
	  });
	};

	Boat.prototype.moveBoatLeft = function () {
	  console.log(this.x);
	  this.x - this.velocity;
	  return this;
	};

	Boat.prototype.moveBoatRight = function () {
	  this.x + this.velocity;
	  return this;
	};

	var boat = new Boat({ x: canvas.width / 2, y: 25, width: 100, height: 50, velocity: 5 });

	requestAnimationFrame(gameLoop);

	function gameLoop() {
	  clearScreen();
	  fishies.forEach(function (fish) {
	    fish.draw().move().reverseDirection();
	  });
	  boat.draw().moveBoat();
	  requestAnimationFrame(gameLoop);
	}

	function clearScreen() {
	  context.clearRect(0, 0, canvas.width, canvas.height);
	}

/***/ }
/******/ ]);