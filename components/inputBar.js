import React, { useState } from 'react';
import styled from 'styled-components';

const checkLetter = (
  userWord,
  setWordIndex,
  currentWord,
  incrementWrongLetters,
  incrementUserLetters,
  updateIncorrect,
  wordIndex,
  endOfGame,
) => {
  const letterIndex = userWord.length - 1;
  if (endOfGame) {
    return userWord;
  }
  if (userWord[0] === ' ') {
    return '';
  }
  if (userWord[letterIndex] === ' ') {
    setWordIndex();
    if (userWord.trim() !== currentWord) {
      updateIncorrect(wordIndex);
    }
    return '';
  }
  if (userWord[letterIndex] === currentWord[letterIndex]) {
    incrementUserLetters();
    return userWord;
  }
  if (userWord[letterIndex] !== currentWord[letterIndex]) {
    incrementWrongLetters();
    incrementUserLetters();
    return userWord;
  }
  return userWord;
};

const handleBackspace = (e, decrementUserLetters, userWord) => {
  if (e.key === 'Backspace' && userWord) {
    decrementUserLetters();
  }
};

const handleGameStart = (handler, currentWord, wordIndex) => {
  if (currentWord === '' && wordIndex === 0) {
    return handler(Date.now());
  }
  return false;
};

const InputBar = (props) => {
  const {
    currentWord,
    wordIndex,
    setWordIndex,
    incrementWrongLetters,
    updateIncorrect,
    incrementUserLetters,
    decrementUserLetters,
    setGameStart,
    endOfGame,
  } = props;

  const [userWord, setUserWord] = useState('');

  return (
    <GameControls>
      <GameInput
        placeholder="Just Start Typing"
        value={userWord}
        incorrectWord={userWord.trim() !== currentWord.slice(0, userWord.length)}
        onChange={e => setUserWord(checkLetter(
          e.target.value,
          setWordIndex,
          currentWord,
          incrementWrongLetters,
          incrementUserLetters,
          updateIncorrect,
          wordIndex,
          endOfGame,
        ))}
        onKeyDown={(e) => {
          handleBackspace(e, decrementUserLetters, userWord);
          handleGameStart(setGameStart, userWord, wordIndex);
        }}
        endOfGame={endOfGame}
      />
      {/* <GameRestart
        onClick={() => console.log('todo')}
      >
        restart
      </GameRestart> */}
    </GameControls>
  );
};

export default InputBar;

const GameInput = styled.input`
  background: ${props => (props.incorrectWord ? '#BF616A' : '#4C566A')};
  width: 90%;
  border:none;
  height:30px;
  font-size:24px;
  padding:12px 12px;
  box-sizing:border-box;
  color:#fff;
`;


const GameControls = styled.div`
  width: 100%;
  padding:14px 0 0;
  text-align:left;
  display:flex;
`;
