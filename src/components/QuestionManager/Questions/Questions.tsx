import * as React from 'react';
import { connect } from 'react-redux';
import { StyledContainer, StyledQuestion, StyledQuestionText, StyledRemoveIcon } from './Questions.style';
import { removeQuestion } from "../../../services/Actions";
import { BaseStateType } from "../../../services/Reducers";
import { QuestionsType } from "../../../globalTypes";

interface CompQuestionsType {
  dispatch : (action) => void,
  questions : QuestionsType
}

const Questions = ({ dispatch, questions } : CompQuestionsType) => {
  return (
    <StyledContainer>
      {questions.map((question, index) => {
        const {text} = question;

        return (
          <StyledQuestion key={index}>
            <StyledQuestionText>
              {text}
            </StyledQuestionText>
            <StyledRemoveIcon
              title={"Remove"}
              size={20}
              onClick={() => dispatch(removeQuestion(index))}
            />
          </StyledQuestion>
        );
      })}
    </StyledContainer>
  );
};

const mapStateToProps = (state : BaseStateType) => {
  const {questions} = state;

  return ({
    questions
  })
};

export default connect(mapStateToProps)(Questions);