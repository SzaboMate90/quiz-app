import * as React from 'react';
import { connect } from 'react-redux';
import { StyledContainer, StyledLabel, StyledScore } from './Score.style';

const Score = ({ score }) => {
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

const mapStateToProps = (state) => {
  const {user : { score }} = state;

  return ({
    score
  })
};

export default connect(mapStateToProps)(Score);