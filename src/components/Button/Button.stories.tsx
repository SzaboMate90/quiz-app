import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs]
};

const label = "Button text";
const value = "Test button text";

export const Default = () => (
  <Button
    onClick={() => {}}
  >
    {text(label, value)}
  </Button>
);
