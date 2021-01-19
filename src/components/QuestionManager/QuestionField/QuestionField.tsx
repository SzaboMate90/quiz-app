import * as React from 'react';
import Field, { FieldType } from '../../Field/Field';

export default (props : FieldType) => {
  return (
    <Field
      {...props}
      placeholder={"Question"}
    />
  );
};
