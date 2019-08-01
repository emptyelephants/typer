webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/wordsDisplay.js":
/*!************************************!*\
  !*** ./components/wordsDisplay.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/migueltrinidad/Play/typer/components/wordsDisplay.js";


var wordsAssembler = function wordsAssembler(words, wordIndex, wasCorrect) {
  return words.map(function (word, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: handleWordClass(index, wordIndex, wasCorrect),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 3
      },
      __self: this
    }, word);
  });
};

var handleWordClass = function handleWordClass(mapIndex, wordIndex, wasCorrect) {
  return 'hee';
};

var WordDisplay = function WordDisplay(props) {
  var words = props.words,
      wordIndex = props.wordIndex,
      wasCorrect = props.wasCorrect;
  var allWords = wordsAssembler(words, wordIndex, wasCorrect);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, allWords);
};

/* harmony default export */ __webpack_exports__["default"] = (WordDisplay);

/***/ })

})
//# sourceMappingURL=index.js.715d3b5e021a9073b7f0.hot-update.js.map