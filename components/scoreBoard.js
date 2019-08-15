import styled from 'styled-components';

const ScoreBoard = (props) => {
  const {
    gameStart,
    wordIndex,
    endOfGame,
    incorrectWords,
    letterAccuracy,
  } = props;

  const wpmScore = (((wordIndex - incorrectWords) / ((Date.now() - gameStart) / 1000)) * 60);
  const letterAccActual = `${letterAccuracy.userLetters - letterAccuracy.wrongLetters} / ${letterAccuracy.userLetters}`;

  return (
    <ScoreBoardContainer>
      <p>
        WPM:
        {(endOfGame && ` ${wpmScore.toFixed(0)}`) || ' XX'}
      </p>
      <p>
        Letter Accuracy:
        {(endOfGame && ` ${letterAccActual}`) || ' XX'}
      </p>
    </ScoreBoardContainer>
  );
};

export default ScoreBoard;

const ScoreBoardContainer = styled.div`
  display:flex;
  
  p{
    margin-right:25px;
    font-family:'Open Sans';
  };
`;
