import * as React from 'react';
import { StyledStartButton } from './StartButton.style';
import { ButtonType } from "../../Button/Button";
import { withTranslation } from 'react-multi-lang';

export const StartButton = (props : ButtonType) => {
  return (
    <StyledStartButton
      {...props}
    >
      {props.t('start_game')}
    </StyledStartButton>
  );
};

export default withTranslation(StartButton);