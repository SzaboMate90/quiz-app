import * as React from 'react';
import { connect } from 'react-redux';
import { StyledContainer } from './UserName.style';
import { UserNameType } from "../../../globalTypes";
import { BaseStateType } from "../../../services/Reducers";

interface CompUserNameType {
  name : UserNameType
}
const UserName = ({ name } : CompUserNameType) => {
  return (
    <StyledContainer>
      {name}
    </StyledContainer>
  );
};

const mapStateToProps = (state : BaseStateType) => {
  const {user : { name }} = state;

  return ({
    name
  })
};

export default connect(mapStateToProps)(UserName);