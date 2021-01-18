import styled from 'styled-components';
import { Close } from '@styled-icons/material';

export const StyledContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

export const StyledQuestion = styled.li`
  &:after {
  display: block;
    content: "";
    clear:both;
  }
`;

export const StyledQuestionText = styled.span`
  
`;

export const StyledRemoveIcon = styled(Close)`
  cursor: pointer;
  float: right;
`;
