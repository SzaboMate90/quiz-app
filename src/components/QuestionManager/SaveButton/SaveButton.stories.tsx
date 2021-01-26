import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import SaveButton from './SaveButton';

export default {
  title: 'SaveButton',
  component: SaveButton,
  decorators: [withKnobs]
};

const label = "Save button text";
const value = "Save button text";

export const Default = () => (
  <SaveButton
    onClick={() => {}}
  >
    {text(label, value)}
  </SaveButton>
);
