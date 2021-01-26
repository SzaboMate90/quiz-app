import * as React from 'react';
import NameField from './NameField';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'NameField',
  component: NameField,
  decorators: [withKnobs]
};

export const Default = () => (
  <NameField
    value={text("Field value", "Lorem ipsum")}
    onChange={(value) => {}}
  />
);