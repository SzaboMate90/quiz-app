import * as React from 'react';
import Field, { FieldType } from '../../Field/Field';
import { withTranslation } from 'react-multi-lang';

export const QuestionField = (props : FieldType) => {
  return (
    <Field
      {...props}
      placeholder={props.t('question')}
    />
  );
};

export default withTranslation(QuestionField);