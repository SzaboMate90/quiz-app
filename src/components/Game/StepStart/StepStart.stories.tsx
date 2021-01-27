import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import StepStart from './StepStart';

export default {
  title: 'StepStart',
  component: StepStart,
  decorators: [withKnobs]
};

export const Default = () => (
  <StepStart />
);
