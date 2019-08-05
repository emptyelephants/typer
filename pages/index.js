/* eslint-disable func-names */
import { useState } from 'react';
// import fetch from 'isomorphic-unfetch';

import InputBar from '../components/inputBar';
import WordsDisplay from '../components/wordsDisplay';

import words from '../words';

const Index = () => {
  const [wordIndex, incrementWordIndex] = useState(0);
  const [userLetters, setUserLetters] = useState(12);
  const [wrongLetters, setWrongLetters] = useState(0);
  const [incorrectWords, setIncorrect] = useState([]);

  const shortword = words.slice(100, 110);
  const currentWord = shortword[wordIndex];

  return (
    <>
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
    </>
  );
};

// todo: fetch words from api
// Index.getInitialProps = async function () {
//   const wordsApiKey = process.env.WORDS_API_KEY;
//   const wordsApiBaseUrl = 'https://random-word-api.herokuapp.com';
//   const res = await fetch(`${wordsApiBaseUrl}/word?key=${wordsApiKey}&number=${200}`);
//   const words = await res.json();

//   return {
//     words,
//   };
// };

export default Index;
