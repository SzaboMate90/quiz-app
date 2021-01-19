import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GlobalStyle, Layout } from './LightLayout.style';
import { importFonts } from '../../styles/Fonts';
import Helmet from '../../components/Helmet/Helmet';
import Content from '../../components/Container/Container';
import {PropsChildrenType} from "../../globalTypes";

const LightLayoutLayout = ({ children } : PropsChildrenType) => (
  <StaticQuery
    query={graphql`
      query SiteDataQuery {
        site {
          siteMetadata {
            description
            title
          }
        }
      } 
    `}
    render={(data) => {
      const {
        site : {
          siteMetadata : {
            description,
            title
          }
        }
      } = data;

      return (
        <Layout>
          <GlobalStyle />
          <Helmet
            title={title}
            description={description}
          >
            {importFonts()}
          </Helmet>
          <Content>
            {children}
          </Content>
        </Layout>
      );
    }}
  />
);

export default LightLayoutLayout;
