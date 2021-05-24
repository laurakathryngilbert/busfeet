import React from 'react';
import Question from './Question';
import AnswerOption from './AnswerOption';

const quizContent = [
  {
    questionText: 'question text 1',
    options: ['optionA', 'optionB', 'optionC', 'optionD'],
  },
  {
    questionText: 'question text 2',
    options: ['optionA', 'optionB', 'optionC', 'optionD'],
  },
  {
    questionText: 'question text 3',
    options: ['optionA', 'optionB', 'optionC', 'optionD'],
  },
  {
    questionText: 'question text 4',
    options: ['optionA', 'optionB', 'optionC', 'optionD'],
  },
  {
    questionText: 'question text 5',
    options: ['optionA', 'optionB', 'optionC', 'optionD'],
  },
];

// possibly make each element in the options array an object so it can have text AS WELL AS what type of option it is, like option A or whatever for scorekeeping, and that can be its key???

class QuizContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      quizContent: quizContent,
      currentQuestionNum: 0,
    };
    this.selectThisOption = this.selectThisOption.bind(this);
  }

  selectThisOption(optionLetter) {
    console.log('We are clicking this option:', optionLetter);
  }

  render() {
    // console.log(this.state);
    const currentQuestionPacket = this.state.quizContent[
      this.state.currentQuestionNum
    ];
    // console.log('currentQuestionPacket:', currentQuestionPacket);

    // to destructure, they MUST BE THE EXACT NAMES OF THE KEYS
    const { questionText, options } = currentQuestionPacket;
    // console.log('questionText:', questionText);
    // console.log('options:', options);

    return (
      <div>
        <Question questionText={questionText} />
        {options.map((answerOption, idx) => {
          return (
            <AnswerOption
              key={idx}
              optionIdx={idx}
              answerText={answerOption}
              selectThisOption={this.selectThisOption}
            />
          );
        })}
      </div>
    );
  }
}

export default QuizContainer;
