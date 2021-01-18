import * as React from 'react';
import { StyledContainer, StyledQuestionMark, StyledCheckMark, StyledBadMark, StyledText } from './Question.style';

export default ({ children, isAnswered, isGaveCorrectAnswer }) => {
  return (
    <StyledContainer
      isAnswered={isAnswered}
      isGaveCorrectAnswer={isGaveCorrectAnswer}
    >
      {isAnswered ? (
        isGaveCorrectAnswer ?
          <StyledCheckMark size={20} /> :
          <StyledBadMark size={20} />
      ) : <StyledQuestionMark size={20} />}
      <StyledText>
        {children}
      </StyledText>
    </StyledContainer>
  );
};
