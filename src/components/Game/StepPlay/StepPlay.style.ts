import styled from 'styled-components';
import Link from "../../Link/Link";
import Breakpoints from "../../../styles/Breakpoints";

export const StyledContainer = styled.article`
  
`;

export const StyledLink = styled(Link)`
  float: right;
`;

export const StyledButtons = styled.section`
  text-align: center;
  
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;
export const StyledMain = styled.section`
  ${props => props.isAnswered ? `` : null}
  
  ${Breakpoints.global(`
    padding: 0 15px;
  `)}
`;
