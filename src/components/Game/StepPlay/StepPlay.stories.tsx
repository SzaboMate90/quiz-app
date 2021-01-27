import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import StepPlay from './StepPlay';

export default {
  title: 'StepPlay',
  component: StepPlay,
  decorators: [withKnobs]
};

export const Default = () => (
  <StepPlay />
);
