import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import { ButtonA } from './Buttons'


import Card from './toursCard'

export default function Tours() {

  const data = useStaticQuery(graphql`
    query {
      nat5: file(relativePath: { eq: "nat-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nat6: file(relativePath: { eq: "nat-6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nat7: file(relativePath: { eq: "nat-7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  const toursContents = [
    {
      img: data.nat5.childImageSharp.fluid,
      title: `The Sea Explorer`,
      list: [`3 day tours`, `Up to 30 people`, `tour guides`, `Sleep in cozy hotels`, `Difficulty: easy`],
      price: 297
    },
    {
      img: data.nat6.childImageSharp.fluid,
      title: `The Forest Hiker`,
      list: [`7 day tours`, `Up to 40 people`, `6 tour guides`, `Sleep in provided tents`, `Difficulty: medium`],
      price: 497
    },
    {
      img: data.nat7.childImageSharp.fluid,
      title: `The Snow Adventurer`,
      list: [`Up to 15 people`, `Up to 15 people`, `3 tour guides`, `Sleep in provided tents`, `Difficulty: hard`],
      price: 897
    }
  ]

  return (
    <ToursWrapper>
      <div className="title">
        <h2> Exciting tours for adventurous people </h2>
      </div>
      <div className="row">
        {toursContents.map((tour, i) => <Card
          img={tour.img}
          title={tour.title}
          list={tour.list}
          price={tour.price}
          key={i}

        />)}
      </div>

      <ButtonA green text='Discover all tours' />

    </ToursWrapper>
  )
}

const ToursWrapper = styled.section`
  background-color: #f7f7f7;
  padding: 15.5rem 0 9.37rem 0;
  margin-top: -6.25rem;

  .title {
    text-align: center;
    margin-bottom: 4rem !important;
  }

  .row {
    height: 32.5rem
  }

`