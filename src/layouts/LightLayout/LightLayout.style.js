import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import Scrollbar from '../../styles/Scrollbar';
import Colors from '../../styles/Colors';
import { defaultFontSize } from '../../styles/Fonts';

export const GlobalStyle = createGlobalStyle`  
  html,
  body,
  #___gatsby,
  #___gatsby > div[tabindex] {
    height: 100%;
  }
  body {
    background: ${Colors.pageBackground};
    margin: 0;
    padding: 0;
    overflow: auto;
    font-size: ${defaultFontSize}px;
    ${Scrollbar()}
  }
`;

export const Layout = styled.div`
  display: flex;
  color: ${Colors.pageText};
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
`;
