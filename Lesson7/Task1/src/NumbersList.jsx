import React from 'react';

const NumbersList = ({ numbers }) => {
  const numberElems = numbers.map(num => <li key={num}>{num}</li>);
  return <ul>{numberElems}</ul>;
};

export default NumbersList;