import * as React from 'react';
import { StyledContainer } from './Answers.style';
import Answer from '../Answer/Answer';
import {AnswerIndexType, QuestionIndexType, AnswersType as GlobalAnswersType} from "../../../globalTypes";

interface AnswersType {
  questionIndex: QuestionIndexType,
  data: GlobalAnswersType,
  isAnswered?: boolean,
  temporarySelectedAnswerIndex?: AnswerIndexType,
  onAnswerClick: (selectedAnswerIndex: AnswerIndexType) => void
}

export default ({ questionIndex, data, isAnswered, temporarySelectedAnswerIndex, onAnswerClick } : AnswersType) => (
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
