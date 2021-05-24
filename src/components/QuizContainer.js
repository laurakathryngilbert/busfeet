import React from 'react';
import Question from './Question';
import AnswerOption from './AnswerOption';
import Results from './Results';

import '../css/QuizContainer.css';

const quizContent = [
  {
    questionText:
      'question text 1 is very long la la la la the quick brown fox jumped over the lazy dog',
    options: [
      {
        optType: 'A',
        optText: 'This answer is quite long alskjf;alwkejgpoaiwjef;laksj;laksj',
      },
      {
        optType: 'B',
        optText: 'This answer is quite long alskjf;alwkejgpoaiwjef;laksj;laksj',
      },
      {
        optType: 'C',
        optText: 'This answer is quite long alskjf;alwkejgpoaiwjef;laksj;laksj',
      },
      {
        optType: 'D',
        optText: 'This answer is quite long alskjf;alwkejgpoaiwjef;laksj;laksj',
      },
    ],
  },
  {
    questionText: 'question text 2',
    options: [
      {
        optType: 'A',
        optText: 'optionA',
      },
      {
        optType: 'B',
        optText: 'optionB',
      },
      {
        optType: 'C',
        optText: 'optionC',
      },
      {
        optType: 'D',
        optText: 'optionD',
      },
    ],
  },
  {
    questionText: 'question text 3',
    options: [
      {
        optType: 'A',
        optText: 'optionA',
      },
      {
        optType: 'B',
        optText: 'optionB',
      },
      {
        optType: 'C',
        optText: 'optionC',
      },
      {
        optType: 'D',
        optText: 'optionD',
      },
    ],
  },
  {
    questionText: 'question text 4',
    options: [
      {
        optType: 'A',
        optText: 'optionA',
      },
      {
        optType: 'B',
        optText: 'optionB',
      },
      {
        optType: 'C',
        optText: 'optionC',
      },
      {
        optType: 'D',
        optText: 'optionD',
      },
    ],
  },
  {
    questionText: 'question text 5',
    options: [
      {
        optType: 'A',
        optText: 'optionA',
      },
      {
        optType: 'B',
        optText: 'optionB',
      },
      {
        optType: 'C',
        optText: 'optionC',
      },
      {
        optType: 'D',
        optText: 'optionD',
      },
    ],
  },
];

const resultsKey = {
  A: 'You answered mostly As!',
  B: 'You answered mostly Bs!',
  C: 'You answered mostly Cs!',
  D: 'You answered mostly Ds!',
};

// possibly make each element in the options array an object so it can have text AS WELL AS what type of option it is, like option A or whatever for scorekeeping, and that can be its key???

class QuizContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      quizContent: quizContent,
      currentQuestionNum: 0,
      scoreObj: {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
      },
    };
    this.selectThisOption = this.selectThisOption.bind(this);
  }

  selectThisOption(optionLetter) {
    // console.log('We are clicking this option:', optionLetter);
    this.setState({
      ...this.state,
      currentQuestionNum: this.state.currentQuestionNum + 1,
      scoreObj: {
        ...this.state.scoreObj,
        [optionLetter]: this.state.scoreObj[optionLetter] + 1,
      },
    });
  }

  render() {
    console.log(this.state.scoreObj);
    const currentQuestionPacket = this.state.quizContent[
      this.state.currentQuestionNum
    ] || {
      questionText: '',
      options: [],
    };

    // to destructure, they MUST BE THE EXACT NAMES OF THE KEYS
    const { questionText, options } = currentQuestionPacket;
    // console.log('questionText:', questionText);
    // console.log('options:', options);

    return (
      <div className="container">
        {this.state.currentQuestionNum <= this.state.quizContent.length - 1 ? (
          <div className="quizContainer">
            <h1 className="quizTime">QUIZ TIME</h1>
            <Question className="question" questionText={questionText} />
            <div className="answerContainer">
              {options.map((answerObj) => {
                return (
                  <div key={answerObj.objType} className="answerOption">
                    <AnswerOption
                      optionType={answerObj.optType}
                      answerText={answerObj.optText}
                      selectThisOption={this.selectThisOption}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <Results scoreObj={this.state.scoreObj} resultsKey={resultsKey} />
        )}
      </div>
    );
  }
}

export default QuizContainer;
