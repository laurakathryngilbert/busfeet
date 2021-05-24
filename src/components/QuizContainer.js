import React from 'react';
import Question from './Question';
import AnswerOption from './AnswerOption';
import Results from './Results';

const quizContent = [
  {
    questionText: 'question text 1',
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
    console.log('We are clicking this option:', optionLetter);
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
    // console.log('currentQuestionPacket:', currentQuestionPacket);

    // to destructure, they MUST BE THE EXACT NAMES OF THE KEYS
    const { questionText, options } = currentQuestionPacket;
    // console.log('questionText:', questionText);
    // console.log('options:', options);

    return (
      <div>
        {this.state.currentQuestionNum <= this.state.quizContent.length - 1 ? (
          <div>
            <h1>QUIZ TIME</h1>
            <Question questionText={questionText} />
            {options.map((answerObj) => {
              return (
                <AnswerOption
                  key={answerObj.optType}
                  optionType={answerObj.optType}
                  answerText={answerObj.optText}
                  selectThisOption={this.selectThisOption}
                />
              );
            })}
          </div>
        ) : (
          <Results scoreObj={this.state.scoreObj} resultsKey={resultsKey} />
        )}
      </div>
    );
  }
}

export default QuizContainer;
