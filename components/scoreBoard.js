import styled from 'styled-components';

const ScoreBoard = (props) => {
  const { wpm } = props;
  return (
    <ScoreBoardContainer>
      <p>
        WPM:
        {wpm}
      </p>
    </ScoreBoardContainer>
  );
};

const ScoreBoardContainer = styled.div`
  border:1px solid black;
`;
export default ScoreBoard;
