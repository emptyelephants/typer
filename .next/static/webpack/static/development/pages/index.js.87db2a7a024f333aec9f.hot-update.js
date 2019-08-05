webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_inputBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/inputBar */ "./components/inputBar.js");
/* harmony import */ var _components_wordsDisplay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/wordsDisplay */ "./components/wordsDisplay.js");
/* harmony import */ var _words__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../words */ "./words.js");




var _jsxFileName = "/Users/migueltrinidad/Play/typer/pages/index.js";


/* eslint-disable func-names */





var Index = function Index(props) {
  console.log('it rendered');
  var words = props.words;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      wordIndex = _useState2[0],
      _incrementWordIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(12),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      userLetters = _useState4[0],
      setUserLetters = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
      wrongLetters = _useState6[0],
      setWrongLetters = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState7, 2),
      incorrectWords = _useState8[0],
      setIncorrect = _useState8[1]; // user set ammount of words;


  var shortword = words.slice(0, 20);
  var currentWord = shortword[wordIndex];
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Typer"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_wordsDisplay__WEBPACK_IMPORTED_MODULE_6__["default"], {
    words: shortword,
    wordIndex: wordIndex,
    incorrectWords: incorrectWords,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_inputBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    currentWord: currentWord,
    wordIndex: wordIndex,
    incrementWordIndex: function incrementWordIndex() {
      return _incrementWordIndex(wordIndex + 1);
    },
    incrementWrongLetters: function incrementWrongLetters() {
      return setWrongLetters(wrongLetters + 1);
    },
    decrementWrongLetters: function decrementWrongLetters() {
      return setWrongLetters(wrongLetters - 1);
    },
    updateIncorrect: function updateIncorrect(e) {
      return setIncorrect([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(incorrectWords), [e]));
    },
    incrementUserLetters: function incrementUserLetters() {
      return setUserLetters(userLetters + 1);
    },
    decrementUserLetters: function decrementUserLetters() {
      return setUserLetters(userLetters - 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), "your accuracy is  ".concat((userLetters - wrongLetters) / userLetters * 100, "%")));
}; // all available words to play with


Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var words;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _words__WEBPACK_IMPORTED_MODULE_7__["default"].sort(function () {
            return Math.random() - 0.2;
          });
          words = _words__WEBPACK_IMPORTED_MODULE_7__["default"].slice(0, 1000);
          return _context.abrupt("return", {
            words: words
          });

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.87db2a7a024f333aec9f.hot-update.js.map