import React, { useState } from 'react';

const checkLetter = (
  userWord,
  incrementWordIndex,
  currentWord,
  incrementWrongLetters,
  incrementUserLetters,
  updateIncorrect,
  wordIndex,
) => {
  const letterIndex = userWord.length - 1;

  // ignore on empty word
  if (userWord[0] === ' ') {
    return '';
  }

  // handle next word, check for correctness
  if (userWord[letterIndex] === ' ') {
    incrementWordIndex();
    if (userWord.trim() !== currentWord) {
      updateIncorrect(wordIndex);
    }
    return '';
  }
  // if the letter was correect
  if (userWord[letterIndex] === currentWord[letterIndex]) {
    incrementUserLetters();
    return userWord;
  }
  // if the letter was wrong
  if (userWord[letterIndex] !== currentWord[letterIndex]) {
    incrementWrongLetters();
    incrementUserLetters();
    return userWord;
  }
  return userWord;
};

const handleBackspace = (e, decrementUserLetters) => {
  if (e.key === 'Backspace') {
    decrementUserLetters();
  }
};

const InputBar = (props) => {
  const {
    currentWord,
    wordIndex,
    incrementWordIndex,
    incrementWrongLetters,
    updateIncorrect,
    incrementUserLetters,
    decrementUserLetters,
  } = props;

  const [userWord, setUserWord] = useState('');

  return (
    <>
      <input
        className={userWord === currentWord.slice(0, userWord.length) ? '' : 'inputWrong'}
        onChange={e => setUserWord(checkLetter(
          e.target.value,
          incrementWordIndex,
          currentWord,
          incrementWrongLetters,
          incrementUserLetters,
          updateIncorrect,
          wordIndex,
        ))}
        onKeyDown={e => handleBackspace(e, decrementUserLetters)}
        value={userWord}
      />
    </>
  );
};

export default InputBar;
