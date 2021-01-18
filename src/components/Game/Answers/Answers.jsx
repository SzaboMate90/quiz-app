import * as React from 'react';
import { StyledContainer } from './Answers.style';
import Answer from '../Answer/Answer';

export default ({ questionIndex, data, isAnswered, temporarySelectedAnswerIndex, onAnswerClick }) => (
  <StyledContainer>
    {data.map((answer, index) => (
      <Answer
        key={questionIndex + "" + index}
        index={index}
        data={answer}
        isTemporarySelected={index === temporarySelectedAnswerIndex}
        isAnswered={isAnswered}
        onClick={onAnswerClick}
      />
    ))}
  </StyledContainer>
);
