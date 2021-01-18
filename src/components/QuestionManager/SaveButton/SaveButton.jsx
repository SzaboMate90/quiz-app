import * as React from 'react';
import { StyledSaveButton } from './SaveButton.style';

export default (props) => {
  return (
    <StyledSaveButton
      {...props}
    >
      {"Save question"}
    </StyledSaveButton>
  );
};
