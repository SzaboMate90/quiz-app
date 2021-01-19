import * as React from 'react';
import { StyledContainer, StyledCorrectMark, StyledGhostCorrectMark } from './AnswerEdit.style';
import AnswerField from "../AnswerField/AnswerField";
import {AnswerIndexType, AnswerType} from "../../../globalTypes";

interface AnswerEditType {
    data : AnswerType,
    index : AnswerIndexType,
    onChange : () => {},
    onSetCorrectAnswer : () => {}
}
export default ({ data, index, onChange, onSetCorrectAnswer }) => {
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
        title={"Set as Correct answer"}
        onClick={(() => {
          onSetCorrectAnswer(index);
        })}
      />
    </StyledContainer>
  );
};