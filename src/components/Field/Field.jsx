import * as React from 'react';
import { Container, Field, Label, ErrorMessage } from './Field.style';

function getRealErrorMessage(errorMessage, label, value, required) {
  let realErrorMessage;

  if (required && !value) {
    realErrorMessage = `${label} is required. Please fill this field`;
  }
  if (errorMessage) {
    realErrorMessage = errorMessage;
  }

  return realErrorMessage;
}
const ENTER_KEYCODE = 13;
export default ({ type, name, label, errorMessage, placeholder, value, onChange, required, hasError, onSubmit }) => {
  const realErrorMessage = hasError ? getRealErrorMessage(errorMessage, label, value, required) : null;
  const localChangeCallback = event => {
    onChange(event.target.value);
  };
  const localCheckIfSubmitCallback = event => {
    if (event.keyCode === ENTER_KEYCODE) {
      onSubmit();
    }
  };

  return (
    <Container hasError={hasError}>
      <Label
        htmlFor={name}
        required={required}
      >
        {label}
      </Label>
      <Field
        id={name}
        name={name}
        type={type || "text"}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={localChangeCallback}
        onKeyUp={localCheckIfSubmitCallback}
      />
      {realErrorMessage ? (
        <ErrorMessage>
          {realErrorMessage}
        </ErrorMessage>
      ) : null}
    </Container>
  )
};
