import * as React from 'react';
import { connect } from 'react-redux';
import { StyledContainer, StyledErrorMessage } from './StepStart.style';
import NameField from '../NameField/NameField';
import StartButton from '../StartButton/StartButton';
import { setUserName } from '../../../services/Actions';

class StepStart extends React.Component {
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
          <StyledErrorMessage>
            {errorMessage}
          </StyledErrorMessage>
        ) : null}
        <StartButton onClick={this.onNextButtonClicked} />
      </StyledContainer>
    );
  }
}

export default connect()(StepStart);