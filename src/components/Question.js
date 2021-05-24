import React from 'react';

const Question = (props) => {
  const { questionText } = props;
  return <h1>{questionText}</h1>;
};

export default Question;
