import styled from 'styled-components'
import { QuestionAnswer, Close } from '@styled-icons/material';
import { CheckCircle } from '@styled-icons/boxicons-regular';
import Breakpoints from "../../../styles/Breakpoints";

export const StyledContainer = styled.p`
  display: inline-block;
  border-radius: 8px;
  padding: 8px;
  margin: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: calc(50% - 28px);
  text-align: center;
  position: relative;
  transition: background-color 300ms;
  cursor: default;
  
  ${Breakpoints.small(`
    width: calc(100% - 40px);
    margin: 5px 10px;
  `)}
  
  ${props => !props.isAnswered ? `
    cursor: pointer;
    &:hover {
      background-color: white;
    }
  ` : null}
  ${props => props.isCorrect && props.isAnswered ? `
    color: green;
    border-color: green;
  ` : null}
  ${props => props.selected || props.isTemporarySelected ? `
    background-color: white;
  ` : null}
  ${props => props.isCorrect && props.selected ? `` : null}
`;

export const StyledBaseIcon = `
  vertical-align: middle;
  position: absolute;
  left: 8px;
  top: 8px;
`;

export const StyledAnswerMark = styled(QuestionAnswer)`
  ${StyledBaseIcon}
`;

export const StyledCorrectMark = styled(CheckCircle)`
  ${StyledBaseIcon}
  color: green;
`;

export const StyledBadMark = styled(Close)`
  ${StyledBaseIcon}
  color: red;
`;

export const StyledText = styled.span`
  vertical-align: middle;
  
`;
