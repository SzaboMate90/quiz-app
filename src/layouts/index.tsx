import * as React from 'react';
import LightLayout from './LightLayout/LightLayout.layout';
import { PropsChildrenType } from '../globalTypes';

/**
 * Global layout component.
 *
 * This layout will be shared across all pages.
 * https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
 */
export default ({ children } : PropsChildrenType) => (
    <LightLayout>
      {children}
    </LightLayout>
)