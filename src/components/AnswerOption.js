import React from 'react';
import '../css/AnswerOption.css';

const AnswerOption = (props) => {
  const { optionType, answerText, selectThisOption } = props;
  // console.log('optionIdx:', optionIdx);
  // console.log('selectThisOption:', selectThisOption);
  return (
    <div className="answer">
      <h2 className="answerText">{answerText}</h2>
      <button
        className="answerButton"
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
