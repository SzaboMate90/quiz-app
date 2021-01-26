import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Container from './Container';

export default {
  title: 'Container',
  component: Container,
  decorators: [withKnobs]
};

const label = "Container";
const value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const Default = () => (
  <Container>
    {text(label, value)}
  </Container>
);
