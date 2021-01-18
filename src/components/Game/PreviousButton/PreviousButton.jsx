import * as React from 'react';
import { StyledNextButton } from './PreviousButton.style';

export default (props) => {
  return (
    <StyledNextButton
      {...props}
    >
      {"Previous"}
    </StyledNextButton>
  );
};
