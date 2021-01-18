import * as React from 'react';
import { StyledStartButton } from './StartButton.style';

export default (props) => {
  return (
    <StyledStartButton
      {...props}
    >
      {"Start game"}
    </StyledStartButton>
  );
};
