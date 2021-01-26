import * as React from 'react';
import { Container, Input, Label, LabelText, Hint } from './CheckBox.style';
import { FormEventHandler } from "react";

interface CheckBoxType {
    name : string,
    label : string,
    onChange : FormEventHandler,
    hint ?: string,
    hasError ?: boolean,
    value : boolean
}
export default ({ name, label, onChange, hint, hasError, value } : CheckBoxType) => {
  const localChangeCallback = event => {
    onChange(event.target.checked);
  };

  return (
    <Container hasError={hasError}>
      <Input
        type="checkbox"
        id={name}
        name={name}
        onChange={localChangeCallback}
        checked={value}
      />
      <Label htmlFor={name}>
        <LabelText>
          {label}
        </LabelText>
        {hint ? (
          <Hint>
            {hint}
          </Hint>
        ) : null}
      </Label>
    </Container>
  );
};
