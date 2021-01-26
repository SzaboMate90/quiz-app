import * as React from 'react';
import { StyledButton } from './Button.style';
import { ChildrenType, TranslatorType } from "../../globalTypes";

export interface ButtonType {
  t ?: TranslatorType,
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
