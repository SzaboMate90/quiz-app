import * as React from 'react';
import LightLayout from './LightLayout/LightLayout.layout';

/**
 * Global layout component.
 *
 * This layout will be shared across all pages.
 * https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
 */

const Layout = ({ children }) => (
  <LightLayout>
    {children}
  </LightLayout>
);

export default Layout;
