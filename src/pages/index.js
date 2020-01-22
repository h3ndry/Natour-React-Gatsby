import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components'
import Header from '../components/header'

const IndexPage = () => (
  <Layout>
    <Header />
  </Layout>
)

export default IndexPage

const Hello = styled.div`
background: hotpink;
`