webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_inputBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/inputBar */ "./components/inputBar.js");
/* harmony import */ var _components_wordsDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/wordsDisplay */ "./components/wordsDisplay.js");

var _jsxFileName = "/Users/migueltrinidad/Play/typer/pages/index.js";


/* eslint-disable func-names */
 // import fetch from 'isomorphic-unfetch';




var Index = function Index() {
  // stringfy total words, grab total letters then (total - accuracy)/(total)
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      wordIndex = _useState2[0],
      _incrementWordIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      wasCorrect = _useState4[0],
      _setCorrect = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      wrongLetters = _useState6[0],
      incrementWrongLetters = _useState6[1];

  var words = ['dog', 'cat', 'test', 'west'];
  var currentWord = words[wordIndex];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Typer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_wordsDisplay__WEBPACK_IMPORTED_MODULE_3__["default"], {
    words: words,
    wordIndex: wordIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
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
    setCorrect: function setCorrect() {
      return _setCorrect(!wasCorrect);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
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

/***/ })

})
//# sourceMappingURL=index.js.d709f8eef46781462484.hot-update.js.map