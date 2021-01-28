import styled from 'styled-components';
import Breakpoints from "../../../styles/Breakpoints";

export const StyledContainer = styled.section`
  margin-bottom: 15px;
  
  &:after {
    content: "";
    display: block;
    clear: both;
  }
    
  ${Breakpoints.global(`
    padding: 0 15px;
  `)}
`;
