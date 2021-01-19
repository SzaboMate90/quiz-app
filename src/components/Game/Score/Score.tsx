import * as React from 'react';
import { connect } from 'react-redux';
import { StyledContainer, StyledLabel, StyledScore } from './Score.style';
import {UserScoreType} from "../../../globalTypes";
import {BaseStateType} from "../../../services/Reducers";

interface ScoreType {
    score : UserScoreType
}
const Score = ({ score } : ScoreType) => {
  return (
    <StyledContainer>
      <StyledLabel>
        {"Score:"}
      </StyledLabel>
      <StyledScore>
        {score} {score < 2 ? "point" : "points"}
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

export default connect(mapStateToProps)(Score);