import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import NextButton from './NextButton';

export default {
  title: 'NextButton',
  component: NextButton,
  decorators: [withKnobs]
};

const label = "Next button text";
const value = "Next button text";

export const Default = () => (
  <NextButton
    onClick={() => {}}
  >
    {text(label, value)}
  </NextButton>
);
