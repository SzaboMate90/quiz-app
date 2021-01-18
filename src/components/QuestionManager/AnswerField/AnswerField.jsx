import * as React from 'react';
import Field from '../../Field/Field';

export default (props) => {
  return (
    <Field
      {...props}
      placeholder={`Answer ${props.index}`}
    />
  );
};
