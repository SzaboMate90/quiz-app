import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import PreviousButton from './PreviousButton';

export default {
  title: 'PreviousButton',
  component: PreviousButton,
  decorators: [withKnobs]
};

const label = "Previous button text";
const value = "Previous button text";

export const Default = () => (
  <PreviousButton
    onClick={() => {}}
  >
    {text(label, value)}
  </PreviousButton>
);
