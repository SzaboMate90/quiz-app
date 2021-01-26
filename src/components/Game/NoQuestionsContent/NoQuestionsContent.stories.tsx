import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import NoQuestionsContent from './NoQuestionsContent';

export default {
  title: 'NoQuestionsContent',
  component: NoQuestionsContent,
  decorators: [withKnobs]
};

export const Default = () => (
  <NoQuestionsContent />
);
