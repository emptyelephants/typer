module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/inputBar.js":
/*!********************************!*\
  !*** ./components/inputBar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/migueltrinidad/Play/typer/components/inputBar.js";
 // e.target.value,
// incrementWordIndex,
// currentWord,
// setCorrect,
// handleLetterAccuracy,

var checkSpace = function checkSpace(userWord, incrementWordIndex, currentWord, setCorrect, handleLetterAccuracy) {
  var letterIndex = userWord.length - 1; // ignore on empty word

  if (userWord[0] === ' ') {
    return '';
  } // handle next word, check for correctness


  if (userWord[letterIndex] === ' ') {
    incrementWordIndex();
    setCorrect(userWord.slice(0, letterIndex) === currentWord);
    return '';
  } // if the letter was correect


  if (userWord[letterIndex] === currentWord[letterIndex]) {
    return userWord;
  } // if the letter was wrong


  if (userWord[letterIndex] !== currentWord[letterIndex]) {
    handleLetterAccuracy();
    return userWord;
  }

  return userWord;
};

var InputBar = function InputBar(props) {
  var currentWord = props.currentWord,
      incrementWordIndex = props.incrementWordIndex,
      handleLetterAccuracy = props.handleLetterAccuracy,
      wasCorrect = props.wasCorrect,
      setCorrect = props.setCorrect;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      userWord = _useState2[0],
      setUserWord = _useState2[1];

  var letterIndex = userWord.length;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "letter index", " ".concat(letterIndex)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "the current is", " ".concat(currentWord)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    onChange: function onChange(e) {
      return setUserWord(checkSpace(e.target.value, incrementWordIndex, currentWord, setCorrect, handleLetterAccuracy));
    },
    value: userWord,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, wasCorrect && 'correct'));
};

/* harmony default export */ __webpack_exports__["default"] = (InputBar);

/***/ }),

/***/ "./components/wordsDisplay.js":
/*!************************************!*\
  !*** ./components/wordsDisplay.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/migueltrinidad/Play/typer/components/wordsDisplay.js";


var handleWordClass = function handleWordClass(mapIndex, wordIndex, wasCorrect) {
  var theClassName = '';

  if (mapIndex === wordIndex) {
    theClassName += 'current ';
  }

  console.log('this bool ' + wasCorrect);

  if (!wasCorrect) {
    theClassName += 'wrong ';
  }

  return theClassName;
};

var wordsAssembler = function wordsAssembler(words, wordIndex, wasCorrect) {
  return words.map(function (word, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: handleWordClass(index, wordIndex, wasCorrect),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, word);
  });
};

var WordDisplay = function WordDisplay(props) {
  console.log(props);
  var words = props.words,
      wordIndex = props.wordIndex,
      wasCorrect = props.wasCorrect;
  var allWords = wordsAssembler(words, wordIndex, wasCorrect);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, allWords);
};

/* harmony default export */ __webpack_exports__["default"] = (WordDisplay);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_inputBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/inputBar */ "./components/inputBar.js");
/* harmony import */ var _components_wordsDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/wordsDisplay */ "./components/wordsDisplay.js");
/* harmony import */ var _words__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../words */ "./words.js");

var _jsxFileName = "/Users/migueltrinidad/Play/typer/pages/index.js";


/* eslint-disable func-names */
 // import fetch from 'isomorphic-unfetch';





var Index = function Index() {
  // stringfy total words, grab total letters then (total - accuracy)/(total)
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      wordIndex = _useState2[0],
      _incrementWordIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      wasCorrect = _useState4[0],
      _setCorrect = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      wrongLetters = _useState6[0],
      incrementWrongLetters = _useState6[1];

  var shortword = _words__WEBPACK_IMPORTED_MODULE_4__["default"].slice(0, 10);
  var currentWord = shortword[wordIndex];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Typer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wordsDisplay__WEBPACK_IMPORTED_MODULE_3__["default"], {
    words: shortword,
    wordIndex: wordIndex,
    wasCorrect: wasCorrect,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_inputBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    currentWord: currentWord,
    incrementWordIndex: function incrementWordIndex() {
      return _incrementWordIndex(wordIndex + 1);
    },
    handleLetterAccuracy: function handleLetterAccuracy() {
      return incrementWrongLetters(wrongLetters + 1);
    },
    wasCorrect: wasCorrect,
    setCorrect: function setCorrect(bool) {
      return _setCorrect(bool);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "that was right") && wasCorrect, "wrong letters ".concat(wrongLetters));
}; // Index.getInitialProps = async function () {
//   const wordsApiKey = process.env.WORDS_API_KEY;
//   const wordsApiBaseUrl = 'https://random-word-api.herokuapp.com';
//   const res = await fetch(`${wordsApiBaseUrl}/word?key=${wordsApiKey}&number=${200}`);
//   const words = await res.json();
//   return {
//     words,
//   };
// };


/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./words.js":
/*!******************!*\
  !*** ./words.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var words = ['abandon', 'abash', 'abate', 'abide', 'absorb', 'accept', 'accompany', 'ache', 'achieve', 'acquire', 'act', 'add', 'address', 'adjust', 'admire', 'admit', 'advise', 'afford', 'agree', 'alight', 'allow', 'animate', 'announce', 'answer', 'apologize', 'appear', 'applaud', 'apply', 'approach', 'approve', 'argue', 'arise', 'arrange', 'arrest', 'ask', 'assert', 'assort', 'astonish', 'attack', 'atten', 'attract', 'audit', 'avoid', 'awake', 'bang', 'banish', 'bash', 'bat', 'be', 'bear', 'beat', 'beautify', 'become', 'befall', 'beg', 'begin', 'behave', 'behold', 'believe', 'belong', 'bend', 'bereave', 'beseech', 'bet', 'betray', 'bid', 'bind', 'bite', 'bleed', 'bless', 'blossom', 'blow', 'blur', 'blush', 'board', 'boast', 'boil', 'bow', 'box', 'bray', 'break', 'breathe', 'breed', 'bring', 'broadcast', 'brush', 'build', 'burn', 'burst', 'bury', 'bust', 'buy', 'buzz', 'calculate', 'call', 'canvass', 'capture', 'caress', 'carry', 'carve', 'cash', 'cast', 'catch', 'cause', 'cease', 'celebrate', 'challenge', 'change', 'charge', 'chase', 'chat', 'check', 'cheer', 'chew', 'chide', 'chip', 'choke', 'choose', 'classify', 'clean', 'cleave', 'click', 'climb', 'cling', 'close', 'clothe', 'clutch', 'collapse', 'collect', 'colour', 'come', 'comment', 'compare', 'compel', 'compete', 'complain', 'complete', 'conclude', 'conduct', 'confess', 'confine', 'confiscate', 'confuse', 'congratulate', 'connect', 'connote', 'conquer', 'consecrat', 'consen', 'conserve', 'consider', 'consign', 'consist', 'console', 'consort', 'conspire', 'constitute', 'constrain', 'construct', 'construe', 'consult', 'contain', 'contemn', 'contend', 'contest', 'continue', 'contract', 'contradict', 'contrast', 'contribute', 'contrive', 'control', 'convene', 'converge', 'convers', 'convert', 'convey', 'convict', 'convince', 'coo', 'cook', 'cool', 'co-operate', 'cope', 'copy', 'correct', 'correspon', 'corrod', 'corrupt', 'cost', 'cough', 'counsel', 'count', 'course', 'cover', 'cower', 'crack', 'crackle', 'crash', 'crashed', 'crashed', 'crashes', 'crashing', 'crave', 'create', 'creep', 'crib', 'cross', 'crowd', 'crush', 'cry', 'curb', 'cure', 'curve', 'cut', 'cycle', 'damage', 'damp', 'dance', 'dare', 'dash', 'dazzle', 'deal', 'decay', 'decide', 'declare', 'decorate', 'decrease', 'dedicate', 'delay', 'delete', 'deny', 'depend', 'deprive', 'derive', 'describe', 'desire', 'destroy', 'detach', 'detect', 'determine', 'develop', 'die', 'differ', 'dig', 'digest', 'dim', 'diminish', 'dine', 'dip', 'direct', 'disappear', 'discover', 'discuss', 'disobey', 'display', 'dispose', 'distribute', 'disturb', 'disuse', 'dive', 'divide', 'do', 'donate', 'download', 'drag', 'draw', 'dream', 'dress', 'drill', 'drink', 'drive', 'drop', 'dry', 'dump', 'dwell', 'dye', 'earn', 'eat', 'educat', 'empower', 'empty', 'encircle', 'encourage', 'encroach', 'endanger', 'endorse', 'endure', 'engrave', 'enjoy', 'enlarge', 'enlighten', 'enter', 'envy', 'erase', 'escape', 'evaporate', 'exchange', 'exclaim', 'exclude', 'exist', 'expand', 'expect', 'explain', 'explore', 'express', 'extend', 'eye', 'face', 'fail', 'faint', 'fall', 'fan', 'fancy', 'favour', 'fax', 'feed', 'feel', 'ferry', 'fetch', 'fight', 'fill', 'find', 'finish', 'fish', 'fit', 'fix', 'fizz', 'flap', 'flash', 'flee', 'fling', 'float', 'flop', 'fly', 'fold', 'follow', 'forbid', 'force', 'forecast', 'foretell', 'forget', 'forgive', 'forlese', 'form', 'forsake', 'found', 'frame', 'free', 'freeze', 'frighten', 'fry', 'fulfil', 'gag', 'gain', 'gainsay', 'gash', 'gaze', 'get', 'give', 'glance', 'glitter', 'glow', 'go', 'google', 'govern', 'grab', 'grade', 'grant', 'greet', 'grind', 'grip', 'grow', 'guard', 'guess', 'guide', 'handle', 'hang', 'happen', 'harm', 'hatch', 'hate', 'have', 'heal', 'hear', 'heave', 'help', 'hew', 'hide', 'hinder', 'hiss', 'hit', 'hoax', 'hold', 'hop', 'hope', 'horrify', 'hug', 'hum', 'humiliate', 'hunt', 'hurl', 'hurry', 'hurt', 'hush', 'hustle', 'hypnotize', 'idealize', 'identify', 'idolize', 'ignite', 'ignore', 'ill-treat', 'illuminate', 'illumine', 'illustrate', 'imagine', 'imbibe', 'imitate', 'immerse', 'immolate', 'immure', 'impair', 'impart', 'impeach', 'impede', 'impel', 'impend', 'imperil', 'impinge', 'implant', 'implicate', 'implode', 'implore', 'imply', 'import', 'impose', 'impress', 'imprint', 'imprison', 'improve', 'inaugurate', 'incise', 'include', 'increase', 'inculcate', 'indent', 'indicate', 'induce', 'indulge', 'infect', 'infest', 'inflame', 'inflate', 'inflect', 'inform', 'infringe', 'infuse', 'ingest', 'inhabit', 'inhale', 'inherit', 'initiate', 'inject', 'injure', 'inlay', 'innovate', 'input', 'inquire', 'inscribe', 'insert', 'inspect', 'inspire', 'install', 'insult', 'insure', 'integrate', 'introduce', 'invent', 'invite', 'join', 'jump', 'justify', 'keep', 'kick', 'kid', 'kill', 'kiss', 'kneel', 'knit', 'knock', 'know', 'lade', 'land', 'last', 'latch', 'laugh', 'lay', 'lead', 'leak', 'lean', 'leap', 'learn', 'leave', 'leer', 'lend', 'let', 'lick', 'lie', 'lift', 'light', 'like', 'limp', 'listen', 'live', 'look', 'lose', 'love', 'magnify', 'maintain', 'make', 'manage', 'march', 'mark', 'marry', 'mash', 'match', 'matter', 'mean', 'measure', 'meet', 'melt', 'merge', 'mew', 'migrate', 'milk', 'mind', 'mislead', 'miss', 'mistake', 'misuse', 'mix', 'moan', 'modify', 'moo', 'motivate', 'mould', 'moult', 'move', 'mow', 'multiply', 'murmur', 'nail', 'nap', 'need', 'neglect', 'nip', 'nod', 'note', 'notice', 'notify', 'nourish', 'nurse', 'obey', 'oblige', 'observe', 'obstruct', 'obtain', 'occupy', 'occur', 'offer', 'offset', 'omit', 'ooze', 'open', 'operate', 'opine', 'oppress', 'opt', 'optimize', 'orde', 'organize', 'originate', 'output', 'overflow', 'overtake', 'owe', 'own', 'pacify', 'paint', 'pardon', 'part', 'partake', 'participate', 'pass', 'paste', 'pat', 'patch', 'pause', 'pay', 'peep', 'perish', 'permit', 'persuade', 'phone', 'place', 'plan', 'play', 'plead', 'please', 'plod', 'plot', 'pluck', 'ply', 'point', 'polish', 'pollute', 'ponder', 'pour', 'pout', 'practise', 'praise', 'pray', 'preach', 'prefer', 'prepare', 'prescribe', 'present', 'preserve', 'preset', 'preside', 'press', 'pretend', 'prevent', 'print', 'proceed', 'produce', 'progress', 'prohibit', 'promise', 'propose', 'prosecute', 'protect', 'prove', 'provide', 'pull', 'punish', 'purify', 'push', 'put', 'qualify', 'quarrel', 'question', 'quit', 'race', 'rain', 'rattle', 'reach', 'read', 'realize', 'rebuild', 'recall', 'recast', 'receive', 'recite', 'recognize', 'recollect', 'recur', 'redo', 'reduce', 'refer', 'reflect', 'refuse', 'regard', 'regret', 'relate', 'relax', 'rely', 'remain', 'remake', 'remove', 'rend', 'renew', 'renounce', 'repair', 'repeat', 'replace', 'reply', 'report', 'request', 'resell', 'resemble', 'reset', 'resist', 'resolve', 'respect', 'rest', 'restrain', 'retain', 'retch', 'retire', 'return', 'reuse', 'review', 'rewind', 'rid', 'ride', 'ring', 'rise', 'roar', 'rob', 'roll', 'rot', 'rub', 'rule', 'run', 'rush', 'sabotage', 'sack', 'sacrifice', 'sadden', 'saddle', 'sag', 'sail', 'sally', 'salute', 'salvage', 'salve', 'sample', 'sanctify', 'sanction', 'sap', 'saponify', 'sash', 'sashay', 'sass', 'sate', 'satiate', 'satirise', 'satisfy', 'saturate', 'saunter', 'save', 'savor', 'savvy', 'saw', 'say', 'scab', 'scabble', 'scald', 'scale', 'scam', 'scan', 'scant', 'scar', 'scare', 'scarify', 'scarp', 'scat', 'scatter', 'scold', 'scorch', 'scowl', 'scrawl', 'scream', 'screw', 'scrub', 'search', 'seat', 'secure', 'see', 'seek', 'seem', 'seize', 'select', 'sell', 'send', 'sentence', 'separate', 'set', 'sever', 'sew', 'shake', 'shape', 'share', 'shatter', 'shave', 'shear', 'shed', 'shine', 'shirk', 'shit', 'shiver', 'shock', 'shoe', 'shoot', 'shorten', 'shout', 'show', 'shrink', 'shun', 'shut', 'sight', 'signal', 'signify', 'sing', 'sink', 'sip', 'sit', 'ski', 'skid', 'slam', 'slay', 'sleep', 'slide', 'slim', 'sling', 'slink', 'slip', 'slit', 'smash', 'smell', 'smile', 'smite', 'smooth', 'smother', 'snap', 'snatch', 'sneak', 'sneeze', 'sniff', 'soar', 'sob', 'solicit', 'solve', 'soothe', 'sort', 'sow', 'sparkle', 'speak', 'speed', 'spell', 'spend', 'spill', 'spin', 'spit', 'split', 'spoil', 'spray', 'spread', 'spring', 'sprout', 'squeeze', 'stand', 'stare', 'start', 'state', 'stay', 'steal', 'steep', 'stem', 'step', 'sterilize', 'stick', 'stimulate', 'sting', 'stink', 'stir', 'stitch', 'stoop', 'stop', 'store', 'strain', 'stray', 'stress', 'stretch', 'strew', 'stride', 'strike', 'string', 'strive', 'study', 'submit', 'subscribe', 'subtract', 'succeed', 'suck', 'suffer', 'suggest', 'summon', 'supply', 'support', 'suppose', 'surge', 'surmise', 'surpass', 'surround', 'survey', 'survive', 'swallow', 'sway', 'swear', 'sweat', 'sweep', 'swell', 'swim', 'swing', 'swot', 'take', 'talk', 'tap', 'taste', 'tax', 'teach', 'tear', 'tee', 'tell', 'tempt', 'tend', 'terminate', 'terrify', 'test', 'thank', 'think', 'thrive', 'throw', 'thrust', 'thump', 'tie', 'tire', 'toss', 'touch', 'train', 'trampl', 'transfer', 'transform', 'translate', 'trap', 'travel', 'tread', 'treasure', 'treat', 'tree', 'tremble', 'triumph', 'trust', 'try', 'turn', 'type', 'typeset', 'understand', 'undo', 'uproot', 'upset', 'urge', 'use', 'utter', 'value', 'vanish', 'vary', 'verify', 'vex', 'vie', 'view', 'violate', 'vomit', 'wake', 'walk', 'wander', 'want', 'warn', 'waste', 'watch', 'water', 'wave', 'wax', 'waylay', 'wear', 'weave', 'wed', 'weep', 'weigh', 'welcome', 'wet', 'whip', 'whisper', 'win', 'wind', 'wish', 'withdraw', 'work', 'worry', 'worship', 'wring', 'write', 'yawn', 'yell', 'yield', 'zinc', 'zoom', 'account', 'achiever', 'acoustics', 'act', 'action', 'activity', 'actor', 'addition', 'adjustment', 'advertisement', 'advice', 'aftermath', 'afternoon', 'afterthought', 'agreement', 'air', 'airplane', 'airport', 'alarm', 'amount', 'amusement', 'anger', 'angle', 'animal', 'answer', 'ant', 'ants', 'apparatus', 'apparel', 'apple', 'apples', 'appliance', 'approval', 'arch', 'argument', 'arithmetic', 'arm', 'army', 'art', 'attack', 'attempt', 'attention', 'attraction', 'aunt', 'authority', 'babies', 'baby', 'back', 'badge', 'bag', 'bait', 'balance', 'ball', 'balloon', 'balls', 'banana', 'band', 'base', 'baseball', 'basin', 'basket', 'basketball', 'bat', 'bath', 'battle', 'bead', 'beam', 'bean', 'bear', 'bears', 'beast', 'bed', 'bedroom', 'beds', 'bee', 'beef', 'beetle', 'beggar', 'beginner', 'behavior', 'belief', 'believe', 'bell', 'bells', 'berry', 'bike', 'bikes', 'bird', 'birds', 'birth', 'birthday', 'bit', 'bite', 'blade', 'blood', 'blow', 'board', 'boat', 'boats', 'body', 'bomb', 'bone', 'book', 'books', 'boot', 'border', 'bottle', 'boundary', 'box', 'boy', 'boys', 'brain', 'brake', 'branch', 'brass', 'bread', 'breakfast', 'breath', 'brick', 'bridge', 'brother', 'brothers', 'brush', 'bubble', 'bucket', 'building', 'bulb', 'bun', 'burn', 'burst', 'bushes', 'business', 'butter', 'button', 'cabbage', 'cable', 'cactus', 'cake', 'cakes', 'calculator', 'calendar', 'camera', 'camp', 'can', 'cannon', 'canvas', 'cap', 'caption', 'car', 'card', 'care', 'carpenter', 'carriage', 'cars', 'cart', 'cast', 'cat', 'cats', 'cattle', 'cause', 'cave', 'celery', 'cellar', 'cemetery', 'cent', 'chain', 'chair', 'chairs', 'chalk', 'chance', 'change', 'channel', 'cheese', 'cherries', 'cherry', 'chess', 'chicken', 'chickens', 'children', 'chin', 'church', 'circle', 'clam', 'class', 'clock', 'clocks', 'cloth', 'cloud', 'clouds', 'clover', 'club', 'coach', 'coal', 'coast', 'coat', 'cobweb', 'coil', 'collar', 'color', 'comb', 'comfort', 'committee', 'company', 'comparison', 'competition', 'condition', 'connection', 'control', 'cook', 'copper', 'copy', 'cord', 'cork', 'corn', 'cough', 'country', 'cover', 'cow', 'cows', 'crack', 'cracker', 'crate', 'crayon', 'cream', 'creator', 'creature', 'credit', 'crib', 'crime', 'crook', 'crow', 'crowd', 'crown', 'crush', 'cry', 'cub', 'cup', 'current', 'curtain', 'curve', 'cushion', 'dad', 'daughter', 'day', 'death', 'debt', 'decision', 'deer', 'degree', 'design', 'desire', 'desk', 'destruction', 'detail', 'development', 'digestion', 'dime', 'dinner', 'dinosaurs', 'direction', 'dirt', 'discovery', 'discussion', 'disease', 'disgust', 'distance', 'distribution', 'division', 'dock', 'doctor', 'dog', 'dogs', 'doll', 'dolls', 'donkey', 'door', 'downtown', 'drain', 'drawer', 'dress', 'drink', 'driving', 'drop', 'drug', 'drum', 'ducks', 'dust', 'ear', 'earth', 'earthquake', 'edge', 'education', 'effect', 'egg', 'eggnog', 'eggs', 'elbow', 'end', 'engine', 'error', 'event', 'example', 'exchange', 'existence', 'expansion', 'experience', 'expert', 'eye', 'eyes', 'face', 'fact', 'fairies', 'fall', 'family', 'fan', 'fang', 'farm', 'farmer', 'father', 'father', 'faucet', 'fear', 'feast', 'feather', 'feeling', 'feet', 'fiction', 'field', 'fifth', 'fight', 'finger', 'finger', 'fire', 'fireman', 'fish', 'flag', 'flame', 'flavor', 'flesh', 'flight', 'flock', 'floor', 'flower', 'flowers', 'fly', 'fog', 'fold', 'food', 'foot', 'force', 'fork', 'form', 'fowl', 'frame', 'friction', 'friend', 'friends', 'frog', 'frogs', 'front', 'fruit', 'furniture', 'alley', 'game', 'garden', 'gate', 'geese', 'ghost', 'giants', 'giraffe', 'girl', 'girls', 'glass', 'glove', 'glue', 'goat', 'gold', 'goldfish', 'good-bye', 'goose', 'government', 'governor', 'grade', 'grain', 'grandfather', 'grandmother', 'grape', 'grass', 'grip', 'ground', 'group', 'growth', 'guide', 'guitar', 'gun', 'hair', 'haircut', 'hall', 'hammer', 'hand', 'hands', 'harbor', 'harmony', 'hat', 'hate', 'head', 'health', 'hearing', 'heart', 'heat', 'help', 'hen', 'hill', 'history', 'hobbies', 'hole', 'holiday', 'home', 'honey', 'hook', 'hope', 'horn', 'horse', 'horses', 'hose', 'hospital', 'hot', 'hour', 'house', 'houses', 'humor', 'hydrant', 'ice', 'icicle', 'idea', 'impulse', 'income', 'increase', 'industry', 'ink', 'insect', 'instrument', 'insurance', 'interest', 'invention', 'iron', 'island', 'jail', 'jam', 'jar', 'jeans', 'jelly', 'jellyfish', 'jewel', 'join', 'joke', 'journey', 'judge', 'juice', 'jump', 'K', '', 'kettle', 'key', 'kick', 'kiss', 'kite', 'kitten', 'kittens', 'kitty', 'knee', 'knife', 'knot', 'knowledge', 'laborer', 'lace', 'ladybug', 'lake', 'lamp', 'land', 'language', 'laugh', 'lawyer', 'lead', 'leaf', 'learning', 'leather', 'leg', 'legs', 'letter', 'letters', 'lettuce', 'level', 'library', 'lift', 'light', 'limit', 'line', 'linen', 'lip', 'liquid', 'list', 'lizards', 'loaf', 'lock', 'locket', 'look', 'loss', 'love', 'low', 'lumber', 'lunch', 'lunchroom', 'machine', 'magic', 'maid', 'mailbox', 'man', 'manager', 'map', 'marble', 'mark', 'market', 'mask', 'mass', 'match', 'meal', 'measure', 'meat', 'meeting', 'memory', 'men', 'metal', 'mice', 'middle', 'milk', 'mind', 'mine', 'minister', 'mint', 'minute', 'mist', 'mitten', 'mom', 'money', 'monkey', 'month', 'moon', 'morning', 'mother', 'motion', 'mountain', 'mouth', 'move', 'muscle', 'music', 'nail', 'name', 'nation', 'neck', 'need', 'needle', 'nerve', 'nest', 'net', 'news', 'night', 'noise', 'north', 'nose', 'note', 'notebook', 'number', 'nut', 'oatmeal', 'observation', 'ocean', 'offer', 'office', 'oil', 'operation', 'opinion', 'orange', 'oranges', 'order', 'organization', 'ornament', 'oven', 'owl', 'page', 'pail', 'pain', 'paint', 'pan', 'pancake', 'paper', 'parcel', 'parent', 'park', 'part', 'partner', 'party', 'passenger', 'paste', 'patch', 'payment', 'peace', 'pear', 'pen', 'pencil', 'person', 'pest', 'pet', 'pets', 'pleasure', 'plot', 'plough', 'pocket', 'point', 'poison', 'police', 'polish', 'pollution', 'popcorn', 'porter', 'position', 'pot', 'potato', 'powder', 'power', 'price', 'print', 'prison', 'process', 'produce', 'profit', 'property', 'prose', 'protest', 'pull', 'pump', 'punishment', 'purpose', 'push', 'quarter', 'quartz', 'queen', 'question', 'quicksand', 'quiet', 'quill', 'quilt', 'quince', 'quiver', 'rabbit', 'rabbits', 'rail', 'railway', 'rain', 'rainstorm', 'rake', 'range', 'rat', 'rate', 'ray', 'reaction', 'reading', 'reason', 'receipt', 'recess', 'record', 'regret', 'relation', 'religion', 'representative', 'request', 'respect', 'rest', 'reward', 'rhythm', 'rice', 'riddle', 'rifle', 'ring', 'rings', 'river', 'road', 'robin', 'rock', 'rod', 'roll', 'roof', 'room', 'root', 'rose', 'route', 'rub', 'rule', 'run', 'sack', 'sail', 'salt', 'sand', 'scale', 'scarecrow', 'scarf', 'scene', 'scent', 'school', 'science', 'scissors', 'screw', 'sea', 'seashore', 'seat', 'secretary', 'seed', 'selection', 'self', 'sense', 'servant', 'shade', 'shake', 'shame', 'shape', 'sheep', 'sheet', 'shelf', 'ship', 'shirt', 'shock', 'shoe', 'shoes', 'shop', 'show', 'side', 'sidewalk', 'sign', 'silk', 'silver', 'sink', 'sister', 'sisters', 'size', 'skate', 'skin', 'skirt', 'sky', 'slave', 'sleep', 'sleet', 'slip', 'slope', 'smash', 'smell', 'smile', 'smoke', 'snail', 'snails', 'snake', 'snakes', 'sneeze', 'snow', 'soap', 'society', 'sock', 'soda', 'sofa', 'son', 'song', 'songs', 'sort', 'sound', 'soup', 'space', 'spade', 'spark', 'spiders', 'sponge', 'spoon', 'spot', 'spring', 'spy', 'square', 'squirrel', 'stage', 'stamp', 'star', 'start', 'statement', 'station', 'steam', 'steel', 'stem', 'step', 'stew', 'stick', 'sticks', 'stitch', 'stocking', 'stomach', 'stone', 'stop', 'store', 'story', 'stove', 'stranger', 'straw', 'stream', 'street', 'stretch', 'string', 'structure', 'substance', 'sugar', 'suggestion', 'suit', 'summer', 'sun', 'support', 'surprise', 'sweater', 'swim', 'swing', 'system', 'table', 'tail', 'talk', 'tank', 'taste', 'tax', 'team', 'teeth', 'temper', 'tendency', 'tent', 'territory', 'test', 'texture', 'theory', 'thing', 'things', 'thought', 'thread', 'thrill', 'throat', 'throne', 'thumb', 'thunder', 'ticket', 'tiger', 'time', 'tin', 'title', 'toad', 'toe', 'toes', 'tomatoes', 'tongue', 'tooth', 'toothbrush', 'toothpaste', 'top', 'touch', 'town', 'toy', 'toys', 'trade', 'trail', 'train', 'trains', 'tramp', 'transport', 'tray', 'treatment', 'tree', 'trees', 'trick', 'trip', 'trouble', 'trousers', 'truck', 'trucks', 'tub', 'turkey', 'turn', 'twig', 'twist', 'umbrella', 'uncle', 'underwear', 'unit', 'use', 'vacation', 'value', 'van', 'vase', 'vegetable', 'veil', 'vein', 'verse', 'vessel', 'vest', 'view', 'visitor', 'voice', 'volcano', 'volleyball', 'voyage', 'walk', 'wall', 'war', 'wash', 'waste', 'watch', 'water', 'wave', 'waves', 'wax', 'way', 'wealth', 'weather', 'week', 'weight', 'wheel', 'whip', 'whistle', 'wilderness', 'wind', 'window', 'wine', 'wing', 'winter', 'wire', 'wish', 'woman', 'women', 'wood', 'wool', 'word', 'work', 'worm', 'wound', 'wren', 'wrench', 'wrist', 'writer', 'writing', 'yam', 'yard', 'yarn', 'year', 'yoke', 'zebra', 'zephyr', 'zinc', 'zipper', 'zoo', 'aback', 'abaft', 'abandoned', 'abashed', 'aberrant', 'abhorrent', 'abiding', 'abject', 'ablaze', 'able', 'abnormal', 'aboard', 'aboriginal', 'abortive', 'abounding', 'abrasive', 'abrupt', 'absent', 'absorbed', 'absorbing', 'abstracted', 'absurd', 'abundant', 'abusive', 'acceptable', 'accessible', 'accidental', 'accurate', 'acid', 'acidic', 'acoustic', 'acrid', 'actually', 'ad hoc', 'adamant', 'adaptable', 'addicted', 'adhesive', 'adjoining', 'adorable', 'adventurous', 'afraid', 'aggressive', 'agonizing', 'agreeable', 'ahead', 'ajar', 'alcoholic', 'alert', 'alike', 'alive', 'alleged', 'alluring', 'aloof', 'amazing', 'ambiguous', 'ambitious', 'amuck', 'amused', 'amusing', 'ancient', 'angry', 'animated', 'annoyed', 'annoying', 'anxious', 'apathetic', 'aquatic', 'aromatic', 'arrogant', 'ashamed', 'aspiring', 'assorted', 'astonishing', 'attractive', 'auspicious', 'automatic', 'available', 'average', 'awake', 'aware', 'awesome', 'awful', 'axiomatic', 'bad', 'barbarous', 'bashful', 'bawdy', 'beautiful', 'befitting', 'belligerent', 'beneficial', 'bent', 'berserk', 'best', 'better', 'bewildered', 'big', 'billowy', 'bite-sized', 'bitter', 'bizarre', 'black', 'black-and-white', 'bloody', 'blue', 'blue-eyed', 'blushing', 'boiling', 'boorish', 'bored', 'boring', 'bouncy', 'boundless', 'brainy', 'brash', 'brave', 'brawny', 'breakable', 'breezy', 'brief', 'bright', 'bright', 'broad', 'broken', 'brown', 'bumpy', 'burly', 'bustling', 'busy', 'cagey', 'calculating', 'callous', 'calm', 'capable', 'capricious', 'careful', 'careless', 'caring', 'cautious', 'ceaseless', 'certain', 'changeable', 'charming', 'cheap', 'cheerful', 'chemical', 'chief', 'childlike', 'chilly', 'chivalrous', 'chubby', 'chunky', 'clammy', 'classy', 'clean', 'clear', 'clever', 'cloistered', 'cloudy', 'closed', 'clumsy', 'cluttered', 'coherent', 'cold', 'colorful', 'colossal', 'combative', 'comfortable', 'common', 'complete', 'complex', 'concerned', 'condemned', 'confused', 'conscious', 'cooing', 'cool', 'cooperative', 'coordinated', 'courageous', 'cowardly', 'crabby', 'craven', 'crazy', 'creepy', 'crooked', 'crowded', 'cruel', 'cuddly', 'cultured', 'cumbersome', 'curious', 'curly', 'curved', 'curvy', 'cut', 'cute', 'cute', 'cynical', 'daffy', 'daily', 'damaged', 'damaging', 'damp', 'dangerous', 'dapper', 'dark', 'dashing', 'dazzling', 'dead', 'deadpan', 'deafening', 'dear', 'debonair', 'decisive', 'decorous', 'deep', 'deeply', 'defeated', 'defective', 'defiant', 'delicate', 'delicious', 'delightful', 'demonic', 'delirious', 'dependent', 'depressed', 'deranged', 'descriptive', 'deserted', 'detailed', 'determined', 'devilish', 'didactic', 'different', 'difficult', 'diligent', 'direful', 'dirty', 'disagreeable', 'disastrous', 'discreet', 'disgusted', 'disgusting', 'disillusioned', 'dispensable', 'distinct', 'disturbed', 'divergent', 'dizzy', 'domineering', 'doubtful', 'drab', 'draconian', 'dramatic', 'dreary', 'drunk', 'dry', 'dull', 'dusty', 'dusty', 'dynamic', 'dysfunctional', 'eager', 'early', 'earsplitting', 'earthy', 'easy', 'eatable', 'economic', 'educated', 'efficacious', 'efficient', 'eight', 'elastic', 'elated', 'elderly', 'electric', 'elegant', 'elfin', 'elite', 'embarrassed', 'eminent', 'empty', 'enchanted', 'enchanting', 'encouraging', 'endurable', 'energetic', 'enormous', 'entertaining', 'enthusiastic', 'envious', 'equable', 'equal', 'erect', 'erratic', 'ethereal', 'evanescent', 'evasive', 'even', 'excellent', 'excited', 'exciting', 'exclusive', 'exotic', 'expensive', 'extra-large', 'extra-small', 'exuberant', 'exultant', 'fabulous', 'faded', 'faint', 'fair', 'faithful', 'fallacious', 'false', 'familiar', 'famous', 'fanatical', 'fancy', 'fantastic', 'far', 'far-flung', 'fascinated', 'fast', 'fat', 'faulty', 'fearful', 'fearless', 'feeble', 'feigned', 'female', 'fertile', 'festive', 'few', 'fierce', 'filthy', 'fine', 'finicky', 'first', 'five', 'fixed', 'flagrant', 'flaky', 'flashy', 'flat', 'flawless', 'flimsy', 'flippant', 'flowery', 'fluffy', 'fluttering', 'foamy', 'foolish', 'foregoing', 'forgetful', 'fortunate', 'four', 'frail', 'fragile', 'frantic', 'free', 'freezing', 'frequent', 'fresh', 'fretful', 'friendly', 'frightened', 'frightening', 'full', 'fumbling', 'functional', 'funny', 'furry', 'furtive', 'future', 'futuristic', 'fuzzy', 'gabby', 'gainful', 'gamy', 'gaping', 'garrulous', 'gaudy', 'general', 'gentle', 'giant', 'giddy', 'gifted', 'gigantic', 'glamorous', 'gleaming', 'glib', 'glistening', 'glorious', 'glossy', 'godly', 'good', 'goofy', 'gorgeous', 'graceful', 'grandiose', 'grateful', 'gratis', 'gray', 'greasy', 'great', 'greedy', 'green', 'grey', 'grieving', 'groovy', 'grotesque', 'grouchy', 'grubby', 'gruesome', 'grumpy', 'guarded', 'guiltless', 'gullible', 'gusty', 'guttural', 'habitual', 'half', 'hallowed', 'halting', 'handsome', 'handsomely', 'handy', 'hanging', 'hapless', 'happy', 'hard', 'hard-to-find', 'harmonious', 'harsh', 'hateful', 'heady', 'healthy', 'heartbreaking', 'heavenly', 'heavy', 'hellish', 'helpful', 'helpless', 'hesitant', 'hideous', 'high', 'highfalutin', 'high-pitched', 'hilarious', 'hissing', 'historical', 'holistic', 'hollow', 'homeless', 'homely', 'honorable', 'horrible', 'hospitable', 'hot', 'huge', 'hulking', 'humdrum', 'humorous', 'hungry', 'hurried', 'hurt', 'hushed', 'husky', 'hypnotic', 'hysterical', 'icky', 'icy', 'idiotic', 'ignorant', 'ill', 'illegal', 'ill-fated', 'ill-informed', 'illustrious', 'imaginary', 'immense', 'imminent', 'impartial', 'imperfect', 'impolite', 'important', 'imported', 'impossible', 'incandescent', 'incompetent', 'inconclusive', 'industrious', 'incredible', 'inexpensive', 'infamous', 'innate', 'innocent', 'inquisitive', 'insidious', 'instinctive', 'intelligent', 'interesting', 'internal', 'invincible', 'irate', 'irritating', 'itchy', 'jaded', 'jagged', 'jazzy', 'jealous', 'jittery', 'jobless', 'jolly', 'joyous', 'judicious', 'juicy', 'jumbled', 'jumpy', 'juvenile', 'kaput', 'keen', 'kind', 'kindhearted', 'kindly', 'knotty', 'knowing', 'knowledgeable', 'known', 'labored', 'lackadaisical', 'lacking', 'lame', 'lamentable', 'languid', 'large', 'last', 'late', 'laughable', 'lavish', 'lazy', 'lean', 'learned', 'left', 'legal', 'lethal', 'level', 'lewd', 'light', 'like', 'likeable', 'limping', 'literate', 'little', 'lively', 'living', 'lonely', 'long', 'longing', 'long-term', 'loose', 'lopsided', 'loud', 'loutish', 'lovely', 'loving', 'low', 'lowly', 'lucky', 'ludicrous', 'lumpy', 'lush', 'luxuriant', 'lying', 'lyrical', 'macabre', 'macho', 'maddening', 'madly', 'magenta', 'magical', 'magnificent', 'majestic', 'makeshift', 'male', 'malicious', 'mammoth', 'maniacal', 'many', 'marked', 'massive', 'married', 'marvelous', 'material', 'materialistic', 'mature', 'mean', 'measly', 'meaty', 'medical', 'meek', 'mellow', 'melodic', 'melted', 'merciful', 'mere', 'messy', 'mighty', 'military', 'milky', 'mindless', 'miniature', 'minor', 'miscreant', 'misty', 'mixed', 'moaning', 'modern', 'moldy', 'momentous', 'motionless', 'mountainous', 'muddled', 'mundane', 'murky', 'mushy', 'mute', 'mysterious', 'naive', 'nappy', 'narrow', 'nasty', 'natural', 'naughty', 'nauseating', 'near', 'neat', 'nebulous', 'necessary', 'needless', 'needy', 'neighborly', 'nervous', 'new', 'next', 'nice', 'nifty', 'nimble', 'nine', 'nippy', 'noiseless', 'noisy', 'nonchalant', 'nondescript', 'nonstop', 'normal', 'nostalgic', 'nosy', 'noxious', 'null', 'numberless', 'numerous', 'nutritious', 'nutty', 'oafish', 'obedient', 'obeisant', 'obese', 'obnoxious', 'obscene', 'obsequious', 'observant', 'obsolete', 'obtainable', 'oceanic', 'odd', 'offbeat', 'old', 'old-fashioned', 'omniscient', 'one', 'onerous', 'open', 'opposite', 'optimal', 'orange', 'ordinary', 'organic', 'ossified', 'outgoing', 'outrageous', 'outstanding', 'oval', 'overconfident', 'overjoyed', 'overrated', 'overt', 'overwrought', 'painful', 'painstaking', 'pale', 'paltry', 'panicky', 'panoramic', 'parallel', 'parched', 'parsimonious', 'past', 'pastoral', 'pathetic', 'peaceful', 'penitent', 'perfect', 'periodic', 'permissible', 'perpetual', 'petite', 'petite', 'phobic', 'physical', 'picayune', 'pink', 'piquant', 'placid', 'plain', 'plant', 'plastic', 'plausible', 'pleasant', 'plucky', 'pointless', 'poised', 'polite', 'political', 'poor', 'possessive', 'possible', 'powerful', 'precious', 'premium', 'present', 'pretty', 'previous', 'pricey', 'prickly', 'private', 'probable', 'productive', 'profuse', 'protective', 'proud', 'psychedelic', 'psychotic', 'public', 'puffy', 'pumped', 'puny', 'purple', 'purring', 'pushy', 'puzzled', 'puzzling', 'quack', 'quaint', 'quarrelsome', 'questionable', 'quick', 'quickest', 'quiet', 'quirky', 'quixotic', 'quizzical', 'rabid', 'racial', 'ragged', 'rainy', 'rambunctious', 'rampant', 'rapid', 'rare', 'raspy', 'ratty', 'ready', 'real', 'rebel', 'receptive', 'recondite', 'red', 'redundant', 'reflective', 'regular', 'relieved', 'remarkable', 'reminiscent', 'repulsive', 'resolute', 'resonant', 'responsible', 'rhetorical', 'rich', 'right', 'righteous', 'rightful', 'rigid', 'ripe', 'ritzy', 'roasted', 'robust', 'romantic', 'roomy', 'rotten', 'rough', 'round', 'royal', 'ruddy', 'rude', 'rural', 'rustic', 'ruthless', 'sable', 'sad', 'safe', 'salty', 'same', 'sassy', 'satisfying', 'savory', 'scandalous', 'scarce', 'scared', 'scary', 'scattered', 'scientific', 'scintillating', 'scrawny', 'screeching', 'second', 'second-hand', 'secret', 'secretive', 'sedate', 'seemly', 'selective', 'selfish', 'separate', 'serious', 'shaggy', 'shaky', 'shallow', 'sharp', 'shiny', 'shivering', 'shocking', 'short', 'shrill', 'shut', 'shy', 'sick', 'silent', 'silent', 'silky', 'silly', 'simple', 'simplistic', 'sincere', 'six', 'skillful', 'skinny', 'sleepy', 'slim', 'slimy', 'slippery', 'sloppy', 'slow', 'small', 'smart', 'smelly', 'smiling', 'smoggy', 'smooth', 'sneaky', 'snobbish', 'snotty', 'soft', 'soggy', 'solid', 'somber', 'sophisticated', 'sordid', 'sore', 'sore', 'sour', 'sparkling', 'special', 'spectacular', 'spicy', 'spiffy', 'spiky', 'spiritual', 'spiteful', 'splendid', 'spooky', 'spotless', 'spotted', 'spotty', 'spurious', 'squalid', 'square', 'squealing', 'squeamish', 'staking', 'stale', 'standing', 'statuesque', 'steadfast', 'steady', 'steep', 'stereotyped', 'sticky', 'stiff', 'stimulating', 'stingy', 'stormy', 'straight', 'strange', 'striped', 'strong', 'stupendous', 'stupid', 'sturdy', 'subdued', 'subsequent', 'substantial', 'successful', 'succinct', 'sudden', 'sulky', 'super', 'superb', 'superficial', 'supreme', 'swanky', 'sweet', 'sweltering', 'swift', 'symptomatic', 'synonymous', 'taboo', 'tacit', 'tacky', 'talented', 'tall', 'tame', 'tan', 'tangible', 'tangy', 'tart', 'tasteful', 'tasteless', 'tasty', 'tawdry', 'tearful', 'tedious', 'teeny', 'teeny-tiny', 'telling', 'temporary', 'ten', 'tender', 'tense', 'tense', 'tenuous', 'terrible', 'terrific', 'tested', 'testy', 'thankful', 'therapeutic', 'thick', 'thin', 'thinkable', 'third', 'thirsty', 'thirsty', 'thoughtful', 'thoughtless', 'threatening', 'three', 'thundering', 'tidy', 'tight', 'tightfisted', 'tiny', 'tired', 'tiresome', 'toothsome', 'torpid', 'tough', 'towering', 'tranquil', 'trashy', 'tremendous', 'tricky', 'trite', 'troubled', 'truculent', 'true', 'truthful', 'two', 'typical', 'ubiquitous', 'ugliest', 'ugly', 'ultra', 'unable', 'unaccountable', 'unadvised', 'unarmed', 'unbecoming', 'unbiased', 'uncovered', 'understood', 'undesirable', 'unequal', 'unequaled', 'uneven', 'unhealthy', 'uninterested', 'unique', 'unkempt', 'unknown', 'unnatural', 'unruly', 'unsightly', 'unsuitable', 'untidy', 'unused', 'unusual', 'unwieldy', 'unwritten', 'upbeat', 'uppity', 'upset', 'uptight', 'used', 'useful', 'useless', 'utopian', 'utter', 'uttermost', 'vacuous', 'vagabond', 'vague', 'valuable', 'various', 'vast', 'vengeful', 'venomous', 'verdant', 'versed', 'victorious', 'vigorous', 'violent', 'violet', 'vivacious', 'voiceless', 'volatile', 'voracious', 'vulgar', 'wacky', 'waggish', 'waiting', 'wakeful', 'wandering', 'wanting', 'warlike', 'warm', 'wary', 'wasteful', 'watery', 'weak', 'wealthy', 'weary', 'well-groomed', 'well-made', 'well-off', 'well-to-do', 'wet', 'whimsical', 'whispering', 'white', 'whole', 'wholesale', 'wicked', 'wide', 'wide-eyed', 'wiggly', 'wild', 'willing', 'windy', 'wiry', 'wise', 'wistful', 'witty', 'woebegone', 'womanly', 'wonderful', 'wooden', 'woozy', 'workable', 'worried', 'worthless', 'wrathful', 'wretched', 'wrong', 'wry', 'xenophobic', 'yellow', 'yielding', 'young', 'youthful', 'yummy', 'zany', 'zealous', 'zesty', 'zippy', 'zonked'];
/* harmony default export */ __webpack_exports__["default"] = (words);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/migueltrinidad/Play/typer/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map