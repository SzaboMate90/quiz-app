import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import SendButton from './SendButton';

export default {
  title: 'SendButton',
  component: SendButton,
  decorators: [withKnobs]
};

const label = "Send button text";
const value = "Send button text";

export const Default = () => (
  <SendButton
    onClick={() => {}}
  >
    {text(label, value)}
  </SendButton>
);
