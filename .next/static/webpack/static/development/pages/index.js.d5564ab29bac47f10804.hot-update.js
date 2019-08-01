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


var wordsAssembler = function wordsAssembler(words) {
  return words.map(function (word) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 3
      },
      __self: this
    }, word);
  });
};

var WordDisplay = function WordDisplay(props) {
  var words = props.words;
  var allWords = wordsAssembler(words);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, allWords);
};

/* harmony default export */ __webpack_exports__["default"] = (WordDisplay);

/***/ })

})
//# sourceMappingURL=index.js.d5564ab29bac47f10804.hot-update.js.map