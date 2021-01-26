import * as React from 'react';
import AnswerField from './AnswerField';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'AnswerField',
  component: AnswerField,
  decorators: [withKnobs]
};

export const Default = () => (
  <AnswerField
    value={text("Field value", "Lorem ipsum")}
    onChange={(value) => {}}
  />
);