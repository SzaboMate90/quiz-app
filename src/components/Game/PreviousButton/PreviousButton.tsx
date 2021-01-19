import * as React from 'react';
import { StyledNextButton } from './PreviousButton.style';
import { ButtonType } from "../../Button/Button";

export default (props : ButtonType) => {
  return (
    <StyledNextButton
      {...props}
    >
      {"Previous"}
    </StyledNextButton>
  );
};
