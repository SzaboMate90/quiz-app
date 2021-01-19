import styled from 'styled-components';
import { CheckCircle } from '@styled-icons/boxicons-regular';
import Breakpoints from "../../../styles/Breakpoints";

export const StyledCorrectMark = styled(CheckCircle)`
  position: absolute;
  left: 5px;
  top: 10px;
`;

export const StyledGhostCorrectMark = styled(StyledCorrectMark)`
  cursor: pointer;
  opacity: 0;
  transition: opacity 300ms;
`;

export const StyledContainer = styled.div`
  width: calc(50% - 30px);
  display: inline-block;
  position: relative;
  padding-left: 30px;

  &:hover ${StyledGhostCorrectMark} {
    opacity: 0.4;
    
    &:hover {
      opacity: 1;
    }
  }
  
  ${Breakpoints.small(`
     width: calc(100% - 40px);
     margin: 5px 10px;
  `)}
`;