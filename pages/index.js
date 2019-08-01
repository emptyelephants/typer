/* eslint-disable func-names */
import { useState } from 'react';
// import fetch from 'isomorphic-unfetch';

import InputBar from '../components/inputBar';
import WordsDisplay from '../components/wordsDisplay';

import words from '../words';

const Index = () => {
  // stringfy total words, grab total letters then (total - accuracy)/(total)
  const [wordIndex, incrementWordIndex] = useState(0);
  const [wasCorrect, setCorrect] = useState(true);
  const [wrongLetters, incrementWrongLetters] = useState(0);

  const shortword = words.slice(0, 10);
  const currentWord = shortword[wordIndex];

  return (
    <div>
      <p>Typer</p>

      <WordsDisplay
        words={shortword}
        wordIndex={wordIndex}
        wasCorrect={wasCorrect}
      />
      <InputBar
        currentWord={currentWord}
        incrementWordIndex={() => incrementWordIndex(wordIndex + 1)}
        handleLetterAccuracy={() => incrementWrongLetters(wrongLetters + 1)}
        wasCorrect={wasCorrect}
        setCorrect={bool => setCorrect(bool)}
      />
      {<p>that was right</p> && wasCorrect}

      {`wrong letters ${wrongLetters}`}
    </div>
  );
};


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
