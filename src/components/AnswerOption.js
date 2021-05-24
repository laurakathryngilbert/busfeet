import React from 'react';

const AnswerOption = (props) => {
  const { optionIdx, answerText, selectThisOption } = props;
  // console.log('optionIdx:', optionIdx);
  // console.log('selectThisOption:', selectThisOption);
  return (
    <div>
      <h1>{answerText}</h1>
      <button
        onClick={() => {
          selectThisOption(optionIdx);
        }}
      >
        SELECT ME
      </button>
    </div>
  );
};

export default AnswerOption;
