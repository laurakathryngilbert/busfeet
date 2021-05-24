import React from 'react';

const AnswerOption = (props) => {
  const { optionType, answerText, selectThisOption } = props;
  // console.log('optionIdx:', optionIdx);
  // console.log('selectThisOption:', selectThisOption);
  return (
    <div>
      <h1>{answerText}</h1>
      <button
        onClick={() => {
          selectThisOption(optionType);
        }}
      >
        SELECT ME
      </button>
    </div>
  );
};

export default AnswerOption;
