import * as React from 'react';
import { connect } from 'react-redux';
import { StyledContainer, StyledErrorMessage, StyledAnswers } from './AddQuestion.style';
import { addQuestion } from '../../../services/Actions';
import QuestionField from "../QuestionField/QuestionField";
import AnswerEdit from "../AnswerEdit/AnswerEdit";
import SaveButton from "../SaveButton/SaveButton";

const DEFAULTS_STATE = {
  text : "",
  errorMessage : "",
  answers : [{
    text : ""
  }, {
    text : ""
  }, {
    text : ""
  }, {
    text : ""
  }]
};

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...DEFAULTS_STATE
    };

    this.onSetCorrectAnswer = this.onSetCorrectAnswer.bind(this);
    this.onQuestionChanged = this.onQuestionChanged.bind(this);
    this.onAnswerChanged = this.onAnswerChanged.bind(this);
    this.onAddButtonClicked = this.onAddButtonClicked.bind(this);
  }

  onQuestionChanged(text) {
    this.setState({ text });
  }

  onAddButtonClicked() {
    const {dispatch} = this.props;
    const {text, answers} = this.state;
    const isNotAllAnswersFilled = answers.find(currAnswer => currAnswer.text === "");
    const isCorrectAnswer = answers.find(currAnswer => currAnswer.isCorrect);

    if (!text) {
      this.setState({ errorMessage : "Your question is empty" });
    }
    else if (isNotAllAnswersFilled) {
      this.setState({ errorMessage : "There are empty answers. Please fill all of them" });
    }
    else if (!isCorrectAnswer) {
      this.setState({ errorMessage : "You should mark one answer to be correct" });
    }
    else {
      this.setState({
        ...DEFAULTS_STATE,
      });
      dispatch(addQuestion({ text, answers }));
    }
  }

  onAnswerChanged(answerIndex, answerText) {
    const {answers} = this.state;
    const newAnswers = [...answers];

    newAnswers.forEach((answer, index) => {
      if (index === answerIndex) {
        answer.text = answerText;
      }
    });

    this.setState({
      answers : [
        ...newAnswers
      ]
    });
  }

  onSetCorrectAnswer(answerIndex) {
    const {answers} = this.state;
    const newAnswers = [...answers];

    newAnswers.forEach((answer, index) => {
      answer.isCorrect = index === answerIndex
    });

    this.setState({
      answers : [
        ...newAnswers
      ]
    });
  }

  render() {
    const {text, answers, errorMessage} = this.state;

    return (
      <StyledContainer>
        <QuestionField
          value={text}
          onChange={this.onQuestionChanged}
        />
        <StyledAnswers>
          {answers.map((answer, index) => (
            <AnswerEdit
              key={index}
              index={index}
              onChange={this.onAnswerChanged}
              onSetCorrectAnswer={this.onSetCorrectAnswer}
              data={answer}
            />
          ))}
        </StyledAnswers>
        {errorMessage ? (
          <StyledErrorMessage>
            {errorMessage}
          </StyledErrorMessage>
        ) : null}
        <SaveButton
          onClick={this.onAddButtonClicked}
        />
      </StyledContainer>
    );
  }
}

export default connect()(AddQuestion);