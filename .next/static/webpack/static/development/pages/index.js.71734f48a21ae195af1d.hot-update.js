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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/migueltrinidad/Play/typer/components/inputBar.js";



var checkLetter = function checkLetter(userWord, incrementWordIndex, currentWord, incrementWrongLetters, incrementUserLetters, updateIncorrect, wordIndex) {
  var letterIndex = userWord.length - 1; // ignore on empty word

  if (userWord[0] === ' ') {
    return '';
  } // handle next word, check for correctness


  if (userWord[letterIndex] === ' ') {
    incrementWordIndex();

    if (userWord.trim() !== currentWord) {
      updateIncorrect(wordIndex);
    }

    return '';
  } // if the letter was correect


  if (userWord[letterIndex] === currentWord[letterIndex]) {
    incrementUserLetters();
    return userWord;
  } // if the letter was wrong


  if (userWord[letterIndex] !== currentWord[letterIndex]) {
    incrementWrongLetters();
    incrementUserLetters();
    return userWord;
  }

  return userWord;
};

var handleBackspace = function handleBackspace(e, decrementUserLetters) {
  if (e.key === 'Backspace') {
    decrementUserLetters();
  }
};

var InputBar = function InputBar(props) {
  var currentWord = props.currentWord,
      wordIndex = props.wordIndex,
      incrementWordIndex = props.incrementWordIndex,
      incrementWrongLetters = props.incrementWrongLetters,
      wasCorrect = props.wasCorrect,
      updateIncorrect = props.updateIncorrect,
      incrementUserLetters = props.incrementUserLetters,
      decrementUserLetters = props.decrementUserLetters;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      userWord = _useState2[0],
      setUserWord = _useState2[1];

  var letterIndex = userWord.length;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: userWord === currentWord.slice(0, userWord.length) ? '' : 'inputWrong',
    onChange: function onChange(e) {
      return setUserWord(checkLetter(e.target.value, incrementWordIndex, currentWord, incrementWrongLetters, incrementUserLetters, updateIncorrect, wordIndex));
    },
    onKeyDown: function onKeyDown(e) {
      return handleBackspace(e, decrementUserLetters);
    },
    value: userWord,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InputBar);

/***/ })

})
//# sourceMappingURL=index.js.71734f48a21ae195af1d.hot-update.js.map