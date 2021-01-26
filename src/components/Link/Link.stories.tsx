import * as React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Link from './Link';

export default {
  title: 'Link',
  component: Link,
  decorators: [withKnobs]
};

const label = "Link text";
const value = "This link goes to my CV";

export const Default = () => (
  <Link to={text("Link target", "http://findersen.com")}>
    {text(label, value)}
  </Link>
);