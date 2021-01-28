import styled from 'styled-components'
import { getFontSans } from '../../styles/Fonts';
import Link from './../Link/Link';

export const StyledContent = styled.section`
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
`;
