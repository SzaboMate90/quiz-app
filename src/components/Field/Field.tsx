import * as React from 'react';
import { Container, Field, Label, ErrorMessage } from './Field.style';
import { FormEventHandler } from "react";
import { TranslatorType } from "../../globalTypes";

function getRealErrorMessage(errorMessage : string, label : string, value : string, required : boolean) {
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
export interface FieldType {
    t ?: TranslatorType,
    type ?: string,
    index ?: number,
    name?: string,
    label?: string,
    errorMessage?: string,
    placeholder?: string,
    value: string,
    onChange: FormEventHandler,
    className ?: string,
    required?: boolean,
    hasError?: boolean,
    onSubmit?: () => void
}

export default ({ type, name, label, errorMessage, className, placeholder, value, onChange, required, hasError, onSubmit } : FieldType) => {
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
        className={className}
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
