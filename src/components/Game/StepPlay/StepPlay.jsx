import * as React from 'react';
import { connect } from 'react-redux';
import { StyledContainer, StyledMain, StyledErrorMessage, StyledButtons } from './StepPlay.style';
import PreviousButton from '../PreviousButton/PreviousButton';
import NextButton from '../NextButton/NextButton';
import SendButton from '../SendButton/SendButton';
import Question from '../Question/Question';
import Answers from '../Answers/Answers';
import Header from "../Header/Header";
import {answerQuestion, goToQuestion} from '../../../services/Actions';
import Link from "../../Link/Link";

class StepPlay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAnswerIndex : null,
      isError : false
    };

    this.onAnswerClicked = this.onAnswerClicked.bind(this);
    this.goToQuestionClicked = this.goToQuestionClicked.bind(this);
    this.onSendButtonClicked = this.onSendButtonClicked.bind(this);
  }

  onAnswerClicked(selectedAnswerIndex) {
    this.setState({ selectedAnswerIndex });
  }

  onSendButtonClicked() {
    const {dispatch} = this.props;
    const {selectedAnswerIndex} = this.state;

    if (selectedAnswerIndex !== null) {
      this.setState({
        selectedAnswerIndex : null,
        isError : false
      });
      dispatch(answerQuestion(selectedAnswerIndex));
    }
    else {
      this.setState({ isError : true });
    }
  }

  goToQuestionClicked(newQuestionIndex) {
    this.setState({ selectedAnswerIndex : null });
    this.props.dispatch(goToQuestion(newQuestionIndex));
  }

  render() {
    const {
      question,
      currentQuestionIndex,
      hasPreviousButton,
      hasNextButton
    } = this.props;
    const {selectedAnswerIndex, isError} = this.state;
    const {isAnswered, text, answers} = question;
    const isGaveCorrectAnswer = answers.find(currAnswer => currAnswer.isCorrect && currAnswer.selected);

    return (
      <StyledContainer>
        <Header />
        <StyledMain isAnswered={isAnswered}>
          <Question
            isAnswered={isAnswered}
            isGaveCorrectAnswer={isGaveCorrectAnswer}
          >
            {text}
          </Question>
          <Answers
            questionIndex={currentQuestionIndex}
            data={answers}
            temporarySelectedAnswerIndex={selectedAnswerIndex}
            isAnswered={isAnswered}
            onAnswerClick={this.onAnswerClicked}
          />
        </StyledMain>
        {isError ? (
          <StyledErrorMessage>
            {"Select at least one option, please"}
          </StyledErrorMessage>
        ) : null}
        <StyledButtons>
          {hasPreviousButton ? (
            <PreviousButton
              onClick={() => {
                this.goToQuestionClicked(currentQuestionIndex - 1);
              }}
            />
          ) : null}
          {!isAnswered ? (
            <SendButton
              onClick={this.onSendButtonClicked}
            />
          ) : null}
          {hasNextButton && isAnswered ? (
            <NextButton
              onClick={() => {
                this.goToQuestionClicked(currentQuestionIndex + 1);
              }}
            />
          ) : null}
        </StyledButtons>
        <Link to={"/admin"}>
          {"Manage questions"}
        </Link>
      </StyledContainer>
    );
  }
}

const mapStateToProps = (state) => {
  const {questions, currentQuestionIndex} = state;
  const question = questions[currentQuestionIndex];
  const hasPreviousButton = questions[currentQuestionIndex - 1];
  const hasNextButton = questions[currentQuestionIndex + 1];

  return ({
    question,
    currentQuestionIndex,
    hasPreviousButton,
    hasNextButton
  })
};

export default connect(mapStateToProps)(StepPlay);