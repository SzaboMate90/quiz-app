import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Header from './Header';

export default {
  title: 'Header',
  component: Header,
  decorators: [withKnobs]
};

export const Default = () => (
  <Header />
);
