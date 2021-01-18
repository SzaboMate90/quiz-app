import styled from 'styled-components';
import { QuestionMark, CheckCircle } from '@styled-icons/boxicons-regular';
import { Close } from '@styled-icons/material';

export const StyledContainer = styled.p`
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding: 8px;
    vertical-align: middle;
    text-align: center;
    font-weight: 600;
    background-color: white;
   
  ${props => props.isAnswered && props.isGaveCorrectAnswer ? `
    color: green;
  ` : null}   
  
  ${props => props.isAnswered && !props.isGaveCorrectAnswer ? `
    color: red;
  ` : null}
`;

export const StyledBaseIcon = `
  vertical-align: middle;
  float: left;
`;

export const StyledQuestionMark = styled(QuestionMark)`
  ${StyledBaseIcon}
  
`;

export const StyledCheckMark = styled(CheckCircle)`
  ${StyledBaseIcon}
  
`;

export const StyledBadMark = styled(Close)`
  ${StyledBaseIcon}
  
`;

export const StyledText = styled.span`
  vertical-align: middle;
`;
