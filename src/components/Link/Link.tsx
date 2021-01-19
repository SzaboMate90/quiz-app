import * as React from 'react';
import { StyledLink } from './Link.style';
import { ChildrenType } from "../../globalTypes";

interface LinkType {
  children : ChildrenType,
  to : string,
  className ?: string
}

export default ({ children, to, className } : LinkType) => (
  <StyledLink
      to={to}
      className={className}
  >
    {children}
  </StyledLink>
);