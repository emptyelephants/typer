import styled from 'styled-components';

const totalWords = [10, 25, 100, 150, 200];

const assembleOptions = (array, props) => {
  const {
    setRandWords,
    setWordIndex,
    words,
    currentOption,
    setAmmountOfWords,
  } = props;
  return (
    array.map((option, index) => (
      <>
        <Option
          currentOption={option === currentOption}
          onClick={() => {
            setWordIndex();
            setAmmountOfWords(option);
            setRandWords(words.sort(() => Math.random() - 0.5).slice(0, option));
          }
        }
        >
          {option}
        </Option>
        { index !== array.length - 1 && <OptionDivider>/</OptionDivider>}
      </>
    ))
  );
};

const GameOptions = props => (
  <OptionsContainer>
    <p>
      Test Length:
    </p>

    {assembleOptions(totalWords, props)}
  </OptionsContainer>
);


export default GameOptions;

const OptionsContainer = styled.div`
  display:flex;
  
  p {
    font-family:'Open Sans';
  }
`;

const Option = styled.p`
  margin:0 4px 0 0;
  cursor:pointer;
  text-decoration: ${props => (props.currentOption ? 'underline' : '')}
`;

const OptionDivider = styled.span`
  margin:0px 4px;
`;
