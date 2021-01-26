import * as React from 'react';
import Field, {FieldType} from '../../Field/Field';
import { withTranslation } from 'react-multi-lang';

export const NameField = (props : FieldType) => {
  return (
    <Field
      {...props}
      placeholder={props.t('your_name')}
    />
  );
};

export default withTranslation(NameField);