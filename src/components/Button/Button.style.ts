import styled from 'styled-components'
import Colors from '../../styles/Colors';
import { getFontSans } from '../../styles/Fonts';
import Breakpoints from '../../styles/Breakpoints';

const transitionDuration = '300ms';

export const StyledButton = styled.button`
  background: ${Colors.white100};
  border: 1px solid ${Colors.pageText};
  border-radius: 3px;
  color: ${Colors.pageText};
  cursor: pointer;
  font-weight: 500;
  padding: 5px 15px;
  outline: none;
  text-transform: capitalize;
  transition: border-color ${transitionDuration}, color ${transitionDuration}, background ${transitionDuration};

  ${getFontSans()}

  &:hover {
    color: ${Colors.primary};
    border-color: ${Colors.primary};
  }
  
  ${Breakpoints.global(`
    padding: 10px 15px;
  `)}
  
  ${Breakpoints.small(`
    display: block;
    text-align: center;
    margin: 15px auto;
  `)}
`;
