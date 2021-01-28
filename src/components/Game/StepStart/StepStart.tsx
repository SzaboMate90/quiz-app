import * as React from 'react';
import { connect } from 'react-redux';
import { StyledContainer } from './StepStart.style';
import NameField from '../NameField/NameField';
import StartButton from '../StartButton/StartButton';
import {setUserName} from '../../../services/Actions';
import {UserNameType} from "../../../globalTypes";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

interface StepStartType {
  dispatch : (action) => void
}
interface StepStartStateType {
  userName : UserNameType,
  errorMessage ?: string
}
class StepStart extends React.Component<StepStartType> {
  state : StepStartStateType;

  constructor(props) {
    super(props);

    this.state = {
      userName : "",
      errorMessage : ""
    };

    this.onNameChanged = this.onNameChanged.bind(this);
    this.onNextButtonClicked = this.onNextButtonClicked.bind(this);
  }

  onNameChanged(userName) {
    this.setState({ userName });
  }

  onNextButtonClicked() {
    const {dispatch} = this.props;
    const {userName} = this.state;

    if (userName) {
      this.setState({ userName : "" });
      dispatch(setUserName(userName));
    }
    else {
      this.setState({ errorMessage : "Add your name please" });
    }
  }

  render() {
    const {userName, errorMessage} = this.state;

    return (
      <StyledContainer>
        <NameField
          onSubmit={this.onNextButtonClicked}
          onChange={this.onNameChanged}
          value={userName}
        />
        {errorMessage ? (
          <ErrorMessage>
            {errorMessage}
          </ErrorMessage>
        ) : null}
        <StartButton onClick={this.onNextButtonClicked} />
      </StyledContainer>
    );
  }
}

export default connect()(StepStart);