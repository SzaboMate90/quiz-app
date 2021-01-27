import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Questions from './Questions';

export default {
  title: 'Questions',
  component: Questions,
  decorators: [withKnobs]
};

export const Default = () => (
  <Questions />
);
