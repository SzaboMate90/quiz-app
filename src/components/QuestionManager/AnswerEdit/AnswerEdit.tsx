import * as React from 'react';
import { StyledContainer, StyledCorrectMark, StyledGhostCorrectMark } from './AnswerEdit.style';
import AnswerField from "../AnswerField/AnswerField";
import {AnswerIndexType, AnswerType, TranslatorType} from "../../../globalTypes";
import { withTranslation } from 'react-multi-lang';

interface AnswerEditType {
    t : TranslatorType,
    data : AnswerType,
    index : AnswerIndexType,
    onChange : (index, text) => {},
    onSetCorrectAnswer : (index) => {}
}
export const AnswerEdit = ({ data, t, index, onChange, onSetCorrectAnswer } : AnswerEditType) => {
  const {text, isCorrect} = data;

  return (
    <StyledContainer>
      <AnswerField
        index={index}
        onChange={(newAnswerText => {
          onChange(index, newAnswerText);
        })}
        value={text}
      />
      {isCorrect ? <StyledCorrectMark size={20} /> : null}
      <StyledGhostCorrectMark
        size={20}
        isGhost={true}
        title={t('set_correct_answer')}
        onClick={(() => {
          onSetCorrectAnswer(index);
        })}
      />
    </StyledContainer>
  );
};

export default withTranslation(AnswerEdit);