import React, { useState } from 'react';

const checkSpace = letter => (letter[letter.length - 1] === ' ' ? '' : letter);

const InputBar = () => {
  const [word, setWord] = useState();
  return (
    <>
      <h3>{ word }</h3>
      <input
        onChange={e => setWord(checkSpace(e.target.value))}
        value={word}
      />
    </>
  );
};

export default InputBar;
