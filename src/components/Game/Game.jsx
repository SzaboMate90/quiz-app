import * as React from 'react';
import { connect } from 'react-redux';
import { StyledContainer } from './Game.style';
import StepStart from './StepStart/StepStart';
import StepPlay from './StepPlay/StepPlay';
import NoQuestionsContent from './NoQuestionsContent/NoQuestionsContent';

const Game = ({ questions, userName }) => {
  const hasQuestions = questions.length > 0;

  return (
    <StyledContainer>
      {hasQuestions ? (
        userName ?
          <StepPlay /> :
          <StepStart />
      ) : <NoQuestionsContent />}
    </StyledContainer>
  );
};

const mapStateToProps = (state) => {
  const {questions, user : { name }} = state;

  return ({
    questions,
    userName : name
  })
};

export default connect(mapStateToProps)(Game);