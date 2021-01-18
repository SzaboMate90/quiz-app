import * as React from 'react';
import { StyledContainer } from './Header.style';
import Score from '../Score/Score';
import UserName from '../UserName/UserName';

export default () => {
  return (
    <StyledContainer>
      <UserName />
      <Score />
    </StyledContainer>
  );
};
