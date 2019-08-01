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


var handleWordClass = function handleWordClass(mapIndex, wordIndex, wasCorrect) {
  var theClassname = '';

  if (mapIndex === wordIndex) {
    theClassname += 'current';
  }

  return theClassname;
};

var wordsAssembler = function wordsAssembler(words, wordIndex, wasCorrect) {
  return words.map(function (word, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: handleWordClass(index, wordIndex, wasCorrect),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, word);
  });
};

var WordDisplay = function WordDisplay(props) {
  console.log('rendered words');
  var words = props.words,
      wordIndex = props.wordIndex,
      wasCorrect = props.wasCorrect;
  var allWords = wordsAssembler(words, wordIndex, wasCorrect);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, allWords);
};

/* harmony default export */ __webpack_exports__["default"] = (WordDisplay);

/***/ })

})
//# sourceMappingURL=index.js.f9a3d92e9030a42d0840.hot-update.js.map