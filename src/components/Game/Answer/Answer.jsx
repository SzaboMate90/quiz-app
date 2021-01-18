import * as React from 'react';
import { StyledContainer, StyledAnswerMark, StyledBadMark, StyledCorrectMark, StyledText } from './Answer.style';

export default ({index, isAnswered, isTemporarySelected, data : { text, isCorrect, selected }, onClick }) => {
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
