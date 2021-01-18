import * as React from 'react';
import { connect } from 'react-redux';
import { StyledContainer } from './UserName.style';

const UserName = ({ name }) => {
  return (
    <StyledContainer>
      {name}
    </StyledContainer>
  );
};

const mapStateToProps = (state) => {
  const {user : { name }} = state;

  return ({
    name
  })
};

export default connect(mapStateToProps)(UserName);