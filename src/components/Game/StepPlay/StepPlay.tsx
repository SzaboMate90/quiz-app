import * as React from 'react';
import { connect } from 'react-redux';
import { StyledContainer, StyledMain, StyledButtons, StyledLink } from './StepPlay.style';
import PreviousButton from '../PreviousButton/PreviousButton';
import NextButton from '../NextButton/NextButton';
import SendButton from '../SendButton/SendButton';
import Question from '../Question/Question';
import Answers from '../Answers/Answers';
import Header from "../Header/Header";
import {answerQuestion, goToQuestion} from '../../../services/Actions';
import {AnswerIndexType, QuestionIndexType, QuestionType, TranslatorType} from "../../../globalTypes";
import { withTranslation } from 'react-multi-lang';
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

interface StepPlayType {
  dispatch : (action) => void,
  t : TranslatorType,
  question : QuestionType,
  currentQuestionIndex : QuestionIndexType,
  hasPreviousButton : boolean,
  hasNextButton : boolean
}
interface StepPlayStateType {
  selectedAnswerIndex : AnswerIndexType,
  isError : boolean
}

const INITIAL_STATE : StepPlayStateType = {
  selectedAnswerIndex : -1,
  isError : false
}

class StepPlay extends React.Component<StepPlayType> {
  state : StepPlayStateType;

  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;

    this.onAnswerClicked = this.onAnswerClicked.bind(this);
    this.goToQuestionClicked = this.goToQuestionClicked.bind(this);
    this.onSendButtonClicked = this.onSendButtonClicked.bind(this);
  }

  onAnswerClicked(selectedAnswerIndex : AnswerIndexType) {
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
      hasNextButton,
      t
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
            isGaveCorrectAnswer={!!isGaveCorrectAnswer}
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
          <ErrorMessage>
            {t('error_atleast_1_asnwer')}
          </ErrorMessage>
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
        <StyledLink to={"/admin"}>
          {t('manage_question')}
        </StyledLink>
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

export default connect(mapStateToProps)(withTranslation(StepPlay));