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
    <WordsContainer>
      {allWords}
    </WordsContainer>
  );
};

const WordState = styled.p`
  color: ${props => (props.wasWrong ? 'red' : 'green')};
  color: ${props => (props.current ? 'purple' : '')};
  color: ${props => (props.upComing ? '#fff' : '')};
  display:inline-block;
  margin-right:0.4em;
  margin-bottom:0.1em;
  font-size:24px;
  font-family:'Open Sans';

`;

const WordsContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
`;

export default WordDisplay;
