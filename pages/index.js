/* eslint-disable func-names */
import { useState } from 'react';
import styled from 'styled-components';

import InputBar from '../components/inputBar';
import WordsDisplay from '../components/wordsDisplay';
import ScoreBoard from '../components/scoreBoard';
import GameOptions from '../components/gameOptions';

import allWords from '../words';

const Index = (props) => {
  const { words } = props;

  const [wordIndex, incrementWordIndex] = useState(0);
  const [userLetters, setUserLetters] = useState(0);
  const [wrongLetters, setWrongLetters] = useState(0);
  const [incorrectWords, setIncorrect] = useState([]);
  const [gameStart, setGameStart] = useState(0);
  const [ammountOfWords, setAmmountOfWords] = useState(20);

  const gameWords = words.slice(0, ammountOfWords);
  const currentWord = gameWords[wordIndex];
  const endOfGame = gameWords[wordIndex] === undefined;
  return (
    <Game>
      <GameTitle>Typer</GameTitle>
      <GameInfo>
        <ScoreBoard
          gameStart={gameStart}
          wordIndex={wordIndex}
          endOfGame={endOfGame}
          letterAccuracy={{ userLetters, wrongLetters }}
          incorrectWords={incorrectWords.length}
        />
        <GameOptions
          setAmmountOfWords={e => setAmmountOfWords(e)}
        />
      </GameInfo>
      <GameContainer>
        <div>
          <WordsDisplay
            words={gameWords}
            wordIndex={wordIndex}
            incorrectWords={incorrectWords}
          />
          <InputBar
            currentWord={currentWord || ' '}
            wordIndex={wordIndex}
            incrementWordIndex={() => incrementWordIndex(wordIndex + 1)}
            incrementWrongLetters={() => setWrongLetters(wrongLetters + 1)}
            decrementWrongLetters={() => setWrongLetters(wrongLetters - 1)}
            updateIncorrect={e => setIncorrect([...incorrectWords, e])}
            incrementUserLetters={() => setUserLetters(userLetters + 1)}
            decrementUserLetters={() => setUserLetters(userLetters - 1)}
            setGameStart={e => setGameStart(e)}
            endOfGame={endOfGame}
          />
          <br />
        </div>
      </GameContainer>
    </Game>
  );
};


// all available words to play with
Index.getInitialProps = async function () {
  allWords.sort(() => Math.random() - 0.5);
  const words = allWords.slice(0, 1000);

  return {
    words,
  };
};

export default Index;
const Game = styled.div`
  height:100vh;
  background:#4C566A;
`;

const GameContainer = styled.div`
  text-align:center;
  margin:auto;
  max-width: 70%;
  margin: auto;
  padding: 17px;
  border-radius: 3px;
  background:#5E81AC;
`;

const GameInfo = styled.div`
  width: 70%;
  margin: auto;
  box-sizing:border-box;
  margin-bottom:10px;
`;

const GameTitle = styled.h1`
  text-align:center;
  font-weight:bold;
  font-size:2em;
  padding:20px 0px 30px;
  font-family:'Open Sans';
`;
