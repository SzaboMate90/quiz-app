import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import QuestionManager from './QuestionManager';

export default {
  title: 'QuestionManager',
  component: QuestionManager,
  decorators: [withKnobs]
};

export const Default = () => (
  <QuestionManager />
);
