import * as React from 'react';
import { StyledNextButton } from './NextButton.style';
import { ButtonType } from "../../Button/Button";

export default (props : ButtonType) => {
  return (
    <StyledNextButton
      {...props}
    >
      {"Next"}
    </StyledNextButton>
  );
};
