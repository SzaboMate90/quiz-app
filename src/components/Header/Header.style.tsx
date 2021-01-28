import styled from 'styled-components'
import { getFontSans } from '../../styles/Fonts';
import Link from './../Link/Link';
import Breakpoints from './../../styles/Breakpoints';

export const StyledContent = styled.header`
  ${getFontSans()}
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  vertical-align: middle;
  margin-left: 15px;
  
  &:first-child {
    margin-left: 0;
  }
  
  ${Breakpoints.small(`
    display: block;
    text-align: center;
    margin: 15px 0;
  `)}
`;

export const StyledLinks = styled.section`
  float: right;
  
  &:after {
    content: "";
    clear: both;
  }
  
  ${Breakpoints.small(`
    float: none;
    
    &:before {
      content: "";
      width: 100%;
      height: 1px;
      background: black;
      display: block;
    }
  `)}
`;

