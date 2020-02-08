import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from '../components/header'
import About from '../components/About'
import Feature from '../components/feature'
import Tours from '../components/tours'
import Stories from '../components/stories'
import Form from '../components/form'
import Footer from '../components/footer'
import Navigation from '../components/navigation'

const IndexPage = () => (
  <Layout>
    <Navigation />
    <Header />
    <About />
    <Feature />
    <Tours />
    <Stories />
    <Form />
    <Footer />
  </Layout>
)

export default IndexPage
