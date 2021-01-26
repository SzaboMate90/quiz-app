import * as React from 'react';
import { Helmet as ReachHelmet } from "react-helmet";
import { configure, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { GlobalStyle } from '../src/layouts/LightLayout/LightLayout.style';
import { importFonts } from '../src/styles/Fonts';

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <ReachHelmet>
        {importFonts()}
      </ReachHelmet>
      <GlobalStyle />
      {storyFn()}
    </React.Fragment>
  );
}

addDecorator(withGlobalStyles);

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /\.stories\.(jsx|js)$/), module);

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('Navigate')(pathname);
};
