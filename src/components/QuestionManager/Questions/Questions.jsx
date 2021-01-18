import * as React from 'react';
import { connect } from 'react-redux';
import { StyledContainer, StyledQuestion, StyledQuestionText, StyledRemoveIcon } from './Questions.style';
import {removeQuestion} from "../../../services/Actions";

const Questions = ({ dispatch, questions }) => {
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

const mapStateToProps = (state) => {
  const {questions} = state;

  return ({
    questions
  })
};

export default connect(mapStateToProps)(Questions);