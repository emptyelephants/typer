const ScoreBoard = (props) => {
  const {
    gameStart,
    wordIndex,
    endOfGame,
    incorrectWords,
    letterAccuracy,
  } = props;
  const wpmScore = (((wordIndex - incorrectWords) / ((Date.now() - gameStart) / 1000)) * 60);
  const letterAccActual = (
    ((letterAccuracy.userLetters - letterAccuracy.wrongLetters) / letterAccuracy.userLetters)
  );
  return (
    <div>
      <p>
        WPM:
        { (endOfGame && wpmScore) || 'XX'}
      </p>
      <p>
        Letter Accuracy:
        {(letterAccActual * 100).toFixed(0)}
      </p>
    </div>
  );
};

export default ScoreBoard;
