import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GlobalStyle, Layout } from './LightLayout.style';
import { importFonts } from '../../styles/Fonts';
import Helmet from '../../components/Helmet/Helmet';
import Content from '../../components/Content/Content';
import {PropsChildrenType} from "../../globalTypes";
import Header from "../../components/Header/Header";

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
          <Header />
          <Content>
            {children}
          </Content>
        </Layout>
      );
    }}
  />
);

export default LightLayoutLayout;
