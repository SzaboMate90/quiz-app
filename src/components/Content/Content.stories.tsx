import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Content from './Content';

export default {
  title: 'Content',
  component: Content,
  decorators: [withKnobs]
};

const label = "Container";
const value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const Default = () => (
  <Content>
    {text(label, value)}
  </Content>
);
