import React from 'react'
import styled from 'styled-components'
import { ButtonB } from './Buttons'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function About() {


  const data = useStaticQuery(graphql`
    query {
      nat1: file(relativePath: { eq: "nat-1-large.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nat2: file(relativePath: { eq: "nat-2-large.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nat3: file(relativePath: { eq: "nat-3-large.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const images = [
    data.nat1.childImageSharp.fluid,
    data.nat2.childImageSharp.fluid,
    data.nat3.childImageSharp.fluid
  ]

  // return <Img fluid={data.placeholderImage.childImageSharp.fluid} />


  return (
    <AboutWrapper>
      <div className="title">
        <h2> Exciting tours for adventurous people </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 >You're going to fall in love with nature</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
            ducimus quam nisi exercitationem omnis earum qui. </p>

          <h3>Live adventures like you never have before</h3>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla
            deserunt voluptatum nam.</p>

          <ButtonB href={'#'} text="Learn more &rarr;" />
        </div>

        <div className="col-1-of-2">
          <div className="composition">
            {images.map(image => <Img fluid={image} />)}
          </div>
        </div>

      </div>
    </AboutWrapper>
  )
}


const AboutWrapper = styled.section`
  background-color: #f7f7f7;
  padding: 14rem 0;
  margin-top: -20vh;

  .title {
    text-align: center;
    margin-bottom: 4rem !important;
  }

  .row {
    p { margin-bottom: 1.875rem }

    &::after {
      display: table;
      clear: both;
    }

    .col-1-of-2 {
          &::after {
      content: "";
      display: table;
      clear: both;
    }
      }
    .composition {
      position: relative;
      height: 100%;
      
      div {
        width: 55%;
        height: 12.375rem;
        box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.4);
        border-radius: 2px;
        position: absolute !important;
        z-index: 10;
        transition: all .2s;
        outline-offset: 1rem;
        padding-bottom: 0;

        &:hover {
          outline: .5rem solid #55c57a;
          transform: scale(1.05) translateY(-0.5rem);
          box-shadow: 0 2.5rem 4rem rgba(0,0,0,0.5);
          z-index: 20;
        }

        &:nth-of-type(1) {
          left: 0;
          top: -1.25rem;
        }

        &:nth-of-type(2) {
          right: 0;
          top: 1.25rem;
        }

        &:nth-of-type(3) {
          left: 20%; 
          top: 6.25rem
        }

        div {
          padding-bottom: 100% !important;
        }

      }
      
    }
  }

`