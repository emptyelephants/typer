import fetch from 'isomorphic-unfetch';

const WordDisplay = () => (
  <p>
    foo
  </p>
);

// eslint-disable-next-line func-names
Index.getInitialProps = async function() {
  const res = await fetch('https://random-word-api.herokuapp.com/');
  const data = await res.json();

  console.log(`Show words fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show),
  };
};
export default WordDisplay;
