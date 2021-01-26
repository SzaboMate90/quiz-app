import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import StartButton from './StartButton';

export default {
  title: 'StartButton',
  component: StartButton,
  decorators: [withKnobs]
};

const label = "Start button text";
const value = "Start button text";

export const Default = () => (
  <StartButton
    onClick={() => {}}
  >
    {text(label, value)}
  </StartButton>
);
