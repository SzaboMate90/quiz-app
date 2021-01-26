import * as React from 'react';
import { connect } from 'react-redux';
import { StyledContainer, StyledQuestion, StyledQuestionText, StyledRemoveIcon } from './Questions.style';
import { removeQuestion } from "../../../services/Actions";
import { BaseStateType } from "../../../services/Reducers";
import { QuestionsType, TranslatorType } from "../../../globalTypes";
import { withTranslation } from 'react-multi-lang';

interface CompQuestionsType {
  dispatch : (action) => void,
  t : TranslatorType,
  questions : QuestionsType
}

const Questions = ({ t, dispatch, questions } : CompQuestionsType) => {
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
              title={t('remove')}
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

export default connect(mapStateToProps)(withTranslation(Questions));