import React from 'react';

const Results = (props) => {
  const { scoreObj, resultsKey } = props;
  let winningLetter = 'x';
  let currentMaxAnswers = 0;
  for (let key in scoreObj) {
    if (scoreObj[key] > currentMaxAnswers) {
      currentMaxAnswers = scoreObj[key];
      winningLetter = key;
    }
  }

  // console.log('winningLetter:', winningLetter);
  // console.log('currentMaxAnswers:', currentMaxAnswers);
  return <h1>{resultsKey[winningLetter]}</h1>;
};

export default Results;
