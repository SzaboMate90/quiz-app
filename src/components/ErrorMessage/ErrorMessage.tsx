import * as React from 'react';
import { StyledContainer } from './ErrorMessage.style';
import { ChildrenType } from "../../globalTypes";

export interface ErrorMessageType {
  children ?: ChildrenType,
  className ?: string
}

export default ({ children, className } : ErrorMessageType) => {
  return (
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  );
};
