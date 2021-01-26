import * as React from 'react';
import { StyledNextButton } from './PreviousButton.style';
import { ButtonType } from "../../Button/Button";
import { withTranslation } from 'react-multi-lang';

export const PreviousButton = (props : ButtonType) => {
  return (
    <StyledNextButton
      {...props}
    >
      {props.t('previous')}
    </StyledNextButton>
  );
};

export default withTranslation(PreviousButton);
