import styled from 'styled-components';

const ScoreBoard = (props) => {
  const { wpm, wordAccuracy, letterAccuracy } = props;
  return (
    <ScoreBoardContainer>
      <p>
        WPM:
        {wpm}
      </p>
      <p>
        Word Accuracy:
        {wordAccuracy}
      </p>
      <p>
        Letter Accuracy:
        {letterAccuracy}
      </p>
    </ScoreBoardContainer>
  );
};

const ScoreBoardContainer = styled.div`
  border:1px solid black;
`;
export default ScoreBoard;
