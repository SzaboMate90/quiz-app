import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import LanguageSelector from './LanguageSelector';

export default {
  title: 'LanguageSelector',
  component: LanguageSelector,
  decorators: [withKnobs]
};

export const Default = () => (
  <LanguageSelector />
);
