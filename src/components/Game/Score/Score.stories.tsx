import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Score from './Score';

export default {
  title: 'Score',
  component: Score,
  decorators: [withKnobs]
};

export const Default = () => (
  <Score />
);
