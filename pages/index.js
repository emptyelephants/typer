/* eslint-disable func-names */
import { useState } from 'react';
import styled from 'styled-components';

import InputBar from '../components/inputBar';
import WordsDisplay from '../components/wordsDisplay';

import allWords from '../words';

const Index = (props) => {

  const { words } = props;
  const [wordIndex, incrementWordIndex] = useState(0);
  const [userLetters, setUserLetters] = useState(12);
  const [wrongLetters, setWrongLetters] = useState(0);
  const [incorrectWords, setIncorrect] = useState([]);

  // user set ammount of words;
  const shortword = words.slice(0, 20);
  const currentWord = shortword[wordIndex];

  return (
    <GameContainer>
      <h1>Typer</h1>
      <div>
        <WordsDisplay
          words={shortword}
          wordIndex={wordIndex}
          incorrectWords={incorrectWords}
        />
        <InputBar
          currentWord={currentWord}
          wordIndex={wordIndex}
          incrementWordIndex={() => incrementWordIndex(wordIndex + 1)}
          incrementWrongLetters={() => setWrongLetters(wrongLetters + 1)}
          decrementWrongLetters={() => setWrongLetters(wrongLetters - 1)}
          updateIncorrect={e => setIncorrect([...incorrectWords, e])}
          incrementUserLetters={() => setUserLetters(userLetters + 1)}
          decrementUserLetters={() => setUserLetters(userLetters - 1)}
        />
        <br />
        {`your accuracy is  ${((userLetters - wrongLetters) / userLetters) * 100}%`}
      </div>
    </GameContainer>
  );
};

const GameContainer = styled.div`
  text-align:center;
  max-width:1440px;
  margin:auto;
`;

// all available words to play with
Index.getInitialProps = async function () {
  allWords.sort(() => Math.random() - 0.2);
  const words = allWords.slice(0, 1000);

  return {
    words,
  };
};

export default Index;
