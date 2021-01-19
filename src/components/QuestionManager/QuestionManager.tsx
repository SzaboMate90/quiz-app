import * as React from 'react';
import { connect } from 'react-redux';
import { StyledContainer, StyledLink } from './QuestionManager.style';
import AddQuestion from './AddQuestion/AddQuestion';
import Questions from './Questions/Questions';

const QuestionManager = () => {
  return (
    <StyledContainer>
      <Questions />
      <AddQuestion />
      <StyledLink to={"/"}>
        {"Let's play"}
      </StyledLink>
    </StyledContainer>
  );
};


export default connect()(QuestionManager);