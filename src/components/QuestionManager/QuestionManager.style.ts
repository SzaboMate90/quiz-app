import styled from 'styled-components';
import Link from "../Link/Link";
import Breakpoints from "../../styles/Breakpoints";

export const StyledContainer = styled.section`
   ${Breakpoints.global(`
     padding: 0 15px;
  `)}
`;
export const StyledLink = styled(Link)`
  float: right;
`;
