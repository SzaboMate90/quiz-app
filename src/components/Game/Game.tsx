import * as React from 'react';
import { connect } from 'react-redux';
import { StyledContainer } from './Game.style';
import StepStart from './StepStart/StepStart';
import StepPlay from './StepPlay/StepPlay';
import NoQuestionsContent from './NoQuestionsContent/NoQuestionsContent';
import {QuestionsType, UserNameType} from "../../globalTypes";

interface GameType {
  questions : QuestionsType,
  userName : UserNameType
}
const Game = ({ questions, userName } : GameType) => {
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