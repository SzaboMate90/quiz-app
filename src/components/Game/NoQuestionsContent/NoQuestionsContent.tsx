import * as React from 'react';
import { StyledContainer, StyledIcon, StyledText, StyledLink } from './NoQuestionsContent.style';

const NoQuestionsContent = () => {
  return (
    <StyledContainer>
      <StyledIcon size={100} />
      <StyledText>
        {"Currently there are no available questions yet."}
      </StyledText>
      <StyledLink to={"/admin"}>
        {"Please add some..."}
      </StyledLink>
    </StyledContainer>
  );
};

export default NoQuestionsContent;