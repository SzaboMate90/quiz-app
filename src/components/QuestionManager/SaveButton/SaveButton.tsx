import * as React from 'react';
import { StyledSaveButton } from './SaveButton.style';
import { ButtonType } from "../../Button/Button";

export default (props : ButtonType) => {
  return (
    <StyledSaveButton
      {...props}
    >
      {"Save question"}
    </StyledSaveButton>
  );
};
