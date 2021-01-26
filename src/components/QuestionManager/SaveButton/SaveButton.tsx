import * as React from 'react';
import { StyledSaveButton } from './SaveButton.style';
import { ButtonType } from "../../Button/Button";
import { withTranslation } from 'react-multi-lang';

export const SaveButton = (props : ButtonType) => {
  return (
    <StyledSaveButton
      {...props}
    >
      {props.t('save_question')}
    </StyledSaveButton>
  );
};

export default withTranslation(SaveButton);
