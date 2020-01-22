/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from 'styled-components'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <div className="app-wrapper">
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const GlobalStyle = createGlobalStyle`

:root {
--grid-width: 114rem;
--gutter-vertical: 8rem;
--gutter-vertical-small: 6rem;
--gutter-horizontal: 6rem
}
;

/* NOTE: Grid leyout using float */

.row {
  max-width: var(--grid-width);
  margin: 0 auto;
  &:not(:last-child) {
    margin-bottom: var(--gutter-vertical);
    @media only screen and (max-width: 56.25em) {
      margin-bottom: var(--gutter-vertical-small);
    }
  } 
  @media only screen and (max-width: 56.25em) {
    max-width: 50rem;
    padding: 0 3rem;
  }
  &::after {
    content: "";
    display: table;
    clear: both;
  }

  [class^="col-"] {
    float: left;
    &:not(:last-child) {
      margin-right: var(--gutter-horizontal);
      @media only screen and (max-width: 56.25em) {
        margin-right: 0;
        margin-bottom: var(--gutter-vertical-small);
      }
    }
    @media only screen and (max-width: 56.25em) {
      width: 100% !important;
    }
  }

  .col-1-of-2 { width: calc((100% - var(--gutter-horizontal)) / 2); }

  .col-1-of-3 {
    width: calc((100% - 2 * var(--gutter-horizontal)) / 3);
  }

  .col-2-of-3 {
    width: calc(2 * ((100% - 2 * var(--gutter-horizontal)) / 3) + var(--gutter-horizontal));
  }

  .col-1-of-4 {
    width: calc((100% - 3 * var(--gutter-horizontal)) / 4);
  }

  .col-2-of-4 {
    width: calc(2 * ((100% - 3 * var(--gutter-horizontal)) / 4) + var(--gutter-horizontal));
  }

  .col-3-of-4 {
    width: calc(3 * ((100% - 3 * var(--gutter-horizontal)) / 4) + 2 * var(--gutter-horizontal));
  }

}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-wrapper {
  padding: 1.5rem;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: #777;
}


`