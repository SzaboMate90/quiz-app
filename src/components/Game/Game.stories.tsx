import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Game from './Game';

export default {
  title: 'Game',
  component: Game,
  decorators: [withKnobs]
};

export const Default = () => (
  <Game />
);
