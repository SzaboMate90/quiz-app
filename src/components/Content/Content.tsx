import * as React from 'react';
import { StyledContent } from './Content.style';
import {PropsChildrenType} from "../../globalTypes";

export default ({ children } : PropsChildrenType)=> (
  <StyledContent>
    {children}
  </StyledContent>
);
