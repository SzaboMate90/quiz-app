import styled from "styled-components";
import { Link } from "gatsby";
import Breakpoints from "../../styles/Breakpoints";
import Colors from "../../styles/Colors";

export const StyledLink = styled(Link)`
  font-size: 12px;
  display: block;
  text-decoration: none;
  color: ${Colors.primary};
  margin-top: 5px;
  transition: color 300ms;
  
  &:hover {
    color: ${Colors.primaryHover};
  }
  
  ${Breakpoints.small(`
    display: block;
    text-align: center;
    margin: 15px auto;
    float: none!important;
  `)}
`;