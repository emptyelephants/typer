import styled from 'styled-components';

const totalWords = [10, 25, 100, 150, 200];

const assembleOptions = (array, props) => {
  const { setRandWords, setWordIndex, words } = props;
  return (
    array.map(option => (
      <Option onClick={() => {
        setWordIndex();
        setRandWords(words.sort(() => Math.random() - 0.5).slice(0, option));
      }
      }
      >
        {option}
      </Option>
    ))
  );
};

const GameOptions = props => (
  <OptionsContainer>
    {assembleOptions(totalWords, props)}
  </OptionsContainer>
);


export default GameOptions;

const OptionsContainer = styled.div`
  display:flex;

`;

const Option = styled.p`
  margin:0 4px 0 0;
  cursor:pointer;
`;
