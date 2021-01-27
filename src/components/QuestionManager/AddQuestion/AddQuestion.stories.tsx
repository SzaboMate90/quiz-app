import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import AddQuestion from './AddQuestion';

export default {
  title: 'AddQuestion',
  component: AddQuestion,
  decorators: [withKnobs]
};

export const Default = () => (
  <AddQuestion />
);
