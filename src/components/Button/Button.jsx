import * as React from 'react';
import { StyledButton } from './Button.style';

export default ({ children, className, onClick }) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
