import * as React from 'react';
import { StyledNextButton } from './NextButton.style';

export default (props) => {
  return (
    <StyledNextButton
      {...props}
    >
      {"Next"}
    </StyledNextButton>
  );
};
