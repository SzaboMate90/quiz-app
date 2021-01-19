import styled from "styled-components";
import { Link } from "gatsby";
import Breakpoints from "../../styles/Breakpoints";

export const StyledLink = styled(Link)`
  font-size: 12px;
  display: block;
  text-decoration: none;
  color: #0066cc;
  margin-top: 5px;
  
  ${Breakpoints.small(`
    display: block;
    text-align: center;
    margin: 15px auto;
    float: none!important;
  `)}
`;