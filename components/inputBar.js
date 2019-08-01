import React, { useState } from 'react';

// e.target.value,
// incrementWordIndex,
// currentWord,
// setCorrect,
// handleLetterAccuracy,

const checkSpace = (
  userWord,
  incrementWordIndex,
  currentWord,
  setCorrect,
  handleLetterAccuracy,
) => {
  const letterIndex = userWord.legth - 1;

  // ignore on empty word
  if (userWord[0] === ' ') {
    return '';
  }
  // handle next word, check for correctness
  if (userWord[letterIndex] === ' ') {
    incrementWordIndex();
    setCorrect(userWord.slice(0, letterIndex) === currentWord);
    return '';
  }
  // if the letter was correect
  if (userWord[letterIndex] === currentWord[letterIndex]) {
    return userWord;
  }
  // if the letter was wrong
  if (userWord[letterIndex] !== currentWord[letterIndex]) {
    handleLetterAccuracy();
    return userWord;
  }
  return userWord;
};

const InputBar = (props) => {
  const {
    currentWord,
    incrementWordIndex,
    handleLetterAccuracy,
    wasCorrect,
    setCorrect,
  } = props;
  const [userWord, setUserWord] = useState('');

  const letterIndex = userWord.length;
  return (
    <>
      <p>
        letter index
        {` ${letterIndex}`}
      </p>
      <p>
        the current is
        {` ${currentWord}`}
      </p>
      <input
        onChange={e => setUserWord(checkSpace(
          e.target.value,
          incrementWordIndex,
          currentWord,
          setCorrect,
          handleLetterAccuracy,
        ))}
        value={userWord}
      />
      <p>
        {wasCorrect && 'correct'}
      </p>
    </>
  );
};

export default InputBar;
