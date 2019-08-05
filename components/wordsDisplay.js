import styled from 'styled-components';

const wordsAssembler = (words, wordIndex, incorrectWords) => (
  words.map((word, index) => (
    <WordState
      current={wordIndex === index}
      wasWrong={wordIndex > index && incorrectWords.includes(index)}
      upComing={wordIndex < index}
    >
      {word}
    </WordState>
  ))
);

const WordDisplay = (props) => {
  const { words, wordIndex, incorrectWords } = props;
  const allWords = wordsAssembler(words, wordIndex, incorrectWords);
  return (
    <p>
      {allWords}
    </p>
  );
};

const WordState = styled.span`
  color: ${props => (props.wasWrong ? 'red' : 'green')};
  color: ${props => (props.current ? 'purple' : '')};
  color: ${props => (props.upComing ? 'black !important' : '')};

  display:inline-block;
  margin-right:0.7em;
`;

export default WordDisplay;
