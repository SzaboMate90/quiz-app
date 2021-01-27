import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import UserName from './UserName';

export default {
  title: 'UserName',
  component: UserName,
  decorators: [withKnobs]
};

export const Default = () => (
  <UserName />
);
