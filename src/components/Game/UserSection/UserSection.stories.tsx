import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import UserSection from './Header';

export default {
  title: 'UserSection',
  component: UserSection,
  decorators: [withKnobs]
};

export const Default = () => (
  <UserSection />
);
