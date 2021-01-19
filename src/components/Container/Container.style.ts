import styled from 'styled-components'
import { getFontSans } from '../../styles/Fonts';
import Breakpoints from '../../styles/Breakpoints';

export const StyledContent = styled.main`
  flex: 1;
  margin: 0 auto;
  padding: 40px 0 0;
  width: calc(100% - 100px);
  max-width: 800px;
  
  ${getFontSans()}
  
   ${Breakpoints.global(`
    width: 100%;
  `)}
`;
