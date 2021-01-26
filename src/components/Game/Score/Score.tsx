import * as React from 'react';
import { connect } from 'react-redux';
import { StyledContainer, StyledLabel, StyledScore } from './Score.style';
import {TranslatorType, UserScoreType} from "../../../globalTypes";
import {BaseStateType} from "../../../services/Reducers";
import { withTranslation } from 'react-multi-lang';

interface ScoreType {
    score : UserScoreType,
    t : TranslatorType
}
const Score = ({ score, t } : ScoreType) => {
  return (
    <StyledContainer>
      <StyledLabel>
        {t('score')}{":"}
      </StyledLabel>
      <StyledScore>
        {score} {score < 2 ? t('point') : t('points')}
      </StyledScore>
    </StyledContainer>
  );
};

const mapStateToProps = (state : BaseStateType) => {
  const {user : { score }} = state;

  return ({
    score
  })
};

export default connect(mapStateToProps)(withTranslation(Score));