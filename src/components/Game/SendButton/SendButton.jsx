import * as React from 'react';
import { StyledSendButton } from './SendButton.style';

export default (props) => {
  return (
    <StyledSendButton
      {...props}
    >
      {"Check answer"}
    </StyledSendButton>
  );
};
