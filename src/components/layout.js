/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from 'styled-components'


const Layout = ({ children }) => {

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
--grid-width: 71.25rem;
--gutter-vertical: 5rem;
--gutter-vertical-small: 3.5rem;
--gutter-horizontal: 3.5rem
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
  .col-1-of-4 { width: calc((100% - 3 * var(--gutter-horizontal)) / 4); }
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

html {
  font-size: 100%;
  @media only screen and (max-width: 55em) {
    font-size: 80%
  }
}

body {
  font-family: "Lato", sans-serif;
}

h2 {
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 600;
  display: inline-block;
  background-image: linear-gradient(to right, #7ed56f, #28b485);
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 2px;
  transition: all .2s;

  &:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow: 0.5rem 1rem 2rem rgba(0,0,0,0.2);
  }
}

h3 {
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.app-wrapper {
  padding: 1.875rem;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: #777;
  @media only screen and (max-width: 55em) {
    padding: 0;
  }
}


`