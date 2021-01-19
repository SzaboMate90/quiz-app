import * as React from 'react';
import { StyledStartButton } from './StartButton.style';
import { ButtonType } from "../../Button/Button";

export default (props : ButtonType) => {
  return (
    <StyledStartButton
      {...props}
    >
      {"Start game"}
    </StyledStartButton>
  );
};
