const handleWordClass = (mapIndex, wordIndex, wasCorrect) => {
  let theClassName = '';

  if (mapIndex === wordIndex) {
    theClassName += 'current ';
  }
  console.log('this bool ' + wasCorrect);
  if (!wasCorrect) {
    theClassName += 'wrong ';
  }

  return theClassName;
};

const wordsAssembler = (words, wordIndex, wasCorrect) => (
  words.map((word, index) => (
    <span className={handleWordClass(index, wordIndex, wasCorrect)}>
      {word}
    </span>
  ))
);

const WordDisplay = (props) => {
  console.log(props);
  const { words, wordIndex, wasCorrect } = props;
  const allWords = wordsAssembler(words, wordIndex, wasCorrect);
  return (
    <p>
      {allWords}
    </p>
  );
};

export default WordDisplay;
