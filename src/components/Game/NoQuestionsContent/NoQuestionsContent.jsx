import * as React from 'react';
import { StyledContainer, StyledIcon, StyledText, StyledLink } from './NoQuestionsContent.style';

const NoQuestionsContent = () => {
  return (
    <StyledContainer>
      <StyledIcon size={100} />
      <StyledText>
        {"Currently there are no available questions yet."}
        <StyledLink to={"/admin"}>
          {"Please add some..."}
        </StyledLink>
      </StyledText>
    </StyledContainer>
  );
};

export default NoQuestionsContent;