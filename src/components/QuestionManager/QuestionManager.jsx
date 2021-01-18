import * as React from 'react';
import { connect } from 'react-redux';
import { StyledContainer } from './QuestionManager.style';
import AddQuestion from './AddQuestion/AddQuestion';
import Questions from './Questions/Questions';
import Link from "../Link/Link";

const QuestionManager = () => {
  return (
    <StyledContainer>
      <Questions />
      <AddQuestion />
      <Link to={"/"}>
        {"Let's play"}
      </Link>
    </StyledContainer>
  );
};


export default connect()(QuestionManager);