import * as React from 'react';
import { StyledContainer, StyledQuestionMark, StyledCheckMark, StyledBadMark, StyledText } from './Question.style';
import {ChildrenType} from "../../../globalTypes";

const getIcon = (isAnswered : boolean, isGaveCorrectAnswer : boolean, isLeft ?: boolean) => (
  isAnswered ? (
    isGaveCorrectAnswer ?
      <StyledCheckMark isLeft={isLeft} size={20} /> :
      <StyledBadMark isLeft={isLeft} size={20} />
  ) : <StyledQuestionMark isLeft={isLeft} size={20} />
);

interface QuestionType {
  children : ChildrenType,
  isAnswered ?: boolean,
  isGaveCorrectAnswer ?: boolean
}
export default ({ children, isAnswered, isGaveCorrectAnswer } : QuestionType) => {
  return (
    <StyledContainer
      isAnswered={isAnswered}
      isGaveCorrectAnswer={isGaveCorrectAnswer}
    >
      {getIcon(isAnswered, isGaveCorrectAnswer, true)}
      <StyledText>
        {children}
      </StyledText>
      {getIcon(isAnswered, isGaveCorrectAnswer)}
    </StyledContainer>
  );
};
