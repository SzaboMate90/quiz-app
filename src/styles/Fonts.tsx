import * as React from 'react';

export const importFonts = () => (
  <link
    href="https://fonts.googleapis.com/css?family=Abril+Fatface|Roboto:300,400,700&display=swap"
    rel="stylesheet"
  />
);

export const sans = `'Roboto', sans-serif`;
export const serif = `'Abril Fatface', serif`;
export const defaultFontSize = 14;

export const getFontSans = () => `
  font-family: ${sans};
`;

export const getFontSerif = () => `
  font-family: ${serif};
`;

export default {
  importFonts,
  getFontSans,
  getFontSerif
};