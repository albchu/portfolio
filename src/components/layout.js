import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            profession
          }
        }
      }
    `}
    render={({ site }) => (
      <>
        <Header
          siteTitle={site.siteMetadata.title}
          siteSubtitle={site.siteMetadata.profession}
        />
        <div className="container">
          <main>{children}</main>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
