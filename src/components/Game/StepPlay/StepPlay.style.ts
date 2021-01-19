import styled from 'styled-components';
import Link from "../../Link/Link";

export const StyledContainer = styled.div`
  
`;

export const StyledLink = styled(Link)`
  float: right;
`;

export const StyledButtons = styled.div`
  text-align: center;
  
  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;
export const StyledMain = styled.div`
  ${props => props.isAnswered ? `` : null}
`;

export const StyledErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`;
