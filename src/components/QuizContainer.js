import React from 'react';
import Question from './Question';
import AnswerOption from './AnswerOption';

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
    this.setState({
      ...this.state,
      currentQuestionNum: this.state.currentQuestionNum + 1,
    });
  }

  render() {
    // console.log(this.state);
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
          <h1>RESULTS TIME</h1>
        )}
      </div>
    );
  }
}

export default QuizContainer;
