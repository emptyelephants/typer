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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/migueltrinidad/Play/typer/components/wordsDisplay.js";



var wordsAssembler = function wordsAssembler(words, wordIndex, incorrectWords) {
  return words.map(function (word, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WordState, {
      current: wordIndex === index,
      wasWrong: wordIndex > index && incorrectWords.includes(index),
      upComing: wordIndex < index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, word);
  });
};

var WordDisplay = function WordDisplay(props) {
  var words = props.words,
      wordIndex = props.wordIndex,
      incorrectWords = props.incorrectWords;
  var allWords = wordsAssembler(words, wordIndex, incorrectWords);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, allWords);
};

var WordState = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "wordsDisplay__WordState",
  componentId: "sc-15txsww-0"
})(["color:", ";color:", ";display:inline-block;margin-right:0.7em;"], function (props) {
  return props.wasWrong ? 'red' : 'green';
}, function (props) {
  return props.current ? 'purple' : '';
});
/* harmony default export */ __webpack_exports__["default"] = (WordDisplay);

/***/ })

})
//# sourceMappingURL=index.js.524c2f85226fa3b93d5f.hot-update.js.map