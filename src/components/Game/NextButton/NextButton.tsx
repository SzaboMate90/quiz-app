import * as React from 'react';
import { StyledNextButton } from './NextButton.style';
import { ButtonType } from "../../Button/Button";
import { withTranslation } from 'react-multi-lang';

export const NextButton = (props : ButtonType) => {
  return (
    <StyledNextButton
      {...props}
    >
      {props.t('next')}
    </StyledNextButton>
  );
};

export default withTranslation(NextButton);