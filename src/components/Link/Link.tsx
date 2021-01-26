import * as React from 'react';
import { StyledLink } from './Link.style';
import { ChildrenType } from "../../globalTypes";

interface LinkType {
  children : ChildrenType,
  to : string,
  onClick ?: () => void,
  className ?: string
}

export default ({ children, to, className, onClick } : LinkType) => (
  <StyledLink
      to={to}
      onClick={onClick}
      className={className}
  >
    {children}
  </StyledLink>
);