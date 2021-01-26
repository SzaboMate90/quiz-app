import * as React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import CheckBox from './CheckBox';

export default {
  title: 'CheckBox',
  component: CheckBox,
  decorators: [withKnobs]
};

export const Default = () => (
  <CheckBox
    name={text("Checkbox name", "checkbox-name")}
    value={boolean("Is checked", false)}
    label={text("label", "Label")}
    hint={text("hint", "Some hint for the Checkbox")}
    onChange={() => {}}
  />
);
