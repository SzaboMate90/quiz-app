import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ErrorMessage from './ErrorMessage';

export default {
  title: 'ErrorMessage',
  component: ErrorMessage,
  decorators: [withKnobs]
};

const label = "Error message";
const value = "This is an error message";

export const Default = () => (
  <ErrorMessage>
    {text(label, value)}
  </ErrorMessage>
);
