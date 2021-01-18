import * as React from 'react';
import { StyledLink } from './Link.style';

export default ({ children, to }) => (
  <StyledLink to={to}>
    {children}
  </StyledLink>
);