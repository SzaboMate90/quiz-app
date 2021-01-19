import * as React from 'react';
import { StyledContainer, StyledAnswerMark, StyledBadMark, StyledCorrectMark, StyledText } from './Answer.style';
import {AnswerIndexType} from "../../../globalTypes";

interface AnswerType {
  index : AnswerIndexType,
  isAnswered ?: boolean,
  isTemporarySelected ?: boolean,
  data : {
    text : string,
    isCorrect ?: boolean,
    selected ?: boolean
  },
  onClick : (selectedAnswerIndex: AnswerIndexType) => void
}
export default ({index, isAnswered, isTemporarySelected, data : { text, isCorrect, selected }, onClick } : AnswerType) => {
  const isAnsweredAndGood = isAnswered && isCorrect;
  const isAnsweredAndBad = isAnswered && !isCorrect && selected;
  const isNotAnsweredAndChecked = !isAnswered && isTemporarySelected;

  return (
    <StyledContainer
      isCorrect={isCorrect}
      isAnswered={isAnswered}
      isTemporarySelected={isTemporarySelected}
      selected={selected}
      onClick={() => isAnswered ? null : onClick(index)}
    >
      {isAnsweredAndBad ? <StyledBadMark size={20} /> : null}
      {isNotAnsweredAndChecked ? <StyledAnswerMark size={20} /> : null}
      {isAnsweredAndGood ? <StyledCorrectMark size={20} /> : null}
      <StyledText>
        {text}
      </StyledText>
    </StyledContainer>
  );
};
