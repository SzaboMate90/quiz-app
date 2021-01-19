import * as React from 'react';
import { StyledSendButton } from './SendButton.style';
import { ButtonType } from "../../Button/Button";

export default (props : ButtonType) => {
  return (
    <StyledSendButton
      {...props}
    >
      {"Check answer"}
    </StyledSendButton>
  );
};
