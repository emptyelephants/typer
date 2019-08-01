webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/inputBar.js":
/*!********************************!*\
  !*** ./components/inputBar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/migueltrinidad/Play/typer/components/inputBar.js";
 // e.target.value,
// incrementWordIndex,
// currentWord,
// setCorrect,
// handleLetterAccuracy,

var checkSpace = function checkSpace(userWord, incrementWordIndex, currentWord, setCorrect, handleLetterAccuracy) {
  var letterIndex = userWord.legth - 1; // ignore on empty word

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

/***/ })

})
//# sourceMappingURL=index.js.7e259a6ea455b2246952.hot-update.js.map