import * as React from 'react';
import { StyledSendButton } from './SendButton.style';
import { ButtonType } from "../../Button/Button";
import { withTranslation } from 'react-multi-lang';

export const SendButton = (props : ButtonType) => {
  return (
    <StyledSendButton
      {...props}
    >
      {props.t('check_answer')}
    </StyledSendButton>
  );
};

export default withTranslation(SendButton);