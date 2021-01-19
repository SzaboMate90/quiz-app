import * as React from 'react';
import { StyledButton } from './Button.style';
import {ChildrenType} from "../../globalTypes";

export interface ButtonType {
  children ?: ChildrenType,
  className ?: string,
  onClick : React.MouseEventHandler
}

export default ({ children, className, onClick } : ButtonType) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
