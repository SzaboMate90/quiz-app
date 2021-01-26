import * as React from 'react';
import QuestionField from './QuestionField';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'QuestionField',
  component: QuestionField,
  decorators: [withKnobs]
};

export const Default = () => (
  <QuestionField
    value={text("Field value", "Lorem ipsum")}
    onChange={(value) => {}}
  />
);