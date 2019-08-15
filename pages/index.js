/* eslint-disable func-names */
import { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import InputBar from '../components/inputBar';
import WordsDisplay from '../components/wordsDisplay';
import ScoreBoard from '../components/scoreBoard';
import GameOptions from '../components/gameOptions';

import allWords from '../words';

const Index = (props) => {
  const { words } = props;

  const [wordIndex, setWordIndex] = useState(0);
  const [userLetters, setUserLetters] = useState(0);
  const [wrongLetters, setWrongLetters] = useState(0);
  const [incorrectWords, setIncorrect] = useState([]);
  const [gameStart, setGameStart] = useState(0);
  const [ammountOfWords, setAmmountOfWords] = useState(25);
  const [randWords, setRandWords] = useState(words.slice(0, ammountOfWords));

  const gameWords = randWords;
  const currentWord = randWords[wordIndex];
  const endOfGame = gameWords[wordIndex] === undefined;

  return (
    <Game>
      <Head>
        <title>Typer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
          setGameStart={e => setGameStart(e)}
          setRandWords={e => setRandWords(e)}
          currentOption={ammountOfWords}
          words={words}
          setWordIndex={() => setWordIndex(0)}
        />
      </GameInfo>
      <GameContainer>
        <WordsDisplay
          words={gameWords}
          wordIndex={wordIndex}
          incorrectWords={incorrectWords}
        />
        <InputBar
          currentWord={currentWord || ' '}
          wordIndex={wordIndex}
          setWordIndex={() => setWordIndex(wordIndex + 1)}
          incrementWrongLetters={() => setWrongLetters(wrongLetters + 1)}
          decrementWrongLetters={() => setWrongLetters(wrongLetters - 1)}
          updateIncorrect={e => setIncorrect([...incorrectWords, e])}
          incrementUserLetters={() => setUserLetters(userLetters + 1)}
          decrementUserLetters={() => setUserLetters(userLetters - 1)}
          setGameStart={e => setGameStart(e)}
          endOfGame={endOfGame}
        />
      </GameContainer>
    </Game>
  );
};


// all available words to play with
Index.getInitialProps = async function () {
  allWords.sort(() => Math.random() - 0.5);
  const words = allWords.filter(word => word.length < 7);

  return {
    words,
  };
};

export default Index;

const Game = styled.div`
  height:100vh;
  background:#4C566A;
  overflow:auto;
`;


const MainContainer = styled.div`
  width: 70%;
  margin: auto;
  box-sizing:border-box;
  margin-bottom:10px;
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
`;

const GameContainer = styled(MainContainer)`
  text-align:center;
  margin:auto;
  max-width: 70%;
  margin: auto;
  padding: 17px;
  border-radius: 3px;
  background:#5E81AC;
`;

const GameInfo = styled(MainContainer)`
  *{
    color:#fff;
  }
`;

const GameTitle = styled.h1`
  text-align:center;
  font-weight:bold;
  font-size:2em;
  padding:20px 0px 30px;
  font-family:'Open Sans';
  color:#fff;
`;
